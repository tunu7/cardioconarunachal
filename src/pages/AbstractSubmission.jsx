
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  BadgeCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  FileText,
  HeartPulse,
  Info,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Upload,
  User,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AbstractSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionComplete, setSubmissionComplete] = useState(false);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  // =========================================================
  // GOOGLE APPS SCRIPT WEB APP
  // =========================================================

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzHt8M7Rf6nQfYvPxjJcIdVLMhEC7cC5VK_PYAl5GV-SQHXrg-22irr3KsZ1Skztw5q/exec";

  // =========================================================
  // CONFIGURATION
  // =========================================================

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

  // =========================================================
  // FILE → BASE64
  // =========================================================

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        try {
          const result = reader.result;

          if (typeof result !== "string") {
            reject(new Error("Unable to read the PDF file."));
            return;
          }

          const commaIndex = result.indexOf(",");

          if (commaIndex === -1) {
            reject(new Error("Unable to convert the PDF."));
            return;
          }

          const base64 = result.substring(commaIndex + 1);

          if (!base64) {
            reject(new Error("PDF conversion returned empty data."));
            return;
          }

          resolve(base64);
        } catch (err) {
          reject(err);
        }
      };

      reader.onerror = () => {
        reject(new Error("Unable to read the PDF file."));
      };

      reader.onabort = () => {
        reject(new Error("PDF reading was cancelled."));
      };

      reader.readAsDataURL(file);
    });
  };

  // =========================================================
  // FILE SELECTION
  // =========================================================

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    setError("");
    setFileName("");

    if (!file) {
      return;
    }

    // PDF validation
    const isPDF =
      file.type === "application/pdf" ||
      file.name.toLowerCase().endsWith(".pdf");

    if (!isPDF) {
      e.target.value = "";
      setError("Please upload your abstract in PDF format only.");
      return;
    }

    // File size validation
    if (file.size > MAX_FILE_SIZE) {
      e.target.value = "";
      setError("The abstract PDF must be smaller than 5 MB.");
      return;
    }

    setFileName(file.name);
  };

  // =========================================================
  // FORM SUBMISSION
  // =========================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // =======================================================
    // GET FILE
    // =======================================================

    const abstractFile = formData.get("abstract");

    if (!(abstractFile instanceof File) || abstractFile.size === 0) {
      setError("Please upload your abstract PDF.");
      return;
    }

    // =======================================================
    // VALIDATE PDF
    // =======================================================

    const isPDF =
      abstractFile.type === "application/pdf" ||
      abstractFile.name.toLowerCase().endsWith(".pdf");

    if (!isPDF) {
      setError("Please upload a valid PDF file.");
      return;
    }

    if (abstractFile.size > MAX_FILE_SIZE) {
      setError("The abstract PDF must be smaller than 5 MB.");
      return;
    }

    // =======================================================
    // VALIDATE REQUIRED DATA
    // =======================================================

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const institution = String(
      formData.get("institution") || ""
    ).trim();
    const delegateCategory = String(
      formData.get("delegateCategory") || ""
    ).trim();

    if (!name) {
      setError("Please enter your full name.");
      return;
    }

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (!phone) {
      setError("Please enter your mobile number.");
      return;
    }

    if (!institution) {
      setError("Please enter your hospital or institution.");
      return;
    }

    if (!delegateCategory) {
      setError("Please select your delegate category.");
      return;
    }

    // =======================================================
    // CONVERT PDF
    // =======================================================

    try {
      setIsSubmitting(true);

      const abstractBase64 =
        await fileToBase64(abstractFile);

      // =====================================================
      // BUILD PAYLOAD
      // =====================================================

      const payload = {
        formType: "abstract",

        // Personal
        name,
        email,
        phone,
        location: String(
          formData.get("location") || ""
        ).trim(),

        // Professional
        institution,
        designation: String(
          formData.get("designation") || ""
        ).trim(),
        specialization: String(
          formData.get("specialization") || ""
        ).trim(),
        registrationNumber: String(
          formData.get("registrationNumber") || ""
        ).trim(),

        // Category
        delegateCategory,

        // Declaration
        declaration:
          formData.get("declaration") === "on",

        // PDF
        abstractFileName: abstractFile.name,
        abstractFileType:
          abstractFile.type || "application/pdf",
        abstractFileData: abstractBase64,
      };

      console.log(
        "Submitting abstract:",
        {
          ...payload,
          abstractFileData: `[${abstractBase64.length} characters]`,
        }
      );

      // =====================================================
      // SEND TO GOOGLE APPS SCRIPT
      // =====================================================

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      // =====================================================
      // IMPORTANT
      // =====================================================
      //
      // Because mode is "no-cors", the browser cannot read
      // Google's response.
      //
      // Therefore we cannot do:
      //
      // const result = await response.json();
      //
      // The Apps Script must be treated as a fire-and-forget
      // endpoint from the browser.
      //
      // =====================================================

      setSubmissionComplete(true);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    } catch (err) {
      console.error(
        "Abstract submission error:",
        err
      );

      setError(
        err?.message ||
          "Something went wrong while submitting your abstract. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // =========================================================
  // SUCCESS SCREEN
  // =========================================================

  if (submissionComplete) {
    return (
    

      <main className="min-h-screen bg-slate-50 pt-20">
        <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-16">
          <div className="w-full max-w-3xl overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-2xl shadow-slate-200/50">
            <div className="relative overflow-hidden bg-[#061827] px-6 py-14 text-center text-white sm:px-10 sm:py-20">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

              <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15 ring-8 ring-emerald-500/10">
                <CheckCircle2
                  size={46}
                  strokeWidth={2}
                  className="text-emerald-300"
                />
              </div>

              <p className="relative mt-7 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                Submission Received
              </p>

              <h1 className="relative mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Abstract Submitted Successfully
              </h1>

              <p className="relative mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                Thank you for submitting your abstract
                for CardioCon Arunachal 2026. Your
                submission has been received by the
                organising team.
              </p>
            </div>

            <div className="p-6 sm:p-10">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <FileText size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      What happens next?
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Your abstract will be reviewed
                      by the scientific committee. The
                      organising team may contact you if
                      additional information is required.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Conference
                  </p>

                  <p className="mt-2 font-bold text-slate-900">
                    CardioCon Arunachal 2026
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Conference Dates
                  </p>

                  <p className="mt-2 font-bold text-slate-900">
                    23–25 October 2026
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg"
                >
                  Back to Home
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/registration"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition-all hover:border-blue-200 hover:bg-slate-50"
                >
                  Delegate Registration
                </Link>
                <Link
  to="/presentation-guidelines"
  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-cyan-200 bg-cyan-50 px-5 py-3.5 text-sm font-bold text-cyan-700 transition-all hover:border-cyan-300 hover:bg-cyan-100"
>
  Presentation Guidelines
</Link>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-slate-400">
                <Mail size={14} />
                cardioconarunachal@gmail.com
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // =========================================================
  // MAIN PAGE
  // =========================================================

  return (
    <>
    
        <Navbar />
    <main className="overflow-hidden bg-white pt-20">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-[#061827] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-125 w-125 rounded-full bg-cyan-400/10 blur-3xl sm:h-150 sm:w-150" />

          <div className="absolute -bottom-60 -left-40 h-125 w-125 rounded-full bg-blue-600/10 blur-3xl sm:h-150 sm:w-150" />

          <div className="absolute right-[8%] top-[14%] h-40 w-40 rounded-full bg-orange-400/10 blur-2xl sm:h-56 sm:w-56" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <svg
            className="absolute bottom-0 left-0 w-full opacity-[0.04]"
            viewBox="0 0 1440 180"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 100H230L270 100L305 55L340 145L380 25L425 100H650L690 100L720 60L750 140L790 40L830 100H1080L1120 100L1150 65L1180 135L1220 45L1260 100H1440"
              stroke="currentColor"
              strokeWidth="5"
              className="text-cyan-300"
            />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-5xl">
            <Link
              to="/registration"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Registration
            </Link>

            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-cyan-200 backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.18em]">
              <FileText size={15} />
              Scientific Abstract Submission
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300 sm:text-sm">
              <Sparkles size={15} />
              CardioCon Arunachal 2026
            </div>

            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.04] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-7xl">
              Submit Your
              <span className="mt-1 block text-cyan-300">
                Abstract.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Submit your scientific abstract for
              consideration at the 24th CardioCon
              Arunachal — CSI Northeast Annual
              Conference 2026.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <HeroInfo
                icon={CalendarDays}
                label="Conference Dates"
                value="23–25 October 2026"
              />

              <HeroInfo
                icon={MapPin}
                label="Venue"
                value="Itanagar, Arunachal Pradesh"
                accent="orange"
              />

              <HeroInfo
                icon={FileText}
                label="File Format"
                value="PDF Only"
              />
            </div>
          </div>
        </div>

        <div className="flex h-1.5">
          <div className="flex-1 bg-orange-400" />
          <div className="flex-1 bg-cyan-500" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-cyan-500" />
          <div className="flex-1 bg-orange-400" />
        </div>
      </section>

      {/* =====================================================
          INFORMATION
      ===================================================== */}

      <section className="border-b border-slate-100 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <InfoCard
              icon={FileText}
              title="PDF Format"
              text="Upload your abstract as a PDF file."
            />

            <InfoCard
              icon={ShieldCheck}
              title="5 MB Maximum"
              text="Please keep your PDF within the file size limit."
            />

            <InfoCard
              icon={BadgeCheck}
              title="Scientific Review"
              text="Submissions will be reviewed by the committee."
            />

            <InfoCard
              icon={CalendarDays}
              title="23–25 October"
              text="CardioCon Arunachal 2026."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FORM
      ===================================================== */}

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_350px] lg:items-start">

            {/* FORM */}

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/40">
              <div className="border-b border-slate-100 px-5 py-6 sm:px-8 sm:py-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 sm:h-12 sm:w-12">
                    <FileText size={22} />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                      Abstract Submission Form
                    </h2>

                    <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                      Please complete all required information.
                    </p>
                  </div>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="p-5 sm:p-8 lg:p-9"
              >

                {/* 01 PERSONAL */}

                <FormSectionHeader
                  number="01"
                  title="Personal Details"
                  description="Details of the presenting author"
                />

                <div className="mt-7 grid gap-5 sm:grid-cols-2 sm:gap-6">
                  <Input
                    label="Full Name"
                    name="name"
                    icon={<User size={18} />}
                    placeholder="Enter your full name"
                    required
                  />

                  <Input
                    label="Email Address"
                    name="email"
                    icon={<Mail size={18} />}
                    type="email"
                    placeholder="name@example.com"
                    required
                  />

                  <Input
                    label="Mobile Number"
                    name="phone"
                    icon={<Phone size={18} />}
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />

                  <Input
                    label="City / State"
                    name="location"
                    icon={<MapPin size={18} />}
                    placeholder="e.g. Guwahati, Assam"
                  />
                </div>

                {/* 02 PROFESSIONAL */}

                <FormDivider />

                <FormSectionHeader
                  number="02"
                  title="Professional Details"
                  description="Your institution and professional background"
                />

                <div className="mt-7 grid gap-5 sm:grid-cols-2 sm:gap-6">
                  <Input
                    label="Hospital / Institution"
                    name="institution"
                    icon={<Building2 size={18} />}
                    placeholder="Institution name"
                    required
                  />

                  <Input
                    label="Designation"
                    name="designation"
                    icon={<Stethoscope size={18} />}
                    placeholder="e.g. Consultant Cardiologist"
                  />

                  <Input
                    label="Specialization"
                    name="specialization"
                    icon={<HeartPulse size={18} />}
                    placeholder="e.g. Cardiology"
                  />

                  <Input
                    label="Medical Council Registration No."
                    name="registrationNumber"
                    icon={<BadgeCheck size={18} />}
                    placeholder="Registration number"
                  />
                </div>

                {/* 03 CATEGORY */}

                <FormDivider />

                <FormSectionHeader
                  number="03"
                  title="Delegate Category"
                  description="Choose the category applicable to you"
                />

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Consultant",
                    "Resident / PG",
                    "Medical Student",
                    "Faculty",
                    "Allied Healthcare",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:bg-slate-50"
                    >
                      <input
                        type="radio"
                        name="delegateCategory"
                        value={item}
                        required
                        className="h-4 w-4 accent-blue-700"
                      />

                      <span className="text-sm font-semibold text-slate-800">
                        {item}
                      </span>
                    </label>
                  ))}
                </div>

                {/* 04 PDF */}

                <FormDivider />

                <FormSectionHeader
                  number="04"
                  title="Abstract Upload"
                  description="Upload your abstract in PDF format"
                />

                <div className="mt-7">
                  <label
                    htmlFor="abstract"
                    className="group block cursor-pointer rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center transition hover:border-blue-400 hover:bg-blue-50/40 sm:p-10"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm">
                      <Upload size={28} />
                    </div>

                    <h3 className="mt-5 text-base font-bold text-slate-900">
                      {fileName ||
                        "Choose your abstract PDF"}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Click here to browse your files
                    </p>

                    <div className="mt-4 flex justify-center gap-2">
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500">
                        PDF only
                      </span>

                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500">
                        Max 5 MB
                      </span>
                    </div>

                    <input
                      id="abstract"
                      name="abstract"
                      type="file"
                      accept="application/pdf,.pdf"
                      required
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </label>

                  {error && (
                    <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                      <Info
                        size={18}
                        className="mt-0.5 shrink-0 text-red-600"
                      />

                      <p className="text-sm font-medium text-red-700">
                        {error}
                      </p>
                    </div>
                  )}
                </div>

                {/* INFORMATION */}

                <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                  <div className="flex items-start gap-3">
                    <Info
                      size={19}
                      className="mt-0.5 shrink-0 text-blue-700"
                    />

                    <div>
                      <p className="font-bold text-blue-950">
                        Before submitting
                      </p>

                      <p className="mt-1 text-sm leading-6 text-blue-950/70">
                        Please ensure that your abstract
                        is in PDF format and that all author
                        and institutional information is
                        accurate.
                      </p>
                    </div>
                  </div>
                </div>

                {/* DECLARATION */}

                <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      name="declaration"
                      required
                      className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 accent-blue-700"
                    />

                    <span className="text-xs leading-6 text-slate-600 sm:text-sm">
                      I confirm that the information
                      provided above is accurate and that
                      the submitted abstract is intended for
                      consideration at CardioCon Arunachal
                      2026.
                    </span>
                  </label>
                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-bold text-white shadow-lg transition-all sm:text-base ${
                    isSubmitting
                      ? "cursor-not-allowed bg-blue-400"
                      : "bg-blue-700 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
                  }`}
                >
                  {isSubmitting
                    ? "Submitting Abstract..."
                    : "Submit Abstract"}

                  {!isSubmitting && (
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  )}
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-center text-[11px] leading-5 text-slate-400 sm:text-xs">
                  <ShieldCheck
                    size={13}
                    className="shrink-0"
                  />
                  Your submission information will be
                  handled securely.
                </div>
              </form>
            </div>

            {/* SIDEBAR */}

            <aside className="space-y-4 sm:space-y-5 lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-3xl bg-[#071a2d] text-white shadow-xl">
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/10 blur-2xl" />

                <div className="relative border-b border-white/10 p-5 sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300 sm:text-xs">
                    Scientific Submission
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    CardioCon Arunachal
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    CSI Northeast Annual Conference 2026
                  </p>
                </div>

                <div className="relative space-y-5 p-5 sm:p-6">
                  <SummaryItem
                    icon={CalendarDays}
                    label="Conference Dates"
                    value="23–25 October 2026"
                  />

                  <SummaryItem
                    icon={MapPin}
                    label="Venue"
                    value="Itanagar, Arunachal Pradesh"
                  />

                  <SummaryItem
                    icon={FileText}
                    label="Format"
                    value="PDF Only"
                  />

                  <SummaryItem
                    icon={ShieldCheck}
                    label="Maximum Size"
                    value="5 MB"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Info size={18} />
                  </div>

                  <h3 className="font-bold text-slate-900">
                    Submission Information
                  </h3>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    "Complete all required fields.",
                    "Upload your abstract in PDF format.",
                    "Maximum PDF size is 5 MB.",
                    "Ensure your details are accurate.",
                    "Abstracts will be reviewed by the scientific committee.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-1 shrink-0 text-emerald-600"
                      />

                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Not registered yet?
                </p>

                <h3 className="mt-2 font-bold text-blue-950">
                  Complete Delegate Registration
                </h3>

                <p className="mt-2 text-sm leading-6 text-blue-950/65">
                  If you also need to register as a
                  delegate, complete the registration form
                  separately.
                </p>

                <Link
                  to="/registration"
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700"
                >
                  Go to Registration

                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}

// =========================================================
// INPUT COMPONENT
// =========================================================

function Input({
  label,
  name,
  icon,
  type = "text",
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-bold text-slate-800"
      >
        {label}

        {required && (
          <span className="ml-1 text-red-500">
            *
          </span>
        )}
      </label>

      <div className="relative">
        <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </div>

        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pl-11 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
        />
      </div>
    </div>
  );
}

// =========================================================
// FORM SECTION HEADER
// =========================================================

function FormSectionHeader({
  number,
  title,
  description,
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-xs font-black text-white">
        {number}
      </div>

      <div>
        <h3 className="text-lg font-black text-slate-900">
          {title}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

// =========================================================
// DIVIDER
// =========================================================

function FormDivider() {
  return (
    <div className="my-10 border-t border-slate-100" />
  );
}

// =========================================================
// INFO CARD
// =========================================================

function InfoCard({
  icon: Icon,
  title,
  text,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
        <Icon size={19} />
      </div>

      <h3 className="mt-4 text-sm font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-1 text-xs leading-5 text-slate-500">
        {text}
      </p>
    </div>
  );
}

// =========================================================
// HERO INFO
// =========================================================

function HeroInfo({
  icon: Icon,
  label,
  value,
  accent,
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-xl ${
          accent === "orange"
            ? "bg-orange-400/10 text-orange-300"
            : "bg-cyan-400/10 text-cyan-300"
        }`}
      >
        <Icon size={17} />
      </div>

      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
          {label}
        </p>

        <p className="mt-0.5 text-xs font-bold text-white sm:text-sm">
          {value}
        </p>
      </div>
    </div>
  );
}

// =========================================================
// SUMMARY ITEM
// =========================================================

function SummaryItem({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-cyan-300">
        <Icon size={17} />
      </div>

      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
          {label}
        </p>

        <p className="mt-1 text-sm font-semibold text-slate-200">
          {value}
        </p>
      </div>
    </div>
  );

}

export default AbstractSubmission;

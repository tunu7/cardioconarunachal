import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  Mail,
  MonitorPlay,
  Presentation,
  ShieldCheck,
  Upload,
  User,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyyAW3-0WtN76PvqDYuZTboSWIn45Dk83FunHfg2zZ5hv02GTIzzmxuupjrCRVRUGPA/exec";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

function PresentationSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);

  // =====================================================
  // FILE VALIDATION
  // =====================================================

  const handleFileChange = (event) => {
    const selected = event.target.files?.[0];

    setError("");

    if (!selected) {
      setFile(null);
      return;
    }

    const extension =
      selected.name.split(".").pop()?.toLowerCase() || "";

    if (!["ppt", "pptx"].includes(extension)) {
      setError(
        "Please upload a PowerPoint file (.ppt or .pptx)."
      );
      event.target.value = "";
      setFile(null);
      return;
    }

    if (selected.size > MAX_FILE_SIZE) {
      setError(
        "The presentation file must not exceed 10 MB."
      );
      event.target.value = "";
      setFile(null);
      return;
    }

    setFile(selected);
  };

  // =====================================================
  // SUBMIT
  // =====================================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const selectedFile = file;

    setError("");

    // ---------------------------------------------------
    // Validate file
    // ---------------------------------------------------

    if (!selectedFile) {
      setError(
        "Please upload your PowerPoint presentation."
      );
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      setError(
        "The presentation file must not exceed 10 MB."
      );
      return;
    }

    // ---------------------------------------------------
    // Validate file extension
    // ---------------------------------------------------

    const extension =
      selectedFile.name.split(".").pop()?.toLowerCase() || "";

    if (!["ppt", "pptx"].includes(extension)) {
      setError(
        "Only .ppt and .pptx PowerPoint files are allowed."
      );
      return;
    }

    try {
      setIsSubmitting(true);

      // -------------------------------------------------
      // Convert file to Base64
      // -------------------------------------------------

      const base64File =
        await fileToBase64(selectedFile);

      if (!base64File) {
        throw new Error(
          "Could not process the presentation file."
        );
      }

      // -------------------------------------------------
      // Prepare submission
      // -------------------------------------------------

      const data = {
        formType: "presentation",

        name: String(
          formData.get("name") || ""
        ).trim(),

        email: String(
          formData.get("email") || ""
        ).trim(),

        phone: String(
          formData.get("phone") || ""
        ).trim(),

        registrationNumber: String(
          formData.get("registrationNumber") || ""
        ).trim(),

        presentationTitle: String(
          formData.get("presentationTitle") || ""
        ).trim(),

        fileName: selectedFile.name,

        fileType:
          selectedFile.type ||
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",

        fileSize: selectedFile.size,

        fileData: base64File,
      };

      // -------------------------------------------------
      // Send to Google Apps Script
      // -------------------------------------------------

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      // -------------------------------------------------
      // Submission complete
      // -------------------------------------------------

      setSubmitted(true);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    } catch (err) {
      console.error(
        "Presentation submission error:",
        err
      );

      setError(
        "Something went wrong while submitting your presentation. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // =====================================================
  // SUCCESS SCREEN
  // =====================================================

  if (submitted) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen bg-slate-50 pt-20">
          <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-16">
            <div className="w-full max-w-3xl overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-2xl">

              <div className="relative overflow-hidden bg-[#061827] px-6 py-14 text-center text-white sm:px-10 sm:py-20">

                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15 ring-8 ring-emerald-500/10">
                  <CheckCircle2
                    size={46}
                    className="text-emerald-300"
                  />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                  Submission Received
                </p>

                <h1 className="mt-3 text-3xl font-black sm:text-4xl">
                  Presentation Submitted Successfully
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  Thank you. Your PowerPoint presentation
                  has been submitted for CardioCon Arunachal
                  2026.
                </p>
              </div>

              <div className="p-6 sm:p-10">

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <div className="flex items-start gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <MonitorPlay size={21} />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        What happens next?
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Your presentation will be received
                        by the organising team and processed
                        for the conference.
                      </p>
                    </div>

                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">

                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue-800"
                  >
                    Back to Home
                    <ArrowRight size={17} />
                  </Link>

                  <Link
                    to="/presentation-guidelines"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                  >
                    View Guidelines
                  </Link>

                </div>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
                  <Mail size={14} />
                  cardioconarunachal@gmail.com
                </div>

              </div>
            </div>
          </section>
        </main>

        <Footer />
      </>
    );
  }

  // =====================================================
  // SUBMISSION FORM
  // =====================================================

  return (
    <>
      <Navbar />

      <main className="bg-slate-50 pt-20">

        {/* HERO */}

        <section className="relative overflow-hidden bg-[#061827] text-white">

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">


            <div className="mt-6 max-w-4xl">

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                <Upload size={15} />
                Scientific Submission
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
                Presentation Submission
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
                Upload your PowerPoint presentation for
                CardioCon Arunachal 2026.
              </p>

            </div>
          </div>
        </section>

        {/* E-POSTER GUIDELINES */}

        <section>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mt-7 rounded-2xl border border-purple-100 bg-white p-5 sm:p-6">

              <div className="flex items-center gap-3">
                <Presentation
                  size={19}
                  className="text-purple-600"
                />

                <h4 className="font-bold text-purple-950">
                  E-Poster Guidelines
                </h4>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  "File format should be PowerPoint (.PPT/.PPTX).",
                  "Each Poster Presentation will be for 5 minutes only.",
                  "The Poster Presentation should be prepared in portrait format.",
                  "The Total size of the presentation should not exceed 10 MB.",
                  "1 slide per Poster only.",
                  "Animation/movies/sounds will not be supported; please submit in a static required template format only.",
                  "Illustrations/images/photographs used in the E-poster should be enlarged enough to show relevant details.",
                  "Only Submitted posters will be awarded E-Poster presentation certificates.",
                  "The E-Poster Presentation needs to be presented in the given template only.",
                  "The Presentation should be submitted on or before the last date given.",
                  "If the Presentation is submitted at the last moment and problem occur during the conference the organising team won’t be held responsible.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl border border-purple-100 bg-purple-50/50 p-4"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-600 text-[11px] font-bold text-white">
                      {index + 1}
                    </span>

                    <p className="text-xs leading-6 text-slate-700 sm:text-sm">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* FORM */}

        <section className="py-12 sm:py-16 lg:py-20">

          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">

              <form onSubmit={handleSubmit}>

                {/* PRESENTER DETAILS */}

                <SectionTitle
                  number="01"
                  title="Presenter Details"
                  description="Enter the details associated with your presentation."
                />

                <div className="mt-7 grid gap-5 sm:grid-cols-2">

                  <Input
                    label="Full Name"
                    name="name"
                    placeholder="Enter your full name"
                    required
                  />

                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />

                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                  />

                  <Input
                    label="Registration Number"
                    name="registrationNumber"
                    placeholder="Enter registration number"
                    required
                  />

                </div>

                <div className="my-10 border-t border-slate-100" />

                {/* PRESENTATION DETAILS */}

                <SectionTitle
                  number="02"
                  title="Presentation Details"
                  description="Provide the title of your scientific presentation."
                />

                <div className="mt-7">

                  <label
                    htmlFor="presentationTitle"
                    className="mb-2 block text-sm font-bold text-slate-800"
                  >
                    Presentation Title
                    <span className="ml-1 text-red-500">
                      *
                    </span>
                  </label>

                  <input
                    id="presentationTitle"
                    name="presentationTitle"
                    required
                    placeholder="Enter your presentation title"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />

                </div>

                <div className="my-10 border-t border-slate-100" />

                {/* UPLOAD */}

                <SectionTitle
                  number="03"
                  title="Upload Presentation"
                  description="Upload your PowerPoint presentation according to the required specifications."
                />

                <div className="mt-7">

                  <label
                    htmlFor="presentationFile"
                    className={`group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center transition ${
                      file
                        ? "border-emerald-300 bg-emerald-50"
                        : "border-slate-200 bg-slate-50 hover:border-blue-300 hover:bg-blue-50/40"
                    }`}
                  >

                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                        file
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {file ? (
                        <CheckCircle2 size={25} />
                      ) : (
                        <Upload size={25} />
                      )}
                    </div>

                    <p className="mt-5 break-all text-sm font-bold text-slate-900">
                      {file
                        ? file.name
                        : "Choose PowerPoint presentation"}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      .PPT or .PPTX • Maximum 10 MB
                    </p>

                    {file && (
                      <p className="mt-2 text-xs font-semibold text-emerald-700">
                        {(
                          file.size /
                          (1024 * 1024)
                        ).toFixed(2)}{" "}
                        MB
                      </p>
                    )}

                    <input
                      id="presentationFile"
                      name="presentationFile"
                      type="file"
                      accept=".ppt,.pptx,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                  </label>

                </div>

                {/* ERROR */}

                {error && (
                  <div
                    role="alert"
                    className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium leading-6 text-red-700"
                  >
                    {error}
                  </div>
                )}

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group mt-7 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-bold text-white shadow-lg transition ${
                    isSubmitting
                      ? "cursor-not-allowed bg-blue-400"
                      : "bg-blue-700 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
                  }`}
                >
                  {isSubmitting
                    ? "Submitting Presentation..."
                    : "Submit Presentation"}

                  {!isSubmitting && (
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  )}
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs leading-5 text-slate-400">
                  <ShieldCheck size={14} />
                  Please verify your information before submitting.
                </div>

              </form>

            </div>

            {/* SIDEBAR */}

            <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">

              <div className="rounded-3xl bg-[#061827] p-6 text-white shadow-xl sm:p-7">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Upload Requirements
                </p>

                <h2 className="mt-3 text-2xl font-black">
                  Before submitting
                </h2>

                <div className="mt-7 space-y-5">

                  <Requirement
                    icon={FileText}
                    title="PowerPoint"
                    text=".ppt or .pptx format"
                  />

                  <Requirement
                    icon={RulerIcon}
                    title="Portrait"
                    text="Portrait orientation required"
                  />

                  <Requirement
                    icon={Clock3}
                    title="5 Minutes"
                    text="Maximum presentation duration"
                  />

                  <Requirement
                    icon={Upload}
                    title="10 MB"
                    text="Maximum file size"
                  />

                </div>

              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">

                <div className="flex items-start gap-3">

                  <ShieldCheck
                    size={20}
                    className="mt-0.5 shrink-0 text-blue-700"
                  />

                  <div>

                    <h3 className="font-bold text-blue-950">
                      Need help?
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-blue-950/70">
                      Review the presentation guidelines
                      before uploading your file.
                    </p>

                    <Link
                      to="/presentation-guidelines"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700"
                    >
                      View Guidelines
                      <ArrowRight size={15} />
                    </Link>

                  </div>

                </div>

              </div>

            </aside>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

// =====================================================
// FILE → BASE64
// =====================================================

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = String(reader.result || "");

      resolve(
        result.includes(",")
          ? result.split(",")[1]
          : ""
      );
    };

    reader.onerror = () => {
      reject(
        new Error("Unable to read the selected file.")
      );
    };

    reader.readAsDataURL(file);
  });
}

// =====================================================
// INPUT
// =====================================================

function Input({
  label,
  name,
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

        <User
          size={17}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

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

// =====================================================
// SECTION TITLE
// =====================================================

function SectionTitle({
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

        <h2 className="text-lg font-black text-slate-900">
          {title}
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          {description}
        </p>

      </div>

    </div>
  );
}

// =====================================================
// REQUIREMENT
// =====================================================

function Requirement({
  icon: Icon,
  title,
  text,
}) {
  return (
    <div className="flex items-start gap-3">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-cyan-300">
        <Icon size={18} />
      </div>

      <div>

        <p className="text-sm font-bold text-white">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-400">
          {text}
        </p>

      </div>

    </div>
  );
}

// =====================================================
// SIMPLE RULER ICON
// =====================================================

function RulerIcon({
  size = 18,
  className = "",
}) {
  return (
    <span
      style={{
        fontSize: size,
        lineHeight: 1,
      }}
      className={className}
      aria-hidden="true"
    >
      ↕
    </span>
  );
}

export default PresentationSubmission;
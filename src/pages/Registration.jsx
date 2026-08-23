import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  User,
  Mail,
  Phone,
  Building2,
  BriefcaseMedical,
  GraduationCap,
  CalendarDays,
  CreditCard,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  HeartPulse,
  Info,
  FileText,
  LockKeyhole,
  Users,
  Stethoscope,
  BadgeCheck,
  Landmark,
  Sparkles,
} from "lucide-react";

/* =========================================================
   DELEGATE CATEGORIES
========================================================= */

const delegateCategories = [
  {
    id: "consultant",
    name: "Consultant",
    description: "Practicing specialists and consultants",
    icon: Stethoscope,
  },
  {
    id: "resident",
    name: "Resident / PG",
    description: "Residents and postgraduate trainees",
    icon: BriefcaseMedical,
  },
  {
    id: "student",
    name: "Medical Student",
    description: "Undergraduate medical students",
    icon: GraduationCap,
  },
  {
    id: "faculty",
    name: "Faculty",
    description: "Academic and institutional faculty",
    icon: Users,
  },
  {
    id: "allied",
    name: "Allied Healthcare",
    description: "Eligible allied healthcare professionals",
    icon: HeartPulse,
  },
];

/* =========================================================
   REGISTRATION PAGE
========================================================= */

function Registration() {
  const [category, setCategory] = useState("consultant");

  // Submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const successSectionRef = useRef(null);

  /* =========================================================
     ANIMATIONS
  ========================================================= */

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  /* =========================================================
     GOOGLE APPS SCRIPT
  ========================================================= */

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwel_qWeirdcO4flWiWLCms0JIAQ9tGe5TAZNlkousfneJebPT-dVOnwxhu8ZkoHs2w/exec";

  /* =========================================================
     FORM SUBMISSION
  ========================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      formType: "registration",

      // Personal
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      location: formData.get("location"),

      // Professional
      institution: formData.get("institution"),
      designation: formData.get("designation"),
      specialization: formData.get("specialization"),
      registrationNumber: formData.get("registrationNumber"),

      // Category
      delegateCategory: formData.get("delegateCategory"),

      // Travel & Dietary
      mealPreference: formData.get("mealPreference"),
      foodAllergy: formData.get("foodAllergy"),
      arrivalDate: formData.get("arrivalDate"),
      departureDate: formData.get("departureDate"),

      // Additional
      notes: formData.get("notes"),
    };

    try {
      setIsSubmitting(true);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      setRegistrationComplete(true);

      setTimeout(() => {
        successSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    } catch (error) {
      console.error("Registration submission error:", error);

      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedCategory = delegateCategories.find(
    (item) => item.id === category
  );

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white pt-20">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative isolate overflow-hidden bg-[#061827] text-white">
          {/* Background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-40 -top-40 h-125 w-125 rounded-full bg-cyan-400/10 blur-3xl sm:h-150 sm:w-150" />

            <div className="absolute -bottom-60 -left-40 h-125 w-125 rounded-full bg-blue-600/10 blur-3xl sm:h-150 sm:w-150" />

            {/* Arunachal sunrise accent */}
            <div className="absolute right-[8%] top-[14%] h-40 w-40 rounded-full bg-orange-400/10 blur-2xl sm:h-56 sm:w-56" />

            {/* Pattern */}
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* ECG pattern */}
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

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="max-w-5xl"
            >
              {/* Conference badge */}
              <motion.div
                variants={fadeUp}
                className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-cyan-200 backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.18em]"
              >
                <HeartPulse size={15} className="shrink-0" />

                CSI Northeast Annual Conference 2026
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300 sm:text-sm"
              >
                <Sparkles size={15} />

                Delegate Registration
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={fadeUp}
                className="mt-5 max-w-4xl text-4xl font-black leading-[1.04] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Register for

                <span className="mt-1 block text-cyan-300">
                  CardioCon Arunachal.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg"
              >
                Join cardiologists, physicians, academicians, researchers,
                postgraduate students and healthcare professionals at the
                24th CardioCon Arunachal — CSI Northeast Annual Conference
                2026.
              </motion.p>

              {/* Event information */}
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              >
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
              </motion.div>
            </motion.div>
          </div>

          {/* Arunachal inspired bottom accent */}
          <div className="flex h-1.5">
            <div className="flex-1 bg-orange-400" />
            <div className="flex-1 bg-cyan-500" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-cyan-500" />
            <div className="flex-1 bg-orange-400" />
          </div>
        </section>

        {/* =====================================================
            REGISTRATION OVERVIEW
        ====================================================== */}

        <section className="border-b border-slate-100 bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
            >
              {[
                {
                  icon: CalendarDays,
                  title: "23–25 October",
                  label: "Three-Day Conference",
                },
                {
                  icon: Users,
                  title: "~300 Delegates",
                  label: "Expected Participation",
                },
                {
                  icon: Landmark,
                  title: "CSI Northeast",
                  label: "Annual Conference 2026",
                },
                {
                  icon: ShieldCheck,
                  title: "Delegate Registration",
                  label: "Professional Conference",
                },
              ].map(({ icon: Icon, title, label }) => (
                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  key={title}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition-all hover:border-blue-100 hover:shadow-lg sm:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-900">{title}</h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                      {label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            REGISTRATION FEES
        ====================================================== */}

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                Registration Information
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Registration Categories & Fees
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Registration details and applicable fees for CardioCon
                Arunachal 2026.
              </p>
            </div>

            {/* Registration deadline */}
            <div className="mb-8 rounded-2xl border border-red-100 bg-red-50 p-5 text-center sm:p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-red-600">
                Last Date of Registration
              </p>

              <p className="mt-2 text-2xl font-black text-red-800 sm:text-3xl">
                10th October 2026
              </p>
            </div>

            {/* Fee Table */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full min-w-190 border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#061827] text-white">
                      <th className="px-5 py-4 text-left font-bold">
                        Category
                      </th>

                      <th className="px-5 py-4 text-center font-bold">
                        Early Bird
                        <span className="mt-1 block text-xs font-normal text-slate-300">
                          Till 31st Aug 2026
                        </span>
                      </th>

                      <th className="px-5 py-4 text-center font-bold">
                        1st Sept – 10th Oct 2026
                      </th>

                      <th className="px-5 py-4 text-center font-bold">
                        Spot Registration
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b border-slate-100 bg-blue-50/40">
                      <td className="px-5 py-5 font-bold text-slate-900">
                        Accompany Person
                      </td>

                      <td className="px-5 py-5 text-center font-semibold text-slate-700">
                        ₹5,000
                      </td>

                      <td className="px-5 py-5 text-center font-semibold text-slate-700">
                        ₹10,000
                      </td>

                      <td className="px-5 py-5 text-center font-semibold text-slate-700">
                        ₹15,000
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-5 font-bold text-slate-900">
                        Industry
                      </td>

                      <td className="px-5 py-5 text-center font-semibold text-slate-700">
                        ₹5,000
                      </td>

                      <td className="px-5 py-5 text-center font-semibold text-slate-700">
                        ₹10,000
                      </td>

                      <td className="px-5 py-5 text-center font-semibold text-slate-700">
                        ₹15,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Free registration */}
            <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={21}
                  className="mt-0.5 shrink-0 text-emerald-600"
                />

                <div>
                  <p className="font-bold text-emerald-900">
                    Free Registration for Faculty & Delegates
                  </p>

                  <p className="mt-1 text-sm leading-6 text-emerald-800/80">
                    Registration is free for Faculty & Delegates.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment instructions */}
            <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <Landmark
                  size={21}
                  className="mt-0.5 shrink-0 text-blue-700"
                />

                <div>
                  <p className="font-bold text-blue-950">
                    Payment & Registration Confirmation
                  </p>

                  <p className="mt-2 text-sm leading-6 text-blue-950/70">
                    To confirm your registration, kindly mail us the{" "}
                    <span className="font-bold">REGISTRATION RECEIPT</span>{" "}
                    along with the{" "}
                    <span className="font-bold">BANK Details</span> to:
                  </p>

                  <a
                    href="mailto:cardioconarunachal@gmail.com"
                    className="mt-3 inline-flex items-center gap-2 font-bold text-blue-700 hover:underline"
                  >
                    <Mail size={16} />
                    cardioconarunachal@gmail.com
                  </a>

                  <p className="mt-3 text-xs italic text-blue-900/60">
                    Bank details will be updated once provided by the
                    organising committee.
                  </p>
                </div>
              </div>
            </div>

            {/* Abstract submission */}
            <div className="mt-6 rounded-3xl border border-indigo-100 bg-indigo-50 p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white">
                    <FileText size={23} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                      Academic Submission
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-indigo-950">
                      Abstract Submission
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-indigo-950/65">
                      Submit your conference abstract through the dedicated
                      abstract submission form. PDF format is required.
                    </p>
                  </div>
                </div>

                <Link
                  to="/abstract-submission"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg"
                >
                  Submit Abstract

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            REGISTRATION SECTION
        ====================================================== */}

        <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-10 max-w-3xl sm:mb-12"
            >
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-blue-700 sm:text-sm">
                <span className="h-px w-7 bg-blue-700" />

                Delegate Registration
              </div>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Complete Your Registration
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Please provide accurate personal, professional, dietary and
                travel information. Fields marked with{" "}
                <span className="font-semibold text-red-500">*</span> are
                required.
              </p>
            </motion.div>

            {/* =================================================
                SUCCESS SCREEN
            ================================================== */}

            {registrationComplete ? (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="mx-auto w-full max-w-3xl"
              >
                <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-2xl shadow-slate-200/50">
                  {/* SUCCESS HEADER */}
                  <div className="relative overflow-hidden bg-[#061827] px-6 py-12 text-center text-white sm:px-10 sm:py-16">
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
                      Registration Received
                    </p>

                    <h3 className="relative mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                      Thank You for Registering!
                    </h3>

                    <p className="relative mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                      Your registration details have been submitted successfully
                      to the CardioCon Arunachal organising team.
                    </p>
                  </div>

                  {/* SUCCESS CONTENT */}
                  <div className="p-6 sm:p-10">
                    {/* WHAT HAPPENS NEXT */}
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                          <FileText size={21} />
                        </div>

                        <div className="min-w-0">
                          <h4 className="font-bold text-slate-900">
                            What happens next?
                          </h4>

                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            The organising team will review your registration
                            and contact you regarding confirmation, payment,
                            and any additional requirements.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CONFERENCE DETAILS */}
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-slate-200 p-5">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Conference
                        </p>

                        <p className="mt-2 font-bold text-slate-900">
                          23–25 October 2026
                        </p>
                      </div>

                      <div className="rounded-2xl border border-slate-200 p-5">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Venue
                        </p>

                        <p className="mt-2 font-bold text-slate-900">
                          Itanagar, Arunachal Pradesh
                        </p>
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <Link
                        to="/"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg"
                      >
                        Back to Home

                        <ArrowRight size={17} />
                      </Link>

                      <Link
                        to="/contact"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition-all hover:border-blue-200 hover:bg-slate-50"
                      >
                        Contact Organising Team

                        <ArrowRight size={17} />
                      </Link>
                    </div>

                    {/* EMAIL */}
                    <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs leading-5 text-slate-400">
                      <Mail size={14} className="shrink-0" />

                      <span>Questions? cardioconarunachal@gmail.com</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* =================================================
                 FORM + SIDEBAR
              ================================================== */

              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_350px] lg:items-start lg:gap-8">
                {/* =================================================
                    FORM
                ================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: -25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.55,
                  }}
                  className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/40 sm:rounded-3xl"
                >
                  {/* Form Header */}
                  <div className="border-b border-slate-100 px-5 py-6 sm:px-8 sm:py-7">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 sm:h-12 sm:w-12">
                        <FileText size={22} />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                          Delegate Registration Form
                        </h3>

                        <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                          Personal, professional, dietary and travel
                          information
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FORM */}
                  <form
                    onSubmit={handleSubmit}
                    className="p-5 sm:p-8 lg:p-9"
                  >
                    {/* =============================================
                        01 PERSONAL DETAILS
                    ============================================== */}

                    <FormSectionHeader
                      number="01"
                      title="Personal Details"
                      description="Your basic contact information"
                    />

                    <div className="mt-7 grid gap-5 sm:grid-cols-2 sm:gap-6">
                      <Input
                        label="Full Name"
                        name="name"
                        icon={<User size={18} />}
                        placeholder="Enter your full name"
                        autoComplete="name"
                        required
                      />

                      <Input
                        label="Email Address"
                        name="email"
                        icon={<Mail size={18} />}
                        type="email"
                        placeholder="name@example.com"
                        autoComplete="email"
                        required
                      />

                      <Input
                        label="Mobile Number"
                        name="phone"
                        icon={<Phone size={18} />}
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        autoComplete="tel"
                        required
                      />

                      <Input
                        label="City / State"
                        name="location"
                        icon={<MapPin size={18} />}
                        placeholder="e.g. Guwahati, Assam"
                        autoComplete="address-level1"
                      />
                    </div>

                    {/* =============================================
                        02 PROFESSIONAL DETAILS
                    ============================================== */}

                    <FormDivider />

                    <FormSectionHeader
                      number="02"
                      title="Professional Details"
                      description="Your institution and medical background"
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
                        icon={<BriefcaseMedical size={18} />}
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

                    {/* =============================================
                        03 DELEGATE CATEGORY
                    ============================================== */}

                    <FormDivider />

                    <FormSectionHeader
                      number="03"
                      title="Delegate Category"
                      description="Choose the category applicable to you"
                    />

                    <div className="mt-7 grid gap-3 sm:grid-cols-2 sm:gap-4">
                      {delegateCategories.map(
                        ({
                          id,
                          name,
                          description,
                          icon: Icon,
                        }) => {
                          const active = category === id;

                          return (
                            <button
                              key={id}
                              type="button"
                              aria-pressed={active}
                              onClick={() => setCategory(id)}
                              className={`relative flex min-h-24 items-start gap-3 rounded-2xl border p-4 text-left outline-none transition-all sm:gap-4 sm:p-5 ${
                                active
                                  ? "border-blue-600 bg-blue-50/80 ring-1 ring-blue-600"
                                  : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"
                              }`}
                            >
                              <div
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition sm:h-11 sm:w-11 ${
                                  active
                                    ? "bg-blue-700 text-white"
                                    : "bg-slate-100 text-slate-600"
                                }`}
                              >
                                <Icon size={20} />
                              </div>

                              <div className="min-w-0 pr-5">
                                <p
                                  className={`text-sm font-bold sm:text-base ${
                                    active
                                      ? "text-blue-800"
                                      : "text-slate-800"
                                  }`}
                                >
                                  {name}
                                </p>

                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                  {description}
                                </p>
                              </div>

                              <div
                                className={`absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full border transition sm:right-4 sm:top-4 ${
                                  active
                                    ? "border-blue-700 bg-blue-700"
                                    : "border-slate-300"
                                }`}
                              >
                                {active && (
                                  <CheckCircle2
                                    size={12}
                                    className="text-white"
                                  />
                                )}
                              </div>
                            </button>
                          );
                        }
                      )}
                    </div>

                    <input
                      type="hidden"
                      name="delegateCategory"
                      value={category}
                    />

                    {/* =============================================
                        04 TRAVEL & DIETARY INFORMATION
                    ============================================== */}

                    <FormDivider />

                    <FormSectionHeader
                      number="04"
                      title="Travel & Dietary Information"
                      description="Help us plan your meals and arrival arrangements"
                    />

                    <div className="mt-7 grid gap-5 sm:grid-cols-2 sm:gap-6">
                      {/* Meal Preference */}
                      <div>
                        <label
                          htmlFor="mealPreference"
                          className="mb-2 block text-sm font-semibold text-slate-700"
                        >
                          Meal Preference
                          <span className="ml-1 text-red-500">*</span>
                        </label>

                        <select
                          id="mealPreference"
                          name="mealPreference"
                          required
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                        >
                          <option value="">Select preference</option>
                          <option value="Vegetarian">
                            Vegetarian
                          </option>
                          <option value="Non-Vegetarian">
                            Non-Vegetarian
                          </option>
                        </select>
                      </div>

                      {/* Food Allergy */}
                      <Input
                        label="Food Allergy"
                        name="foodAllergy"
                        icon={<Info size={18} />}
                        placeholder="If yes, please specify"
                      />

                      {/* Arrival Date */}
                      <Input
                        label="Date of Arrival"
                        name="arrivalDate"
                        icon={<CalendarDays size={18} />}
                        type="date"
                        required
                      />

                      {/* Departure Date */}
                      <Input
                        label="Date of Departure"
                        name="departureDate"
                        icon={<CalendarDays size={18} />}
                        type="date"
                        required
                      />
                    </div>

                    <div className="mt-4 rounded-xl border border-amber-100 bg-amber-50 p-4">
                      <p className="text-xs leading-6 text-amber-800 sm:text-sm">
                        <span className="font-bold">Food Allergy:</span>{" "}
                        If you have any food allergies, please specify them
                        clearly so appropriate arrangements can be made.
                      </p>
                    </div>

                    {/* =============================================
                        05 ADDITIONAL INFORMATION
                    ============================================== */}

                    <FormDivider />

                    <FormSectionHeader
                      number="05"
                      title="Additional Information"
                      description="Information that may help the organising team"
                    />

                    <div className="mt-7">
                      <label
                        htmlFor="notes"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Additional Notes
                      </label>

                      <textarea
                        id="notes"
                        name="notes"
                        rows={5}
                        placeholder="Dietary requirements, accessibility requirements or any other relevant information..."
                        className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    {/* =============================================
                        DECLARATION
                    ============================================== */}

                    <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                      <label className="flex cursor-pointer items-start gap-3">
                        <input
                          type="checkbox"
                          name="declaration"
                          required
                          className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 accent-blue-700"
                        />

                        <span className="text-xs leading-6 text-slate-600 sm:text-sm">
                          I confirm that the information provided above is
                          accurate and may be used by the organising committee
                          for conference registration and related communication.
                        </span>
                      </label>
                    </div>

                    {/* =============================================
                        SUBMIT
                    ============================================== */}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`group mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/10 transition-all sm:text-base ${
                        isSubmitting
                          ? "cursor-not-allowed bg-blue-400"
                          : "bg-blue-700 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
                      }`}
                    >
                      {isSubmitting
                        ? "Submitting Registration..."
                        : "Continue Registration"}

                      {!isSubmitting && (
                        <ArrowRight
                          size={18}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      )}
                    </button>

                    <div className="mt-4 flex items-center justify-center gap-2 text-center text-[11px] leading-5 text-slate-400 sm:text-xs">
                      <LockKeyhole
                        size={13}
                        className="shrink-0"
                      />

                      Your registration information will be handled securely.
                    </div>
                  </form>
                </motion.div>

                {/* =================================================
                    SIDEBAR
                ================================================== */}

                <motion.aside
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: 0.08,
                  }}
                  className="space-y-4 sm:space-y-5 lg:sticky lg:top-28"
                >
                  {/* Summary */}
                  <div className="relative overflow-hidden rounded-3xl bg-[#071a2d] text-white shadow-xl">
                    <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/10 blur-2xl" />

                    <div className="relative border-b border-white/10 p-5 sm:p-6">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300 sm:text-xs">
                        Registration Summary
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
                        icon={User}
                        label="Selected Category"
                        value={selectedCategory?.name}
                      />
                    </div>
                  </div>

                  {/* Fee */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <CreditCard size={21} />
                      </div>

                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                        Updated
                      </span>
                    </div>

                    <h3 className="mt-5 font-bold text-slate-900">
                      Registration Fee
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Faculty & Delegates: Free
                    </p>

                    <div className="mt-4 space-y-3 text-sm">
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-slate-500">
                          Accompany Person
                        </span>

                        <span className="text-right font-bold text-slate-800">
                          ₹5,000 / ₹10,000 / ₹15,000
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <span className="text-slate-500">
                          Industry
                        </span>

                        <span className="text-right font-bold text-slate-800">
                          ₹5,000 / ₹10,000 / ₹15,000
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 border-t border-slate-100 pt-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-red-600">
                        Registration closes
                      </p>

                      <p className="mt-1 font-bold text-slate-900">
                        10th October 2026
                      </p>
                    </div>
                  </div>

                  {/* Abstract */}
                  <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5 sm:p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white">
                      <FileText size={21} />
                    </div>

                    <h3 className="mt-5 font-bold text-indigo-950">
                      Abstract Submission
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-indigo-950/65">
                      Submit your abstract separately in PDF format.
                    </p>

                    <Link
                      to="/abstract-submission"
                      className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-indigo-700"
                    >
                      Submit Abstract

                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>

                  {/* Secretariat */}
                  <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                        <Info size={18} />
                      </div>

                      <h3 className="font-bold text-blue-950">
                        Registration Assistance
                      </h3>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-blue-950/65">
                      For registration-related queries, contact the CardioCon
                      Arunachal organising team.
                    </p>

                    <a
                      href="mailto:cardioconarunachal@gmail.com"
                      className="mt-4 flex min-w-0 items-center gap-2 text-sm font-bold text-blue-700 hover:underline"
                    >
                      <Mail size={15} className="shrink-0" />

                      <span className="min-w-0 break-all">
                        cardioconarunachal@gmail.com
                      </span>
                    </a>

                    <Link
                      to="/contact"
                      className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700"
                    >
                      Contact Secretariat

                      <ArrowRight
                        size={14}
                        className="transition group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </motion.aside>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            IMPORTANT INFORMATION
        ====================================================== */}

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <motion.div
              ref={successSectionRef}
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="mx-auto w-full max-w-3xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white sm:h-12 sm:w-12">
                  <Info size={22} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700 sm:text-xs">
                    Before You Register
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-blue-950 sm:text-3xl">
                    Registration Information
                  </h2>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:mt-8 md:grid-cols-2">
                {[
                  "Please provide accurate personal and professional information.",
                  "Select the delegate category applicable to your professional status.",
                  "Professional or student identification may be requested for applicable categories.",
                  "Faculty & Delegates can register free of charge.",
                  "Last date of registration is 10th October 2026.",
                  "Please provide your arrival and departure dates for conference arrangements.",
                  "Food preference and allergy information will help the organising team plan meals.",
                  "Payment instructions and bank details will be followed as provided by the organising committee.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-emerald-600"
                    />

                    <p className="text-xs leading-6 text-slate-700 sm:text-sm">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            CONTACT CTA
        ====================================================== */}

        <section className="relative overflow-hidden bg-blue-800 py-20 text-white sm:py-24">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-orange-300/10 blur-3xl" />

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="relative mx-auto max-w-4xl px-4 text-center sm:px-6"
          >
            <HeartPulse
              size={40}
              className="mx-auto text-cyan-300"
            />

            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-200 sm:text-xs">
              23–25 October 2026 · Arunachal Pradesh
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              We look forward to welcoming you.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
              Be part of CSI Northeast Annual Conference 2026 and experience
              three days of cardiovascular science, collaboration and academic
              exchange in Arunachal Pradesh.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-blue-800 transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
            >
              Contact Organising Team

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* =========================================================
   HERO INFO
========================================================= */

function HeroInfo({
  icon: Icon,
  label,
  value,
  accent = "cyan",
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
      <Icon
        size={18}
        className={`shrink-0 ${
          accent === "orange"
            ? "text-orange-300"
            : "text-cyan-300"
        }`}
      />

      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
          {label}
        </p>

        <p className="mt-0.5 text-sm font-semibold text-slate-200">
          {value}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   FORM INPUT
========================================================= */

function Input({
  label,
  icon,
  required = false,
  id,
  name,
  ...props
}) {
  const inputId = id || name;

  return (
    <div className="min-w-0">
      <label
        htmlFor={inputId}
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        {label}

        {required && (
          <span className="ml-1 text-red-500">
            *
          </span>
        )}
      </label>

      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </span>

        <input
          id={inputId}
          name={name}
          required={required}
          {...props}
          className="w-full min-w-0 rounded-xl border border-slate-300 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 sm:pl-12"
        />
      </div>
    </div>
  );
}

/* =========================================================
   SECTION HEADER
========================================================= */

function FormSectionHeader({
  number,
  title,
  description,
}) {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xs font-bold text-blue-700">
        {number}
      </span>

      <div>
        <h3 className="font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-0.5 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   FORM DIVIDER
========================================================= */

function FormDivider() {
  return (
    <div className="my-8 h-px bg-slate-100 sm:my-10" />
  );
}

/* =========================================================
   SUMMARY ITEM
========================================================= */

function SummaryItem({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-cyan-300">
        <Icon size={17} />
      </div>

      <div className="min-w-0">
        <p className="text-xs text-slate-500">
          {label}
        </p>

        <p className="mt-1 wrap-break-word text-sm font-semibold leading-5 text-slate-200">
          {value}
        </p>
      </div>
    </div>
  );
}

export default Registration;
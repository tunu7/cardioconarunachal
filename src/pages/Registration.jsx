import { useState } from "react";
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
} from "lucide-react";

/* =========================================================
   DELEGATE CATEGORIES
========================================================= */

const delegateCategories = [
  {
    id: "consultant",
    name: "Consultant",
    description: "Practicing specialists & consultants",
    icon: Stethoscope,
  },
  {
    id: "resident",
    name: "Resident Doctor",
    description: "Residents & postgraduate trainees",
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
    description: "Academic & institutional faculty",
    icon: Users,
  },
];

/* =========================================================
   REGISTRATION PAGE
========================================================= */

function Registration() {
  const [category, setCategory] = useState("consultant");

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stagger = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add API / payment integration here later.
    console.log("Registration submitted");
  };

  return (
    <>
      <Navbar />

      <main className="overflow-hidden pt-20">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#071a2d] text-white">

          {/* Background */}

          <div className="pointer-events-none absolute inset-0">

            <div className="absolute -right-48 -top-48 h-150 w-150 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="absolute -bottom-60 -left-40 h-150 w-150 rounded-full bg-blue-600/10 blur-3xl" />

            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >

              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur"
              >
                <HeartPulse size={17} />

                CardioCon Arunachal 2026
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-7 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              >
                Delegate
                <span className="ml-3 text-cyan-300 sm:ml-4">
                  Registration.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-2xl text-lg leading-8 text-slate-300"
              >
                Register for CardioCon Arunachal 2026 and join
                cardiovascular professionals for three days of scientific
                learning, clinical discussions and professional
                collaboration.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-300"
              >

                <span className="flex items-center gap-2">
                  <CalendarDays
                    size={17}
                    className="text-cyan-300"
                  />
                  15–17 March 2026
                </span>

                <span className="flex items-center gap-2">
                  <MapPin
                    size={17}
                    className="text-cyan-300"
                  />
                  Itanagar, Arunachal Pradesh
                </span>

              </motion.div>

            </motion.div>

          </div>

          <div className="absolute bottom-0 h-1 w-full bg-linear-to-r from-blue-700 via-cyan-400 to-blue-700" />

        </section>

        {/* =====================================================
            REGISTRATION OVERVIEW
        ====================================================== */}

        <section className="bg-white py-16 lg:py-20">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-4 md:grid-cols-3"
            >

              {[
                {
                  icon: CalendarDays,
                  title: "15–17 March 2026",
                  label: "Conference Dates",
                },
                {
                  icon: BriefcaseMedical,
                  title: "Multiple Categories",
                  label: "Doctors, Faculty & Students",
                },
                {
                  icon: ShieldCheck,
                  title: "Secure Registration",
                  label: "Protected Delegate Information",
                },
              ].map(({ icon: Icon, title, label }) => (

                <motion.div
                  variants={fadeUp}
                  key={title}
                  className="group flex items-center gap-5 rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
                >

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <div>

                    <h3 className="font-bold text-slate-900">
                      {title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {label}
                    </p>

                  </div>

                </motion.div>

              ))}

            </motion.div>

          </div>

        </section>

        {/* =====================================================
            REGISTRATION SECTION
        ====================================================== */}

        <section className="bg-slate-50 py-20 lg:py-28">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* Heading */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12 max-w-3xl"
            >

              <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                Delegate Registration
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                Complete Your Registration
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Please provide accurate personal and professional
                information. Fields marked with
                <span className="font-semibold text-red-500"> *</span>
                {" "}are required.
              </p>

            </motion.div>

            {/* FORM + SIDEBAR */}

            <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">

              {/* =================================================
                  FORM
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/40"
              >

                {/* Form header */}

                <div className="border-b border-slate-100 px-6 py-7 sm:px-9">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <FileText size={23} />
                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-slate-900">
                        Registration Form
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Personal & professional information
                      </p>

                    </div>

                  </div>

                </div>

                <form
                  onSubmit={handleSubmit}
                  className="p-6 sm:p-9"
                >

                  {/* =============================================
                      PERSONAL DETAILS
                  ============================================== */}

                  <FormSectionHeader
                    number="01"
                    title="Personal Details"
                    description="Your contact information"
                  />

                  <div className="mt-7 grid gap-6 md:grid-cols-2">

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
                      label="Hospital / Institution"
                      name="institution"
                      icon={<Building2 size={18} />}
                      placeholder="Hospital or institution name"
                      required
                    />

                  </div>

                  {/* =============================================
                      PROFESSIONAL DETAILS
                  ============================================== */}

                  <div className="my-10 h-px bg-slate-100" />

                  <FormSectionHeader
                    number="02"
                    title="Professional Details"
                    description="Tell us about your medical background"
                  />

                  <div className="mt-7 grid gap-6 md:grid-cols-2">

                    <Input
                      label="Specialization"
                      name="specialization"
                      icon={<BriefcaseMedical size={18} />}
                      placeholder="e.g. Cardiology"
                    />

                    <Input
                      label="Medical Council Registration No."
                      name="registrationNumber"
                      icon={<GraduationCap size={18} />}
                      placeholder="Registration number"
                    />

                  </div>

                  {/* =============================================
                      CATEGORY
                  ============================================== */}

                  <div className="my-10 h-px bg-slate-100" />

                  <FormSectionHeader
                    number="03"
                    title="Delegate Category"
                    description="Select the category that best describes you"
                  />

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">

                    {delegateCategories.map(
                      ({ id, name, description, icon: Icon }) => {

                        const active = category === id;

                        return (

                          <button
                            key={id}
                            type="button"
                            onClick={() => setCategory(id)}
                            className={`relative flex items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-200 ${
                              active
                                ? "border-blue-600 bg-blue-50/70 ring-1 ring-blue-600"
                                : "border-slate-200 hover:border-blue-200 hover:bg-slate-50"
                            }`}
                          >

                            <div
                              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                                active
                                  ? "bg-blue-700 text-white"
                                  : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              <Icon size={21} />
                            </div>

                            <div className="pr-5">

                              <p
                                className={`font-bold ${
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

                            {/* Selection indicator */}

                            <div
                              className={`absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border ${
                                active
                                  ? "border-blue-700 bg-blue-700"
                                  : "border-slate-300"
                              }`}
                            >
                              {active && (
                                <CheckCircle2
                                  size={13}
                                  className="text-white"
                                />
                              )}
                            </div>

                          </button>

                        );
                      }
                    )}

                  </div>

                  {/* Hidden category field */}

                  <input
                    type="hidden"
                    name="delegateCategory"
                    value={category}
                  />

                  {/* =============================================
                      ADDITIONAL INFORMATION
                  ============================================== */}

                  <div className="my-10 h-px bg-slate-100" />

                  <FormSectionHeader
                    number="04"
                    title="Additional Information"
                    description="Optional information for the organising team"
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
                      placeholder="Dietary requirements, accessibility requirements or other information..."
                      className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    />

                  </div>

                  {/* =============================================
                      CONSENT
                  ============================================== */}

                  <div className="mt-8 rounded-2xl bg-slate-50 p-5">

                    <label className="flex cursor-pointer items-start gap-3">

                      <input
                        type="checkbox"
                        required
                        className="mt-1 h-4 w-4 rounded border-slate-300 accent-blue-700"
                      />

                      <span className="text-sm leading-6 text-slate-600">

                        I confirm that the information provided is accurate
                        and agree to the{" "}

                        <Link
                          to="/terms"
                          className="font-semibold text-blue-700 hover:underline"
                        >
                          registration terms
                        </Link>

                        {" "}and{" "}

                        <Link
                          to="/privacy"
                          className="font-semibold text-blue-700 hover:underline"
                        >
                          privacy policy
                        </Link>

                        .

                      </span>

                    </label>

                  </div>

                  {/* =============================================
                      SUBMIT
                  ============================================== */}

                  <button
                    type="submit"
                    className="group mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 font-bold text-white shadow-lg shadow-blue-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
                  >

                    Continue Registration

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </button>

                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">

                    <LockKeyhole size={13} />

                    Your information is submitted securely.

                  </div>

                </form>

              </motion.div>

              {/* =================================================
                  SIDEBAR
              ================================================== */}

              <motion.aside
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
                className="space-y-5 lg:sticky lg:top-28"
              >

                {/* Conference Summary */}

                <div className="overflow-hidden rounded-3xl bg-[#071a2d] text-white shadow-xl">

                  <div className="border-b border-white/10 p-6">

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                      Registration Summary
                    </p>

                    <h3 className="mt-2 text-xl font-bold">
                      CardioCon Arunachal 2026
                    </h3>

                  </div>

                  <div className="space-y-5 p-6">

                    <SummaryItem
                      icon={CalendarDays}
                      label="Conference Dates"
                      value="15–17 March 2026"
                    />

                    <SummaryItem
                      icon={MapPin}
                      label="Location"
                      value="Itanagar, Arunachal Pradesh"
                    />

                    <SummaryItem
                      icon={User}
                      label="Selected Category"
                      value={
                        delegateCategories.find(
                          (item) => item.id === category
                        )?.name
                      }
                    />

                  </div>

                </div>

                {/* Payment */}

                <div className="rounded-2xl border border-slate-200 bg-white p-6">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <CreditCard size={21} />
                  </div>

                  <h3 className="mt-5 font-bold text-slate-900">
                    Registration Fee
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Applicable registration fees and payment instructions
                    will be displayed before final confirmation.
                  </p>

                </div>

                {/* Help */}

                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">

                  <div className="flex items-center gap-3">

                    <Info
                      size={20}
                      className="text-blue-700"
                    />

                    <h3 className="font-bold text-blue-950">
                      Need Assistance?
                    </h3>

                  </div>

                  <p className="mt-3 text-sm leading-6 text-blue-900/70">
                    Contact the CardioCon registration team if you have
                    questions regarding delegate registration.
                  </p>

                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700"
                  >
                    Contact Support
                    <ArrowRight size={14} />
                  </Link>

                </div>

              </motion.aside>

            </div>

          </div>

        </section>

        {/* =====================================================
            IMPORTANT INFORMATION
        ====================================================== */}

        <section className="bg-white py-24">

          <div className="mx-auto max-w-5xl px-4 sm:px-6">

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-blue-100 bg-blue-50/60 p-7 sm:p-10"
            >

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white">
                  <Info size={23} />
                </div>

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                    Before You Register
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-blue-950 sm:text-3xl">
                    Important Registration Information
                  </h2>

                </div>

              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">

                {[
                  "Registration is confirmed only after successful payment.",
                  "Please provide accurate professional and contact information.",
                  "A valid professional or student ID may be required during check-in.",
                  "E-certificates will be issued to eligible registered delegates.",
                  "Conference materials will be available at the registration desk.",
                  "CME accreditation and credit information will be announced separately.",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white/70 p-4"
                  >

                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-emerald-600"
                    />

                    <p className="text-sm leading-6 text-slate-700">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </motion.div>

          </div>

        </section>

      </main>

      <Footer />
    </>
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
    <div>

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
          className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
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
    <div className="flex items-center gap-4">

      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xs font-bold text-blue-700">
        {number}
      </span>

      <div>

        <h3 className="font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-0.5 text-xs text-slate-500">
          {description}
        </p>

      </div>

    </div>
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

      <div>

        <p className="text-xs text-slate-500">
          {label}
        </p>

        <p className="mt-1 text-sm font-semibold leading-5 text-slate-200">
          {value}
        </p>

      </div>

    </div>
  );
}

export default Registration;
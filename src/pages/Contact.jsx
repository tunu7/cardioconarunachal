import { motion } from "framer-motion";
import { useRef, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  HeartPulse,
  MessageSquare,
  User,
  Building2,
  ArrowRight,
  CalendarDays,
  HelpCircle,
  ExternalLink,
  Landmark,
  Hotel,
  Navigation,
  Stethoscope,
} from "lucide-react";

function Contact() {
  /* =========================================================
     STATE
  ========================================================= */

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

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
        staggerChildren: 0.08,
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
      formType: "contact",

      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      institution: formData.get("institution"),

      enquiryType: formData.get("enquiryType"),
      subject: formData.get("subject"),
      message: formData.get("message"),
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

      /*
       * Switch from the form to the success screen.
       */
      setMessageSent(true);

      /*
       * Wait for React to render the success section,
       * then scroll specifically to that section.
       */
      setTimeout(() => {
        successSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 150);
    } catch (error) {
      console.error("Contact submission error:", error);

      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white pt-20">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative isolate overflow-hidden bg-[#061827] text-white">

          <div className="pointer-events-none absolute inset-0">

            <div className="absolute -right-40 -top-40 h-125 w-125 rounded-full bg-cyan-400/10 blur-3xl sm:h-150 sm:w-150" />

            <div className="absolute -bottom-60 -left-40 h-125 w-125 rounded-full bg-blue-600/10 blur-3xl sm:h-150 sm:w-150" />

            <div className="absolute right-[10%] top-[15%] h-40 w-40 rounded-full bg-orange-400/10 blur-2xl sm:h-56 sm:w-56" />

            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="max-w-5xl"
            >

              {/* Conference Badge */}

              <motion.div
                variants={fadeUp}
                className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-cyan-200 backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.18em]"
              >
                <HeartPulse size={15} className="shrink-0" />

                CSI Northeast Annual Conference 2026
              </motion.div>

              {/* Label */}

              <motion.div
                variants={fadeUp}
                className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300 sm:text-sm"
              >
                <MessageSquare size={15} />

                Conference Secretariat
              </motion.div>

              {/* Heading */}

              <motion.h1
                variants={fadeUp}
                className="mt-5 max-w-4xl text-4xl font-black leading-[1.04] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Get in Touch with

                <span className="mt-1 block text-cyan-300">
                  CardioCon Arunachal.
                </span>
              </motion.h1>

              {/* Description */}

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg"
              >
                For enquiries regarding registration, scientific sessions,
                participation, venue information or general conference
                assistance, contact the CardioCon Arunachal 2026 organising
                team.
              </motion.p>

              {/* Event Information */}

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
                  label="Conference Location"
                  value="Itanagar, Arunachal Pradesh"
                  accent="orange"
                />

              </motion.div>

            </motion.div>

          </div>

          {/* Accent */}

          <div className="flex h-1.5">
            <div className="flex-1 bg-orange-400" />
            <div className="flex-1 bg-cyan-500" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-cyan-500" />
            <div className="flex-1 bg-orange-400" />
          </div>

        </section>

        {/* =====================================================
            CONTACT OPTIONS
        ====================================================== */}

        <section className="bg-white py-14 sm:py-16 lg:py-20">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >

              {/* EMAIL */}

              <motion.a
                variants={fadeUp}
                whileHover={{ y: -4 }}
                href="mailto:cardioconarunachal@gmail.com"
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 sm:p-6"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                  <Mail size={22} />
                </div>

                <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Email
                </p>

                <h3 className="mt-2 font-bold text-slate-900">
                  Conference Enquiries
                </h3>

                <p className="mt-2 break-all text-sm leading-6 text-slate-500">
                  cardioconarunachal@gmail.com
                </p>

                <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-bold text-blue-700">
                  Send Email

                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>

              </motion.a>

              {/* SECRETARIAT */}

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 sm:p-6"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                  <Stethoscope size={22} />
                </div>

                <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Secretariat
                </p>

                <h3 className="mt-2 font-bold text-slate-900">
                  Department of Cardiology
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Tomo Riba Institute of Health and Medical Sciences
                  (TRIHMS)
                </p>

              </motion.div>

              {/* VENUE */}

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 sm:col-span-2 sm:p-6 lg:col-span-1"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                  <Hotel size={22} />
                </div>

                <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Conference Venue
                </p>

                <h3 className="mt-2 font-bold text-slate-900">
                  Donyi Polo International Hotel
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Itanagar, Arunachal Pradesh
                </p>

              </motion.div>

            </motion.div>

          </div>

        </section>

        {/* =====================================================
            CONTACT + FORM
        ====================================================== */}

        <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* Heading */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl"
            >

              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-blue-700 sm:text-sm">

                <span className="h-px w-7 bg-blue-700" />

                Get in Touch

              </div>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">

                How can we

                <span className="text-blue-700">
                  {" "}assist you?
                </span>

              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Submit your enquiry and the CardioCon Arunachal organising
                team can assist with conference-related information.
              </p>

            </motion.div>

            {/* =================================================
                FORM / SUCCESS AREA
            ================================================== */}

            <div className="mt-10 lg:mt-12">

              {messageSent ? (

                /* =================================================
                   SUCCESS SCREEN
                ================================================== */

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
                        Enquiry Received
                      </p>

                      <h3 className="relative mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                        Thank You for Contacting Us!
                      </h3>

                      <p className="relative mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                        Your enquiry has been submitted successfully to the
                        CardioCon Arunachal organising team.
                      </p>

                    </div>

                    {/* SUCCESS CONTENT */}

                    <div className="p-6 sm:p-10">

                      {/* WHAT HAPPENS NEXT */}

                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">

                        <div className="flex items-start gap-4">

                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">

                            <MessageSquare size={21} />

                          </div>

                          <div className="min-w-0">

                            <h4 className="font-bold text-slate-900">
                              What happens next?
                            </h4>

                            <p className="mt-1 text-sm leading-6 text-slate-600">
                              The organising team will review your enquiry
                              and get back to you using the contact details
                              you provided.
                            </p>

                          </div>

                        </div>

                      </div>

                      {/* CONTACT INFORMATION */}

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">

                        <div className="rounded-2xl border border-slate-200 p-5">

                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Email
                          </p>

                          <p className="mt-2 break-all font-bold text-slate-900">
                            cardioconarunachal@gmail.com
                          </p>

                        </div>

                        <div className="rounded-2xl border border-slate-200 p-5">

                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Conference
                          </p>

                          <p className="mt-2 font-bold text-slate-900">
                            CardioCon Arunachal 2026
                          </p>

                        </div>

                      </div>

                      {/* BUTTONS */}

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">

                        <a
                          href="mailto:cardioconarunachal@gmail.com"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg"
                        >
                          Email Secretariat

                          <Mail size={17} />
                        </a>

                        <a
                          href="/"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition-all hover:border-blue-200 hover:bg-slate-50"
                        >
                          Back to Home

                          <ArrowRight size={17} />
                        </a>

                      </div>

                    </div>

                  </div>

                </motion.div>

              ) : (

                /* =================================================
                   FORM + SIDEBAR
                ================================================== */

                <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">

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
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/40"
                  >

                    {/* Header */}

                    <div className="border-b border-slate-100 px-5 py-6 sm:px-8 sm:py-7">

                      <div className="flex items-start gap-4 sm:items-center">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 sm:h-12 sm:w-12">

                          <MessageSquare size={22} />

                        </div>

                        <div>

                          <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                            Send an Enquiry
                          </h3>

                          <p className="mt-1 text-sm leading-6 text-slate-500">
                            Complete the form with your conference-related
                            query.
                          </p>

                        </div>

                      </div>

                    </div>

                    {/* Form */}

                    <form
                      onSubmit={handleSubmit}
                      className="p-5 sm:p-8 lg:p-9"
                    >

                      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">

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
                          placeholder="+91 XXXXX XXXXX"
                        />

                        <Input
                          label="Hospital / Institution"
                          name="institution"
                          icon={<Building2 size={18} />}
                          placeholder="Institution name"
                        />

                      </div>

                      {/* Enquiry Type */}

                      <div className="mt-6">

                        <label
                          htmlFor="enquiryType"
                          className="mb-2 block text-sm font-semibold text-slate-700"
                        >
                          Enquiry Type

                          <span className="ml-1 text-red-500">
                            *
                          </span>
                        </label>

                        <select
                          id="enquiryType"
                          name="enquiryType"
                          required
                          defaultValue=""
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                        >

                          <option value="" disabled>
                            Select enquiry type
                          </option>

                          <option value="general">
                            General Enquiry
                          </option>

                          <option value="registration">
                            Registration
                          </option>

                          <option value="scientific">
                            Scientific Program
                          </option>

                          <option value="faculty">
                            Faculty / Speakers
                          </option>

                          <option value="venue">
                            Venue & Travel
                          </option>

                          <option value="abstract">
                            Abstract / Scientific Submission
                          </option>

                          <option value="other">
                            Other
                          </option>

                        </select>

                      </div>

                      {/* Subject */}

                      <div className="mt-6">

                        <Input
                          label="Subject"
                          name="subject"
                          icon={<HelpCircle size={18} />}
                          placeholder="What is your enquiry about?"
                          required
                        />

                      </div>

                      {/* Message */}

                      <div className="mt-6">

                        <label
                          htmlFor="message"
                          className="mb-2 block text-sm font-semibold text-slate-700"
                        >
                          Message

                          <span className="ml-1 text-red-500">
                            *
                          </span>
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          placeholder="Please describe your enquiry..."
                          className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                        />

                      </div>

                      {/* Submit */}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`group mt-7 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/10 transition-all duration-300 sm:w-auto sm:px-8 ${
                          isSubmitting
                            ? "cursor-not-allowed bg-blue-400"
                            : "bg-blue-700 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
                        }`}
                      >

                        {isSubmitting
                          ? "Sending Enquiry..."
                          : "Send Enquiry"}

                        {!isSubmitting && (
                          <Send
                            size={17}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        )}

                      </button>

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
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: 0.08,
                    }}
                    className="min-w-0 space-y-5 lg:sticky lg:top-28"
                  >

                    {/* Secretariat */}

                    <div className="overflow-hidden rounded-3xl bg-[#071a2d] text-white shadow-xl">

                      <div className="border-b border-white/10 p-5 sm:p-6">

                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                          Official Contact
                        </p>

                        <h3 className="mt-2 text-xl font-bold">
                          Conference Secretariat
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                          CardioCon Arunachal 2026
                          <br />
                          CSI Northeast Annual Conference
                        </p>

                      </div>

                      <div className="space-y-6 p-5 sm:p-6">

                        <ContactItem
                          icon={Stethoscope}
                          label="Department"
                          value="Department of Cardiology"
                        />

                        <ContactItem
                          icon={Landmark}
                          label="Institution"
                          value="Tomo Riba Institute of Health and Medical Sciences (TRIHMS)"
                        />

                        <ContactItem
                          icon={MapPin}
                          label="Address"
                          value="Naharlagun, Arunachal Pradesh – 791110"
                        />

                        <ContactItem
                          icon={Mail}
                          label="Email"
                          value="cardioconarunachal@gmail.com"
                          href="mailto:cardioconarunachal@gmail.com"
                        />

                      </div>

                    </div>

                    {/* Conference */}

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">

                      <CalendarDays
                        size={22}
                        className="text-blue-700"
                      />

                      <h3 className="mt-4 font-bold text-slate-900">
                        Conference Dates
                      </h3>

                      <p className="mt-2 text-lg font-bold text-blue-700">
                        23–25 October 2026
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        CSI Northeast Annual Conference 2026 · CardioCon
                        Arunachal
                      </p>

                    </div>

                    {/* Assistance */}

                    <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:p-6">

                      <HeartPulse
                        size={23}
                        className="text-blue-700"
                      />

                      <h3 className="mt-4 font-bold text-blue-950">
                        Need conference assistance?
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-blue-900/70">
                        Contact the organising team for registration,
                        participation, scientific program or venue-related
                        enquiries.
                      </p>

                      <a
                        href="mailto:cardioconarunachal@gmail.com"
                        className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700"
                      >

                        Email Secretariat

                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                        />

                      </a>

                    </div>

                  </motion.aside>

                </div>

              )}

            </div>

          </div>

        </section>

        {/* =====================================================
            VENUE
        ====================================================== */}

        <section className="bg-white py-20 sm:py-24 lg:py-28">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">

              {/* Venue Details */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
              >

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700 sm:text-sm">
                  Conference Venue
                </span>

                <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">

                  Donyi Polo

                  <span className="text-blue-700">
                    {" "}International Hotel.
                  </span>

                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                  CardioCon Arunachal 2026 will welcome delegates to
                  Itanagar for three days of scientific exchange,
                  professional collaboration and cardiovascular learning.
                </p>

                <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">

                  <div className="flex items-start gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white">
                      <Hotel size={21} />
                    </div>

                    <div>

                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Venue
                      </p>

                      <p className="mt-1 font-bold leading-6 text-slate-900">
                        Donyi Polo International Hotel
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Itanagar, Arunachal Pradesh
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

              {/* Venue Visual */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="relative min-h-90 overflow-hidden rounded-3xl bg-[#071a2d] sm:min-h-105"
              >

                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, white 1px, transparent 1px),
                      linear-gradient(to bottom, white 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                  }}
                />

                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="relative flex min-h-90 items-center justify-center p-6 text-center sm:min-h-105 sm:p-8">

                  <div>

                    <motion.div
                      animate={{
                        y: [0, -7, 0],
                      }}
                      transition={{
                        duration: 2.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400 text-[#071a2d] shadow-xl sm:h-18 sm:w-18"
                    >

                      <MapPin size={30} />

                    </motion.div>

                    <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                      CardioCon Arunachal 2026
                    </p>

                    <h3 className="mx-auto mt-3 max-w-md text-2xl font-bold text-white sm:text-3xl">
                      Donyi Polo International Hotel
                    </h3>

                    <p className="mt-3 text-sm text-slate-400 sm:text-base">
                      Itanagar, Arunachal Pradesh
                    </p>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Donyi+Polo+International+Hotel+Itanagar+Arunachal+Pradesh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-slate-900"
                    >

                      <Navigation size={16} />

                      Open in Maps

                      <ExternalLink
                        size={14}
                        className="opacity-60"
                      />

                    </a>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </section>

        {/* =====================================================
            FINAL CTA
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
            viewport={{ once: true }}
            className="relative mx-auto max-w-4xl px-4 text-center sm:px-6"
          >

            <Mail
              size={40}
              className="mx-auto text-cyan-300"
            />

            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-200 sm:text-xs">
              Conference Secretariat
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Have a question about CardioCon Arunachal?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
              Contact the organising team for registration, scientific
              program, participation, venue and general conference
              enquiries.
            </p>

            <a
              href="mailto:cardioconarunachal@gmail.com"
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-blue-800 transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-auto sm:px-8 sm:py-4"
            >

              Email the Organising Team

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />

            </a>

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
   INPUT
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

        {icon && (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </span>
        )}

        <input
          id={inputId}
          name={name}
          required={required}
          {...props}
          className={`w-full rounded-xl border border-slate-300 bg-white py-3.5 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 ${
            icon ? "pl-12" : "pl-4"
          }`}
        />

      </div>

    </div>
  );
}

/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}) {
  const content = (
    <>
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
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex min-w-0 items-start gap-3 transition hover:opacity-80"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex min-w-0 items-start gap-3">
      {content}
    </div>
  );
}

export default Contact;
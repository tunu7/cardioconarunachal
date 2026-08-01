import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  HeartPulse,
  MessageSquare,
  User,
  Building2,
  ArrowRight,
  CalendarDays,
  HelpCircle,
  ExternalLink,
} from "lucide-react";

function Contact() {
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

    // Connect this to your backend/email service later.
    console.log("Contact form submitted");
  };

  return (
    <>
      <Navbar />

      <main className="overflow-hidden pt-20">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#071a2d] text-white">
          {/* Background decorations */}

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
                <MessageSquare size={17} />
                Contact CardioCon
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-7 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              >
                We're Here to
                <span className="ml-3 text-cyan-300 sm:ml-4">
                  Help.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-2xl text-lg leading-8 text-slate-300"
              >
                Have questions about registration, the scientific program,
                venue, participation or CardioCon Arunachal 2026? Get in touch
                with our organising team.
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
            CONTACT OPTIONS
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
              {/* Email */}

              <motion.a
                variants={fadeUp}
                whileHover={{ y: -5 }}
                href="mailto:info@cardioconarunachal.com"
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                  <Mail size={23} />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Email Us
                </p>

                <h3 className="mt-2 font-bold text-slate-900">
                  General Enquiries
                </h3>

                <p className="mt-2 break-all text-sm text-slate-500">
                  info@cardioconarunachal.com
                </p>

                <span className="mt-5 flex items-center gap-2 text-sm font-bold text-blue-700">
                  Send Email

                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </motion.a>

              {/* Phone */}

              <motion.a
                variants={fadeUp}
                whileHover={{ y: -5 }}
                href="tel:+91XXXXXXXXXX"
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                  <Phone size={23} />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Call Us
                </p>

                <h3 className="mt-2 font-bold text-slate-900">
                  Registration Support
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  +91 XXXXX XXXXX
                </p>

                <span className="mt-5 flex items-center gap-2 text-sm font-bold text-blue-700">
                  Call Support

                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </motion.a>

              {/* Location */}

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                  <MapPin size={23} />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Conference Location
                </p>

                <h3 className="mt-2 font-bold text-slate-900">
                  Itanagar
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Arunachal Pradesh, India
                </p>

                <span className="mt-5 flex items-center gap-2 text-sm font-bold text-blue-700">
                  Venue Details
                  <ArrowRight size={15} />
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            MAIN CONTACT SECTION
        ====================================================== */}

        <section className="bg-slate-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* Heading */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                Get in Touch
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                How Can We Assist You?
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Send us your enquiry and the appropriate member of the
                CardioCon organising team can assist you.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">

              {/* =================================================
                  CONTACT FORM
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
                {/* Form Header */}

                <div className="border-b border-slate-100 px-6 py-7 sm:px-9">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <MessageSquare size={23} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Send an Enquiry
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Complete the form and our team will respond.
                      </p>
                    </div>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="p-6 sm:p-9"
                >
                  <div className="grid gap-6 md:grid-cols-2">
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
                      <span className="ml-1 text-red-500">*</span>
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

                      <option value="scientific-program">
                        Scientific Program
                      </option>

                      <option value="speakers">
                        Faculty / Speakers
                      </option>

                      <option value="venue">
                        Venue Information
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
                      <span className="ml-1 text-red-500">*</span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Please describe your enquiry..."
                      className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  {/* Submit */}

                  <button
                    type="submit"
                    className="group mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 font-bold text-white shadow-lg shadow-blue-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl sm:w-auto sm:px-8"
                  >
                    Send Enquiry

                    <Send
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </form>
              </motion.div>

              {/* =================================================
                  CONTACT SIDEBAR
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
                {/* Organising Committee */}

                <div className="overflow-hidden rounded-3xl bg-[#071a2d] text-white shadow-xl">
                  <div className="border-b border-white/10 p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                      Conference Secretariat
                    </p>

                    <h3 className="mt-2 text-xl font-bold">
                      Organising Committee
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      For conference-related enquiries, please contact the
                      CardioCon Arunachal organising team.
                    </p>
                  </div>

                  <div className="space-y-6 p-6">
                    <ContactItem
                      icon={Mail}
                      label="Email"
                      value="info@cardioconarunachal.com"
                      href="mailto:info@cardioconarunachal.com"
                    />

                    <ContactItem
                      icon={Phone}
                      label="Phone"
                      value="+91 XXXXX XXXXX"
                      href="tel:+91XXXXXXXXXX"
                    />

                    <ContactItem
                      icon={MapPin}
                      label="Location"
                      value="Itanagar, Arunachal Pradesh"
                    />
                  </div>
                </div>

                {/* Office Hours */}

                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Clock3 size={21} />
                  </div>

                  <h3 className="mt-5 font-bold text-slate-900">
                    Secretariat Hours
                  </h3>

                  <div className="mt-4 space-y-3 text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="text-slate-500">
                        Monday – Friday
                      </span>

                      <span className="font-semibold text-slate-700">
                        10:00 AM – 5:00 PM
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-slate-500">
                        Saturday
                      </span>

                      <span className="font-semibold text-slate-700">
                        10:00 AM – 1:00 PM
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-slate-500">
                        Sunday
                      </span>

                      <span className="font-semibold text-slate-400">
                        Closed
                      </span>
                    </div>
                  </div>
                </div>

                {/* Registration Help */}

                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                  <HeartPulse
                    size={23}
                    className="text-blue-700"
                  />

                  <h3 className="mt-4 font-bold text-blue-950">
                    Registration Enquiry?
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-blue-900/70">
                    For questions regarding delegate categories,
                    registration confirmation or payment, contact our
                    registration team.
                  </p>

                  <a
                    href="mailto:info@cardioconarunachal.com"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700"
                  >
                    Contact Registration Team
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        {/* =====================================================
            VENUE
        ====================================================== */}

        <section className="bg-white py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

              {/* Venue Info */}

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
              >
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                  Conference Venue
                </span>

                <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                  CardioCon Arunachal
                  <span className="text-blue-700">
                    {" "}2026 Venue
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                  The conference will be held in Itanagar, Arunachal Pradesh.
                  Detailed venue information and delegate instructions will
                  be published once finalised.
                </p>

                <div className="mt-8 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <MapPin size={21} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Location
                    </p>

                    <p className="mt-1 font-bold text-slate-900">
                      Itanagar, Arunachal Pradesh
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      India
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Map Placeholder */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative min-h-105 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100"
              >
                {/* Map grid effect */}

                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, #cbd5e1 1px, transparent 1px),
                      linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                  }}
                />

                <div className="absolute inset-0 bg-linear-to-br from-blue-50/60 to-slate-100/50" />

                <div className="relative flex min-h-105 items-center justify-center p-8 text-center">
                  <div>
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-700 text-white shadow-xl shadow-blue-900/20"
                    >
                      <MapPin size={29} />
                    </motion.div>

                    <h3 className="mt-6 text-xl font-bold text-slate-900">
                      Itanagar, Arunachal Pradesh
                    </h3>

                    <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                      Interactive map and exact conference venue details
                      will be available once the venue is confirmed.
                    </p>

                    <button
                      type="button"
                      disabled
                      className="mt-6 inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-400"
                    >
                      <ExternalLink size={15} />
                      Venue Map Coming Soon
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL HELP CTA
        ====================================================== */}

        <section className="relative overflow-hidden bg-blue-800 py-20 text-white">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

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
              size={42}
              className="mx-auto text-cyan-300"
            />

            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Still have a question?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Our organising team can assist with conference registration,
              scientific program enquiries and general information.
            </p>

            <a
              href="mailto:info@cardioconarunachal.com"
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Email the Organising Team

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
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
   INPUT COMPONENT
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
        className="flex items-start gap-3 transition hover:opacity-80"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-start gap-3">
      {content}
    </div>
  );
}

export default Contact;
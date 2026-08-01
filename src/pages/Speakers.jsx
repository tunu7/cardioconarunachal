import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Stethoscope,
  GraduationCap,
  Building2,
  Award,
  ArrowRight,
  HeartPulse,
  Users,
  Mic2,
  UserRound,
  Sparkles,
  CalendarDays,
  MapPin,
  CheckCircle2,
} from "lucide-react";

/* =========================================================
   FACULTY DATA

   Add confirmed speakers here when available.
   Do not publish placeholder/fictitious doctors.
========================================================= */

const speakers = [
  // Example structure:
  //
  // {
  //   name: "Dr. Name",
  //   designation: "Professor of Cardiology",
  //   hospital: "Institution Name",
  //   expertise: "Interventional Cardiology",
  //   role: "National Faculty",
  //   image: "/speakers/dr-name.jpg",
  // },
];

/* =========================================================
   SCIENTIFIC AREAS
========================================================= */

const scientificAreas = [
  "Interventional Cardiology",
  "Electrophysiology",
  "Heart Failure",
  "Preventive Cardiology",
  "Cardiac Imaging",
  "Clinical Cardiology",
];

/* =========================================================
   COMPONENT
========================================================= */

function Speakers() {
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

            {/* Arunachal sunrise */}
            <div className="absolute right-[8%] top-[14%] h-40 w-40 rounded-full bg-orange-400/10 blur-2xl sm:h-56 sm:w-56" />

            {/* Dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* ECG */}
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
                className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-cyan-200 backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.18em]"
              >
                <HeartPulse size={15} className="shrink-0" />

                CSI Northeast Annual Conference 2026
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300 sm:text-sm"
              >
                <Mic2 size={15} />

                Distinguished Faculty
              </motion.div>

              {/* Heading */}

              <motion.h1
                variants={fadeUp}
                className="mt-5 max-w-5xl text-4xl font-black leading-[1.04] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Meet the Experts
                <span className="mt-1 block text-cyan-300">
                  Behind the Science.
                </span>
              </motion.h1>

              {/* Description */}

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg"
              >
                CardioCon Arunachal 2026 will bring together eminent
                cardiologists, physicians, academicians and researchers for
                scientific exchange, clinical discussions and collaborative
                learning in cardiovascular medicine.
              </motion.p>

              {/* Event info */}

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
                  label="Location"
                  value="Itanagar, Arunachal Pradesh"
                  accent="orange"
                />
              </motion.div>

            </motion.div>

          </div>

          {/* Arunachal accent */}

          <div className="flex h-1.5">
            <div className="flex-1 bg-orange-400" />
            <div className="flex-1 bg-cyan-500" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-cyan-500" />
            <div className="flex-1 bg-orange-400" />
          </div>

        </section>

        {/* =====================================================
            INTRODUCTION
        ====================================================== */}

        <section className="bg-white py-20 sm:py-24 lg:py-28">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

              {/* Left */}

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

                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-blue-700 sm:text-sm">
                  <span className="h-px w-7 bg-blue-700" />
                  CardioCon Faculty
                </div>

                <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Distinguished voices in
                  <span className="text-blue-700">
                    {" "}cardiovascular medicine.
                  </span>
                </h2>

              </motion.div>

              {/* Right */}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >

                <p className="text-base leading-8 text-slate-600 sm:text-lg">
                  The academic agenda is expected to feature renowned senior
                  cardiologists, academicians and researchers from leading
                  institutions across India, together with distinguished
                  faculty contributing their expertise to contemporary
                  cardiovascular medicine.
                </p>

                <div className="mt-7 space-y-4">

                  {[
                    "Contemporary evidence-based cardiovascular practice",
                    "Clinical experience and multidisciplinary perspectives",
                    "Scientific exchange between experts and young professionals",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-emerald-600"
                      />

                      <span className="text-sm leading-6 text-slate-700 sm:text-base">
                        {item}
                      </span>
                    </div>

                  ))}

                </div>

              </motion.div>

            </div>

          </div>

        </section>

        {/* =====================================================
            FACULTY SECTION
        ====================================================== */}

        <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* Heading */}

            <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-end sm:justify-between">

              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
              >

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700 sm:text-sm">
                  Invited Faculty
                </span>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Meet Our Speakers
                </h2>

              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-lg text-sm leading-7 text-slate-500"
              >
                Confirmed national and invited faculty will be published here
                as speaker participation and the scientific program are
                finalised.
              </motion.p>

            </div>

            {/* =================================================
                CONFIRMED SPEAKERS
            ================================================== */}

            {speakers.length > 0 ? (

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.08,
                }}
                className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7"
              >

                {speakers.map((speaker) => (

                  <SpeakerCard
                    key={speaker.name}
                    speaker={speaker}
                    fadeUp={fadeUp}
                  />

                ))}

              </motion.div>

            ) : (

              /* ===============================================
                 COMING SOON STATE
              ================================================ */

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
                className="relative mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white px-5 py-12 text-center shadow-sm sm:mt-12 sm:px-10 sm:py-16 lg:py-20"
              >

                {/* Decoration */}

                <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/60 blur-3xl" />

                <div className="relative">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 sm:h-20 sm:w-20">

                    <Mic2
                      size={32}
                      strokeWidth={1.7}
                    />

                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
                    Faculty Announcement
                  </p>

                  <h3 className="mx-auto mt-3 max-w-xl text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Distinguished faculty will be announced soon.
                  </h3>

                  <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                    The scientific committee is currently finalising the
                    invited faculty for CardioCon Arunachal 2026. Confirmed
                    speaker profiles will be published here.
                  </p>

                  <Link
                    to="/schedule"
                    className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg"
                  >
                    Explore Scientific Program

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                </div>

              </motion.div>

            )}

          </div>

        </section>

        {/* =====================================================
            SCIENTIFIC EXPERTISE
        ====================================================== */}

        <section className="bg-white py-20 sm:py-24 lg:py-28">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">

              {/* Left */}

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
                  Scientific Expertise
                </span>

                <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Perspectives across the
                  <span className="text-blue-700">
                    {" "}cardiovascular spectrum.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                  The conference aims to bring together expertise across
                  contemporary cardiovascular medicine, encouraging
                  multidisciplinary discussion, research and collaborative
                  learning.
                </p>

              </motion.div>

              {/* Specialties */}

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-3 sm:grid-cols-2 sm:gap-4"
              >

                {scientificAreas.map((specialty) => (

                  <motion.div
                    key={specialty}
                    variants={fadeUp}
                    whileHover={{ y: -3 }}
                    className="group flex min-h-20 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-md sm:p-5"
                  >

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">

                      <HeartPulse size={20} />

                    </div>

                    <span className="text-sm font-bold leading-5 text-slate-800">
                      {specialty}
                    </span>

                  </motion.div>

                ))}

              </motion.div>

            </div>

          </div>

        </section>

        {/* =====================================================
            ACADEMIC EXPERIENCE
        ====================================================== */}

        <section className="bg-[#071a2d] py-20 text-white sm:py-24 lg:py-28">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

              {/* Left */}

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

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">

                  <GraduationCap size={27} />

                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                  Academic Exchange
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  Learn. Discuss.
                  <span className="text-cyan-300">
                    {" "}Collaborate.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                  CardioCon Arunachal 2026 is envisioned as a platform for
                  meaningful scientific exchange, mentorship, networking and
                  collaborative learning among experienced specialists and
                  young medical professionals.
                </p>

              </motion.div>

              {/* Right */}

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-3 sm:grid-cols-2 sm:gap-4"
              >

                {[
                  {
                    icon: Mic2,
                    title: "Expert Lectures",
                    text: "Perspectives from experienced cardiovascular specialists.",
                  },
                  {
                    icon: Stethoscope,
                    title: "Clinical Learning",
                    text: "Evidence-based discussions relevant to clinical practice.",
                  },
                  {
                    icon: GraduationCap,
                    title: "Academic Exchange",
                    text: "Opportunities for learning, discussion and mentorship.",
                  },
                  {
                    icon: Users,
                    title: "Professional Network",
                    text: "Connect with colleagues from across the Northeast and India.",
                  },
                ].map(({ icon: Icon, title, text }) => (

                  <motion.div
                    variants={fadeUp}
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6"
                  >

                    <Icon
                      size={23}
                      className="text-cyan-300"
                    />

                    <h3 className="mt-5 font-bold text-white">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {text}
                    </p>

                  </motion.div>

                ))}

              </motion.div>

            </div>

          </div>

        </section>

        {/* =====================================================
            FACULTY ANNOUNCEMENT
        ====================================================== */}

        <section className="bg-slate-50 py-20 sm:py-24">

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
              className="flex flex-col gap-6 rounded-3xl border border-blue-100 bg-blue-50/70 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
            >

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white">

                  <Sparkles size={20} />

                </div>

                <div>

                  <h3 className="font-bold text-slate-900 sm:text-lg">
                    Faculty announcements coming soon
                  </h3>

                  <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
                    Speaker profiles and institutional affiliations will be
                    added as participation is officially confirmed.
                  </p>

                </div>

              </div>

              <Link
                to="/schedule"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-bold text-blue-700 transition hover:border-blue-300 hover:shadow-sm"
              >
                View Program

                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </motion.div>

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

            <Stethoscope
              size={40}
              className="mx-auto text-cyan-300"
            />

            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-200 sm:text-xs">
              23–25 October 2026 · Arunachal Pradesh
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Join the cardiovascular community in Arunachal Pradesh.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
              Be part of CSI Northeast Annual Conference 2026 for scientific
              exchange, clinical discussions and professional collaboration.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">

              <Link
                to="/registration"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-blue-800 transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
              >
                Register Now

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/schedule"
                className="flex w-full items-center justify-center rounded-xl border border-white/25 px-7 py-3.5 font-semibold transition hover:bg-white/10 sm:w-auto"
              >
                Scientific Program
              </Link>

            </div>

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
   SPEAKER CARD
========================================================= */

function SpeakerCard({
  speaker,
  fadeUp,
}) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{
        y: -6,
      }}
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-2xl hover:shadow-slate-200/70"
    >

      {/* Image */}

      <div className="relative aspect-[4/4.3] overflow-hidden bg-linear-to-br from-slate-100 via-blue-50 to-slate-200 sm:aspect-4/4.5">

        {speaker.image ? (

          <img
            src={speaker.image}
            alt={speaker.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

        ) : (

          <div className="flex h-full w-full items-center justify-center">

            <div className="relative">

              <div className="absolute inset-0 scale-150 rounded-full bg-blue-300/20 blur-3xl" />

              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-white shadow-xl sm:h-30 sm:w-30">

                <UserRound
                  size={50}
                  strokeWidth={1.5}
                  className="text-blue-700"
                />

              </div>

            </div>

          </div>

        )}

        {/* Gradient */}

        <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-slate-950/50 to-transparent" />

        {/* Role */}

        <div className="absolute left-4 top-4 sm:left-5 sm:top-5">

          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/90 px-2.5 py-1.5 text-[10px] font-bold text-blue-800 shadow-sm backdrop-blur sm:px-3 sm:text-xs">

            {speaker.role === "Keynote Faculty" ? (
              <Award size={13} />
            ) : (
              <Mic2 size={13} />
            )}

            {speaker.role}

          </span>

        </div>

        {/* Expertise */}

        <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5">

          <span className="inline-flex max-w-full rounded-lg bg-[#071a2d]/90 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur sm:text-xs">
            {speaker.expertise}
          </span>

        </div>

      </div>

      {/* Details */}

      <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">

        <h3 className="text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-700 sm:text-2xl">
          {speaker.name}
        </h3>

        <div className="mt-5 flex items-start gap-3">

          <GraduationCap
            size={18}
            className="mt-0.5 shrink-0 text-blue-700"
          />

          <p className="text-sm font-medium leading-6 text-slate-700">
            {speaker.designation}
          </p>

        </div>

        <div className="mt-3 flex items-start gap-3">

          <Building2
            size={17}
            className="mt-0.5 shrink-0 text-slate-400"
          />

          <p className="wrap-break-word text-sm leading-6 text-slate-500">
            {speaker.hospital}
          </p>

        </div>

        <div className="mt-auto pt-6">

          <div className="mb-5 h-px bg-slate-100" />

          <button
            type="button"
            className="group/button flex items-center gap-2 text-sm font-bold text-blue-700"
          >
            View Faculty Profile

            <ArrowRight
              size={15}
              className="transition-transform group-hover/button:translate-x-1"
            />

          </button>

        </div>

      </div>

    </motion.article>
  );
}

export default Speakers;
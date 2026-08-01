import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  HeartPulse,
  Users,
  Microscope,
  Award,
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  BookOpen,
  GraduationCap,
  Activity,
  Target,
  Lightbulb,
  Network,
  ShieldCheck,
} from "lucide-react";

function About() {
  /* =========================================================
     ANIMATION VARIANTS
  ========================================================= */

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  /* =========================================================
     DATA
  ========================================================= */

  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Connecting specialists, physicians, researchers and healthcare professionals.",
    },
    {
      icon: Microscope,
      title: "Innovation",
      description:
        "Encouraging scientific research, new ideas and advances in cardiovascular medicine.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Promoting high standards in cardiovascular education and clinical practice.",
    },
    {
      icon: HeartPulse,
      title: "Better Care",
      description:
        "Turning scientific knowledge into meaningful improvements in patient care.",
    },
  ];

  const objectives = [
    {
      icon: BookOpen,
      title: "Knowledge Exchange",
      description:
        "Create a strong scientific platform for sharing evidence, experience and clinical perspectives.",
    },
    {
      icon: Lightbulb,
      title: "Clinical Innovation",
      description:
        "Explore emerging technologies, treatment strategies and advances in cardiovascular medicine.",
    },
    {
      icon: GraduationCap,
      title: "Medical Education",
      description:
        "Support continuous learning through expert sessions, discussions and practical workshops.",
    },
    {
      icon: Network,
      title: "Professional Collaboration",
      description:
        "Strengthen connections between specialists, physicians, researchers and future clinicians.",
    },
  ];

  const attendees = [
    {
      icon: HeartPulse,
      title: "Cardiologists",
    },
    {
      icon: Stethoscope,
      title: "Physicians",
    },
    {
      icon: Microscope,
      title: "Researchers",
    },
    {
      icon: GraduationCap,
      title: "Medical Students",
    },
  ];

  const reasons = [
    "Learn from distinguished experts and experienced clinicians.",
    "Explore recent advances in cardiovascular science and medicine.",
    "Participate in interactive scientific and clinical discussions.",
    "Gain practical insights through focused workshops and sessions.",
    "Connect with professionals across specialties and institutions.",
    "Contribute to stronger cardiovascular care in the region.",
  ];

  return (
    <>
      <Navbar />

      <main className="overflow-hidden pt-20">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#071a2d] text-white">
          {/* Decorative background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-40 -top-40 h-150 w-150 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="absolute -bottom-60 -left-40 h-150 w-150 rounded-full bg-blue-600/10 blur-3xl" />

            {/* ECG line decoration */}
            <svg
              className="absolute bottom-0 left-0 w-full opacity-[0.08]"
              viewBox="0 0 1440 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0 110H260L310 110L340 50L380 160L420 20L470 110H650L700 110L730 65L760 145L800 45L840 110H1100L1140 110L1170 70L1200 140L1240 50L1280 110H1440"
                stroke="currentColor"
                strokeWidth="5"
                className="text-cyan-300"
              />
            </svg>
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
                About CardioCon Arunachal
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-7 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              >
                Advancing Cardiovascular
                <span className="mt-2 block text-cyan-300">
                  Excellence Together.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-2xl text-lg leading-8 text-slate-300"
              >
                A scientific platform dedicated to advancing cardiovascular
                medicine through education, clinical discussion, research and
                meaningful professional collaboration.
              </motion.p>
            </motion.div>
          </div>

          <div className="absolute bottom-0 h-1 w-full bg-linear-to-r from-blue-700 via-cyan-400 to-blue-700" />
        </section>

        {/* =====================================================
            WHO WE ARE
        ====================================================== */}

        <section className="bg-white py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">

            {/* LEFT CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                Who We Are
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                A platform for science,
                <span className="text-blue-700"> learning and collaboration.</span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-600">
                CardioCon Arunachal brings together cardiologists, physicians,
                researchers, academicians, healthcare professionals and medical
                students to exchange knowledge and discuss developments shaping
                modern cardiovascular medicine.
              </p>

              <p className="mt-5 leading-8 text-slate-500">
                Through scientific sessions, expert discussions, research
                presentations and practical learning opportunities, the
                conference encourages interdisciplinary collaboration and
                continuous medical education.
              </p>

              <div className="mt-8 border-l-4 border-cyan-500 bg-slate-50 px-6 py-5">
                <p className="font-medium leading-7 text-slate-700">
                  Our purpose is simple: create meaningful scientific
                  conversations that contribute to better cardiovascular
                  knowledge, practice and patient care.
                </p>
              </div>
            </motion.div>

            {/* RIGHT VISUAL */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative min-h-120 overflow-hidden rounded-4xl bg-linear-to-br from-blue-950 via-blue-800 to-cyan-700 p-8 shadow-2xl shadow-blue-950/15 sm:p-10">

                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/10" />

                <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/5" />

                <div className="relative flex min-h-100 flex-col justify-between">

                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 text-cyan-300 backdrop-blur">
                    <HeartPulse size={42} />
                  </div>

                  <div>
                    <Activity
                      size={65}
                      strokeWidth={1.3}
                      className="mb-5 text-cyan-300"
                    />

                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-200">
                      CardioCon Arunachal
                    </p>

                    <h3 className="mt-4 max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl">
                      Connecting knowledge with clinical practice.
                    </h3>

                    <p className="mt-5 max-w-md leading-7 text-blue-100/70">
                      Advancing cardiovascular science through education,
                      evidence and collaboration.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="absolute -bottom-7 right-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:right-8"
              >
                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <ShieldCheck size={23} />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Scientific Excellence
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500">
                      Evidence · Education · Care
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            MISSION + VISION
        ====================================================== */}

        <section className="bg-slate-50 py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                Our Direction
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                Our Mission & Vision
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Creating an environment where scientific knowledge,
                collaboration and clinical excellence can strengthen
                cardiovascular healthcare.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">

              {/* Mission */}

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Target size={28} />
                </div>

                <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                  Our Mission
                </p>

                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  Strengthening cardiovascular knowledge and practice.
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  To provide a high-quality scientific platform where
                  healthcare professionals can learn, exchange clinical
                  experience, discuss research and build collaborations that
                  contribute to better cardiovascular care.
                </p>
              </motion.div>

              {/* Vision */}

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl bg-[#071a2d] p-8 text-white sm:p-10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
                  <Lightbulb size={28} />
                </div>

                <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Our Vision
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  A stronger future for cardiovascular healthcare.
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  To establish CardioCon Arunachal as a respected scientific
                  forum that promotes evidence-based medicine, innovation,
                  continuous education and collaboration across the
                  cardiovascular community.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CORE VALUES
        ====================================================== */}

        <section className="bg-white py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                What Guides Us
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                Our Core Values
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The principles behind the scientific and professional
                experience we aim to create.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {values.map(({ icon: Icon, title, description }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  whileHover={{ y: -7 }}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-colors duration-300 group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            CONFERENCE OBJECTIVES
        ====================================================== */}

        <section className="bg-[#071a2d] py-24 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                Conference Objectives
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
                What CardioCon aims to achieve.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                CardioCon is designed to create meaningful scientific
                engagement that continues beyond the conference itself.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {objectives.map(
                ({ icon: Icon, title, description }, index) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                        <Icon size={24} />
                      </div>

                      <span className="text-sm font-bold text-white/20">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-bold">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {description}
                    </p>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            WHO PARTICIPATES
        ====================================================== */}

        <section className="bg-white py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                Our Community
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                Bringing the cardiovascular community together.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                CardioCon creates opportunities for professionals at different
                stages of their careers to learn from one another and build
                meaningful professional relationships.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {attendees.map(({ icon: Icon, title }, index) => (
                <motion.div
                  key={title}
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-5 rounded-2xl border border-slate-200 p-6 transition hover:border-blue-200 hover:bg-blue-50/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-blue-700">
                    <Icon size={24} />
                  </div>

                  <span className="font-bold text-slate-800">
                    {title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY ATTEND
        ====================================================== */}

        <section className="bg-slate-50 py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                Why Attend
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                Why CardioCon Arunachal?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                An opportunity to learn, exchange perspectives and engage
                with the wider cardiovascular community.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-2"
            >
              {reasons.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50"
                >
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <CheckCircle2 size={20} />
                  </div>

                  <p className="leading-7 text-slate-700">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="relative overflow-hidden bg-blue-800 py-20 text-white">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-4xl px-4 text-center sm:px-6"
          >
            <HeartPulse
              size={43}
              className="mx-auto text-cyan-300"
            />

            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Be part of CardioCon Arunachal 2026.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Join healthcare professionals, researchers and medical leaders
              for three days of scientific learning, discussion and
              collaboration.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                to="/registration"
                className="group flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Register Now

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/schedule"
                className="flex items-center justify-center rounded-xl border border-white/25 px-8 py-4 font-semibold transition hover:bg-white/10"
              >
                View Scientific Program
              </Link>

            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;
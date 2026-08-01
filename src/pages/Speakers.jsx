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
} from "lucide-react";

/* =========================================================
   SPEAKER DATA
========================================================= */

const speakers = [
  {
    name: "Dr. John Doe",
    designation: "Senior Interventional Cardiologist",
    hospital: "Apollo Hospitals, New Delhi",
    expertise: "Interventional Cardiology",
    role: "Keynote Faculty",
    image: null,
  },
  {
    name: "Dr. Jane Smith",
    designation: "Professor of Cardiology",
    hospital: "AIIMS, New Delhi",
    expertise: "Clinical Cardiology",
    role: "Scientific Faculty",
    image: null,
  },
  {
    name: "Dr. Michael Brown",
    designation: "Cardiac Electrophysiologist",
    hospital: "Fortis Healthcare",
    expertise: "Electrophysiology",
    role: "Invited Faculty",
    image: null,
  },
  {
    name: "Dr. Emily Wilson",
    designation: "Consultant Cardiologist",
    hospital: "Narayana Health",
    expertise: "Preventive Cardiology",
    role: "Scientific Faculty",
    image: null,
  },
  {
    name: "Dr. David Lee",
    designation: "Heart Failure Specialist",
    hospital: "Medanta Hospital",
    expertise: "Heart Failure",
    role: "Invited Faculty",
    image: null,
  },
  {
    name: "Dr. Sarah Thomas",
    designation: "Director of Cardiology",
    hospital: "Max Healthcare",
    expertise: "Cardiovascular Medicine",
    role: "Keynote Faculty",
    image: null,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

function Speakers() {
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

            <div className="absolute -bottom-56 -left-40 h-150 w-150 rounded-full bg-blue-600/10 blur-3xl" />

            {/* Dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.035]"
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
                <Mic2 size={16} />

                Distinguished Faculty
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-7 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              >
                Meet the Experts
                <span className="mt-2 block text-cyan-300">
                  Behind the Science.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-2xl text-lg leading-8 text-slate-300"
              >
                CardioCon Arunachal brings together distinguished
                cardiologists, clinicians, academicians and researchers to
                share expertise, discuss evidence and advance cardiovascular
                medicine.
              </motion.p>

              {/* Hero Stats */}

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap gap-4"
              >
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">

                  <Users
                    size={20}
                    className="text-cyan-300"
                  />

                  <div>
                    <p className="text-sm font-bold text-white">
                      40+
                    </p>

                    <p className="text-xs text-slate-400">
                      Expert Faculty
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">

                  <Mic2
                    size={20}
                    className="text-cyan-300"
                  />

                  <div>
                    <p className="text-sm font-bold text-white">
                      25+
                    </p>

                    <p className="text-xs text-slate-400">
                      Scientific Sessions
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">

                  <HeartPulse
                    size={20}
                    className="text-cyan-300"
                  />

                  <div>
                    <p className="text-sm font-bold text-white">
                      Multiple
                    </p>

                    <p className="text-xs text-slate-400">
                      Specialties
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 h-1 w-full bg-linear-to-r from-blue-700 via-cyan-400 to-blue-700" />
        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <section className="bg-white py-20 lg:py-24">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-3xl px-4 text-center sm:px-6"
          >

            <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
              CardioCon Faculty
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
              Distinguished Voices in
              <span className="text-blue-700">
                {" "}Cardiovascular Medicine
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our invited faculty represent diverse areas of cardiovascular
              medicine, bringing clinical experience, scientific knowledge
              and valuable perspectives to CardioCon Arunachal.
            </p>
          </motion.div>
        </section>

        {/* =====================================================
            FACULTY CARDS
        ====================================================== */}

        <section className="bg-slate-50 py-24 lg:py-28">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* Section header */}

            <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-end sm:justify-between">

              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                  Invited Faculty
                </span>

                <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                  Meet Our Speakers
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-lg text-sm leading-7 text-slate-500"
              >
                Additional faculty members and scientific contributors will
                be announced as the conference program is finalized.
              </motion.p>
            </div>

            {/* Cards */}

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.1,
              }}
              className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
            >
              {speakers.map((speaker) => (

                <motion.article
                  key={speaker.name}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-2xl hover:shadow-slate-200/70"
                >

                  {/* =========================================
                      SPEAKER IMAGE
                  ========================================== */}

                  <div className="relative h-80 overflow-hidden bg-linear-to-br from-slate-100 via-blue-50 to-slate-200">

                    {speaker.image ? (

                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                    ) : (

                      <div className="flex h-full w-full items-center justify-center">

                        <div className="relative">

                          <div className="absolute inset-0 scale-150 rounded-full bg-blue-300/20 blur-3xl" />

                          <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-white shadow-xl">

                            <UserRound
                              size={58}
                              strokeWidth={1.5}
                              className="text-blue-700"
                            />

                          </div>
                        </div>
                      </div>

                    )}

                    {/* Gradient */}

                    <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-slate-950/40 to-transparent" />

                    {/* Faculty Role */}

                    <div className="absolute left-5 top-5">

                      <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-bold text-blue-800 shadow-sm backdrop-blur">

                        {speaker.role === "Keynote Faculty" && (
                          <Award size={14} />
                        )}

                        {speaker.role !== "Keynote Faculty" && (
                          <Mic2 size={14} />
                        )}

                        {speaker.role}

                      </span>

                    </div>

                    {/* Expertise */}

                    <div className="absolute bottom-5 left-5">

                      <span className="rounded-lg bg-[#071a2d]/85 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                        {speaker.expertise}
                      </span>

                    </div>
                  </div>

                  {/* =========================================
                      DETAILS
                  ========================================== */}

                  <div className="p-7">

                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-700">
                      {speaker.name}
                    </h3>

                    {/* Designation */}

                    <div className="mt-5 flex items-start gap-3">

                      <GraduationCap
                        size={19}
                        className="mt-0.5 shrink-0 text-blue-700"
                      />

                      <p className="text-sm font-medium leading-6 text-slate-700">
                        {speaker.designation}
                      </p>

                    </div>

                    {/* Hospital */}

                    <div className="mt-3 flex items-start gap-3">

                      <Building2
                        size={18}
                        className="mt-0.5 shrink-0 text-slate-400"
                      />

                      <p className="text-sm leading-6 text-slate-500">
                        {speaker.hospital}
                      </p>

                    </div>

                    {/* Divider */}

                    <div className="my-6 h-px bg-slate-100" />

                    {/* View profile */}

                    <button className="group/button flex items-center gap-2 text-sm font-bold text-blue-700">

                      View Faculty Profile

                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover/button:translate-x-1"
                      />

                    </button>

                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* More faculty notice */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-blue-100 bg-blue-50/60 p-6 sm:flex-row sm:p-7"
            >

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white">

                  <Sparkles size={21} />

                </div>

                <div>

                  <h3 className="font-bold text-slate-900">
                    More faculty announcements coming soon
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    The complete CardioCon Arunachal 2026 faculty list will
                    be published as confirmations are finalized.
                  </p>

                </div>
              </div>

              <Link
                to="/schedule"
                className="flex shrink-0 items-center gap-2 text-sm font-bold text-blue-700"
              >
                View Program
                <ArrowRight size={15} />
              </Link>

            </motion.div>
          </div>
        </section>

        {/* =====================================================
            FACULTY EXPERIENCE
        ====================================================== */}

        <section className="bg-white py-24 lg:py-28">

          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">

            {/* Left */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                Learn From Experience
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                Expertise across the
                <span className="text-blue-700">
                  {" "}cardiovascular spectrum.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                CardioCon's scientific faculty brings together specialists
                from multiple disciplines to provide a broader perspective
                on contemporary cardiovascular medicine.
              </p>

            </motion.div>

            {/* Right */}

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-4 sm:grid-cols-2"
            >

              {[
                "Interventional Cardiology",
                "Electrophysiology",
                "Heart Failure",
                "Preventive Cardiology",
                "Cardiac Imaging",
                "Clinical Cardiology",
              ].map((specialty) => (

                <motion.div
                  key={specialty}
                  variants={fadeUp}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:bg-blue-50/40"
                >

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">

                    <HeartPulse size={20} />

                  </div>

                  <span className="text-sm font-bold text-slate-800">
                    {specialty}
                  </span>

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

            <Stethoscope
              size={42}
              className="mx-auto text-cyan-300"
            />

            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Learn from leading voices in cardiovascular medicine.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Join CardioCon Arunachal 2026 for scientific sessions,
              clinical discussions and opportunities to engage with
              experienced faculty.
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

export default Speakers;
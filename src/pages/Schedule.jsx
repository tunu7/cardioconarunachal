import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  CalendarDays,
  Clock3,
  MapPin,
  Download,
  UserRound,
  Coffee,
  Presentation,
  Users,
  HeartPulse,
  ArrowRight,
  Mic2,
  Utensils,
  Stethoscope,
  FileText,
  Info,
} from "lucide-react";

/* =========================================================
   SCHEDULE DATA
========================================================= */

const scheduleData = {
  day1: {
    day: "Day 01",
    date: "15 March 2026",
    theme: "Opening & Scientific Foundations",
    description:
      "Opening ceremony, keynote lectures and core scientific sessions.",

    sessions: [
      {
        time: "08:30 AM",
        endTime: "09:30 AM",
        title: "Registration & Welcome Tea",
        speaker: "",
        venue: "Registration Area",
        type: "Registration",
        icon: Coffee,
      },
      {
        time: "09:30 AM",
        endTime: "10:00 AM",
        title: "Opening Ceremony",
        speaker: "Organising Committee",
        venue: "Main Auditorium",
        type: "Ceremony",
        icon: Users,
      },
      {
        time: "10:00 AM",
        endTime: "11:00 AM",
        title: "Keynote Address",
        speaker: "Keynote Faculty",
        venue: "Main Auditorium",
        type: "Keynote",
        icon: Mic2,
      },
      {
        time: "11:00 AM",
        endTime: "11:30 AM",
        title: "Tea & Networking Break",
        speaker: "",
        venue: "Conference Lounge",
        type: "Break",
        icon: Coffee,
      },
      {
        time: "11:30 AM",
        endTime: "01:00 PM",
        title: "Scientific Session I",
        speaker: "Scientific Faculty",
        venue: "Main Auditorium",
        type: "Scientific",
        icon: Presentation,
      },
      {
        time: "01:00 PM",
        endTime: "02:00 PM",
        title: "Lunch Break",
        speaker: "",
        venue: "Dining Area",
        type: "Break",
        icon: Utensils,
      },
      {
        time: "02:00 PM",
        endTime: "03:30 PM",
        title: "Live Case Discussion",
        speaker: "Expert Faculty Panel",
        venue: "Main Auditorium",
        type: "Clinical",
        icon: Stethoscope,
      },
      {
        time: "03:45 PM",
        endTime: "05:00 PM",
        title: "Panel Discussion",
        speaker: "Invited Faculty",
        venue: "Main Auditorium",
        type: "Discussion",
        icon: Users,
      },
    ],
  },

  day2: {
    day: "Day 02",
    date: "16 March 2026",
    theme: "Clinical Practice & Innovation",
    description:
      "Advanced clinical discussions, specialist sessions and interactive learning.",

    sessions: [
      {
        time: "09:00 AM",
        endTime: "10:00 AM",
        title: "Plenary Scientific Session",
        speaker: "Invited Faculty",
        venue: "Main Auditorium",
        type: "Scientific",
        icon: Presentation,
      },
      {
        time: "10:00 AM",
        endTime: "11:00 AM",
        title: "Advances in Interventional Cardiology",
        speaker: "Interventional Cardiology Faculty",
        venue: "Main Auditorium",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "11:00 AM",
        endTime: "11:30 AM",
        title: "Tea & Networking Break",
        speaker: "",
        venue: "Conference Lounge",
        type: "Break",
        icon: Coffee,
      },
      {
        time: "11:30 AM",
        endTime: "01:00 PM",
        title: "Clinical Case Forum",
        speaker: "Expert Panel",
        venue: "Main Auditorium",
        type: "Clinical",
        icon: Stethoscope,
      },
      {
        time: "01:00 PM",
        endTime: "02:00 PM",
        title: "Lunch Break",
        speaker: "",
        venue: "Dining Area",
        type: "Break",
        icon: Utensils,
      },
      {
        time: "02:00 PM",
        endTime: "03:30 PM",
        title: "Electrophysiology & Rhythm Disorders",
        speaker: "Electrophysiology Faculty",
        venue: "Main Auditorium",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "03:45 PM",
        endTime: "05:00 PM",
        title: "Interactive Workshop",
        speaker: "Workshop Faculty",
        venue: "Workshop Hall",
        type: "Workshop",
        icon: UserRound,
      },
    ],
  },

  day3: {
    day: "Day 03",
    date: "17 March 2026",
    theme: "Research, Future & Collaboration",
    description:
      "Research presentations, future-focused sessions and conference conclusions.",

    sessions: [
      {
        time: "09:00 AM",
        endTime: "10:00 AM",
        title: "Young Investigator Session",
        speaker: "Selected Presenters",
        venue: "Main Auditorium",
        type: "Research",
        icon: UserRound,
      },
      {
        time: "10:00 AM",
        endTime: "11:00 AM",
        title: "Future of Cardiovascular Medicine",
        speaker: "Invited Faculty",
        venue: "Main Auditorium",
        type: "Keynote",
        icon: Mic2,
      },
      {
        time: "11:00 AM",
        endTime: "11:30 AM",
        title: "Tea & Networking Break",
        speaker: "",
        venue: "Conference Lounge",
        type: "Break",
        icon: Coffee,
      },
      {
        time: "11:30 AM",
        endTime: "01:00 PM",
        title: "Research & Abstract Presentations",
        speaker: "Researchers & Delegates",
        venue: "Scientific Hall",
        type: "Research",
        icon: FileText,
      },
      {
        time: "01:00 PM",
        endTime: "02:00 PM",
        title: "Lunch Break",
        speaker: "",
        venue: "Dining Area",
        type: "Break",
        icon: Utensils,
      },
      {
        time: "02:00 PM",
        endTime: "03:30 PM",
        title: "Multidisciplinary Panel Discussion",
        speaker: "National Faculty Panel",
        venue: "Main Auditorium",
        type: "Discussion",
        icon: Users,
      },
      {
        time: "03:30 PM",
        endTime: "04:30 PM",
        title: "Awards & Closing Ceremony",
        speaker: "Organising Committee",
        venue: "Main Auditorium",
        type: "Ceremony",
        icon: Users,
      },
    ],
  },
};

/* =========================================================
   BADGE STYLES
========================================================= */

const badgeColors = {
  Registration: "bg-blue-50 text-blue-700 border-blue-100",
  Ceremony: "bg-violet-50 text-violet-700 border-violet-100",
  Keynote: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Scientific: "bg-cyan-50 text-cyan-700 border-cyan-100",
  Clinical: "bg-rose-50 text-rose-700 border-rose-100",
  Workshop: "bg-orange-50 text-orange-700 border-orange-100",
  Discussion: "bg-indigo-50 text-indigo-700 border-indigo-100",
  Research: "bg-purple-50 text-purple-700 border-purple-100",
  Break: "bg-slate-100 text-slate-600 border-slate-200",
};

/* =========================================================
   COMPONENT
========================================================= */

function Schedule() {
  const [activeDay, setActiveDay] = useState("day1");

  const selectedDay = scheduleData[activeDay];

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
                <CalendarDays size={17} />
                Scientific Program
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-7 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              >
                Conference
                <span className="ml-3 text-cyan-300 sm:ml-4">
                  Schedule.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-2xl text-lg leading-8 text-slate-300"
              >
                Three days of keynote lectures, scientific sessions,
                clinical discussions, research presentations and interactive
                learning at CardioCon Arunachal 2026.
              </motion.p>

              {/* Hero details */}

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
            PROGRAM OVERVIEW
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
                  value: "3 Days",
                  label: "Scientific Program",
                },
                {
                  icon: Presentation,
                  value: "40+ Sessions",
                  label: "Scientific & Clinical Discussions",
                },
                {
                  icon: Users,
                  value: "40+ Faculty",
                  label: "Experts & Scientific Contributors",
                },
              ].map(({ icon: Icon, value, label }) => (
                <motion.div
                  variants={fadeUp}
                  key={value}
                  className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {value}
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
            PROGRAM
        ====================================================== */}

        <section className="bg-slate-50 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            {/* Section heading */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                Scientific Agenda
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                Explore the Program
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Select a conference day to explore the scheduled sessions
                and activities.
              </p>
            </motion.div>

            {/* =================================================
                DAY SELECTOR
            ================================================== */}

            <div className="mt-12 flex justify-center">
              <div className="grid w-full max-w-3xl grid-cols-3 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">

                {Object.entries(scheduleData).map(([key, day]) => {
                  const active = activeDay === key;

                  return (
                    <button
                      key={key}
                      onClick={() => setActiveDay(key)}
                      className={`relative rounded-xl px-3 py-4 text-center transition sm:px-6 ${
                        active
                          ? "text-white"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      {active && (
                        <motion.div
                          layoutId="activeScheduleDay"
                          className="absolute inset-0 rounded-xl bg-blue-700 shadow-md"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}

                      <div className="relative z-10">
                        <p className="text-sm font-bold sm:text-base">
                          {day.day}
                        </p>

                        <p
                          className={`mt-1 hidden text-xs sm:block ${
                            active
                              ? "text-blue-100"
                              : "text-slate-400"
                          }`}
                        >
                          {day.date}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                DAY HEADER
            ================================================== */}

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeDay}-header`}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="mt-10 rounded-3xl bg-[#071a2d] p-7 text-white sm:p-9"
              >
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

                  <div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300">
                      <CalendarDays size={17} />
                      {selectedDay.date}
                    </div>

                    <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                      {selectedDay.theme}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                      {selectedDay.description}
                    </p>
                  </div>

                  <div className="shrink-0 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center">
                    <p className="text-3xl font-bold text-cyan-300">
                      {selectedDay.sessions.length}
                    </p>

                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                      Sessions
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* =================================================
                TIMELINE
            ================================================== */}

            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                variants={stagger}
                initial="hidden"
                animate="visible"
                exit={{
                  opacity: 0,
                  y: 10,
                }}
                className="mt-10"
              >
                {selectedDay.sessions.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      variants={fadeUp}
                      key={`${item.time}-${item.title}`}
                      className="relative flex gap-4 pb-7 sm:gap-6"
                    >
                      {/* Timeline column */}

                      <div className="flex shrink-0 flex-col items-center">

                        <motion.div
                          whileHover={{ scale: 1.08 }}
                          className="z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-900/15 sm:h-14 sm:w-14"
                        >
                          <Icon size={22} />
                        </motion.div>

                        {index !==
                          selectedDay.sessions.length - 1 && (
                          <div className="mt-2 w-px flex-1 bg-linear-to-b from-blue-300 to-slate-200" />
                        )}
                      </div>

                      {/* Session card */}

                      <div className="min-w-0 flex-1 pb-2">
                        <motion.div
                          whileHover={{
                            y: -3,
                          }}
                          className="group rounded-2xl border border-slate-200 bg-white p-5 transition-shadow duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 sm:p-7"
                        >
                          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

                            <div className="min-w-0">

                              {/* Time */}

                              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">

                                <div className="flex items-center gap-2 text-sm font-bold text-blue-700">
                                  <Clock3 size={16} />

                                  {item.time}

                                  <span className="font-normal text-slate-400">
                                    – {item.endTime}
                                  </span>
                                </div>

                                {/* Badge mobile */}

                                <span
                                  className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-bold sm:hidden ${
                                    badgeColors[item.type]
                                  }`}
                                >
                                  {item.type}
                                </span>
                              </div>

                              {/* Title */}

                              <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-700 sm:text-2xl">
                                {item.title}
                              </h3>

                              {/* Speaker */}

                              {item.speaker && (
                                <div className="mt-4 flex items-start gap-2.5">

                                  <UserRound
                                    size={17}
                                    className="mt-0.5 shrink-0 text-slate-400"
                                  />

                                  <p className="text-sm font-medium text-slate-600">
                                    {item.speaker}
                                  </p>
                                </div>
                              )}

                              {/* Venue */}

                              <div className="mt-2.5 flex items-start gap-2.5">

                                <MapPin
                                  size={16}
                                  className="mt-0.5 shrink-0 text-slate-400"
                                />

                                <p className="text-sm text-slate-500">
                                  {item.venue}
                                </p>
                              </div>
                            </div>

                            {/* Desktop badge */}

                            <span
                              className={`hidden shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-bold sm:inline-flex ${
                                badgeColors[item.type]
                              }`}
                            >
                              {item.type}
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* =================================================
                PROGRAM NOTICE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="mt-6 flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Info size={19} />
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Program Information
                </h4>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Session timings, faculty and venues may be updated as
                  the final scientific program is confirmed. Please refer
                  to the latest published schedule before the conference.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            DOWNLOAD PROGRAM
        ====================================================== */}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">

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
              className="relative overflow-hidden rounded-4xl bg-[#071a2d] px-6 py-12 text-center text-white shadow-2xl sm:px-12 lg:py-16"
            >
              {/* Background */}

              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10" />

              <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-500/10" />

              <div className="relative">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
                  <FileText size={27} />
                </div>

                <h2 className="mt-7 text-3xl font-bold tracking-tight sm:text-4xl">
                  Complete Scientific Program
                </h2>

                <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
                  Download the complete CardioCon Arunachal 2026 program
                  including scientific sessions, faculty information,
                  timings and venue details.
                </p>

                <button className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-blue-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <Download size={18} />

                  Download Program

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            REGISTRATION CTA
        ====================================================== */}

        <section className="relative overflow-hidden bg-blue-800 py-20 text-white">

          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />

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
            <HeartPulse
              size={42}
              className="mx-auto text-cyan-300"
            />

            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Ready to join CardioCon Arunachal?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Register for three days of scientific learning, clinical
              discussion and professional collaboration.
            </p>

            <Link
              to="/registration"
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Register Now

              <ArrowRight
                size={18}
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

export default Schedule;
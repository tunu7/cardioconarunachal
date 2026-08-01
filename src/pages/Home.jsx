import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Users,
  ArrowRight,
  HeartPulse,
  Stethoscope,
  Microscope,
  Presentation,
  Award,
  Plane,
  Mountain,
  Clock3,
  CheckCircle2,
  Sparkles,
  Quote,
} from "lucide-react";

function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const highlights = [
    {
      icon: Presentation,
      title: "Keynote Sessions",
      text: "Insights from leading cardiologists and healthcare experts.",
    },
    {
      icon: HeartPulse,
      title: "Live Case Discussions",
      text: "Interactive clinical discussions built around real-world cases.",
    },
    {
      icon: Microscope,
      title: "Research Presentations",
      text: "Discover emerging research and innovations in cardiovascular care.",
    },
    {
      icon: Stethoscope,
      title: "Hands-on Workshops",
      text: "Practical learning sessions designed for clinical application.",
    },
  ];

  const program = [
    {
      day: "Day 01",
      date: "15 March",
      title: "Foundations & Innovations",
      description:
        "Inauguration, keynote addresses, preventive cardiology and emerging innovations.",
    },
    {
      day: "Day 02",
      date: "16 March",
      title: "Clinical Excellence",
      description:
        "Complex case discussions, interventions, workshops and research presentations.",
    },
    {
      day: "Day 03",
      date: "17 March",
      title: "Future of Cardiology",
      description:
        "Future technologies, young investigator sessions, awards and closing ceremony.",
    },
  ];

  const stats = [
    ["500+", "Delegates"],
    ["40+", "Expert Speakers"],
    ["25+", "Scientific Sessions"],
    ["3", "Days of Learning"],
  ];

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white pt-20">

        {/* ======================================================
            HERO
        ====================================================== */}
        <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#071a2d] text-white">

          {/* Decorative background */}
          <div className="absolute inset-0">
            <div className="absolute -right-40 -top-40 h-150 w-150 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -left-40 top-1/3 h-125 w-125 rounded-full bg-orange-400/10 blur-3xl" />

            {/* Arunachal inspired sun */}
            <div className="absolute right-[8%] top-[14%] h-48 w-48 rounded-full bg-orange-400/15 blur-sm sm:h-64 sm:w-64" />

            {/* Himalayan layers */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[45%] opacity-60"
              style={{
                clipPath:
                  "polygon(0 75%, 12% 48%, 21% 68%, 34% 25%, 45% 67%, 57% 42%, 68% 70%, 80% 28%, 91% 61%, 100% 43%, 100% 100%, 0 100%)",
                background:
                  "linear-gradient(to bottom, rgba(15,118,110,.35), rgba(3,19,33,.95))",
              }}
            />

            <div
              className="absolute bottom-0 left-0 right-0 h-[30%]"
              style={{
                clipPath:
                  "polygon(0 60%, 14% 30%, 28% 67%, 43% 24%, 55% 61%, 70% 34%, 84% 68%, 100% 25%, 100% 100%, 0 100%)",
                background: "#061522",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur-md"
              >
                <HeartPulse size={17} className="text-cyan-300" />
                Annual Cardiovascular Conference · Arunachal Pradesh
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-7 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl"
              >
                Advancing Hearts.
                <span className="mt-2 block bg-linear-to-r from-cyan-300 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
                  Inspiring Care.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:text-xl"
              >
                CardioCon Arunachal 2026 brings clinicians, researchers,
                healthcare professionals and future medical leaders together
                in the heart of Northeast India.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-200"
              >
                <span className="flex items-center gap-2">
                  <CalendarDays size={18} className="text-cyan-300" />
                  15–17 March 2026
                </span>

                <span className="flex items-center gap-2">
                  <MapPin size={18} className="text-orange-300" />
                  Itanagar, Arunachal Pradesh
                </span>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <button className="group flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-950/30 transition hover:-translate-y-0.5 hover:bg-cyan-400">
                  Register Now
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <button className="rounded-xl border border-white/25 bg-white/5 px-8 py-4 font-semibold backdrop-blur-sm transition hover:bg-white hover:text-slate-900">
                  Explore Program
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Arunachal inspired border */}
          <div className="absolute bottom-0 z-20 flex h-3 w-full overflow-hidden">
            {Array.from({ length: 30 }).map((_, index) => (
              <div
                key={index}
                className={`h-full flex-1 ${
                  index % 3 === 0
                    ? "bg-orange-400"
                    : index % 3 === 1
                    ? "bg-cyan-500"
                    : "bg-white"
                }`}
              />
            ))}
          </div>
        </section>

        {/* ======================================================
            QUICK INFO
        ====================================================== */}
        <section className="relative z-20 -mt-8 px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto grid max-w-7xl gap-4 rounded-3xl border border-slate-100 bg-white p-4 shadow-2xl shadow-slate-900/10 md:grid-cols-3"
          >
            {[
              {
                icon: CalendarDays,
                title: "Conference Date",
                text: "15–17 March 2026",
              },
              {
                icon: MapPin,
                title: "Conference Venue",
                text: "Itanagar, Arunachal Pradesh",
              },
              {
                icon: Users,
                title: "500+ Delegates",
                text: "Doctors, Researchers & Students",
              },
            ].map(({ icon: Icon, title, text }) => (
              <motion.div
                variants={fadeUp}
                key={title}
                className="flex items-center gap-5 rounded-2xl p-5 transition hover:bg-slate-50 sm:p-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon size={27} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ======================================================
            ABOUT
        ====================================================== */}
        <section className="py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative min-h-125 overflow-hidden rounded-4xl bg-linear-to-br from-blue-950 via-blue-800 to-teal-700 p-10 text-white shadow-2xl">

                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/15" />

                <div className="relative flex h-full min-h-105 flex-col justify-between">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 backdrop-blur">
                    <HeartPulse size={42} className="text-cyan-300" />
                  </div>

                  <div>
                    <Mountain
                      size={70}
                      strokeWidth={1}
                      className="mb-5 text-white/50"
                    />

                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
                      Medicine meets the mountains
                    </p>

                    <h3 className="mt-4 max-w-md text-3xl font-bold leading-tight sm:text-4xl">
                      World-class cardiovascular learning in Arunachal Pradesh.
                    </h3>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-7 -right-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:right-8">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-orange-50 p-3 text-orange-500">
                    <Sparkles size={25} />
                  </div>

                  <div>
                    <p className="text-xl font-bold text-slate-900">
                      Arunachal 2026
                    </p>
                    <p className="text-sm text-slate-500">
                      Knowledge · Community · Care
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                About CardioCon
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                Advancing Cardiovascular
                <span className="text-blue-700"> Care Together.</span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-600">
                CardioCon Arunachal is a premier academic gathering dedicated
                to cardiovascular medicine, connecting clinical expertise,
                scientific research and healthcare innovation.
              </p>

              <p className="mt-4 leading-7 text-slate-500">
                Hosted in Arunachal Pradesh, the conference creates a platform
                for specialists, physicians, researchers and students to
                exchange knowledge while strengthening cardiovascular care
                across the region.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Evidence-based scientific discussions",
                  "Collaboration between specialists and young doctors",
                  "Focus on cardiovascular care in the Northeast",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={21}
                      className="mt-0.5 shrink-0 text-teal-600"
                    />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <button className="group mt-9 flex items-center gap-2 font-semibold text-blue-700">
                Discover CardioCon
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </motion.div>
          </div>
        </section>

        {/* ======================================================
            STATS
        ====================================================== */}
        <section className="border-y border-slate-100 bg-slate-50">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
            {stats.map(([number, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-slate-200 px-4 py-5 text-center lg:not-last:border-r"
              >
                <p className="text-4xl font-bold text-blue-800 lg:text-5xl">
                  {number}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ======================================================
            HIGHLIGHTS
        ====================================================== */}
        <section className="py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                Scientific Experience
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                Conference Highlights
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Three days of scientific exchange, practical learning and
                meaningful conversations shaping the future of cardiovascular
                medicine.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {highlights.map(({ icon: Icon, title, text }) => (
                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  key={title}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-2xl hover:shadow-slate-200/70"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {text}
                  </p>

                  <ArrowRight
                    size={19}
                    className="mt-6 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-700"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ======================================================
            PROGRAM PREVIEW
        ====================================================== */}
        <section className="bg-[#071a2d] py-28 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-2xl"
              >
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                  Scientific Program
                </span>

                <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                  Three Days of Discovery
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  A carefully curated program combining science, clinical
                  expertise, research and practical learning.
                </p>
              </motion.div>

              <button className="flex w-fit items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white hover:text-slate-900">
                View Full Program
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {program.map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:bg-white/10"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-cyan-300">
                      {item.day}
                    </span>

                    <span className="flex items-center gap-2 text-sm text-slate-400">
                      <CalendarDays size={15} />
                      {item.date}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            WHO SHOULD ATTEND
        ====================================================== */}
        <section className="py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                  Who Should Attend
                </span>

                <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                  Built for the cardiovascular community.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Whether you're an experienced specialist or beginning your
                  medical journey, CardioCon creates opportunities to learn,
                  connect and contribute.
                </p>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Cardiologists", HeartPulse],
                  ["Physicians", Stethoscope],
                  ["Researchers", Microscope],
                  ["Medical Students", Award],
                ].map(([title, Icon], index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-5 rounded-2xl border border-slate-200 p-6 transition hover:border-blue-200 hover:bg-blue-50/40"
                  >
                    <div className="rounded-xl bg-slate-100 p-3 text-blue-700">
                      <Icon size={25} />
                    </div>

                    <span className="font-bold text-slate-800">{title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            ARUNACHAL EXPERIENCE
        ====================================================== */}
        <section className="bg-emerald-950 py-28 text-white">
          <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
                Experience Arunachal
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
                Where science meets the
                <span className="text-orange-300"> land of dawn-lit mountains.</span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-emerald-100/75">
                Beyond the scientific program, experience the warmth,
                landscapes and cultural richness of Arunachal Pradesh — one
                of India's most remarkable Himalayan destinations.
              </p>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/7 p-5">
                  <Mountain className="text-orange-300" />
                  <h3 className="mt-4 font-bold">Himalayan Landscape</h3>
                  <p className="mt-2 text-sm text-emerald-100/60">
                    Discover the spectacular Eastern Himalayas.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/7 p-5">
                  <Plane className="text-orange-300" />
                  <h3 className="mt-4 font-bold">Travel Assistance</h3>
                  <p className="mt-2 text-sm text-emerald-100/60">
                    Helpful information for delegates visiting Arunachal.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Arunachal visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative min-h-115 overflow-hidden rounded-4xl bg-linear-to-br from-orange-300 via-orange-400 to-emerald-800 shadow-2xl"
            >
              <div className="absolute left-1/2 top-14 h-32 w-32 -translate-x-1/2 rounded-full bg-yellow-200/80 shadow-[0_0_80px_rgba(253,224,71,.5)]" />

              <div
                className="absolute bottom-0 h-[72%] w-full bg-emerald-800"
                style={{
                  clipPath:
                    "polygon(0 66%, 14% 42%, 25% 57%, 39% 20%, 52% 58%, 65% 34%, 78% 60%, 91% 28%, 100% 45%, 100% 100%, 0 100%)",
                }}
              />

              <div
                className="absolute bottom-0 h-[48%] w-full bg-emerald-950"
                style={{
                  clipPath:
                    "polygon(0 53%, 17% 22%, 34% 63%, 48% 31%, 63% 67%, 81% 20%, 100% 55%, 100% 100%, 0 100%)",
                }}
              />

              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-200">
                  Arunachal Pradesh
                </p>
                <p className="mt-2 text-3xl font-bold">
                  The Land of Dawn-Lit Mountains
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ======================================================
            TESTIMONIAL / MESSAGE
        ====================================================== */}
        <section className="bg-slate-50 py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl px-4 text-center sm:px-6"
          >
            <Quote
              size={48}
              className="mx-auto text-blue-200"
              fill="currentColor"
            />

            <h2 className="mt-8 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              “Building stronger cardiovascular care begins with sharing
              knowledge, experience and ideas.”
            </h2>

            <div className="mx-auto mt-8 h-px w-14 bg-blue-700" />

            <p className="mt-5 font-bold text-slate-800">
              CardioCon Arunachal 2026
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Scientific Organising Committee
            </p>
          </motion.div>
        </section>

        {/* ======================================================
            FINAL CTA
        ====================================================== */}
        <section className="relative overflow-hidden bg-blue-800 py-24 text-white">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-orange-300/10 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-4xl px-4 text-center sm:px-6"
          >
            <HeartPulse size={45} className="mx-auto text-cyan-300" />

            <h2 className="mt-7 text-4xl font-bold tracking-tight sm:text-5xl">
              Join us in Arunachal Pradesh.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Be part of three inspiring days of science, collaboration and
              cardiovascular learning at CardioCon Arunachal 2026.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="group flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-800 transition hover:-translate-y-1 hover:shadow-xl">
                Register for CardioCon
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <button className="flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white/10">
                <Clock3 size={18} />
                View Schedule
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
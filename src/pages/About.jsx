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
  CalendarDays,
  MapPin,
  Landmark,
  Building2,
  UserRound,
  Sparkles,
  TrendingUp,
  Handshake,
  Mail,
} from "lucide-react";

function About() {
  /* =========================================================
     ANIMATIONS
  ========================================================= */

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 28,
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

  /* =========================================================
     DATA
  ========================================================= */

  const objectives = [
    {
      icon: BookOpen,
      title: "Scientific Exchange",
      description:
        "Create a strong academic platform for sharing evidence, clinical experience and contemporary cardiovascular knowledge.",
    },
    {
      icon: Microscope,
      title: "Research",
      description:
        "Encourage clinical research addressing regional disease patterns, healthcare challenges and cardiovascular outcomes.",
    },
    {
      icon: GraduationCap,
      title: "Medical Education",
      description:
        "Inspire young doctors, postgraduate students and healthcare professionals through high-quality academic engagement.",
    },
    {
      icon: Network,
      title: "Collaboration",
      description:
        "Build meaningful connections between clinicians, researchers and leading institutions across India and beyond.",
    },
  ];

  const growthAreas = [
    {
      icon: HeartPulse,
      title: "Patient Care",
      text: "Expanding access to specialist cardiovascular services.",
    },
    {
      icon: Activity,
      title: "Interventional Cardiology",
      text: "Growing capabilities in advanced cardiac procedures.",
    },
    {
      icon: ShieldCheck,
      title: "Critical Care",
      text: "Strengthening cardiovascular and emergency care systems.",
    },
    {
      icon: GraduationCap,
      title: "Specialist Training",
      text: "Developing academic and clinical capacity for the future.",
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
      title: "Researchers & Academicians",
    },
    {
      icon: GraduationCap,
      title: "Postgraduate Students",
    },
  ];

  const committeeGroups = [
    {
      title: "Conference Leadership",
      members: [
        ["Dr. Naba Kumar Bezbaruah", "Patron in Chief"],
        ["Dr. Animesh Mishra", "Patron"],
        ["Dr. Rinchin Dorjee Megeji", "Organising Chairperson"],
        ["Dr. Tony Ete", "General Secretary "],
        ["Dr. Romar Dabu", "Convenor"],
        ["Dr. Amit Malviya", "Scientific Chairperson"],
      ],
    },
    {
      title: "CSI-NE Chapter — Executive Committee",
      members: [
        ["Dr. D.J. Dutta", "President"], ["Dr. P.J. Bhattarcharyya", "President Elect"], ["Dr. Chinmoy Mazumdar", "Vice-President"],
        ["Dr. Rituparna Baruah", "Hon Secretary"], ["Dr. Manowar Hussain", "Jt. Secretary"], ["Dr. Alok Jyoti Malakar", "Jt. Secretary"],
        ["Dr. Mridul Mahanta", "Treasurer"], ["Prof (Dr.) Barnali Dutta", "Executive Committee"], ["Prof (Dr.) M.S. Chaliha", "Executive Committee"],
        ["Dr. Aditya Bhaskar", "Executive Committee"], ["Dr. Mayank Agarwal", "Executive Committee"], ["Dr. Diptirekha Baruah", "Executive Committee"],
      ],
    },
    { title: "Advisors", members: [["Dr. H.C. Kalita", "Advisor"], ["Dr. Dipak Sarma", "Advisor"], ["Dr. Neil Bardoloi", "Advisor"], ["Dr. N. K. Bhattacharjee", "Advisor"], ["Dr. Banajit Chowdhury", "Advisor"]] },
    { title: "Scientific Core Committee", members: [["Dr. Farhin Iqbal", "Member"], ["Dr. Chandra Das", "Member"], ["Dr. Rondeep Sivam", "Member"], ["Dr. Synrang Warjri", "Member"]] },
    { title: "Souvenir Committee", members: [["Dr. Minjum Pakam", "Member"], ["Dr. Aido Moyong", "Member"], ["Dr. Duyu Nobin", "Member"], ["Dr. Rinchin Khandu", "Member"], ["Ms. Michi Nunya", "Member"], ["Ms. Taba Khamya", "Member"]] },
    { title: "Audiovisual Committee", members: [["Dr. Swapan Saha", "Member"], ["Dr. Dhanjit Nath", "Member"], ["Dr. Utpal Sharma", "Member"], ["Ms. Michi Nunya", "Member"]] },
    { title: "Travel Committee", members: [["Mr. Liter Ete", "Member"], ["Mr. Lukpe Sora", "Member"], ["Ms. Jumpi Kamduk", "Member"], ["Mr. Geba Ete", "Member"], ["Mr. Sonam Tashi", "Member"]] },
    { title: "Hospitality Committee", members: [["Dr. Damde Sindu", "Member"], ["Dr. Neelam Konia", "Member"], ["Dr. Rimman Basar", "Member"], ["Ms. Kenrik Karbak", "Member"], ["Mr. Mitu Dadi", "Member"]] },
    { title: "Cultural Committee", members: [["Dr. Doorick Ete", "Member"], ["Dr. Lokam Sinam", "Member"], ["Dr. Lishi Yam", "Member"], ["Dr. Tumni Gadi", "Member"], ["Ms. Kenrik Karbak", "Member"]] },
    { title: "Spokesperson", members: [["Dr. Tabang Nyitan", "Spokesperson"]] },
    { title: "Organising Committee", members: [["Dr. Taso Beyong", "Member"], ["Dr. Duyu Nobin", "Member"], ["Dr. Tashok Sorang", "Member"], ["Dr. Karto Ete", "Member"], ["Dr. Tagru Raju", "Member"]] },
    { title: "Security Committee", members: [["Dr. Libe Nyorak", "Member"], ["Dr. Sorang Tashok", "Member"], ["Mr. Vivek", "Member"]] },
  ];

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

            <div className="absolute -bottom-60 -left-40 h-125 w-125 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="absolute right-[10%] top-[10%] h-40 w-40 rounded-full bg-orange-400/10 blur-xl sm:h-56 sm:w-56" />

            {/* Subtle dot pattern */}
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
              className="absolute bottom-0 left-0 w-full opacity-[0.05]"
              viewBox="0 0 1440 200"
              fill="none"
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

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="max-w-5xl"
            >

              {/* Label */}

              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-cyan-200 backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.2em]"
              >
                <HeartPulse
                  size={15}
                  className="shrink-0"
                />

                CSI Northeast Annual Conference 2026
              </motion.div>

              {/* Historic */}

              <motion.div
                variants={fadeUp}
                className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-orange-300 sm:text-sm"
              >
                <Sparkles size={16} />

                A Historic First for Arunachal Pradesh
              </motion.div>

              {/* Heading */}

              <motion.h1
                variants={fadeUp}
                className="mt-5 max-w-5xl text-4xl font-black leading-[1.03] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-7xl"
              >
                A Landmark Chapter in
                <span className="mt-1 block text-cyan-300">
                  Cardiovascular Medicine.
                </span>
              </motion.h1>

              {/* Description */}

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg"
              >
                CardioCon Arunachal 2026 marks the first-ever hosting of the
                prestigious CSI Northeast Annual Conference in Arunachal
                Pradesh — bringing together the cardiovascular community for
                scientific exchange, education, research and collaboration.
              </motion.p>

              {/* Meta */}

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
              >

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">

                  <CalendarDays
                    size={18}
                    className="shrink-0 text-cyan-300"
                  />

                  <span className="text-sm font-semibold text-slate-200">
                    23–25 October 2026
                  </span>

                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">

                  <MapPin
                    size={18}
                    className="shrink-0 text-orange-300"
                  />

                  <span className="text-sm font-semibold text-slate-200">
                    Itanagar, Arunachal Pradesh
                  </span>

                </div>

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
            CONFERENCE INTRODUCTION
        ====================================================== */}

        <section className="py-20 sm:py-24 lg:py-32">

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8">

            {/* LEFT */}

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
              transition={{ duration: 0.7 }}
            >

              <SectionLabel>
                About the Conference
              </SectionLabel>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Welcome to
                <span className="block text-blue-700">
                  CardioCon Arunachal 2026.
                </span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-600">
                On behalf of the organising committee, we take immense pride
                and honour in welcoming delegates, eminent cardiologists,
                physicians, academicians, researchers and healthcare
                professionals to the Annual Conference of the Cardiology
                Society of India, Northeast Chapter 2026.
              </p>

              <p className="mt-5 leading-8 text-slate-500">
                The conference will be held from 23rd to 25th October 2026 in
                Arunachal Pradesh and will provide a platform for scientific
                deliberations, academic sessions, professional interactions
                and the exchange of recent advances in cardiovascular medicine.
              </p>

              <div className="mt-8 border-l-4 border-cyan-500 bg-slate-50 px-5 py-5 sm:px-6">

                <p className="font-semibold leading-7 text-slate-700">
                  For the first time ever, the CSI Northeast Annual Conference
                  will be hosted in Arunachal Pradesh.
                </p>

              </div>

            </motion.div>

            {/* RIGHT VISUAL */}

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
              transition={{ duration: 0.7 }}
              className="relative"
            >

              <div className="relative min-h-105 overflow-hidden rounded-4xl bg-[#071a2d] p-7 text-white shadow-2xl sm:min-h-125 sm:p-10">

                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="absolute right-5 top-5 text-[7rem] font-black leading-none text-white/[0.035] sm:text-[10rem]">
                  01
                </div>

                <div className="relative flex min-h-90 flex-col justify-between sm:min-h-105">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
                    <Landmark size={27} />
                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-300">
                      Historic First
                    </p>

                    <h3 className="mt-4 max-w-md text-3xl font-bold leading-tight sm:text-4xl">
                      CSI Northeast comes to Arunachal Pradesh.
                    </h3>

                    <p className="mt-5 max-w-md leading-7 text-slate-400">
                      A milestone reflecting Arunachal Pradesh's growing
                      contribution to modern healthcare and cardiovascular
                      sciences.
                    </p>

                    <div className="mt-7 h-1 w-14 rounded-full bg-cyan-400" />

                  </div>

                </div>

              </div>

              {/* Floating stat */}

              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 right-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:right-8 sm:p-5"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Users size={22} />
                  </div>

                  <div>
                    <p className="text-xl font-black text-slate-900">
                      ~300
                    </p>

                    <p className="text-xs text-slate-500">
                      Expected Delegates
                    </p>
                  </div>

                </div>

              </motion.div>

            </motion.div>

          </div>

        </section>

        {/* =====================================================
            AT A GLANCE
        ====================================================== */}

        <section className="border-y border-slate-200 bg-slate-50">

          <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">

            {[
              ["24th", "CardioCon Arunachal"],
              ["3", "Conference Days"],
              ["~300", "Expected Delegates"],
              ["1st", "CSI NER in Arunachal"],
            ].map(([number, label], index) => (

              <motion.div
                key={label}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.07,
                }}
                className="border-slate-200 px-2 py-6 text-center md:not-last:border-r sm:px-4"
              >

                <p className="text-3xl font-black tracking-tight text-blue-800 sm:text-4xl">
                  {number}
                </p>

                <p className="mt-2 text-xs font-semibold leading-5 text-slate-500 sm:text-sm">
                  {label}
                </p>

              </motion.div>

            ))}

          </div>

        </section>

        {/* =====================================================
            WHY THIS CONFERENCE MATTERS
        ====================================================== */}

        <section className="py-20 sm:py-24 lg:py-32">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >

                <SectionLabel>
                  Why It Matters
                </SectionLabel>

                <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  More than a
                  <span className="block text-blue-700">
                    scientific conference.
                  </span>
                </h2>

              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >

                <p className="text-lg leading-8 text-slate-600">
                  The hosting of CSI Northeast 2026 in Arunachal Pradesh is
                  expected to become an important milestone for the growth of
                  cardiology in the state.
                </p>

                <p className="mt-5 leading-8 text-slate-500">
                  It creates an opportunity to inspire young doctors,
                  postgraduate students and healthcare professionals to engage
                  more actively in academics, research and scientific
                  innovation while strengthening connections with leading
                  institutions and experts.
                </p>

                <div className="mt-8 grid gap-3">

                  {[
                    "Strengthen the academic ecosystem of cardiovascular medicine.",
                    "Encourage evidence-based practice and clinical research.",
                    "Create mentorship opportunities for young clinicians.",
                    "Promote collaboration with leading medical institutions.",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >

                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-emerald-600"
                      />

                      <p className="text-slate-700">
                        {item}
                      </p>

                    </div>

                  ))}

                </div>

              </motion.div>

            </div>

          </div>

        </section>

        {/* =====================================================
            CARDIOLOGY IN ARUNACHAL
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#071a2d] py-20 text-white sm:py-24 lg:py-32">

          <div className="pointer-events-none absolute -right-60 -top-60 h-150 w-150 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">

              {/* Content */}

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

                <span className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300 sm:text-sm">
                  Cardiovascular Care in Arunachal
                </span>

                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Growing capabilities.
                  <span className="block text-cyan-300">
                    Greater possibilities.
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                  In recent years, cardiology in Arunachal Pradesh has
                  witnessed gradual yet significant growth in infrastructure,
                  patient care services, interventional cardiology, critical
                  care facilities and specialist training.
                </p>

                <p className="mt-5 max-w-2xl leading-8 text-slate-400">
                  The next step is to strengthen academic activity, clinical
                  research, evidence-based practice and multidisciplinary
                  collaboration — areas where CardioCon can play an important
                  catalytic role.
                </p>

              </motion.div>

              {/* Cards */}

              <div className="grid gap-3 sm:grid-cols-2">

                {growthAreas.map(
                  ({
                    icon: Icon,
                    title,
                    text,
                  }, index) => (

                    <motion.div
                      key={title}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.07,
                      }}
                      className="rounded-2xl border border-white/10 bg-white/4.5 p-5 backdrop-blur transition hover:bg-white/[0.07] sm:p-6"
                    >

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
                        <Icon size={20} />
                      </div>

                      <h3 className="mt-5 font-bold">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {text}
                      </p>

                    </motion.div>

                  )
                )}

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            RESEARCH IMPORTANCE
        ====================================================== */}

        <section className="py-20 sm:py-24 lg:py-32">

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">

            {/* Visual */}

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
              className="relative order-2 lg:order-1"
            >

              <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-blue-700 to-cyan-700 p-7 text-white sm:p-10">

                <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10" />

                <Microscope
                  size={48}
                  className="relative text-cyan-200"
                />

                <p className="relative mt-12 text-xs font-bold uppercase tracking-[0.24em] text-cyan-100">
                  Regional Research
                </p>

                <h3 className="relative mt-4 max-w-lg text-3xl font-bold leading-tight sm:text-4xl">
                  Understanding local cardiovascular challenges through
                  scientific evidence.
                </h3>

                <div className="relative mt-9 grid grid-cols-2 gap-3">

                  <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                    <TrendingUp size={20} />

                    <p className="mt-3 text-sm font-semibold">
                      Disease Patterns
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                    <Target size={20} />

                    <p className="mt-3 text-sm font-semibold">
                      Better Outcomes
                    </p>
                  </div>

                </div>

              </div>

            </motion.div>

            {/* Content */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >

              <SectionLabel>
                Research & Evidence
              </SectionLabel>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Research matters even more
                <span className="block text-blue-700">
                  in a diverse region.
                </span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-600">
                Academic advancement and research are fundamental to modern
                cardiology. They help clinicians understand disease patterns,
                evaluate treatment strategies and continuously improve patient
                outcomes.
              </p>

              <p className="mt-5 leading-8 text-slate-500">
                For a geographically unique and diverse state such as Arunachal
                Pradesh, cardiovascular research has particular importance in
                understanding local healthcare challenges and helping bridge
                gaps in access to advanced cardiac care.
              </p>

            </motion.div>

          </div>

        </section>

        {/* =====================================================
            CONFERENCE OBJECTIVES
        ====================================================== */}

        <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl"
            >

              <SectionLabel>
                Conference Objectives
              </SectionLabel>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Creating impact beyond
                <span className="text-blue-700">
                  {" "}the conference.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                CardioCon Arunachal is designed to contribute to the long-term
                academic and clinical development of cardiovascular medicine
                across the region.
              </p>

            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >

              {objectives.map(
                ({
                  icon: Icon,
                  title,
                  description,
                }, index) => (

                  <motion.div
                    key={title}
                    variants={fadeUp}
                    whileHover={{ y: -5 }}
                    className="group flex min-h-70 flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-blue-100 hover:shadow-xl sm:p-7"
                  >

                    <div className="flex items-center justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                        <Icon size={23} />
                      </div>

                      <span className="text-xs font-black text-slate-200">
                        0{index + 1}
                      </span>

                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-900 sm:text-xl">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {description}
                    </p>

                  </motion.div>

                )
              )}

            </motion.div>

          </div>

        </section>

        {/* =====================================================
            ACADEMIC EXPERIENCE
        ====================================================== */}

        <section className="py-20 sm:py-24 lg:py-32">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >

                <SectionLabel>
                  Academic Experience
                </SectionLabel>

                <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Contemporary science.
                  <span className="block text-blue-700">
                    Distinguished faculty.
                  </span>
                </h2>

                <p className="mt-7 text-lg leading-8 text-slate-600">
                  The academic agenda is planned to be comprehensive,
                  contemporary and intellectually enriching, with participation
                  from senior cardiologists, academicians and researchers from
                  leading institutions.
                </p>

                <p className="mt-5 leading-8 text-slate-500">
                  Delegates will gain exposure to current evidence, emerging
                  technologies, clinical perspectives and opportunities for
                  meaningful scientific interaction and mentorship.
                </p>

              </motion.div>

              <div className="grid gap-3 sm:grid-cols-2">

                {[
                  {
                    icon: Award,
                    title: "Expert Faculty",
                    text: "Experienced clinicians and academicians from leading institutions.",
                  },
                  {
                    icon: BookOpen,
                    title: "Current Evidence",
                    text: "Contemporary cardiovascular science and evidence-based practice.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Emerging Technology",
                    text: "New approaches and developments shaping cardiovascular medicine.",
                  },
                  {
                    icon: Handshake,
                    title: "Mentorship",
                    text: "Opportunities for young clinicians to engage with experienced faculty.",
                  },
                ].map(({ icon: Icon, title, text }, index) => (

                  <motion.div
                    key={title}
                    initial={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.07,
                    }}
                    className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:bg-blue-50/30 sm:p-6"
                  >

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-5 font-bold text-slate-900">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {text}
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            COMMUNITY
        ====================================================== */}

        <section className="bg-[#071a2d] py-20 text-white sm:py-24">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >

                <span className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300 sm:text-sm">
                  Our Community
                </span>

                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  Bringing cardiovascular professionals together.
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                  Around 200 delegates are expected from Arunachal Pradesh,
                  the Northeast region and different parts of India.
                </p>

              </motion.div>

              <div className="grid gap-3 sm:grid-cols-2">

                {attendees.map(({ icon: Icon, title }, index) => (

                  <motion.div
                    key={title}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.07,
                    }}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/4.5 p-5"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
                      <Icon size={21} />
                    </div>

                    <span className="font-bold">
                      {title}
                    </span>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            LEADERSHIP
        ====================================================== */}

        <section className="py-20 sm:py-24 lg:py-32">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl"
            >

              <SectionLabel>
                Conference Leadership
              </SectionLabel>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Organising Committee
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                The leadership guiding CardioCon Arunachal 2026 and the
                historic hosting of CSI Northeast in Arunachal Pradesh.
              </p>

            </motion.div>

            <div className="mt-12 space-y-10">
              {committeeGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-5 text-xl font-bold text-slate-900 sm:text-2xl">
                    {group.title}
                  </h3>
                  <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  >
                    {group.members.map(([name, role]) => (
                      <motion.div
                        variants={fadeUp}
                        whileHover={{ y: -4 }}
                        key={`${group.title}-${name}-${role}`}
                        className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-blue-100 hover:shadow-xl"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                          <UserRound size={19} />
                        </div>
                        <h4 className="mt-4 font-bold leading-6 text-slate-900">{name}</h4>
                        <p className="mt-2 text-sm font-semibold leading-5 text-blue-700">{role}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>

          </div>

        </section>

        {/* =====================================================
            SECRETARIAT
        ====================================================== */}

        <section className="border-y border-slate-200 bg-slate-50 py-16">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

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
              className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"
            >

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
                  Conference Secretariat
                </p>

                <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Department of Cardiology, TRIHMS
                </h2>

                <div className="mt-5 flex max-w-2xl items-start gap-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">

                  <Building2
                    size={19}
                    className="mt-1 shrink-0 text-blue-700"
                  />

                  <p>
                    Tomo Riba Institute of Health and Medical Sciences
                    (TRIHMS), Naharlagun, Arunachal Pradesh – 791110
                  </p>

                </div>

                <a
                  href="mailto:cardioconarunachal@gmail.com"
                  className="mt-4 flex w-fit items-center gap-3 text-sm font-medium text-slate-600 transition hover:text-blue-700 sm:text-base"
                >

                  <Mail
                    size={18}
                    className="shrink-0 text-blue-700"
                  />

                  <span className="break-all">
                    cardioconarunachal@gmail.com
                  </span>

                </a>

              </div>

              <Link
                to="/contact"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 font-bold text-white transition hover:bg-blue-800 sm:w-fit"
              >
                Contact Secretariat

                <ArrowRight
                  size={17}
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

          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-orange-300/10 blur-3xl" />

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
              size={40}
              className="mx-auto text-cyan-300"
            />

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200 sm:text-sm">
              23–25 October 2026 · Arunachal Pradesh
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Be part of this historic gathering.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
              Join the cardiovascular community for three days of scientific
              learning, academic exchange and collaboration at CardioCon
              Arunachal 2026.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/registration"
                className="group flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-blue-800 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Register Now

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/schedule"
                className="flex items-center justify-center rounded-xl border border-white/25 px-7 py-3.5 font-semibold transition hover:bg-white/10"
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
   REUSABLE SECTION LABEL
========================================================= */

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-700 sm:text-sm">
      <span className="h-px w-7 bg-blue-700" />
      {children}
    </span>
  );
}

export default About;
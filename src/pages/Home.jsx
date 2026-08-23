
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  CalendarDays,
  MapPin,
  Users,
  ArrowRight,
  HeartPulse,
  Stethoscope,
  Microscope,
  Presentation,
  GraduationCap,
  Building2,
  Mail,
  Sparkles,
  BookOpen,
  Network,
  ChevronRight,
  ChevronLeft,
  Landmark,
  CheckCircle2,
} from "lucide-react";

/* =========================================================
   COMMITTEE IMAGES
========================================================= */

import rinchinMegeji from "../assets/rinchin-megeji.jpeg";
import tonyEte from "../assets/tony-ete.jpeg";
import romarDabu from "../assets/romar-davy.jpeg";
import amitMalviya from "../assets/amit-malviya.jpeg";
import animeshmishra from "../assets/animesh-mishra.jpeg";
import rituparnabaruah from "../assets/rituparna-baruah.jpeg";
import djdutta from "../assets/dj-dutta.jpeg";

/* =========================================================
   ARUNACHAL CAROUSEL IMAGES
========================================================= */
import aeyoLake from "../assets/arunachal/Aeyo-Lake.jpg";
import pomoValley from "../assets/arunachal/Pomo-Valley.jpg";
import goldenPagoda1 from "../assets/arunachal/Golden-Pagoda-1.jpg";
import goldenPagoda3 from "../assets/arunachal/Golden-Pagoda-3.jpg";
import maduraiLake from "../assets/arunachal/Madurai-Lake-Sangestar-Lake.jpg";
import selaLake from "../assets/arunachal/Sela-Lake.jpeg";
import selaPass from "../assets/arunachal/Sela-Pass.jpg";
import tawangMonastery from "../assets/arunachal/Tawang-Monastery.jpg";
import mandalaTopDirang from "../assets/arunachal/Mandala-Top-Dirang.jpg";
import ziro from "../assets/arunachal/ziro.JPG";
import ziro4 from "../assets/arunachal/Ziro-4.JPG";
import mechukha2 from "../assets/arunachal/Mechukha-2.JPG";
import mechukha4 from "../assets/arunachal/Mechukha-4.JPG";
import shergaon from "../assets/arunachal/Shergaon-View.JPG";
import zemithangGompa from "../assets/arunachal/Zemithang-Gompa.JPG";
import zemithangTawang from "../assets/arunachal/Zemithang-Tawang.JPG";

function Home() {
  /* =========================================================
     ANIMATIONS
  ========================================================= */

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
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

  const highlights = [
    {
      icon: Presentation,
      title: "Scientific Sessions",
      text: "Contemporary discussions on advances, evidence and evolving practices in cardiovascular medicine.",
    },
    {
      icon: HeartPulse,
      title: "Clinical Discussions",
      text: "Interactive conversations focused on clinical decision-making, complex cases and patient care.",
    },
    {
      icon: Microscope,
      title: "Research & Innovation",
      text: "Encouraging scientific research, emerging ideas and evidence relevant to cardiovascular medicine.",
    },
    {
      icon: Network,
      title: "Professional Collaboration",
      text: "Connecting cardiologists, physicians, academicians, researchers and the next generation of clinicians.",
    },
  ];

  const leadership = [
    {
      name: "Dr. Rinchin Megeji",
      role: "Organising Chairman",
      image: rinchinMegeji,
    },
    {
      name: "Dr. Tony Ete",
      role: "Organising Secretary cum Treasurer",
      image: tonyEte,
    },
    {
      name: "Dr. Romar Dabu",
      role: "Convenor",
      image: romarDabu,
    },
    {
      name: "Dr. Amit Malviya",
      role: "Scientific Chairman",
      image: amitMalviya,
    },
    {
      name: "Dr. D.J. Dutta",
      role: "President Elect",
      image: djdutta,
    },
    {
      name: "Dr. Animesh Mishra",
      role: "Scientific Chairman",
      image: animeshmishra,
    },
    {
      name: "Dr. Rituparna Baruah",
      role: "Secretary CSI",
      image: rituparnabaruah,
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

  /* =========================================================
     ARUNACHAL CAROUSEL
  ========================================================= */

  const arunachalSlides = [
  {
    image: ziro,
    title: "Ziro Valley",
    subtitle:
      "Ziro’s famous heritage system of rice farming and fish growing that made it to UNESCO World Heritage Site.",
  },
  {
    image: ziro4,
    title: "Ziro Valley",
    subtitle:
      "The iconic lush green rice fields of Ziro rustling beneath the dramatic skies.",
  },


  {
    image: mechukha2,
    title: "Mechukha",
    subtitle:
      "A remote Himalayan valley known for breathtaking mountains and open landscapes.",
  },
  {
    image: mechukha4,
    title: "Mechukha",
    subtitle:
      "A fast emerging adventure tourism destination in the global map.",
  },


  {
    image: shergaon,
    title: "Jigaon",
    subtitle:
      "A peaceful mountain village surrounded by forests, valleys and Himalayan scenery.",
  },

  {
    image: zemithangGompa,
    title: "Zemithang",
    subtitle:
      "Gorsam Chorten: A massive, 93-foot tall Buddhist stupa in Zemithang modelled after Nepal’s Boudhanath Stupa.",
  },
  {
    image: zemithangTawang,
    title: "Zemithang",
    subtitle:
      "A remote, untouched Himalayan region in Tawang, rich in natural beauty, culture and history.",
  },
  {
    image: aeyoLake,
    title: "Aeyo Lake",
    subtitle:
      "A pristine high altitude glacial lake situated at roughly 11000 feet in Dibang Valley district",
  },

  {
    image: pomoValley,
    title: "Pomo Valley",
    subtitle:
      "An emerging offbeat Himalayan trekking destination featuring dense rainforests, river crossings and high-altitude alpine meadows in Anini district.",
  },

   {
    image: mandalaTopDirang,
    title: "Mandala Top",
    subtitle:
      "Experience the dramatic high-altitude landscapes, nomadic settlements and grazing grounds tied to the Brokpa people, the semi-nomadic yak herders who inhabit the cold mountain regions of West Kameng district.",
  },

  {
    image: goldenPagoda1,
    title: "Golden Pagoda",
    subtitle:
      "A magnificent Buddhist landmark in Namsai, reflecting the rich cultural heritage of Arunachal Pradesh.",
  },

  {
    image: goldenPagoda3,
    title: "Golden Pagoda",
    subtitle:
      "Discover one of Arunachal Pradesh's most beautiful spiritual and architectural landmarks.",
  },

  {
    image: maduraiLake,
    title: "Sangestar Lake",
    subtitle:
      "A high-altitude glacial lake, nicknamed “Madhuri Lake’ after the Bollywood actress Madhuri Dixit.",
  },

  {
    image: selaLake,
    title: "Sela Lake",
    subtitle:
      "A spectacular high-altitude lake surrounded by the snow-covered mountains of Arunachal Pradesh.",
  },

  {
    image: selaPass,
    title: "Sela Pass",
    subtitle:
      "One of the most iconic high-altitude mountain passes connecting Tawang with the rest of Arunachal Pradesh.",
  },

  {
    image: tawangMonastery,
    title: "Tawang Monastery",
    subtitle:
      "India’s biggest monastery and second globally, it was famously the birthplace of the 6th Dalai Lama.",
  },
];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === arunachalSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [arunachalSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === arunachalSlides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? arunachalSlides.length - 1 : prev - 1
    );
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
            <div className="absolute -right-40 -top-40 h-100 w-100 rounded-full bg-cyan-400/10 blur-3xl sm:h-140 sm:w-140" />

            <div className="absolute -bottom-64 -left-40 h-125 w-125 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="absolute right-[5%] top-[10%] h-40 w-40 rounded-full bg-orange-400/10 blur-md sm:h-60 sm:w-60" />

            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            <div
              className="absolute bottom-0 left-0 right-0 h-[30%] opacity-70"
              style={{
                clipPath:
                  "polygon(0 76%, 11% 49%, 22% 68%, 34% 30%, 46% 68%, 58% 45%, 69% 72%, 81% 34%, 91% 62%, 100% 45%, 100% 100%, 0 100%)",
                background:
                  "linear-gradient(to bottom, rgba(13,148,136,.16), rgba(3,15,25,.9))",
              }}
            />

            <div
              className="absolute bottom-0 left-0 right-0 h-[18%] bg-[#04111d]"
              style={{
                clipPath:
                  "polygon(0 62%, 14% 29%, 28% 68%, 43% 27%, 56% 65%, 70% 36%, 84% 69%, 100% 28%, 100% 100%, 0 100%)",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid min-h-[calc(100svh-5rem)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="relative z-10"
              >
                <motion.div
                  variants={fadeUp}
                  className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-cyan-200 backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.18em]"
                >
                  <HeartPulse size={15} className="shrink-0 text-cyan-300" />

                  <span>CSI Northeast Annual Conference 2026</span>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-orange-300 sm:text-sm"
                >
                  <Sparkles size={16} />
                  A Historic First in Arunachal Pradesh
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="mt-5 max-w-4xl text-[3.25rem] font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.4rem]"
                >
                  CardioCon

                  <span className="block text-cyan-300">Arunachal</span>

                  <span className="block text-white">2026</span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
                >
                  The Annual Conference of the Cardiology Society of India,
                  Northeast Chapter — bringing the cardiovascular community
                  together for scientific exchange, academic collaboration and
                  clinical advancement.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2"
                >
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      <CalendarDays size={19} />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                        Conference Dates
                      </p>

                      <p className="mt-1 text-sm font-bold text-white sm:text-base">
                        23–25 October 2026
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-400/10 text-orange-300">
                      <MapPin size={19} />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                        Conference Venue
                      </p>

                      <p className="mt-1 text-sm font-bold leading-5 text-white">
                        Donyi Polo International Hotel
                      </p>

                      <p className="text-xs text-slate-400">
                        Itanagar, Arunachal Pradesh
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="mt-8 flex flex-col gap-3 sm:flex-row"
                >
                  <Link
                    to="/registration"
                    className="group flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-950/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 sm:text-base"
                  >
                    Register Now

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    to="/schedule"
                    className="group flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/4 px-7 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-white hover:text-slate-900 sm:text-base"
                  >
                    Scientific Program

                    <ChevronRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </motion.div>
              </motion.div>

              {/* RIGHT HERO */}

              <motion.div
                initial={{ opacity: 0, x: 35, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative min-h-135 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5.5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
                  <div className="absolute right-10 top-10 h-32 w-32 rounded-full bg-orange-300/80 shadow-[0_0_100px_rgba(251,146,60,.25)]" />

                  <div
                    className="absolute bottom-0 left-0 right-0 h-[65%] bg-teal-800/80"
                    style={{
                      clipPath:
                        "polygon(0 70%, 13% 47%, 24% 59%, 38% 21%, 52% 61%, 66% 35%, 79% 64%, 91% 31%, 100% 48%, 100% 100%, 0 100%)",
                    }}
                  />

                  <div
                    className="absolute bottom-0 left-0 right-0 h-[44%] bg-[#061827]"
                    style={{
                      clipPath:
                        "polygon(0 58%, 16% 25%, 31% 65%, 48% 30%, 63% 70%, 80% 21%, 100% 60%, 100% 100%, 0 100%)",
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                      <HeartPulse size={27} className="text-cyan-300" />
                    </div>

                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">
                      CSI Northeast 2026
                    </p>

                    <h2 className="mt-3 max-w-sm text-3xl font-bold leading-tight">
                      A landmark chapter for cardiovascular medicine in
                      Arunachal Pradesh.
                    </h2>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 z-10">
                    <div className="flex items-center justify-between border-t border-white/10 pt-6">
                      <div>
                        <p className="text-4xl font-black">~300</p>

                        <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                          Expected Delegates
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-4xl font-black">3</p>

                        <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                          Conference Days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-5 -left-7 rounded-2xl border border-white/10 bg-white p-4 text-slate-900 shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                      <Landmark size={21} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-slate-400">
                        First time hosted in
                      </p>

                      <p className="font-bold">Arunachal Pradesh.</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="relative z-20 flex h-1.5 w-full">
            <div className="flex-1 bg-orange-400" />
            <div className="flex-1 bg-cyan-500" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-cyan-500" />
            <div className="flex-1 bg-orange-400" />
          </div>
        </section>

        {/* =====================================================
            EVENT INFORMATION
        ====================================================== */}

        <section className="relative z-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid border-b border-slate-200 py-5 md:grid-cols-3 md:divide-x md:divide-slate-200 md:py-8"
            >
              {[
                {
                  icon: CalendarDays,
                  label: "Conference",
                  title: "23–25 October 2026",
                  text: "Three days of academic exchange",
                },
                {
                  icon: MapPin,
                  label: "Venue",
                  title: "Donyi Polo International Hotel",
                  text: "Itanagar, Arunachal Pradesh",
                },
                {
                  icon: Users,
                  label: "Community",
                  title: "Around 300 Delegates",
                  text: "From the Northeast and across India",
                },
              ].map(({ icon: Icon, label, title, text }) => (
                <motion.div
                  variants={fadeUp}
                  key={label}
                  className="flex items-start gap-4 border-b border-slate-100 px-1 py-5 last:border-0 md:border-0 md:px-7 md:py-0 first:md:pl-0 last:md:pr-0"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon size={21} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      {label}
                    </p>

                    <h3 className="mt-1.5 font-bold text-slate-900">{title}</h3>

                    <p className="mt-1 text-sm text-slate-500">{text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            HISTORIC FIRST
        ====================================================== */}

        <section className="py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <SectionLabel>A Historic Milestone</SectionLabel>

                <h2 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  CSI Northeast comes to
                  <span className="text-blue-700"> Arunachal Pradesh.</span>
                </h2>

                <p className="mt-7 text-lg leading-8 text-slate-600">
                  For the first time, the prestigious CSI Northeast Annual
                  Conference will be hosted in Arunachal Pradesh — marking an
                  important milestone for cardiovascular medicine and academic
                  healthcare in the state.
                </p>

                <p className="mt-5 leading-8 text-slate-500">
                  CardioCon Arunachal 2026 reflects the state's growing
                  contribution to modern healthcare while creating new
                  opportunities for academic exchange, research, training and
                  collaboration.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Strengthening cardiovascular academics across the region",
                    "Encouraging research and scientific innovation",
                    "Creating mentorship opportunities for young clinicians",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-emerald-600"
                      />

                      <p className="text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>

                <Link
                  to="/about"
                  className="group mt-9 inline-flex items-center gap-2 font-bold text-blue-700"
                >
                  About CardioCon

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="relative min-h-105 overflow-hidden rounded-4xl bg-[#071a2d] p-7 text-white shadow-2xl sm:min-h-125 sm:p-10">
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

                  <div className="absolute right-7 top-7 text-[7rem] font-black leading-none text-white/[0.035] sm:text-[10rem]">
                    01
                  </div>

                  <div className="relative flex min-h-90 flex-col justify-between sm:min-h-105">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
                      <Landmark size={27} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-300">
                        First in Arunachal Pradesh
                      </p>

                      <h3 className="mt-4 max-w-md text-3xl font-bold leading-tight sm:text-4xl">
                        A new chapter in the academic journey of cardiovascular
                        medicine in Northeast India.
                      </h3>

                      <div className="mt-7 h-1 w-14 rounded-full bg-cyan-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            AT A GLANCE
        ====================================================== */}

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <SectionLabel>Conference at a Glance</SectionLabel>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Three days.
                  <span className="block text-blue-700">
                    One scientific community.
                  </span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-4">
                {[
                  ["3", "Conference Days"],
                  ["~300", "Delegates"],
                  ["CSI NER", "Annual Conference"],
                  ["Itanagar", "Host City"],
                ].map(([number, label], index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07 }}
                    className="bg-white px-3 py-8 text-center sm:px-4"
                  >
                    <p className="text-2xl font-black tracking-tight text-blue-800 sm:text-3xl lg:text-4xl">
                      {number}
                    </p>

                    <p className="mt-2 text-xs font-semibold text-slate-500 sm:text-sm">
                      {label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SCIENTIFIC EXPERIENCE
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
              <SectionLabel>Scientific Experience</SectionLabel>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Advancing knowledge.
                <span className="block text-blue-700">
                  Improving cardiovascular care.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                A comprehensive academic environment designed around
                contemporary cardiovascular medicine, clinical practice,
                scientific research and professional collaboration.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
            >
              {highlights.map(({ icon: Icon, title, text }) => (
                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  key={title}
                  className="group flex min-h-70 flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-100 hover:shadow-xl sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-900 sm:text-xl">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {text}
                  </p>

                  <div className="mt-auto pt-6">
                    <ArrowRight
                      size={18}
                      className="text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-blue-700"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            CARDIOLOGY IN ARUNACHAL
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#071a2d] py-20 text-white sm:py-24 lg:py-32">
          <div className="pointer-events-none absolute -right-60 -top-60 h-150 w-150 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300 sm:text-sm">
                  Advancing Cardiology in Arunachal
                </span>

                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Building a stronger
                  <span className="block text-cyan-300">
                    cardiovascular ecosystem.
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                  Cardiovascular care in Arunachal Pradesh continues to grow
                  through expanding specialist services, infrastructure,
                  interventional cardiology and critical care.
                </p>

                <p className="mt-5 max-w-2xl leading-8 text-slate-400">
                  CardioCon creates an opportunity to strengthen academic
                  medicine, research, evidence-based practice and
                  multidisciplinary collaboration across the region.
                </p>
              </motion.div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    icon: HeartPulse,
                    title: "Cardiac Care",
                    text: "Strengthening specialist cardiovascular services.",
                  },
                  {
                    icon: Stethoscope,
                    title: "Clinical Excellence",
                    text: "Promoting evidence-based clinical practice.",
                  },
                  {
                    icon: GraduationCap,
                    title: "Academic Medicine",
                    text: "Encouraging mentorship, education and training.",
                  },
                  {
                    icon: Microscope,
                    title: "Clinical Research",
                    text: "Building evidence around regional health challenges.",
                  },
                ].map(({ icon: Icon, title, text }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07 }}
                    className="rounded-2xl border border-white/10 bg-white/4.5 p-5 backdrop-blur sm:p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-5 font-bold">{title}</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHO SHOULD ATTEND
        ====================================================== */}

        <section className="py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <SectionLabel>Who Should Attend</SectionLabel>

                <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Built for the
                  <span className="block text-blue-700">
                    cardiovascular community.
                  </span>
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  A platform for experienced specialists, academics,
                  researchers and young clinicians to learn, exchange ideas and
                  contribute to cardiovascular medicine.
                </p>
              </motion.div>

              <div className="grid gap-3 sm:grid-cols-2">
                {attendees.map(({ icon: Icon, title }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07 }}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:bg-blue-50/40 sm:p-6"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                      <Icon size={21} />
                    </div>

                    <span className="font-bold text-slate-800">{title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SCIENTIFIC PROGRAM
        ====================================================== */}

        <section className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-4xl bg-linear-to-br from-blue-800 to-blue-950 px-6 py-10 text-white shadow-2xl sm:px-10 sm:py-12 lg:px-14 lg:py-16"
            >
              <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
                    <BookOpen size={23} />
                  </div>

                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                    Scientific Program
                  </p>

                  <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                    A comprehensive scientific agenda is being prepared.
                  </h2>

                  <p className="mt-5 max-w-2xl leading-7 text-blue-100/75 sm:text-lg sm:leading-8">
                    The program will feature contemporary scientific
                    discussions, clinical insights, research, expert faculty
                    and collaborative learning opportunities.
                  </p>

                  <p className="mt-4 text-sm text-blue-200/60">
                    Detailed sessions and faculty announcements will be
                    published as they are confirmed.
                  </p>
                </div>

                <Link
                  to="/schedule"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-blue-800 transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-fit"
                >
                  View Program

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            ORGANISING COMMITTEE
        ====================================================== */}

        <section className="py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-3xl"
              >
                <SectionLabel>Conference Leadership</SectionLabel>

                <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Organising Committee
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  The leadership guiding CardioCon Arunachal 2026 and the
                  historic hosting of CSI Northeast in Arunachal Pradesh.
                </p>
              </motion.div>

              <Link
                to="/about"
                className="group flex w-fit items-center gap-2 font-bold text-blue-700"
              >
                View Full Committee

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
            >
              {leadership.map((member) => (
                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  key={member.name}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-blue-100 hover:shadow-xl"
                >
                  <div className="aspect-4/4 w-full overflow-hidden bg-slate-100">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-slate-100">
                        <Users size={40} className="text-slate-300" />
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold leading-6 text-slate-900">
                      {member.name}
                    </h3>

                    <p className="mt-2 text-sm font-semibold leading-5 text-blue-700">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            EXPERIENCE ARUNACHAL
        ====================================================== */}

        <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-32">
          <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-100/50 blur-3xl" />

          <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* HEADING */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-center"
            >
              <div className="flex justify-center">
                <SectionLabel>Experience Arunachal</SectionLabel>
              </div>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Beyond the conference.
                <span className="block text-blue-700">
                  Discover Arunachal Pradesh.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                From high Himalayan passes and ancient monasteries to quiet
                valleys and vibrant cultures, experience the extraordinary
                landscapes of Arunachal Pradesh during your visit for
                CardioCon 2026.
              </p>
            </motion.div>

            {/* CAROUSEL */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mt-12 overflow-hidden rounded-4xl bg-slate-900 shadow-2xl lg:mt-16"
            >
              <div className="relative h-105 sm:h-130 lg:h-155">
                {/* IMAGES */}

                {arunachalSlides.map((slide, index) => (
                  <motion.div
                    key={slide.title}
                    initial={false}
                    animate={{
                      opacity: index === currentSlide ? 1 : 0,
                      scale: index === currentSlide ? 1 : 1.04,
                    }}
                    transition={{
                      opacity: { duration: 0.7 },
                      scale: { duration: 5 },
                    }}
                    className={`absolute inset-0 ${
                      index === currentSlide
                        ? "pointer-events-auto"
                        : "pointer-events-none"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={`${slide.title}, Arunachal Pradesh`}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/15 to-black/15" />

                    <div className="absolute inset-0 bg-linear-to-r from-black/30 via-transparent to-transparent" />
                  </motion.div>
                ))}

                {/* TOP LABEL */}

                <div className="absolute left-6 top-6 z-20 sm:left-8 sm:top-8">
                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md">
                    <MapPin size={14} className="text-cyan-300" />

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
                      Arunachal Pradesh
                    </p>
                  </div>
                </div>

                {/* SLIDE COUNTER */}

                <div className="absolute right-6 top-6 z-20 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md sm:right-8 sm:top-8">
                  {String(currentSlide + 1).padStart(2, "0")} /{" "}
                  {String(arunachalSlides.length).padStart(2, "0")}
                </div>

                {/* CONTENT */}

                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-10 lg:p-12">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                      Explore Arunachal Pradesh
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                      {arunachalSlides[currentSlide].title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                      {arunachalSlides[currentSlide].subtitle}
                    </p>
                  </motion.div>
                </div>

                {/* PREVIOUS BUTTON */}

                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous destination"
                  className="absolute left-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white hover:text-slate-900 sm:left-6 sm:h-12 sm:w-12"
                >
                  <ChevronLeft size={22} />
                </button>

                {/* NEXT BUTTON */}

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next destination"
                  className="absolute right-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white hover:text-slate-900 sm:right-6 sm:h-12 sm:w-12"
                >
                  <ChevronRight size={22} />
                </button>

                {/* DOTS */}

                <div className="absolute bottom-7 right-6 z-30 hidden items-center gap-2 sm:flex sm:right-10 lg:bottom-11 lg:right-12">
                  {arunachalSlides.map((slide, index) => (
                    <button
                      type="button"
                      key={slide.title}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`View ${slide.title}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "w-9 bg-white"
                          : "w-2 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* BOTTOM CAPTION */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-7 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3"
            >
              <MapPin size={17} className="text-blue-700" />

              <p className="text-sm text-slate-500 sm:text-base">
                Come for science.
                <span className="font-semibold text-slate-800">
                  {" "}
                  Stay for the experience.
                </span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            SECRETARIAT
        ====================================================== */}

        <section className="border-y border-slate-200 bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center"
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
                    Tomo Riba Institute of Health and Medical Sciences (TRIHMS),
                    Naharlagun, Arunachal Pradesh – 791110
                  </p>
                </div>

                <a
                  href="mailto:cardioconarunachal@gmail.com"
                  className="mt-4 flex w-fit items-center gap-3 text-sm font-medium text-slate-600 transition hover:text-blue-700 sm:text-base"
                >
                  <Mail size={18} className="shrink-0 text-blue-700" />

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
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-4xl px-4 text-center sm:px-6"
          >
            <HeartPulse size={40} className="mx-auto text-cyan-300" />

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200 sm:text-sm">
              23–25 October 2026 · Itanagar
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Be part of a historic CardioCon.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
              Join the cardiovascular community for three days of science,
              collaboration and academic exchange as CSI Northeast comes to
              Arunachal Pradesh.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/registration"
                className="group flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-blue-800 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Register for CardioCon

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/about"
                className="flex items-center justify-center rounded-xl border border-white/25 px-7 py-3.5 font-semibold transition hover:bg-white/10"
              >
                About the Conference
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
   SECTION LABEL
========================================================= */

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-700 sm:text-sm">
      <span className="h-px w-7 bg-blue-700" />
      {children}
    </span>
  );
}

export default Home;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  CalendarDays,
  Clock3,
  UserRound,
  Users,
  HeartPulse,
  MapPin,
  Microscope,
  Stethoscope,
  BookOpen,
  Utensils,
  FileText,
  Trophy,
} from "lucide-react";

/* =========================================================
   CARDIOCON ARUNACHAL 2026
   SCIENTIFIC AGENDA
   ========================================================= */

const conference = {
  title: "CARDIOCON ARUNACHAL 2026",
  organizer:
    "Cardiology Society of India — North East Chapter | Annual Conference",
  dates: "23–25 October 2026",
  venue: "Hotel Donyi Polo, Itanagar, Arunachal Pradesh",
};

const scheduleData = {
  day1: {
    day: "Day 1",
    shortDate: "23 Oct",
    date: "23 October 2026",
    weekday: "Friday",

    sessions: [
      {
        type: "section",
        title: 'Workshop — "Cracking the Cardiac Code: Connect the Dots"',
      },

      {
        time: "2:30 PM",
        endTime: "3:05 PM",
        title: "The Lost Art of Clinical Examination",
        speaker: "Dr. H. C. Kalita",
        duration: "35 min",
        type: "Workshop",
        icon: Stethoscope,
      },

      {
        time: "3:05 PM",
        endTime: "3:20 PM",
        title: "Discussion",
        duration: "15 min",
        type: "Discussion",
        icon: Users,
      },

      {
        time: "3:20 PM",
        endTime: "3:55 PM",
        title: "Approach to CHD (Adult)",
        speaker: "Dr. Saurabhi Das",
        duration: "35 min",
        type: "Workshop",
        icon: HeartPulse,
      },

      {
        time: "3:55 PM",
        endTime: "4:10 PM",
        title: "Discussion",
        duration: "15 min",
        type: "Discussion",
        icon: Users,
      },

      {
        time: "4:10 PM",
        endTime: "4:45 PM",
        title: "Fundamental Errors in ECG Interpretation",
        speaker: "Dr. Soumen Devi Dutta",
        duration: "35 min",
        type: "Workshop",
        icon: HeartPulse,
      },

      {
        time: "4:45 PM",
        endTime: "5:00 PM",
        title: "Discussion",
        duration: "15 min",
        type: "Discussion",
        icon: Users,
      },

      {
        type: "section",
        title: 'Session 1 — "An Ounce of Prevention, Pound of Benefits"',
        chairpersons:
          "Dr Dipak Sarma, Dr Talar Motu, Dr Chow Chetha Langkhun, Dr Taso Beyong, Dr Hibu Habung",
      },

      {
        time: "5:00 PM",
        endTime: "5:10 PM",
        title: "Lipoprotein A — The Hidden Foe",
        speaker: "Dr. Prabin Shrivastava",
        duration: "10 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "5:10 PM",
        endTime: "5:20 PM",
        title: "Exercise for CV Disease Prevention: Tomorrow Begins Today",
        speaker: "Dr. Arun Kumar",
        duration: "10 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "5:20 PM",
        endTime: "5:30 PM",
        title: "Coronary Artery Calcium Scoring — Who Really Needs It?",
        speaker: "Dr. Swapan Saha",
        duration: "10 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "5:30 PM",
        endTime: "5:40 PM",
        title:
          "The Romance Between Micronutrients, Lifestyle and Heart: Is It Really Romantic?",
        speaker: "Dr. Taso Beyong",
        duration: "10 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "5:40 PM",
        endTime: "5:45 PM",
        title: "Discussion",
        duration: "5 min",
        type: "Discussion",
        icon: Users,
      },

      {
        type: "section",
        title: 'Session 2 — "Past the Prologue: Cholesterol Saga Continues"',
        chairpersons:
          "Dr Neil Bardoloi, Dr H C Kalita, Dr Hage Ambing, Dr Homen Narah, Dr Tao Kaki",
      },

      {
        time: "5:45 PM",
        endTime: "6:00 PM",
        title: "India & Dyslipidemia",
        speaker: "Dr. Raman Puri",
        duration: "15 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "6:00 PM",
        endTime: "6:15 PM",
        title: "Brave New World — Newer Therapies of Lipid Management",
        speaker: "Dr. Vimal Mehta",
        duration: "15 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "6:15 PM",
        endTime: "6:30 PM",
        title: "Statin Intolerance — A Practical Approach to Management",
        speaker: "Dr. Chandra Kumar Das",
        duration: "15 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "6:30 PM",
        endTime: "6:35 PM",
        title: "Discussion",
        duration: "5 min",
        type: "Discussion",
        icon: Users,
      },

      {
        time: "6:35 PM",
        endTime: "7:35 PM",
        title: "Inauguration",
        duration: "60 min",
        type: "Ceremony",
        icon: Trophy,
      },
    ],
  },

  day2: {
    day: "Day 2",
    shortDate: "24 Oct",
    date: "24 October 2026",
    weekday: "Saturday",

    sessions: [
      {
        type: "section",
        title:
          'Session 1 — "Once More Unto the Breach: Heart Failure Success Story"',
        chairpersons:
          "Dr P C Sarma, Dr Anjan Kumar Bhattacharya, Dr J C Barkataki, Dr Tirthankar Roy, Dr Chinmoy Mazumdar",
      },

      {
        time: "8:30 AM",
        endTime: "8:45 AM",
        title: "Heart Failure: Newer Avenues and AI Integration",
        speaker: "Dr. M. K. Das",
        duration: "15 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "8:45 AM",
        endTime: "9:00 AM",
        title:
          "The Fifth Pillar of Heart Failure Management — GLP-1 Agonists",
        speaker: "Dr. Harikrishnan S",
        duration: "15 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "9:00 AM",
        endTime: "9:15 AM",
        title: "Iron is the New Inotrope",
        speaker: "Dr. Arup Das Biswas",
        duration: "15 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "9:15 AM",
        endTime: "9:30 AM",
        title: "SGLT2 Inhibitors — The Heart Failure Panacea",
        speaker: "Dr. Bornali Dutta",
        duration: "15 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "9:30 AM",
        endTime: "9:35 AM",
        title: "Discussion",
        duration: "5 min",
        type: "Discussion",
        icon: Users,
      },

      {
        type: "section",
        title: 'Session 2 — "Meet the Masters: Invited Lectures"',
        chairpersons:
          "Dr Sandeep Bansal, Dr Justin Paul, Dr Neil Bardoloi, Dr Soumen Devi Dutta",
      },

      {
        time: "9:35 AM",
        endTime: "9:50 AM",
        title: "AI in Cardiovascular Disease",
        speaker: "Dr. Dorairaj Prabhakaran",
        duration: "15 min",
        type: "Lecture",
        icon: Microscope,
      },

      {
        time: "9:50 AM",
        endTime: "10:05 AM",
        title: "Digitalis Revitalis",
        speaker: "Dr. G. Karthikeyan",
        duration: "15 min",
        type: "Lecture",
        icon: HeartPulse,
      },

      {
        time: "10:05 AM",
        endTime: "10:20 AM",
        title: "Climate Change and Cardiovascular Disease",
        speaker: "Dr. Poornima Prabhakaran",
        duration: "15 min",
        type: "Lecture",
        icon: Microscope,
      },

      {
        time: "10:20 AM",
        endTime: "10:30 AM",
        title: "Audience Interaction",
        duration: "10 min",
        type: "Discussion",
        icon: Users,
      },

      {
        type: "section",
        title: 'Session 3 — "The Readiness is All: CSI NE Orations"',
      },

      {
        time: "10:30 AM",
        endTime: "10:50 AM",
        title: "CSI Presidential Oration",
        speaker: "Dr. D. J. Dutta",
        duration: "20 min",
        type: "Oration",
        icon: BookOpen,
      },

      {
        time: "10:50 AM",
        endTime: "11:15 AM",
        title: "M. C. Bhuyan Oration",
        speaker: "Dr. H. K. Bali",
        duration: "25 min",
        type: "Oration",
        icon: BookOpen,
      },

      {
        type: "section",
        title:
          'Session 4 — "All the World Is a Stage: Play the Interventional Cardiology Game"',
        chairpersons:
          "Dr Rakesh Yadav, Dr Nitish Naik, Dr Manish Kapoor, Dr Chandan Modak, Dr Raj Kumar Bhattacharjee",
      },

      {
        time: "11:15 AM",
        endTime: "11:30 AM",
        title: "DEB in PCI — The Kid Has Matured Now",
        speaker: "Dr. Anindya SundarTrivedi",
        duration: "15 min",
        type: "Interventional",
        icon: HeartPulse,
      },

      {
        time: "11:30 AM",
        endTime: "11:45 AM",
        title: "Calcium Modification in PCI: Breaking the Hardlines",
        speaker: "Dr. Rituparna Baruah",
        duration: "15 min",
        type: "Interventional",
        icon: HeartPulse,
      },

      {
        time: "11:45 AM",
        endTime: "12:00 PM",
        title:
          "Complete Revascularisation in Primary PCI — Much Ado About Balance",
        speaker: "Dr. P. J. Bhattacharyya",
        duration: "15 min",
        type: "Interventional",
        icon: HeartPulse,
      },

      {
        time: "12:00 PM",
        endTime: "12:15 PM",
        title: "Bifurcation PCI — Decision at the Divide",
        speaker: "Dr. Dilip Kumar",
        duration: "15 min",
        type: "Interventional",
        icon: HeartPulse,
      },

      {
        time: "12:15 PM",
        endTime: "12:20 PM",
        title: "Discussion",
        duration: "5 min",
        type: "Discussion",
        icon: Users,
      },

      {
        time: "12:20 PM",
        endTime: "1:05 PM",
        title: "Lunch",
        duration: "45 min",
        type: "Break",
        icon: Utensils,
      },

      {
        type: "section",
        title:
          'Session 5 — "Weathering the Tempest: From Chaos to Control in the CATH-Lab"',
        chairpersons:
          "Dr Animesh Mishra, Dr Rakesh Yadav, Dr Rakesh Arora, Dr Rituparna Baruah, Dr Mriganga Chaliha, Dr DP Rai",
      },

      {
        time: "1:05 PM",
        endTime: "1:15 PM",
        title: "Management of Coronary Bifurcation",
        speaker: "Dr. Rondeep Sivam",
        duration: "10 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "1:15 PM",
        endTime: "1:25 PM",
        title: "Snaring the Lost Devices",
        speaker: "Dr. Biplab Paul",
        duration: "10 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "1:25 PM",
        endTime: "1:35 PM",
        title: "No Way Out — Slow Flow in PCI",
        speaker: "Dr. K. C. Narzary",
        duration: "10 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "1:35 PM",
        endTime: "1:45 PM",
        title:
          "Hypotension in the CATH-Lab — A Practical Guide to Management",
        speaker: "Dr. Monowar Hussain",
        duration: "10 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "1:45 PM",
        endTime: "1:55 PM",
        title: "The Storm Within — Coronary Dissection: The Rescue",
        speaker: "Dr. Dhanjit Nath",
        duration: "10 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "1:55 PM",
        endTime: "2:00 PM",
        title: "Discussion",
        duration: "5 min",
        type: "Discussion",
        icon: Users,
      },

      {
        type: "section",
        title:
          'Session 6 — "Measure for Measure: The Long Game of Hypertension"',
        chairpersons:
          "Dr Dipak Sharma, Dr Bornali Dutta, Dr Homen Narah, Dr Ratan Ram, Dr Pritom Borthakur",
      },

      {
        time: "2:00 PM",
        endTime: "2:15 PM",
        title: "Contemporary Issues in Hypertension",
        speaker: "Dr. Prabhakaran",
        duration: "15 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "2:15 PM",
        endTime: "2:30 PM",
        title: "The Resistant Few — Tackling Difficult Hypertension",
        speaker: "Dr. Manish Kapoor",
        duration: "15 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "2:30 PM",
        endTime: "2:45 PM",
        title: "Beyond the Clinic — HBPM & ABPM",
        speaker: "Dr. Rajiv Bhardwaj",
        duration: "15 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "2:45 PM",
        endTime: "2:50 PM",
        title: "Discussion",
        duration: "5 min",
        type: "Discussion",
        icon: Users,
      },

      {
        type: "section",
        title: "Session 7 — Debates",
        judges:
          "Dr D Prabahkaran, Dr Harikrishnan, Dr M K Das, Dr Vimal Mehta, Dr Arup Das Biswas, Dr Neil Bardoloi, Dr Raman Puri",
      },

      {
        time: "2:50 PM",
        endTime: "3:30 PM",
        title:
          "Debate 1: CTO — Leave It Alone or Fix It When It's Broken?",
        speaker: "Dr. Rakesh Yadav vs Dr. Ramakrishnan",
        duration: "40 min (15 min each + 5 min each for rebuttal)",
        type: "Debate",
        icon: Users,
      },

      {
        time: "3:30 PM",
        endTime: "4:10 PM",
        title:
          "Debate 2: Betablocker in MI — Lifelong Love or Time to Move On?",
        speaker: "Dr. Justin Paul vs Dr. Sandeep Bansal",
        duration: "40 min (15 min each + 5 min each for rebuttal)",
        type: "Debate",
        icon: Users,
      },

      {
        type: "section",
        title:
          'Session 8 — "Born to Beat: Congenital Heart Disease — Lifetime Care, Lifetime Challenge"',
        chairpersons:
          "Dr Saurabhi Das, Dr Manuj Saikia, Dr Dilip Kumar, Dr Tabang Nyitan",
      },

      {
        time: "4:10 PM",
        endTime: "4:25 PM",
        title:
          "Right Choice — Device & Balloon Size Selection in ASD/VSD/PDA & Valvular Lesions",
        speaker: "Dr. Saurabh Gupta",
        duration: "15 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "4:25 PM",
        endTime: "4:40 PM",
        title: "Role of Robotics in Cardiac Surgery",
        speaker: "Dr. Ritwick Barman",
        duration: "15 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "4:40 PM",
        endTime: "4:55 PM",
        title: "The Hypertensive Lungs — The Wheel Comes Full Circle",
        speaker: "Dr. Satyavir Yadav",
        duration: "15 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "4:55 PM",
        endTime: "5:10 PM",
        title: "Medical Myectomy in HCM — The New Era",
        speaker: "Dr. M. S. Chaliha",
        duration: "15 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "5:10 PM",
        endTime: "5:15 PM",
        title: "Discussion",
        duration: "5 min",
        type: "Discussion",
        icon: Users,
      },

      {
        type: "section",
        title:
          'Session 9 — "Evening Potpourri: A Medley of Modern Cardiology"',
        chairpersons:
          "Dr Prabhakaran, Dr D J Dutta, Dr Vanita Arora, Dr M K Das, Dr Monowar Hussain",
      },

      {
        time: "5:15 PM",
        endTime: "5:30 PM",
        title: "Anti-Platelet Strategies in 2026",
        speaker: "Dr. Animesh Mishra",
        duration: "15 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "5:30 PM",
        endTime: "5:45 PM",
        title: "Medical Circulatory Support in 2026",
        speaker: "Dr. Ranjit Nath",
        duration: "15 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "5:45 PM",
        endTime: "6:00 PM",
        title: "Inherited Arrhythmias: What Is New?",
        speaker: "Dr. Nitish Naik",
        duration: "15 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "6:00 PM",
        endTime: "6:15 PM",
        title: "The New Age of Intravascular Imaging",
        speaker: "Dr. Sharad Chandra",
        duration: "15 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "6:15 PM",
        endTime: "6:20 PM",
        title: "Discussion",
        duration: "5 min",
        type: "Discussion",
        icon: Users,
      },

      {
        time: "6:20 PM",
        endTime: "6:50 PM",
        title: "Posters & Abstracts Presentation",
        duration: "30 min",
        type: "Abstracts",
        icon: FileText,
      },
    ],
  },

  day3: {
    day: "Day 3",
    shortDate: "25 Oct",
    date: "25 October 2026",
    weekday: "Sunday",

    sessions: [
      {
        type: "section",
        title: 'Session 1 — "Arrhythmia Management: Calming the Storm"',
        chairpersons:
          "Dr Rituparna Baruah, Dr Swapan Saha, Dr Monowar Hussain, Dr CP Thakur, Dr Abhijit Bharali",
      },

      {
        time: "8:30 AM",
        endTime: "8:45 AM",
        title: "CSP",
        speaker: "Dr. Vanita Arora",
        duration: "15 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "8:45 AM",
        endTime: "8:55 AM",
        title: "Post-MI Ectopics: An Enemy in Disguise",
        speaker: "Dr. Synrang Warjri",
        duration: "10 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "8:55 AM",
        endTime: "9:05 AM",
        title: "VT Storm — Rhythm on the Edge",
        speaker: "Dr. Utpal Sharma",
        duration: "10 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "9:05 AM",
        endTime: "9:15 AM",
        title: "Atrial Fibrillation — Real-World Decision Pathways",
        speaker: "Dr. Chandan Modak",
        duration: "10 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "9:15 AM",
        endTime: "9:25 AM",
        title:
          "Risk Stratification of Sudden Cardiac Death — Race Against the Rhythm",
        speaker: "Dr. Romar Dabu",
        duration: "10 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "9:25 AM",
        endTime: "9:30 AM",
        title: "Discussion",
        duration: "5 min",
        type: "Discussion",
        icon: Users,
      },

      {
        type: "section",
        title: 'Session 2 — "Cardio-Metabolic Medicine: The New Frontier"',
        chairpersons:
          "Dr Gautam Das, Dr Arun Kumar, Dr Utpal Sharma, Dr Taso Beyong, Dr Libe Nyorak",
      },

      {
        time: "9:30 AM",
        endTime: "9:40 AM",
        title: "Diabetes & Cardiovascular Disease — The Twisted Twins",
        speaker: "Dr. Gaurav Kavi",
        duration: "10 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "9:40 AM",
        endTime: "9:50 AM",
        title: "GLP Revolution — What We Should Know",
        speaker: "Dr. Saurav Das",
        duration: "10 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "9:50 AM",
        endTime: "10:00 AM",
        title: "Cardio-Renal Syndrome — The Heart-Kidney Tango",
        speaker: "Dr. Oyik Tamut",
        duration: "10 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "10:00 AM",
        endTime: "10:10 AM",
        title: "Obesity in Heart Disease — The Elephant in the Room",
        speaker: "Dr. Karto Ete",
        duration: "10 min",
        type: "Scientific",
        icon: HeartPulse,
      },

      {
        time: "10:10 AM",
        endTime: "10:15 AM",
        title: "Discussion",
        duration: "5 min",
        type: "Discussion",
        icon: Users,
      },

      {
        type: "section",
        title: "Session 3",
      },

      {
        time: "10:15 AM",
        endTime: "11:15 AM",
        title: "Quiz",
        speaker: "Quiz Master — Dr. S. Ramakrishnan",
        duration: "60 min",
        type: "Quiz",
        icon: BookOpen,
      },

      {
        time: "11:15 AM",
        endTime: "11:30 AM",
        title: "Valedictory Function",
        duration: "15 min",
        type: "Ceremony",
        icon: Trophy,
      },
    ],
  },
};

/* =========================================================
   BADGE STYLES
   ========================================================= */

const badgeStyles = {
  Workshop: "bg-orange-50 text-orange-700 border-orange-200",
  Discussion: "bg-indigo-50 text-indigo-700 border-indigo-200",
  Scientific: "bg-cyan-50 text-cyan-700 border-cyan-200",
  Lecture: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Oration: "bg-amber-50 text-amber-700 border-amber-200",
  Interventional: "bg-red-50 text-red-700 border-red-200",
  Debate: "bg-pink-50 text-pink-700 border-pink-200",
  Abstracts: "bg-purple-50 text-purple-700 border-purple-200",
  Quiz: "bg-green-50 text-green-700 border-green-200",
  Ceremony: "bg-violet-50 text-violet-700 border-violet-200",
  Break: "bg-slate-100 text-slate-600 border-slate-200",
};

/* =========================================================
   ANIMATION
   ========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
    },
  },
};

/* =========================================================
   COMPONENT
   ========================================================= */

function Schedule() {
  const [activeDay, setActiveDay] = useState("day1");

  const selectedDay = scheduleData[activeDay];

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white pt-20">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative isolate overflow-hidden bg-[#061827] text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute -bottom-60 -left-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            <svg
              className="absolute bottom-0 left-0 w-full opacity-[0.045]"
              viewBox="0 0 1440 200"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 110H250L300 110L335 55L370 160L410 25L455 110H660L700 110L730 65L760 145L800 45L840 110H1100L1140 110L1170 70L1200 140L1240 50L1280 110H1440"
                stroke="currentColor"
                strokeWidth="5"
                className="text-cyan-300"
              />
            </svg>
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="max-w-5xl"
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-200"
              >
                <HeartPulse size={15} />
                Cardiology Society of India — North East Chapter
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-7 text-4xl font-black leading-[1.04] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              >
                {conference.title}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg"
              >
                {conference.organizer}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              >
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <CalendarDays
                    size={18}
                    className="shrink-0 text-cyan-300"
                  />
                  <span className="text-sm font-semibold text-slate-200">
                    {conference.dates}
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <MapPin size={18} className="shrink-0 text-orange-300" />
                  <span className="text-sm font-semibold text-slate-200">
                    {conference.venue}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="flex h-1.5">
            <div className="flex-1 bg-orange-400" />
            <div className="flex-1 bg-cyan-500" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-cyan-500" />
            <div className="flex-1 bg-orange-400" />
          </div>
        </section>

        {/* =====================================================
            SCIENTIFIC AGENDA
        ====================================================== */}

        <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-center"
            >
              <div className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-blue-700 sm:text-sm">
                <span className="h-px w-7 bg-blue-700" />
                Scientific Agenda
                <span className="h-px w-7 bg-blue-700" />
              </div>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Timed Schedule
              </h2>
            </motion.div>

            {/* DAY SELECTOR */}

            <div className="mt-10 sm:mt-12">
              <div className="mx-auto grid max-w-3xl grid-cols-3 gap-1 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm sm:gap-2 sm:p-2">
                {Object.entries(scheduleData).map(([key, day]) => {
                  const active = activeDay === key;

                  return (
                    <button
                      type="button"
                      key={key}
                      onClick={() => setActiveDay(key)}
                      className={`relative min-w-0 overflow-hidden rounded-xl px-2 py-3.5 text-center outline-none transition sm:px-4 sm:py-4 ${
                        active
                          ? "text-white"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
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
                        <p className="text-xs font-bold sm:text-base">
                          {day.day}
                        </p>

                        <p
                          className={`mt-1 text-[10px] font-medium sm:text-xs ${
                            active ? "text-blue-100" : "text-slate-400"
                          }`}
                        >
                          {day.shortDate}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ACTIVE DAY */}

            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="mt-8"
              >
                {/* DAY HEADER */}

                <div className="relative overflow-hidden rounded-3xl bg-[#071a2d] p-5 text-white sm:p-8">
                  <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

                  <div className="relative">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex items-center gap-2 text-xs font-bold text-cyan-300 sm:text-sm">
                        <CalendarDays size={15} />
                        {selectedDay.weekday}, {selectedDay.date}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                      {selectedDay.day}
                    </h3>
                  </div>
                </div>

                {/* TIMELINE */}

                <motion.div
                  variants={stagger}
                  initial="hidden"
                  animate="visible"
                  className="mt-8 sm:mt-10"
                >
                  {selectedDay.sessions.map((item, index) => {
                    /* SESSION HEADING */

                    if (item.type === "section") {
                      return (
                        <motion.div
                          variants={fadeUp}
                          key={`${activeDay}-section-${index}`}
                          className="relative mb-5 mt-8 first:mt-0 sm:mb-6 sm:mt-10"
                        >
                          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
                            <div className="flex items-start gap-3">
                              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white">
                                <BookOpen size={19} />
                              </div>

                              <div className="min-w-0">
                                <h3 className="text-base font-bold leading-6 text-slate-900 sm:text-xl sm:leading-7">
                                  {item.title}
                                </h3>

                                {item.chairpersons && (
                                  <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                                    <span className="font-semibold text-slate-800">
                                      Chairpersons:
                                    </span>{" "}
                                    {item.chairpersons}
                                  </p>
                                )}

                                {item.judges && (
                                  <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                                    <span className="font-semibold text-slate-800">
                                      Judges:
                                    </span>{" "}
                                    {item.judges}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    }

                    const Icon = item.icon || FileText;

                    return (
                      <motion.div
                        variants={fadeUp}
                        key={`${activeDay}-${index}-${item.title}`}
                        className="relative flex gap-3 pb-5 sm:gap-5 sm:pb-6"
                      >
                        {/* TIMELINE ICON */}

                        <div className="flex shrink-0 flex-col items-center">
                          <div className="z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-white shadow-md sm:h-12 sm:w-12 sm:rounded-2xl">
                            <Icon size={19} />
                          </div>

                          {index !== selectedDay.sessions.length - 1 && (
                            <div className="mt-2 w-px flex-1 bg-linear-to-b from-blue-300 via-slate-300 to-slate-200" />
                          )}
                        </div>

                        {/* PROGRAM CARD */}

                        <div className="min-w-0 flex-1">
                          <motion.div
                            whileHover={{ y: -2 }}
                            className="group rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50 sm:p-6"
                          >
                            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start sm:gap-6">
                              <div className="min-w-0 flex-1">
                                {/* TIME */}

                                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700 sm:text-sm">
                                    <Clock3 size={14} />

                                    <span>
                                      {item.time} – {item.endTime}
                                    </span>
                                  </div>

                                  <span
                                    className={`inline-flex rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide ${
                                      badgeStyles[item.type] ||
                                      "bg-slate-100 text-slate-600 border-slate-200"
                                    }`}
                                  >
                                    {item.type}
                                  </span>
                                </div>

                                {/* TITLE */}

                                <h3 className="mt-3 wrap-break-word text-base font-bold leading-6 tracking-tight text-slate-900 transition-colors group-hover:text-blue-700 sm:text-xl sm:leading-7">
                                  {item.title}
                                </h3>

                                {/* SPEAKER */}

                                {item.speaker && (
                                  <div className="mt-4 flex items-start gap-2">
                                    <UserRound
                                      size={15}
                                      className="mt-0.5 shrink-0 text-slate-400"
                                    />

                                    <p className="text-xs font-medium leading-5 text-slate-600 sm:text-sm">
                                      {item.speaker}
                                    </p>
                                  </div>
                                )}

                                {/* DURATION */}

                                {item.duration && (
                                  <div className="mt-2 flex items-start gap-2">
                                    <Clock3
                                      size={15}
                                      className="mt-0.5 shrink-0 text-slate-400"
                                    />

                                    <p className="text-xs leading-5 text-slate-500 sm:text-sm">
                                      {item.duration}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Schedule;
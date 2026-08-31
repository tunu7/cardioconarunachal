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
  Users,
  HeartPulse,
  ArrowRight,
  Mic2,
  Utensils,
  Stethoscope,
  FileText,
  Info,
  Microscope,
  Sparkles,
  Building2,
  BookOpen,
} from "lucide-react";

/* =========================================================
   CARDIOCON ARUNACHAL 2026
   PROVISIONAL SCIENTIFIC PROGRAM
========================================================= */

const scheduleData = {
  day1: {
    day: "Day 01",
    shortDate: "23 Oct",
    date: "23 October 2026",
    weekday: "Friday",
    theme: "Clinical Foundations, Prevention & Lipid Management",
    description:
      "Scientific sessions and the workshop on clinical examination, adult CHD, ECG interpretation, cardiovascular prevention and contemporary lipid management.",
    sessions: [
      {
        time: "",
        endTime: "",
        title: 'Workshop — "Cracking the Cardiac Code: Connect the Dots"',
        speaker: "",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Workshop",
        icon: Microscope,
      },
      {
        time: "2:30 PM",
        endTime: "3:05 PM",
        title: "The Lost Art of Clinical Examination",
        speaker: "Dr. H. C. Kalita",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Workshop",
        icon: Stethoscope,
      },
      {
        time: "3:05 PM",
        endTime: "3:20 PM",
        title: "Discussion",
        speaker: "",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Discussion",
        icon: Users,
      },
      {
        time: "3:20 PM",
        endTime: "3:55 PM",
        title: "Approach to CHD (Adult)",
        speaker: "Dr. Saurabhi Das",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Workshop",
        icon: HeartPulse,
      },
      {
        time: "3:55 PM",
        endTime: "4:10 PM",
        title: "Discussion",
        speaker: "",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Discussion",
        icon: Users,
      },
      {
        time: "4:10 PM",
        endTime: "4:45 PM",
        title: "Fundamental Errors in ECG Interpretation",
        speaker: "Dr. Soumen Devi Dutta",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Workshop",
        icon: HeartPulse,
      },
      {
        time: "4:45 PM",
        endTime: "5:00 PM",
        title: "Discussion",
        speaker: "",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Discussion",
        icon: Users,
      },
      {
        time: "",
        endTime: "",
        title: 'Session 1 — "An Ounce of Prevention, Pound of Benefits"',
        speaker:
          "Chairpersons: Dr Dipak Sarma, Dr Talar Motu, Dr Chow Chetha Langkhun, Dr Taso Beyong, Dr Hibu Habung",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Session",
        icon: Users,
      },
      {
        time: "5:00 PM",
        endTime: "5:10 PM",
        title: "Lipoprotein A — The Hidden Foe",
        speaker: "Dr. Prabin Shrivastava",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "5:10 PM",
        endTime: "5:20 PM",
        title:
          "Exercise for CV Disease Prevention: Tomorrow Begins Today",
        speaker: "Dr. Arun Kumar",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "5:20 PM",
        endTime: "5:30 PM",
        title:
          "Coronary Artery Calcium Scoring — Who Really Needs It?",
        speaker: "Dr. Swapan Saha",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "5:30 PM",
        endTime: "5:40 PM",
        title:
          "The Romance Between Micronutrients, Lifestyle and Heart: Is It Really Romantic?",
        speaker: "Dr. Taso Beyong",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "5:40 PM",
        endTime: "5:45 PM",
        title: "Discussion",
        speaker: "",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Discussion",
        icon: Users,
      },
      {
        time: "",
        endTime: "",
        title: 'Session 2 — "Past the Prologue: Cholesterol Saga Continues"',
        speaker:
          "Chairpersons: Dr Neil Bardoloi, Dr H C Kalita, Dr Hage Ambing, Dr Homen Narah, Dr Tao Kaki",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Session",
        icon: Users,
      },
      {
        time: "5:45 PM",
        endTime: "6:00 PM",
        title: "India & Dyslipidemia",
        speaker: "Dr. Raman Puri",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "6:00 PM",
        endTime: "6:15 PM",
        title:
          "Brave New World — Newer Therapies of Lipid Management",
        speaker: "Dr. Vimal Mehta",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "6:15 PM",
        endTime: "6:30 PM",
        title:
          "Statin Intolerance — A Practical Approach to Management",
        speaker: "Dr. Chandra Kumar Das",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "6:30 PM",
        endTime: "6:35 PM",
        title: "Discussion",
        speaker: "",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Discussion",
        icon: Users,
      },
      {
        time: "6:35 PM",
        endTime: "7:35 PM",
        title: "Inauguration",
        speaker: "",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Ceremony",
        icon: Building2,
      },
    ],
  },

  day2: {
    day: "Day 02",
    shortDate: "24 Oct",
    date: "24 October 2026",
    weekday: "Saturday",
    theme:
      "Heart Failure, Intervention, Hypertension & Contemporary Cardiology",
    description:
      "A full scientific day covering heart failure, invited lectures, CSI-NE orations, interventional cardiology, CATH-lab challenges, hypertension, debates, congenital heart disease and modern cardiology.",
    sessions: [
      {
        time: "",
        endTime: "",
        title:
          'Session 1 — "Once More Unto the Breach: Heart Failure Success Story"',
        speaker:
          "Chairpersons: Dr P C Sarma, Dr Anjan Kumar Bhattacharya, Dr J C Barkataki, Dr Tirthankar Roy, Dr Chinmoy Mazumdar",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Session",
        icon: HeartPulse,
      },
      {
        time: "8:30 AM",
        endTime: "8:45 AM",
        title: "Heart Failure: Newer Avenues and AI Integration",
        speaker: "Dr. M. K. Das",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "8:45 AM",
        endTime: "9:00 AM",
        title:
          "The Fifth Pillar of Heart Failure Management — GLP-1 Agonists",
        speaker: "Dr. Harikrishnan S",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "9:00 AM",
        endTime: "9:15 AM",
        title: "Iron is the New Inotrope",
        speaker: "Dr. Arup Das Biswas",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "9:15 AM",
        endTime: "9:30 AM",
        title: "SGLT2 Inhibitors — The Heart Failure Panacea",
        speaker: "Dr. Bornali Dutta",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "9:30 AM",
        endTime: "9:35 AM",
        title: "Discussion",
        speaker: "",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Discussion",
        icon: Users,
      },
      {
        time: "",
        endTime: "",
        title: 'Session 2 — "Meet the Masters: Invited Lectures"',
        speaker:
          "Chairpersons: Dr Sandeep Bansal, Dr Justin Paul, Dr Neil Bardoloi, Dr Soumen Devi Dutta",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Session",
        icon: Mic2,
      },
      {
        time: "9:35 AM",
        endTime: "9:50 AM",
        title: "AI in Cardiovascular Disease",
        speaker: "Dr. Dorairaj Prabhakaran",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Keynote",
        icon: Microscope,
      },
      {
        time: "9:50 AM",
        endTime: "10:05 AM",
        title: "Digitalis Revitalis",
        speaker: "Dr. G. Karthikeyan",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Keynote",
        icon: HeartPulse,
      },
      {
        time: "10:05 AM",
        endTime: "10:20 AM",
        title: "Climate Change and Cardiovascular Disease",
        speaker: "Dr. Poornima Prabhakaran",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Keynote",
        icon: Microscope,
      },
      {
        time: "10:20 AM",
        endTime: "10:30 AM",
        title: "Audience Interaction",
        speaker: "",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Discussion",
        icon: Users,
      },
      {
        time: "",
        endTime: "",
        title: 'Session 3 — "The Readiness is All: CSI NE Orations"',
        speaker: "",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Session",
        icon: BookOpen,
      },
      {
        time: "10:30 AM",
        endTime: "10:50 AM",
        title: "CSI Presidential Oration",
        speaker: "Dr. D. J. Dutta",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Oration",
        icon: Mic2,
      },
      {
        time: "10:50 AM",
        endTime: "11:15 AM",
        title: "M. C. Bhuyan Oration",
        speaker: "Dr. H. K. Bali",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Oration",
        icon: Mic2,
      },
      {
        time: "",
        endTime: "",
        title:
          'Session 4 — "All the World Is a Stage: Play the Interventional Cardiology Game"',
        speaker:
          "Chairpersons: Dr Rakesh Yadav, Dr Nitish Naik, Dr Manish Kapoor, Dr Chandan Modak, Dr Raj Kumar Bhattacharjee",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Session",
        icon: HeartPulse,
      },
      {
        time: "11:15 AM",
        endTime: "11:30 AM",
        title: "DEB in PCI — The Kid Has Matured Now",
        speaker: "Dr. Anindya SundarTrivedi",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Interventional",
        icon: HeartPulse,
      },
      {
        time: "11:30 AM",
        endTime: "11:45 AM",
        title:
          "Calcium Modification in PCI: Breaking the Hardlines",
        speaker: "Dr. Rituparna Baruah",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Interventional",
        icon: HeartPulse,
      },
      {
        time: "11:45 AM",
        endTime: "12:00 PM",
        title:
          "Complete Revascularisation in Primary PCI — Much Ado About Balance",
        speaker: "Dr. P. J. Bhattacharyya",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Interventional",
        icon: HeartPulse,
      },
      {
        time: "12:00 PM",
        endTime: "12:15 PM",
        title: "Bifurcation PCI — Decision at the Divide",
        speaker: "Dr. Dilip Kumar",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Interventional",
        icon: HeartPulse,
      },
      {
        time: "12:15 PM",
        endTime: "12:20 PM",
        title: "Discussion",
        speaker: "",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Discussion",
        icon: Users,
      },
      {
        time: "12:20 PM",
        endTime: "1:05 PM",
        title: "Lunch",
        speaker: "",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Break",
        icon: Utensils,
      },
      {
        time: "",
        endTime: "",
        title:
          'Session 5 — "Weathering the Tempest: From Chaos to Control in the CATH-Lab"',
        speaker:
          "Chairpersons: Dr Animesh Mishra, Dr Rakesh Yadav, Dr Rakesh Arora, Dr Rituparna Baruah, Dr Mriganga Chaliha, Dr DP Rai",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Session",
        icon: HeartPulse,
      },
      {
        time: "1:05 PM",
        endTime: "1:15 PM",
        title: "Management of Coronary Bifurcation",
        speaker: "Dr. Rondeep Sivam",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Clinical",
        icon: HeartPulse,
      },
      {
        time: "1:15 PM",
        endTime: "1:25 PM",
        title: "Snaring the Lost Devices",
        speaker: "Dr. Biplab Paul",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Clinical",
        icon: HeartPulse,
      },
      {
        time: "1:25 PM",
        endTime: "1:35 PM",
        title: "No Way Out — Slow Flow in PCI",
        speaker: "Dr. K. C. Narzary",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Clinical",
        icon: HeartPulse,
      },
      {
        time: "1:35 PM",
        endTime: "1:45 PM",
        title:
          "Hypotension in the CATH-Lab — A Practical Guide to Management",
        speaker: "Dr. Monowar Hussain",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Clinical",
        icon: HeartPulse,
      },
      {
        time: "1:45 PM",
        endTime: "1:55 PM",
        title:
          "The Storm Within — Coronary Dissection: The Rescue",
        speaker: "Dr. Dhanjit Nath",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Clinical",
        icon: HeartPulse,
      },
      {
        time: "1:55 PM",
        endTime: "2:00 PM",
        title: "Discussion",
        speaker: "",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Discussion",
        icon: Users,
      },
      {
        time: "",
        endTime: "",
        title:
          'Session 6 — "Measure for Measure: The Long Game of Hypertension"',
        speaker:
          "Chairpersons: Dr Dipak Sharma, Dr Bornali Dutta, Dr Homen Narah, Dr Ratan Ram, Dr Pritom Borthakur",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Session",
        icon: HeartPulse,
      },
      {
        time: "2:00 PM",
        endTime: "2:15 PM",
        title: "Contemporary Issues in Hypertension",
        speaker: "Dr. Prabhakaran",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "2:15 PM",
        endTime: "2:30 PM",
        title: "The Resistant Few — Tackling Difficult Hypertension",
        speaker: "Dr. Manish Kapoor",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "2:30 PM",
        endTime: "2:45 PM",
        title: "Beyond the Clinic — HBPM & ABPM",
        speaker: "Dr. Rajiv Bhardwaj",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "2:45 PM",
        endTime: "2:50 PM",
        title: "Discussion",
        speaker: "",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Discussion",
        icon: Users,
      },
      {
        time: "",
        endTime: "",
        title: "Session 7 — Debates",
        speaker:
          "Judges: Dr D Prabahkaran, Dr Harikrishnan, Dr M K Das, Dr Vimal Mehta, Dr Arup Das Biswas, Dr Neil Bardoloi, Dr Raman Puri",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Session",
        icon: Users,
      },
      {
        time: "2:50 PM",
        endTime: "3:30 PM",
        title:
          "Debate 1: CTO — Leave It Alone or Fix It When It's Broken?",
        speaker: "Dr. Rakesh Yadav vs Dr. Ramakrishnan",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Debate",
        icon: Users,
      },
      {
        time: "3:30 PM",
        endTime: "4:10 PM",
        title:
          "Debate 2: Betablocker in MI — Lifelong Love or Time to Move On?",
        speaker: "Dr. Justin Paul vs Dr. Sandeep Bansal",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Debate",
        icon: Users,
      },
      {
        time: "",
        endTime: "",
        title:
          'Session 8 — "Born to Beat: Congenital Heart Disease — Lifetime Care, Lifetime Challenge"',
        speaker:
          "Chairpersons: Dr Saurabhi Das, Dr Manuj Saikia, Dr Dilip Kumar, Dr Tabang Nyitan",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Session",
        icon: HeartPulse,
      },
      {
        time: "4:10 PM",
        endTime: "4:25 PM",
        title:
          "Right Choice — Device & Balloon Size Selection in ASD/VSD/PDA & Valvular Lesions",
        speaker: "Dr. Saurabh Gupta",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "4:25 PM",
        endTime: "4:40 PM",
        title: "Role of Robotics in Cardiac Surgery",
        speaker: "Dr. Ritwick Barman",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "4:40 PM",
        endTime: "4:55 PM",
        title:
          "The Hypertensive Lungs — The Wheel Comes Full Circle",
        speaker: "Dr. Satyavir Yadav",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "4:55 PM",
        endTime: "5:10 PM",
        title: "Medical Myectomy in HCM — The New Era",
        speaker: "Dr. M. S. Chaliha",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "5:10 PM",
        endTime: "5:15 PM",
        title: "Discussion",
        speaker: "",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Discussion",
        icon: Users,
      },
      {
        time: "",
        endTime: "",
        title:
          'Session 9 — "Evening Potpourri: A Medley of Modern Cardiology"',
        speaker:
          "Chairpersons: Dr Prabhakaran, Dr D J Dutta, Dr Vanita Arora, Dr M K Das, Dr Monowar Hussain",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Session",
        icon: HeartPulse,
      },
      {
        time: "5:15 PM",
        endTime: "5:30 PM",
        title: "Anti-Platelet Strategies in 2026",
        speaker: "Dr. Animesh Mishra",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "5:30 PM",
        endTime: "5:45 PM",
        title: "Medical Circulatory Support in 2026",
        speaker: "Dr. Ranjit Nath",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "5:45 PM",
        endTime: "6:00 PM",
        title: "Inherited Arrhythmias: What Is New?",
        speaker: "Dr. Nitish Naik",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "6:00 PM",
        endTime: "6:15 PM",
        title: "The New Age of Intravascular Imaging",
        speaker: "Dr. Sharad Chandra",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "6:15 PM",
        endTime: "6:20 PM",
        title: "Discussion",
        speaker: "",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Discussion",
        icon: Users,
      },
      {
        time: "6:20 PM",
        endTime: "6:50 PM",
        title: "Posters & Abstracts Presentation",
        speaker: "",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Abstracts",
        icon: FileText,
      },
    ],
  },

  day3: {
    day: "Day 03",
    shortDate: "25 Oct",
    date: "25 October 2026",
    weekday: "Sunday",
    theme: "Arrhythmia, Cardio-Metabolic Medicine & Quiz",
    description:
      "The final scientific morning begins at 8:30 AM and concludes with the Quiz and Valedictory Function.",
    sessions: [
      {
        time: "",
        endTime: "",
        title: 'Session 1 — "Arrhythmia Management: Calming the Storm"',
        speaker:
          "Chairpersons: Dr Rituparna Baruah, Dr Swapan Saha, Dr Monowar Hussain, Dr CP Thakur, Dr Abhijit Bharali",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Session",
        icon: HeartPulse,
      },
      {
        time: "8:30 AM",
        endTime: "8:45 AM",
        title: "CSP",
        speaker: "Dr. Vanita Arora",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "8:45 AM",
        endTime: "8:55 AM",
        title: "Post-MI Ectopics: An Enemy in Disguise",
        speaker: "Dr. Synrang Warjri",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "8:55 AM",
        endTime: "9:05 AM",
        title: "VT Storm — Rhythm on the Edge",
        speaker: "Dr. Utpal Sharma",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "9:05 AM",
        endTime: "9:15 AM",
        title:
          "Atrial Fibrillation — Real-World Decision Pathways",
        speaker: "Dr. Chandan Modak",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "9:15 AM",
        endTime: "9:25 AM",
        title:
          "Risk Stratification of Sudden Cardiac Death — Race Against the Rhythm",
        speaker: "Dr. Romar Dabu",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "9:25 AM",
        endTime: "9:30 AM",
        title: "Discussion",
        speaker: "",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Discussion",
        icon: Users,
      },
      {
        time: "",
        endTime: "",
        title:
          'Session 2 — "Cardio-Metabolic Medicine: The New Frontier"',
        speaker:
          "Chairpersons: Dr Gautam Das, Dr Arun Kumar, Dr Utpal Sharma, Dr Taso Beyong, Dr Libe Nyorak",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Session",
        icon: HeartPulse,
      },
      {
        time: "9:30 AM",
        endTime: "9:40 AM",
        title:
          "Diabetes & Cardiovascular Disease — The Twisted Twins",
        speaker: "Dr. Gaurav Kavi",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "9:40 AM",
        endTime: "9:50 AM",
        title: "GLP Revolution — What We Should Know",
        speaker: "Dr. Saurav Das",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "9:50 AM",
        endTime: "10:00 AM",
        title:
          "Cardio-Renal Syndrome — The Heart-Kidney Tango",
        speaker: "Dr. Oyik Tamut",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "10:00 AM",
        endTime: "10:10 AM",
        title:
          "Obesity in Heart Disease — The Elephant in the Room",
        speaker: "Dr. Karto Ete",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Scientific",
        icon: HeartPulse,
      },
      {
        time: "10:10 AM",
        endTime: "10:15 AM",
        title: "Discussion",
        speaker: "",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Discussion",
        icon: Users,
      },
      {
        time: "",
        endTime: "",
        title: "Session 3",
        speaker: "",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Session",
        icon: BookOpen,
      },
      {
        time: "10:15 AM",
        endTime: "11:15 AM",
        title: "Quiz",
        speaker: "Quiz Master — Dr. S. Ramakrishnan",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Quiz",
        icon: BookOpen,
      },
      {
        time: "11:15 AM",
        endTime: "11:30 AM",
        title: "Valedictory Function",
        speaker: "",
        venue: "Hotel Donyi Polo, Itanagar",
        type: "Ceremony",
        icon: Building2,
      },
    ],
  },
};

/* =========================================================
   BADGE COLORS
========================================================= */

const badgeColors = {
  Registration: "bg-blue-50 text-blue-700 border-blue-100",
  Ceremony: "bg-violet-50 text-violet-700 border-violet-100",
  Keynote: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Scientific: "bg-cyan-50 text-cyan-700 border-cyan-100",
  Clinical: "bg-rose-50 text-rose-700 border-rose-100",
  Discussion: "bg-indigo-50 text-indigo-700 border-indigo-100",
  Research: "bg-purple-50 text-purple-700 border-purple-100",
  Workshop: "bg-orange-50 text-orange-700 border-orange-100",
  Session: "bg-blue-50 text-blue-700 border-blue-100",
  Interventional: "bg-red-50 text-red-700 border-red-100",
  Oration: "bg-amber-50 text-amber-700 border-amber-100",
  Debate: "bg-pink-50 text-pink-700 border-pink-100",
  Abstracts: "bg-purple-50 text-purple-700 border-purple-100",
  Quiz: "bg-green-50 text-green-700 border-green-100",
  Break: "bg-slate-100 text-slate-600 border-slate-200",
};

/* =========================================================
   COMPONENT
========================================================= */

function Schedule() {
  const [activeDay, setActiveDay] = useState("day1");

  const selectedDay = scheduleData[activeDay];

  /* =========================================================
     ANIMATION VARIANTS
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
        staggerChildren: 0.07,
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

          <div className="pointer-events-none absolute inset-0">

            <div className="absolute -right-40 -top-40 h-124 w-124 rounded-full bg-cyan-400/10 blur-3xl sm:h-150 sm:w-150" />

            <div className="absolute -bottom-60 -left-40 h-124 w-124 rounded-full bg-blue-600/10 blur-3xl sm:h-150 sm:w-150" />

            <div className="absolute right-[10%] top-[15%] h-40 w-40 rounded-full bg-orange-400/10 blur-2xl sm:h-56 sm:w-56" />

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

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="max-w-5xl"
            >

              <motion.div
                variants={fadeUp}
                className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-cyan-200 backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.18em]"
              >
                <CalendarDays size={15} className="shrink-0" />
                CSI Northeast Annual Conference 2026
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300 sm:text-sm"
              >
                <Sparkles size={15} />
                Scientific Program
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-5 max-w-4xl text-4xl font-black leading-[1.04] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Three Days of

                <span className="mt-1 block text-cyan-300">
                  Scientific Exchange.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg"
              >
                Explore the scientific program of CardioCon Arunachal 2026 —
                bringing together cardiovascular experts, clinicians,
                researchers and young professionals for academic discussion
                and collaborative learning.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              >

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">

                  <CalendarDays
                    size={18}
                    className="shrink-0 text-cyan-300"
                  />

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Conference Dates
                    </p>

                    <p className="mt-0.5 text-sm font-semibold text-slate-200">
                      23–25 October 2026
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">

                  <MapPin
                    size={18}
                    className="shrink-0 text-orange-300"
                  />

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Host City
                    </p>

                    <p className="mt-0.5 text-sm font-semibold text-slate-200">
                      Itanagar, Arunachal Pradesh
                    </p>
                  </div>

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
            CONFERENCE INFORMATION
        ====================================================== */}

        <section className="border-b border-slate-100 bg-white py-12 sm:py-16">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
            >

              {[
                {
                  icon: CalendarDays,
                  value: "3 Days",
                  label: "23–25 October 2026",
                },
                {
                  icon: Users,
                  value: "~300 Delegates",
                  label: "Expected Participants",
                },
                {
                  icon: BookOpen,
                  value: "Scientific",
                  label: "Academic Programme",
                },
                {
                  icon: Building2,
                  value: "CSI Northeast",
                  label: "Annual Conference 2026",
                },
              ].map(({ icon: Icon, value, label }) => (

                <motion.div
                  variants={fadeUp}
                  key={label}
                  whileHover={{
                    y: -4,
                  }}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition-all hover:border-blue-100 hover:shadow-lg sm:p-6"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <div className="min-w-0">

                    <p className="font-bold text-slate-900">
                      {value}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                      {label}
                    </p>

                  </div>

                </motion.div>

              ))}

            </motion.div>

          </div>

        </section>

        {/* =====================================================
            SCIENTIFIC PROGRAM
        ====================================================== */}

        <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">

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
                Explore the Program
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Select a conference day to explore the provisional scientific
                sessions, workshops, lectures and academic activities.
              </p>

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
                      className={`relative min-w-0 overflow-hidden rounded-xl px-1 py-3.5 text-center outline-none transition sm:px-4 sm:py-4 ${
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
                            active
                              ? "text-blue-100"
                              : "text-slate-400"
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

            {/* ACTIVE DAY HEADER */}

            <AnimatePresence mode="wait">

              <motion.div
                key={`${activeDay}-header`}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="relative mt-8 overflow-hidden rounded-2xl bg-[#071a2d] p-5 text-white sm:mt-10 sm:rounded-3xl sm:p-8"
              >

                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-2xl" />

                <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

                  <div className="min-w-0">

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">

                      <span className="flex items-center gap-2 text-xs font-bold text-cyan-300 sm:text-sm">

                        <CalendarDays size={15} />

                        {selectedDay.weekday},{" "}
                        {selectedDay.date}

                      </span>

                      <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                        Confirmed
                      </span>

                    </div>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                      {selectedDay.theme}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:leading-7">
                      {selectedDay.description}
                    </p>

                  </div>

                  <div className="flex w-fit shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 sm:block sm:px-5 sm:py-4 sm:text-center">

                    <p className="text-2xl font-black text-cyan-300 sm:text-3xl">
                      {
                        selectedDay.sessions.filter(
                          (item) => item.time
                        ).length
                      }
                    </p>

                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:mt-1">
                      Topics
                    </p>

                  </div>

                </div>

              </motion.div>

            </AnimatePresence>

            {/* TIMELINE */}

            <AnimatePresence mode="wait">

              <motion.div
                key={activeDay}
                variants={stagger}
                initial="hidden"
                animate="visible"
                exit={{
                  opacity: 0,
                  y: 8,
                }}
                className="mt-8 sm:mt-10"
              >

                {selectedDay.sessions.map((item, index) => {

                  /*
                   * IMPORTANT FIX:
                   * Some schedule items may not have an icon.
                   * Always provide a valid Lucide component.
                   */
                  const Icon = item.icon || BookOpen;

                  return (
                    <motion.div
                      variants={fadeUp}
                      key={`${activeDay}-${item.time}-${item.title}`}
                      className="relative flex gap-3 pb-5 sm:gap-5 sm:pb-7"
                    >

                      {/* Timeline */}

                      <div className="flex shrink-0 flex-col items-center">

                        <motion.div
                          whileHover={{
                            scale: 1.06,
                          }}
                          className="z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-white shadow-md shadow-blue-950/10 sm:h-13 sm:w-13 sm:rounded-2xl"
                        >

                          <Icon
                            size={19}
                            className="sm:hidden"
                          />

                          <Icon
                            size={22}
                            className="hidden sm:block"
                          />

                        </motion.div>

                        {index !==
                          selectedDay.sessions.length - 1 && (
                          <div className="mt-2 w-px flex-1 bg-linear-to-b from-blue-300 via-slate-300 to-slate-200" />
                        )}

                      </div>

                      {/* Card */}

                      <div className="min-w-0 flex-1">

                        <motion.div
                          whileHover={{
                            y: -2,
                          }}
                          className="group rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50 sm:p-6"
                        >

                          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start sm:gap-6">

                            <div className="min-w-0 flex-1">

                              {/* Time / Badge */}

                              <div className="flex flex-wrap items-center gap-2 sm:gap-3">

                                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700 sm:text-sm">

                                  <Clock3
                                    size={14}
                                    className="shrink-0"
                                  />

                                  <span>
                                    {item.time || "Program"}
                                  </span>

                                  {item.endTime && (
                                    <span className="font-normal text-slate-400">
                                      – {item.endTime}
                                    </span>
                                  )}

                                </div>

                                <span
                                  className={`inline-flex rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide sm:hidden ${
                                    badgeColors[item.type] ||
                                    "bg-slate-100 text-slate-600 border-slate-200"
                                  }`}
                                >
                                  {item.type}
                                </span>

                              </div>

                              {/* Title */}

                              <h3 className="mt-3 wrap-break-word text-base font-bold leading-6 tracking-tight text-slate-900 transition-colors group-hover:text-blue-700 sm:text-xl sm:leading-7 lg:text-2xl">
                                {item.title}
                              </h3>

                              {/* Meta */}

                              <div className="mt-4 flex flex-col gap-2">

                                {item.speaker && (
                                  <div className="flex items-start gap-2">

                                    <UserRound
                                      size={15}
                                      className="mt-0.5 shrink-0 text-slate-400"
                                    />

                                    <p className="text-xs font-medium leading-5 text-slate-600 sm:text-sm">
                                      {item.speaker}
                                    </p>

                                  </div>
                                )}

                                <div className="flex items-start gap-2">

                                  <MapPin
                                    size={15}
                                    className="mt-0.5 shrink-0 text-slate-400"
                                  />

                                  <p className="text-xs leading-5 text-slate-500 sm:text-sm">
                                    {item.venue}
                                  </p>

                                </div>

                              </div>

                            </div>

                            {/* Desktop badge */}

                            <span
                              className={`hidden shrink-0 rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide sm:inline-flex ${
                                badgeColors[item.type] ||
                                "bg-slate-100 text-slate-600 border-slate-200"
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

            {/* NOTICE */}

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
              className="mt-3 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:gap-4 sm:p-5"
            >

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">

                <Info size={18} />

              </div>

              <div>

                <h4 className="text-sm font-bold text-slate-900">
                  Scientific Agenda — CardioCon Arunachal 2026
                </h4>

                <p className="mt-1 text-xs leading-6 text-slate-600 sm:text-sm">
                  Timed scientific agenda for 23–25 October 2026. Venue:
                  Hotel Donyi Polo, Itanagar, Arunachal Pradesh.
                </p>

              </div>

            </motion.div>

          </div>

        </section>

        {/* =====================================================
            PROGRAM DOWNLOAD
        ====================================================== */}

        <section className="bg-white py-20 sm:py-24">

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
              className="relative overflow-hidden rounded-[1.75rem] bg-[#071a2d] px-5 py-10 text-center text-white shadow-2xl sm:rounded-4xl sm:px-10 sm:py-14 lg:px-16"
            >

              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-2xl" />

              <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-2xl" />

              <div className="relative">

                <div className="mx-auto flex h-13 w-13 items-center justify-center rounded-2xl bg-white/10 text-cyan-300 sm:h-14 sm:w-14">

                  <FileText size={25} />

                </div>

                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-300 sm:text-xs">
                  CardioCon Arunachal 2026
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Complete Scientific Program
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  The final downloadable program will include confirmed
                  scientific sessions, faculty, timings and venue information.
                </p>

                <button
                  type="button"
                  className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-blue-800 transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
                >

                  <Download size={18} />

                  Download Program

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />

                </button>

                <p className="mt-3 text-[11px] text-slate-500">
                  Available after final program confirmation
                </p>

              </div>

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

            <HeartPulse
              size={40}
              className="mx-auto text-cyan-300"
            />

            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-200 sm:text-xs">
              23–25 October 2026 · Arunachal Pradesh
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Be part of CardioCon Arunachal 2026.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
              Join the cardiovascular community for three days of scientific
              learning, academic exchange and professional collaboration.
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
                to="/contact"
                className="flex items-center justify-center rounded-xl border border-white/25 px-7 py-3.5 font-semibold transition hover:bg-white/10"
              >
                Contact Secretariat
              </Link>

            </div>

          </motion.div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Schedule;
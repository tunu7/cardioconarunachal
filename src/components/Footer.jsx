import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  ArrowRight,
  HeartPulse,
  ExternalLink,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Conference", path: "/about" },
    { name: "Speakers", path: "/speakers" },
    { name: "Scientific Program", path: "/schedule" },
    { name: "Registration", path: "/registration" },
    { name: "Contact", path: "/contact" },
  ];

  const conferenceLinks = [
    { name: "Scientific Sessions", path: "/schedule" },
    { name: "Faculty & Speakers", path: "/speakers" },
    { name: "Registration Details", path: "/registration" },
    { name: "Venue Information", path: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: FaFacebookF,
    },
    {
      name: "Instagram",
      href: "#",
      icon: FaInstagram,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: FaLinkedinIn,
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#061522] text-slate-300">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-125 w-125 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute -bottom-52 -left-32 h-125 w-125 rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/50 to-transparent" />
      </div>

      {/* =====================================================
          REGISTRATION CTA
      ====================================================== */}
      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-linear-to-r from-blue-800 via-blue-700 to-cyan-700 px-6 py-9 shadow-2xl shadow-black/20 sm:px-10 lg:px-12"
        >
          {/* CTA decoration */}
          <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-white/10" />

          <div className="absolute -bottom-32 right-32 h-56 w-56 rounded-full bg-cyan-300/10" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-start gap-5">
              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-cyan-200 backdrop-blur sm:flex">
                <HeartPulse size={29} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">
                  CardioCon Arunachal 2026
                </p>

                <h2 className="mt-2 max-w-xl text-2xl font-bold text-white sm:text-3xl">
                  Be part of the cardiovascular community.
                </h2>

                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-100">
                  <span className="flex items-center gap-2">
                    <CalendarDays
                      size={16}
                      className="text-cyan-300"
                    />
                    15–17 March 2026
                  </span>

                  <span className="flex items-center gap-2">
                    <MapPin
                      size={16}
                      className="text-cyan-300"
                    />
                    Itanagar, Arunachal Pradesh
                  </span>
                </div>
              </div>
            </div>

            <Link
              to="/registration"
              className="group flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Register Now

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1.2fr] lg:gap-10">

          {/* =================================================
              BRAND
          ================================================== */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white p-1">
                <img
                  src="/logo.png"
                  alt="CardioCon Arunachal"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-tight text-white">
                  CardioCon
                  <span className="ml-1 text-cyan-300">
                    Arunachal
                  </span>
                </h2>

                <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-slate-400">
                  Cardiovascular Conference
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              A scientific platform bringing together cardiologists,
              physicians, researchers and healthcare professionals to
              exchange knowledge, discuss clinical advances and strengthen
              cardiovascular care.
            </p>

            {/* Social */}
            <div className="mt-7">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                Connect With Us
              </p>

              <div className="flex gap-3">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <motion.a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -3,
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                    aria-label={name}
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-3.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group flex w-fit items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-300"
                >
                  <span className="h-1 w-1 rounded-full bg-slate-600 transition-all duration-300 group-hover:w-3 group-hover:bg-cyan-400" />

                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* =================================================
              CONFERENCE
          ================================================== */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Conference
            </h3>

            <div className="mt-6 flex flex-col gap-3.5">
              {conferenceLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group flex w-fit items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-300"
                >
                  <span className="h-1 w-1 rounded-full bg-slate-600 transition-all duration-300 group-hover:w-3 group-hover:bg-cyan-400" />

                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              {/* Email */}
              <a
                href="mailto:info@cardioconarunachal.com"
                className="group flex items-start gap-3"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-cyan-300 transition group-hover:bg-cyan-400/10">
                  <Mail size={17} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-slate-300 transition group-hover:text-white">
                    info@cardioconarunachal.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+91XXXXXXXXXX"
                className="group flex items-start gap-3"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-cyan-300 transition group-hover:bg-cyan-400/10">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-slate-300 transition group-hover:text-white">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-cyan-300">
                  <MapPin size={17} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Conference Location
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    Itanagar
                    <br />
                    Arunachal Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM FOOTER
        ====================================================== */}
        <div className="mt-14 border-t border-white/10 pt-7">

          <div className="flex flex-col gap-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()} CardioCon Arunachal.
              All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link
                to="/privacy"
                className="transition hover:text-slate-300"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="transition hover:text-slate-300"
              >
                Terms
              </Link>

              <Link
                to="/contact"
                className="flex items-center gap-1.5 transition hover:text-slate-300"
              >
                Contact
                <ExternalLink size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SUBTLE BOTTOM ACCENT
      ====================================================== */}
      <div className="flex h-1 w-full">
        <div className="flex-1 bg-blue-700" />
        <div className="flex-1 bg-cyan-500" />
        <div className="flex-1 bg-blue-700" />
      </div>
    </footer>
  );
}

export default Footer;
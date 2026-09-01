import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  CalendarDays,
  MapPin,
} from "lucide-react";
import cardioconLogo from "../assets/cardioconlogo.png";
import csiLogo from "../assets/csi-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Speakers", path: "/speakers" },
  { name: "Schedule", path: "/schedule" },
  { name: "Registration", path: "/registration" },
  { name: "Contact", path: "/contact" },
];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent page scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl"
            : "border-b border-slate-200/60 bg-white"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* =========================
              LOGO
          ========================= */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="group flex min-w-0 items-center gap-3"
          >
            <div className="flex items-center gap-2 sm:gap-3">
  <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }} className="flex h-12 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-14">
    <img src={csiLogo} alt="Cardiology Society of India — North East Chapter" className="h-full w-full object-contain" />
  </motion.div>
  <div className="h-10 w-px bg-slate-200 sm:h-12" />
  <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }} className="flex h-14 w-28 shrink-0 items-center justify-center sm:h-16 sm:w-36">
    <img src={cardioconLogo} alt="CardioCon Arunachal 2026" className="h-full w-full object-contain" />
  </motion.div>
</div>

            

          </Link>

          {/* =========================
              DESKTOP NAVIGATION
          ========================= */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="relative px-3 py-3"
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`relative z-10 text-sm font-semibold transition-colors duration-200 ${
                        isActive
                          ? "text-blue-700"
                          : "text-slate-600 hover:text-slate-950"
                      }`}
                    >
                      {link.name}
                    </span>

                    {isActive && (
                      <motion.span
                        layoutId="navbar-active"
                        className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-blue-700"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* =========================
              DESKTOP CTA
          ========================= */}
          <div className="hidden items-center lg:flex">
            <Link
              to="/registration"
              className="group flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-sm shadow-blue-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-900/15"
            >
              Register Now

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* =========================
              MOBILE BUTTON
          ========================= */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-800 transition hover:bg-slate-100 lg:hidden"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.8,
                  }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={23} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.8,
                  }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu size={23} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Small accent line */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-blue-200 to-transparent" />
      </motion.header>

      {/* ======================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-sm lg:hidden"
            />

            {/* Mobile Navigation */}
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.28,
                ease: "easeOut",
              }}
              className="fixed left-0 right-0 top-20 z-40 max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-100 bg-white shadow-2xl lg:hidden"
            >
              <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">

                {/* Conference info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                  className="mb-6 grid grid-cols-2 gap-3"
                >
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="flex items-center gap-2 text-blue-700">
                      <CalendarDays size={16} />

                      <span className="text-xs font-bold">
                        Conference
                      </span>
                    </div>

                    <p className="mt-2 text-xs font-medium text-slate-600">
                      23–25 October 2026
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="flex items-center gap-2 text-blue-700">
                      <MapPin size={16} />

                      <span className="text-xs font-bold">
                        Venue
                      </span>
                    </div>

                    <p className="mt-2 text-xs font-medium text-slate-600">
                      Itanagar, Arunachal
                    </p>
                  </div>
                </motion.div>

                {/* Navigation links */}
                <nav className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.08 + index * 0.04,
                      }}
                    >
                      <NavLink
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `group flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-semibold transition-all ${
                            isActive
                              ? "bg-blue-50 text-blue-700"
                              : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <span>{link.name}</span>

                            <ArrowRight
                              size={16}
                              className={`transition-transform group-hover:translate-x-1 ${
                                isActive
                                  ? "text-blue-600"
                                  : "text-slate-300"
                              }`}
                            />
                          </>
                        )}
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>

                {/* Registration CTA */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{ delay: 0.32 }}
                  className="mt-6 border-t border-slate-100 pt-6"
                >
                  <Link
                    to="/registration"
                    onClick={() => setIsOpen(false)}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/10 transition hover:bg-blue-800"
                  >
                    Register for CardioCon

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <p className="mt-3 text-center text-xs text-slate-400">
                    CardioCon Arunachal 2026
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
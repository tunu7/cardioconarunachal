import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programme", path: "/programme" },
  { name: "Speakers", path: "/speakers" },
  { name: "Registration", path: "/registration" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ===================== TOP BAR ===================== */}

      <div className="hidden lg:block bg-slate-900 text-slate-300 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-10 flex items-center justify-between">
            <div className="flex items-center gap-6 xl:gap-8">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Itanagar, Arunachal Pradesh</span>
              </div>

              <div className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
                <span>info@cardioconarunachal.org</span>
              </div>

              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-blue-400" />
                <span>+91 98765 43210</span>
              </div>
            </div>

            <p className="text-slate-400">
              15–16 November 2026
            </p>
          </div>
        </div>
      </div>

      {/* ===================== NAVBAR ===================== */}

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex h-20 items-center justify-between gap-8">

            {/* Logo */}

            <NavLink
              to="/"
              className="flex items-center gap-3 shrink-0"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-blue-700 to-blue-900 text-white font-bold shadow-md">
                CC
              </div>

              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-slate-900 leading-tight">
                  CardioCon Arunachal
                </h1>

                <p className="text-xs text-slate-500">
                  Annual Cardiology Conference
                </p>
              </div>
            </NavLink>

            {/* Desktop Navigation */}

            <nav className="hidden lg:flex flex-1 items-center justify-center gap-8 xl:gap-10">

              {navLinks.map((item) => (

                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative py-2 transition-colors duration-300 ${
                      isActive
                        ? "text-blue-700 font-semibold"
                        : "text-slate-700 hover:text-blue-700"
                    }`
                  }
                >
                  {item.name}
                </NavLink>

              ))}

            </nav>

            {/* Register Button */}

            <div className="hidden lg:flex shrink-0">

              <NavLink
                to="/registration"
                className="rounded-lg bg-blue-700 px-6 py-2.5 font-semibold text-white transition hover:bg-blue-800 shadow-md"
              >
                Register Now
              </NavLink>

            </div>

            {/* Mobile Toggle */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden rounded-lg p-2 hover:bg-slate-100 transition"
              aria-label="Toggle navigation"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>

          </div>

        </div>

        {/* ===================== MOBILE MENU ===================== */}

        <div
          className={`overflow-hidden lg:hidden transition-[max-height] duration-300 ease-in-out ${
            isOpen ? "max-h-125" : "max-h-0"
          }`}
        >

          <nav className="border-t border-slate-200 bg-white">

            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col">

              {navLinks.map((item) => (

                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `border-b border-slate-100 py-3 transition ${
                      isActive
                        ? "text-blue-700 font-semibold"
                        : "text-slate-700 hover:text-blue-700"
                    }`
                  }
                >
                  {item.name}
                </NavLink>

              ))}

              <NavLink
                to="/registration"
                onClick={() => setIsOpen(false)}
                className="mt-5 rounded-lg bg-blue-700 py-3 text-center font-semibold text-white transition hover:bg-blue-800"
              >
                Register Now
              </NavLink>

            </div>

          </nav>

        </div>

      </header>
    </>
  );
};

export default Navbar;
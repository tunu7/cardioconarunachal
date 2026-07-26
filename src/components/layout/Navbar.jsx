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

  const activeClass = ({ isActive }) =>
    `transition-all duration-300 ${
      isActive
        ? "text-blue-700 font-semibold"
        : "text-slate-700 hover:text-blue-700"
    }`;

  return (
    <>
      {/* =================== TOP BAR =================== */}

      <div className="hidden lg:block bg-slate-900 text-slate-300 text-sm">
        <div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-between">

          <div className="flex items-center gap-8">

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

          <div className="text-slate-400">
            Annual Conference • 15–16 November 2026
          </div>

        </div>
      </div>

      {/* =================== NAVBAR =================== */}

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200">

        <div className="max-w-7xl mx-auto px-6">

          <div className="h-24 flex items-center justify-between">

            {/* Logo */}

            <NavLink
              to="/"
              className="flex items-center gap-4 shrink-0"
            >
              <div className="w-14 h-14 rounded-full bg-linear-to-br from-blue-700 to-blue-900 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                CC
              </div>

              <div>

                <h1 className="text-xl font-bold text-slate-900 leading-none">
                  CardioCon Arunachal
                </h1>

                <p className="text-sm text-slate-500 mt-1">
                  Annual Cardiology Conference
                </p>

              </div>

            </NavLink>

            {/* Desktop Navigation */}

            <nav className="hidden lg:flex items-center gap-10">

              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={activeClass}
                >
                  {item.name}
                </NavLink>
              ))}

            </nav>

            {/* Register */}

            <div className="hidden lg:flex">

              <NavLink
                to="/registration"
                className="rounded-xl bg-blue-700 hover:bg-blue-800 px-7 py-3 text-white font-semibold shadow-lg transition"
              >
                Register Now
              </NavLink>

            </div>

            {/* Mobile */}

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>

          </div>

        </div>

        {/* ================= MOBILE MENU ================= */}

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-125" : "max-h-0"
          }`}
        >

          <div className="border-t border-slate-200 bg-white">

            <nav className="max-w-7xl mx-auto px-6 py-6">

              <div className="flex flex-col">

                {navLinks.map((item) => (

                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `py-4 border-b border-slate-100 ${
                        isActive
                          ? "text-blue-700 font-semibold"
                          : "text-slate-700"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>

                ))}

                <NavLink
                  to="/registration"
                  onClick={() => setIsOpen(false)}
                  className="mt-6 bg-blue-700 text-white rounded-xl py-3 text-center font-semibold"
                >
                  Register Now
                </NavLink>

              </div>

            </nav>

          </div>

        </div>

      </header>
    </>
  );
}

export default Navbar;
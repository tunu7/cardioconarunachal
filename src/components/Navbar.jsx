import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Speakers", path: "/speakers" },
    { name: "Schedule", path: "/schedule" },
    { name: "Registration", path: "/registration" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm border-b z-50">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="CardioCon Arunachal"
            className="w-12 h-12 object-contain"
          />

          <div>
            <h2 className="font-bold text-lg text-slate-800">
              CardioCon Arunachal
            </h2>

            <p className="text-xs text-slate-500">
              Cardiovascular Conference
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-blue-700"
                    : "text-slate-600 hover:text-blue-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <button className="rounded-lg bg-blue-700 px-5 py-2.5 text-white hover:bg-blue-800 transition">
            Register Now
          </button>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="flex flex-col px-6 py-5">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `py-3 ${
                    isActive
                      ? "text-blue-700 font-semibold"
                      : "text-slate-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <button className="mt-4 rounded-lg bg-blue-700 py-3 text-white">
              Register Now
            </button>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
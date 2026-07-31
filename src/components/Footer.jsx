import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h2 className="text-xl font-bold text-white">
              CardioCon Arunachal
            </h2>

            <p className="mt-4 leading-7">
              A premier cardiovascular conference bringing together
              healthcare professionals, researchers, and cardiologists
              to advance cardiac care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link to="/" className="hover:text-red-400 transition-colors">
                Home
              </Link>
              <Link to="/about" className="hover:text-red-400 transition-colors">
                About
              </Link>
              <Link to="/speakers" className="hover:text-red-400 transition-colors">
                Speakers
              </Link>
              <Link to="/schedule" className="hover:text-red-400 transition-colors">
                Schedule
              </Link>
              <Link
                to="/registration"
                className="hover:text-red-400 transition-colors"
              >
                Registration
              </Link>
              <Link to="/contact" className="hover:text-red-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-red-400" />
                <span>info@cardioconarunachal.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-red-400" />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-red-400" />
                <span>Itanagar, Arunachal Pradesh</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-red-600 transition-all duration-300 flex items-center justify-center"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-red-600 transition-all duration-300 flex items-center justify-center"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-red-600 transition-all duration-300 flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} CardioCon Arunachal. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
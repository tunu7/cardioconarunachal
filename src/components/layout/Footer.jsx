import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  

  return (
    <footer className="bg-slate-950 text-white">

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="grid lg:grid-cols-12 gap-14">

          {/* ================= ABOUT ================= */}

          <div className="lg:col-span-5">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center text-xl font-bold shadow-lg">
                CC
              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  CardioCon Arunachal
                </h2>

                <p className="text-slate-400 text-sm mt-1">
                  Annual Cardiology Conference
                </p>

              </div>

            </div>

            <p className="mt-8 text-slate-400 leading-8 max-w-md">
              CardioCon Arunachal is a premier scientific conference bringing
              together cardiologists, physicians, researchers and healthcare
              professionals to promote excellence in cardiovascular medicine,
              research and education.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-blue-700 transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-pink-600 transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-sky-600 transition flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          

          {/* ================= CONTACT ================= */}

          <div className="lg:col-span-4">

            <h3 className="text-lg font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">

                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-blue-400" />
                </div>

                <div>

                  <h4 className="font-medium">
                    Venue
                  </h4>

                  <p className="text-slate-400 mt-1 leading-7">
                    Itanagar,
                    <br />
                    Arunachal Pradesh, India
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                  <FaEnvelope className="text-blue-400" />
                </div>

                <div>

                  <h4 className="font-medium">
                    Email
                  </h4>

                  <p className="text-slate-400 mt-1">
                    info@cardioconarunachal.org
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                  <FaPhoneAlt className="text-blue-400" />
                </div>

                <div>

                  <h4 className="font-medium">
                    Phone
                  </h4>

                  <p className="text-slate-400 mt-1">
                    +91 98765 43210
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>


      </div>

    </footer>
  );
}

export default Footer;
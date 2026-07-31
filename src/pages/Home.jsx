import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Calendar,
  MapPin,
  Users,
  Stethoscope,
  ArrowRight,
} from "lucide-react";

function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">

    
        {/* Hero */}
<section className="relative overflow-hidden bg-linear-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
  <div className="absolute inset-0 bg-black/30"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="min-h-screen flex items-center">

      <div className="max-w-3xl">

        <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
          Annual Cardiovascular Conference
        </span>

        <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          CardioCon
          <span className="block text-cyan-300">
            Arunachal 2026
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
          Bringing together leading cardiologists, physicians,
          researchers, healthcare professionals and students to
          shape the future of cardiovascular medicine through
          innovation, collaboration and education.
        </p>

        {/* CTA */}
        <div className="mt-10 mb-28 flex flex-col sm:flex-row gap-4">

          <button className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold shadow-lg transition hover:bg-cyan-400 hover:shadow-xl">
            Register Now
            <ArrowRight size={18} />
          </button>

          <button className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-900">
            View Program
          </button>

        </div>

      </div>

    </div>

  </div>
</section>

        {/* Quick Info */}
<section className="relative -mt-10 lg:-mt-12 z-20 pb-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-white rounded-2xl shadow-xl p-8 flex items-center gap-5">
        <Calendar
          className="text-blue-700 shrink-0"
          size={34}
        />

        <div>
          <h3 className="font-bold text-lg text-slate-800">
            Conference Date
          </h3>

          <p className="text-slate-600">
            15–17 March 2026
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 flex items-center gap-5">
        <MapPin
          className="text-blue-700 shrink-0"
          size={34}
        />

        <div>
          <h3 className="font-bold text-lg text-slate-800">
            Venue
          </h3>

          <p className="text-slate-600">
            Itanagar, Arunachal Pradesh
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 flex items-center gap-5">
        <Users
          className="text-blue-700 shrink-0"
          size={34}
        />

        <div>
          <h3 className="font-bold text-lg text-slate-800">
            500+ Delegates
          </h3>

          <p className="text-slate-600">
            Doctors, Researchers & Students
          </p>
        </div>
      </div>

    </div>

  </div>
</section>

        {/* About */}
        <section className="bg-slate-50 py-24">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-20 items-center">

              <div className="max-w-xl">

                <span className="uppercase tracking-widest font-semibold text-blue-700">
                  About The Conference
                </span>

                <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  Advancing Cardiovascular Care Together
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  CardioCon Arunachal is one of the region's premier
                  academic conferences dedicated to cardiovascular
                  medicine. The conference serves as a platform for
                  knowledge exchange, research presentations, clinical
                  discussions and collaboration among healthcare
                  professionals.
                </p>

                <button className="mt-8 rounded-lg bg-blue-700 px-8 py-3 text-white font-semibold transition hover:bg-blue-800">
                  Learn More
                </button>

              </div>

              <div className="w-full h-112.5 rounded-3xl bg-linear-to-br from-slate-200 to-slate-300 flex items-center justify-center shadow-lg">

                <Stethoscope
                  size={120}
                  className="text-slate-500"
                />

              </div>

            </div>

          </div>

        </section>

        {/* Highlights */}
        <section className="py-24">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="max-w-2xl mx-auto text-center">

              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Conference Highlights
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Learn from nationally renowned experts and explore the latest
                advances in cardiovascular medicine through scientific sessions,
                workshops and collaborative discussions.
              </p>

            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

              {[
                "Keynote Sessions",
                "Live Case Discussions",
                "Research Presentations",
                "Hands-on Workshops",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="mb-6 rounded-full bg-blue-100 p-5">
                    <Stethoscope
                      size={36}
                      className="text-blue-700"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-800">
                    {item}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Gain valuable insights through expert-led sessions
                    and practical learning opportunities.
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Home;
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  HeartPulse,
  Users,
  Microscope,
  Award,
  CheckCircle2,
} from "lucide-react";

function About() {
  return (
    <>
      <Navbar />

      <main className="pt-20">

        {/* Hero */}
        <section className="bg-linear-to-r from-blue-900 via-blue-800 to-sky-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

            <div className="max-w-3xl">

              <span className="uppercase tracking-[3px] text-cyan-300 font-semibold">
                About CardioCon Arunachal
              </span>

              <h1 className="mt-4 text-5xl lg:text-6xl font-bold leading-tight">
                Advancing Cardiovascular
                <span className="block text-cyan-300">
                  Excellence Together
                </span>
              </h1>

              <p className="mt-8 text-lg leading-8 text-slate-200">
                CardioCon Arunachal is a premier scientific conference dedicated
                to advancing cardiovascular medicine through innovation,
                education, collaboration, and clinical excellence.
              </p>

            </div>

          </div>
        </section>

        {/* About */}
        <section className="py-24 bg-white">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left */}

              <div>

                <span className="text-blue-700 uppercase tracking-widest font-semibold">
                  Who We Are
                </span>

                <h2 className="mt-3 text-4xl font-bold text-slate-900">
                  Building the Future of Cardiac Healthcare
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  CardioCon Arunachal serves as a platform where healthcare
                  professionals, cardiologists, physicians, researchers,
                  academicians, and medical students come together to exchange
                  knowledge, discuss emerging technologies, and share best
                  clinical practices.
                </p>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  The conference promotes interdisciplinary collaboration while
                  encouraging research, innovation, and continuous medical
                  education for improving cardiovascular healthcare across the
                  region and beyond.
                </p>

              </div>

              {/* Right */}

              <div className="bg-slate-100 rounded-3xl h-112.5 flex items-center justify-center shadow-lg">

                <HeartPulse
                  size={130}
                  className="text-blue-700"
                />

              </div>

            </div>

          </div>

        </section>

        {/* Vision */}
        <section className="py-24 bg-slate-50">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto">

              <h2 className="text-4xl font-bold text-slate-900">
                Our Vision
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                To create one of India's leading cardiovascular conferences that
                inspires innovation, encourages collaboration, and improves
                patient care through scientific excellence.
              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

              <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                <Users className="mx-auto text-blue-700 mb-5" size={42} />

                <h3 className="font-semibold text-xl">
                  Collaboration
                </h3>

                <p className="mt-4 text-slate-600">
                  Connecting experts and healthcare professionals.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                <Microscope className="mx-auto text-blue-700 mb-5" size={42} />

                <h3 className="font-semibold text-xl">
                  Innovation
                </h3>

                <p className="mt-4 text-slate-600">
                  Showcasing modern research and clinical advancements.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                <Award className="mx-auto text-blue-700 mb-5" size={42} />

                <h3 className="font-semibold text-xl">
                  Excellence
                </h3>

                <p className="mt-4 text-slate-600">
                  Promoting the highest standards in cardiac care.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                <HeartPulse className="mx-auto text-blue-700 mb-5" size={42} />

                <h3 className="font-semibold text-xl">
                  Better Outcomes
                </h3>

                <p className="mt-4 text-slate-600">
                  Improving lives through evidence-based healthcare.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Why Attend */}

        <section className="py-24 bg-white">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center">

              <h2 className="text-4xl font-bold text-slate-900">
                Why Attend CardioCon Arunachal?
              </h2>

            </div>

            <div className="grid lg:grid-cols-2 gap-10 mt-16">

              {[
                "Learn from renowned national and international experts.",
                "Discover the latest clinical research and innovations.",
                "Participate in interactive workshops and live discussions.",
                "Expand your professional network.",
                "Earn valuable continuing medical education experience.",
                "Collaborate with healthcare professionals across specialties.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 bg-slate-50 p-6 rounded-xl"
                >
                  <CheckCircle2
                    className="text-green-600 mt-1"
                    size={24}
                  />

                  <p className="text-lg text-slate-700">
                    {item}
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

export default About;
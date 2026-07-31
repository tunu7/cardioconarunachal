import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Stethoscope,
  GraduationCap,
  Building2,
  Award,
} from "lucide-react";

const speakers = [
  {
    name: "Dr. John Doe",
    designation: "Senior Interventional Cardiologist",
    hospital: "Apollo Hospitals, New Delhi",
  },
  {
    name: "Dr. Jane Smith",
    designation: "Professor of Cardiology",
    hospital: "AIIMS, New Delhi",
  },
  {
    name: "Dr. Michael Brown",
    designation: "Cardiac Electrophysiologist",
    hospital: "Fortis Healthcare",
  },
  {
    name: "Dr. Emily Wilson",
    designation: "Consultant Cardiologist",
    hospital: "Narayana Health",
  },
  {
    name: "Dr. David Lee",
    designation: "Heart Failure Specialist",
    hospital: "Medanta Hospital",
  },
  {
    name: "Dr. Sarah Thomas",
    designation: "Director of Cardiology",
    hospital: "Max Healthcare",
  },
];

function Speakers() {
  return (
    <>
      <Navbar />

      <main className="pt-20">

        {/* Hero */}
        <section className="bg-linear-to-r from-blue-900 via-blue-800 to-sky-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

            <div className="max-w-3xl">

              <span className="uppercase tracking-[3px] text-cyan-300 font-semibold">
                Distinguished Faculty
              </span>

              <h1 className="mt-4 text-5xl lg:text-6xl font-bold">
                Invited Speakers
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-200">
                Learn from renowned cardiologists, researchers, and healthcare
                leaders who are shaping the future of cardiovascular medicine
                through research, innovation, and clinical excellence.
              </p>

            </div>

          </div>
        </section>

        {/* Intro */}
        <section className="bg-white py-20">

          <div className="max-w-4xl mx-auto px-4 text-center">

            <h2 className="text-4xl font-bold text-slate-900">
              Meet Our Esteemed Faculty
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              CardioCon Arunachal proudly hosts nationally recognized experts
              who will deliver keynote lectures, scientific sessions, live case
              discussions, and interactive workshops.
            </p>

          </div>

        </section>

        {/* Speaker Cards */}

        <section className="bg-slate-50 py-24">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="group rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 hover:-translate-y-2"
                >

                  {/* Image Placeholder */}
                  <div className="h-72 bg-linear-to-br from-blue-100 to-slate-200 flex items-center justify-center">

                    <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-lg">

                      <Stethoscope
                        size={52}
                        className="text-blue-700"
                      />

                    </div>

                  </div>

                  {/* Details */}

                  <div className="p-8">

                    <h3 className="text-2xl font-bold text-slate-900">
                      {speaker.name}
                    </h3>

                    <div className="mt-5 flex items-start gap-3">

                      <GraduationCap
                        size={20}
                        className="text-blue-700 mt-1"
                      />

                      <p className="text-slate-700">
                        {speaker.designation}
                      </p>

                    </div>

                    <div className="mt-4 flex items-start gap-3">

                      <Building2
                        size={20}
                        className="text-blue-700 mt-1"
                      />

                      <p className="text-slate-600">
                        {speaker.hospital}
                      </p>

                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">

                      <Award
                        size={18}
                        className="text-blue-700"
                      />

                      <span className="text-sm font-medium text-blue-700">
                        Keynote Speaker
                      </span>

                    </div>

                  </div>

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

export default Speakers;
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Download,
  UserRound,
  Coffee,
  Presentation,
  Users,
} from "lucide-react";

const schedule = [
  {
    time: "08:30 AM",
    title: "Registration & Welcome Tea",
    speaker: "-",
    type: "Registration",
    icon: Coffee,
  },
  {
    time: "09:30 AM",
    title: "Opening Ceremony",
    speaker: "Organizing Committee",
    type: "Ceremony",
    icon: Users,
  },
  {
    time: "10:00 AM",
    title: "Keynote Address",
    speaker: "Dr. John Doe",
    type: "Keynote",
    icon: Presentation,
  },
  {
    time: "11:30 AM",
    title: "Scientific Session I",
    speaker: "Faculty Panel",
    type: "Scientific",
    icon: UserRound,
  },
  {
    time: "01:00 PM",
    title: "Lunch Break",
    speaker: "",
    type: "Break",
    icon: Coffee,
  },
  {
    time: "02:00 PM",
    title: "Live Case Discussion",
    speaker: "Expert Panel",
    type: "Workshop",
    icon: Presentation,
  },
  {
    time: "04:00 PM",
    title: "Panel Discussion",
    speaker: "National Faculty",
    type: "Discussion",
    icon: Users,
  },
];

const badgeColors = {
  Registration: "bg-blue-100 text-blue-700",
  Ceremony: "bg-purple-100 text-purple-700",
  Keynote: "bg-green-100 text-green-700",
  Scientific: "bg-cyan-100 text-cyan-700",
  Workshop: "bg-orange-100 text-orange-700",
  Discussion: "bg-indigo-100 text-indigo-700",
  Break: "bg-slate-200 text-slate-700",
};

function Schedule() {
  return (
    <>
      <Navbar />

      <main className="pt-20">

        {/* Hero */}
        <section className="bg-linear-to-r from-blue-900 via-blue-800 to-sky-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

            <span className="uppercase tracking-[3px] text-cyan-300 font-semibold">
              Conference Agenda
            </span>

            <h1 className="mt-4 text-5xl lg:text-6xl font-bold">
              Conference Schedule
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Explore the scientific sessions, keynote lectures,
              workshops, live case discussions, and networking
              opportunities planned for CardioCon Arunachal 2026.
            </p>

          </div>
        </section>

        {/* Overview */}

        <section className="bg-white py-16">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid md:grid-cols-3 gap-8">

              <div className="rounded-2xl border p-8 text-center shadow-sm">
                <CalendarDays
                  className="mx-auto text-blue-700"
                  size={40}
                />

                <h3 className="mt-4 text-xl font-bold">
                  3 Days
                </h3>

                <p className="text-slate-600 mt-2">
                  Scientific Program
                </p>
              </div>

              <div className="rounded-2xl border p-8 text-center shadow-sm">
                <Users
                  className="mx-auto text-blue-700"
                  size={40}
                />

                <h3 className="mt-4 text-xl font-bold">
                  40+ Sessions
                </h3>

                <p className="text-slate-600 mt-2">
                  Expert-Led Discussions
                </p>
              </div>

              <div className="rounded-2xl border p-8 text-center shadow-sm">
                <MapPin
                  className="mx-auto text-blue-700"
                  size={40}
                />

                <h3 className="mt-4 text-xl font-bold">
                  Main Auditorium
                </h3>

                <p className="text-slate-600 mt-2">
                  Itanagar, Arunachal Pradesh
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Day Selector */}

        <section className="py-8 bg-slate-50">

          <div className="max-w-7xl mx-auto px-4">

            <div className="flex flex-wrap justify-center gap-4">

              <button className="rounded-full bg-blue-700 px-8 py-3 text-white font-semibold">
                Day 1
              </button>

              <button className="rounded-full border px-8 py-3 hover:bg-blue-50">
                Day 2
              </button>

              <button className="rounded-full border px-8 py-3 hover:bg-blue-50">
                Day 3
              </button>

            </div>

          </div>

        </section>

        {/* Timeline */}

        <section className="bg-slate-50 py-20">

          <div className="max-w-5xl mx-auto px-4">

            {schedule.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="relative flex gap-6 pb-10"
                >
                  {/* Timeline */}

                  <div className="flex flex-col items-center">

                    <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center shadow-lg">
                      <Icon size={24} />
                    </div>

                    {index !== schedule.length - 1 && (
                      <div className="w-1 flex-1 bg-blue-200 mt-2"></div>
                    )}

                  </div>

                  {/* Content */}

                  <div className="flex-1 rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition">

                    <div className="flex flex-wrap justify-between gap-4">

                      <div>

                        <div className="flex items-center gap-2 text-blue-700 font-semibold">
                          <Clock3 size={18} />
                          {item.time}
                        </div>

                        <h3 className="mt-3 text-2xl font-bold text-slate-900">
                          {item.title}
                        </h3>

                        {item.speaker && (
                          <p className="mt-2 text-slate-600">
                            {item.speaker}
                          </p>
                        )}

                      </div>

                      <span
                        className={`h-fit rounded-full px-4 py-2 text-sm font-semibold ${
                          badgeColors[item.type]
                        }`}
                      >
                        {item.type}
                      </span>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </section>

        {/* CTA */}

        <section className="py-20 bg-white">

          <div className="max-w-4xl mx-auto px-4">

            <div className="rounded-3xl bg-blue-700 text-white text-center p-12">

              <h2 className="text-4xl font-bold">
                Download the Complete Program
              </h2>

              <p className="mt-5 text-blue-100">
                Get the detailed scientific agenda, speaker timings,
                workshops, and venue information.
              </p>

              <button className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 hover:bg-slate-100">
                <Download size={20} />
                Download Schedule
              </button>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Schedule;
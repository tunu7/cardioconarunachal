import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const schedule = [
  {
    time: "09:00 AM",
    event: "Registration",
  },
  {
    time: "10:00 AM",
    event: "Opening Ceremony",
  },
  {
    time: "11:00 AM",
    event: "Keynote Session",
  },
  {
    time: "01:00 PM",
    event: "Lunch Break",
  },
  {
    time: "02:00 PM",
    event: "Scientific Sessions",
  },
];

function Schedule() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-20">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-slate-800">
            Conference Schedule
          </h1>

          <div className="mt-10 space-y-4">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="flex justify-between rounded-xl border p-5"
              >
                <span className="font-semibold">{item.time}</span>

                <span>{item.event}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Schedule;
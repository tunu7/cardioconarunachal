import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Speakers() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-slate-800">
            Invited Speakers
          </h1>

          <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((speaker) => (
              <div
                key={speaker}
                className="rounded-xl border bg-white p-6 shadow-sm"
              >
                <div className="h-48 rounded-lg bg-slate-200"></div>

                <h3 className="mt-5 text-xl font-semibold">
                  Speaker Name
                </h3>

                <p className="text-slate-600">
                  Cardiologist
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Hospital / Institution
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Speakers;
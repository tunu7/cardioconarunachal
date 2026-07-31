import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Registration() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-20">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-slate-800">
            Registration
          </h1>

          <div className="mt-10 rounded-xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">
              Register for CardioCon Arunachal
            </h2>

            <p className="mt-4 text-slate-600">
              Registration details, delegate fees, payment instructions and
              important dates will be available here.
            </p>

            <button className="mt-8 rounded-lg bg-blue-700 px-6 py-3 font-medium text-white hover:bg-blue-800">
              Register Now
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Registration;
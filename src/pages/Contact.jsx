import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-20">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-slate-800">
            Contact Us
          </h1>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold">
                Organizing Committee
              </h3>

              <p className="mt-4 text-slate-600">
                Email: info@cardioconarunachal.com
              </p>

              <p className="mt-2 text-slate-600">
                Phone: +91 XXXXX XXXXX
              </p>

              <p className="mt-2 text-slate-600">
                Itanagar, Arunachal Pradesh
              </p>
            </div>

            <div className="h-72 rounded-xl bg-slate-200 flex items-center justify-center">
              Google Map
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  User,
  Mail,
  Phone,
  Building2,
  BriefcaseMedical,
  GraduationCap,
  CalendarDays,
  CreditCard,
} from "lucide-react";

function Registration() {
  return (
    <>
      <Navbar />

      <main className="pt-20">

        {/* Hero */}
        <section className="bg-linear-to-r from-blue-900 via-blue-800 to-sky-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

            <span className="uppercase tracking-[3px] text-cyan-300 font-semibold">
              CardioCon Arunachal 2026
            </span>

            <h1 className="mt-4 text-5xl lg:text-6xl font-bold">
              Delegate Registration
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Register to participate in CardioCon Arunachal 2026. Complete
              the form below to reserve your seat for keynote lectures,
              scientific sessions, workshops, and networking opportunities.
            </p>

          </div>
        </section>

        {/* Information Cards */}

        <section className="bg-white py-16">

          <div className="max-w-7xl mx-auto px-4">

            <div className="grid md:grid-cols-3 gap-8">

              <div className="rounded-2xl border p-8 text-center shadow-sm">
                <CalendarDays
                  className="mx-auto text-blue-700"
                  size={40}
                />
                <h3 className="mt-4 text-xl font-bold">
                  Conference Dates
                </h3>
                <p className="mt-2 text-slate-600">
                  15–17 March 2026
                </p>
              </div>

              <div className="rounded-2xl border p-8 text-center shadow-sm">
                <BriefcaseMedical
                  className="mx-auto text-blue-700"
                  size={40}
                />
                <h3 className="mt-4 text-xl font-bold">
                  Eligible Delegates
                </h3>
                <p className="mt-2 text-slate-600">
                  Doctors, Residents, Faculty & Students
                </p>
              </div>

              <div className="rounded-2xl border p-8 text-center shadow-sm">
                <CreditCard
                  className="mx-auto text-blue-700"
                  size={40}
                />
                <h3 className="mt-4 text-xl font-bold">
                  Secure Payment
                </h3>
                <p className="mt-2 text-slate-600">
                  Online Registration & Payment
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Registration Form */}

        <section className="bg-slate-50 py-20">

          <div className="max-w-4xl mx-auto px-4">

            <div className="rounded-3xl bg-white shadow-xl p-10">

              <h2 className="text-3xl font-bold text-slate-900">
                Registration Form
              </h2>

              <p className="mt-3 text-slate-600">
                Please fill in your professional details accurately.
              </p>

              <form className="mt-10 grid md:grid-cols-2 gap-6">

                <Input icon={<User size={18} />} placeholder="Full Name" />

                <Input
                  icon={<Mail size={18} />}
                  type="email"
                  placeholder="Email Address"
                />

                <Input
                  icon={<Phone size={18} />}
                  placeholder="Mobile Number"
                />

                <Input
                  icon={<Building2 size={18} />}
                  placeholder="Hospital / Institution"
                />

                <Input
                  icon={<BriefcaseMedical size={18} />}
                  placeholder="Specialization"
                />

                <Input
                  icon={<GraduationCap size={18} />}
                  placeholder="Medical Council Registration No."
                />

                <div className="md:col-span-2">
                  <label className="block mb-2 font-medium text-slate-700">
                    Delegate Category
                  </label>

                  <select className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-700 focus:outline-none">
                    <option>Consultant</option>
                    <option>Resident Doctor</option>
                    <option>Medical Student</option>
                    <option>Faculty</option>
                    <option>Allied Healthcare Professional</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block mb-2 font-medium text-slate-700">
                    Additional Notes
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Any dietary requirements or additional information..."
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-700 focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-blue-700 py-4 text-lg font-semibold text-white transition hover:bg-blue-800"
                  >
                    Submit Registration
                  </button>
                </div>

              </form>

            </div>

          </div>

        </section>

        {/* Important Information */}

        <section className="bg-white py-20">

          <div className="max-w-5xl mx-auto px-4">

            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-10">

              <h2 className="text-3xl font-bold text-blue-900">
                Important Information
              </h2>

              <ul className="mt-6 space-y-4 text-slate-700 list-disc pl-5">
                <li>Registration is confirmed only after successful payment.</li>
                <li>Please carry a valid Medical Council ID during check-in.</li>
                <li>E-certificates will be issued to registered delegates.</li>
                <li>Conference kit will be provided at the registration desk.</li>
                <li>CME credit information will be announced separately.</li>
              </ul>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

function Input({ icon, ...props }) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
        {icon}
      </span>

      <input
        {...props}
        className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 focus:border-blue-700 focus:outline-none"
      />
    </div>
  );
}

export default Registration;
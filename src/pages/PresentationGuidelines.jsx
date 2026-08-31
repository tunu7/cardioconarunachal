import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  MonitorPlay,
  Ruler,
  ShieldCheck,
  Upload,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PresentationGuidelines() {
  const requirements = [
    {
      icon: FileText,
      title: "File Format",
      text: "Submit your presentation in Microsoft PowerPoint format (.ppt or .pptx).",
    },
    {
      icon: Ruler,
      title: "Portrait Orientation",
      text: "The presentation must be prepared in portrait orientation.",
    },
    {
      icon: Clock3,
      title: "Presentation Time",
      text: "Each presentation should be completed within 5 minutes.",
    },
    {
      icon: Upload,
      title: "Maximum File Size",
      text: "The uploaded PowerPoint file must not exceed 10 MB.",
    },
  ];

  const tips = [
    "Keep the presentation concise and focused.",
    "Use clear, readable fonts and appropriate font sizes.",
    "Present your objective, methodology, key findings and conclusion clearly.",
    "Avoid excessive text on individual slides.",
    "Use high-quality figures, charts and images where appropriate.",
    "Ensure all patient information is anonymised.",
    "Check the presentation carefully before uploading.",
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white pt-20">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#061827] text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                <MonitorPlay size={15} />
                Scientific Presentation
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Presentation Guidelines
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                Please follow the guidelines below when preparing your
                presentation for CardioCon Arunachal 2026.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/presentation-submission"
                  className="group inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-800"
                >
                  Submit Presentation
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/abstract-submission"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Abstract Submission
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* REQUIREMENTS */}
        <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
                Submission Requirements
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Important requirements
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Please ensure your presentation meets all of these
                requirements before submitting it.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {requirements.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PREPARATION */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
                Preparation
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Tips for your presentation
              </h2>

              <div className="mt-8 space-y-4">
                {tips.map((tip) => (
                  <div
                    key={tip}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-emerald-600"
                    />

                    <p className="text-sm leading-7 text-slate-600 sm:text-base">
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-fit rounded-3xl bg-[#061827] p-7 text-white shadow-xl sm:p-8 lg:sticky lg:top-28">
              <ShieldCheck className="text-cyan-300" size={30} />

              <h3 className="mt-5 text-2xl font-black">
                Before you upload
              </h3>

              <div className="mt-6 space-y-4">
                <CheckItem text="PowerPoint format (.ppt/.pptx)" />
                <CheckItem text="Portrait orientation" />
                <CheckItem text="Maximum 5-minute presentation" />
                <CheckItem text="Maximum 10 MB file size" />
                <CheckItem text="All information checked and accurate" />
              </div>

              <Link
                to="/presentation-submission"
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-4 text-sm font-bold text-white transition hover:bg-blue-800"
              >
                Upload Presentation
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function CheckItem({ text }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2
        size={18}
        className="mt-0.5 shrink-0 text-emerald-300"
      />

      <span className="text-sm leading-6 text-slate-300">
        {text}
      </span>
    </div>
  );
}

export default PresentationGuidelines;
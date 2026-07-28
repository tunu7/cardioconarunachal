import { homeData } from "../data/homeData";

const Home = () => {
  return (
    <main className="bg-slate-50">

      {/* ================= HERO ================= */}

      <section className="bg-linear-to-br from-blue-950 via-blue-900 to-blue-700 text-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-36">

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left */}

            <div>

              <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm tracking-wide">
                Official Conference Website
              </span>

              <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight">
                {homeData.hero.title}
              </h1>

              <h2 className="mt-6 text-2xl lg:text-3xl text-blue-100 font-light">
                {homeData.hero.subtitle}
              </h2>

              <p className="mt-8 text-lg leading-9 text-blue-100 max-w-xl">
                {homeData.hero.description}
              </p>

              <div className="flex flex-wrap gap-5 mt-12">

                <button className="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-slate-100 transition">
                  {homeData.hero.buttonPrimary}
                </button>

                <button className="px-8 py-4 border border-white rounded-xl hover:bg-white hover:text-blue-900 transition">
                  {homeData.hero.buttonSecondary}
                </button>

              </div>

            </div>

            {/* Right */}

            <div>

              <img
                src={homeData.hero.image}
                alt="CardioCon Arunachal"
                className="rounded-3xl shadow-2xl object-cover w-full h-130"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================= QUICK INFO ================= */}

      <section className="-mt-12 relative z-20">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid md:grid-cols-3 gap-8">

            {homeData.highlights.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition duration-300"
              >

                <div className="text-5xl">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-800">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-500 leading-7">
                  {item.value}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <img
                src={homeData.hero.image}
                alt="Conference"
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <span className="text-blue-700 font-semibold uppercase tracking-wider">
                About The Conference
              </span>

              <h2 className="mt-4 text-5xl font-bold text-slate-900 leading-tight">
                {homeData.about.title}
              </h2>

              <p className="mt-8 text-lg leading-9 text-slate-600">
                {homeData.about.description}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= STATISTICS ================= */}

      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="bg-blue-900 rounded-[40px] px-10 py-16">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

              {homeData.stats.map((item, index) => (

                <div
                  key={index}
                  className="text-center text-white"
                >

                  <h2 className="text-5xl lg:text-6xl font-bold">
                    {item.number}
                  </h2>

                  <p className="mt-4 text-blue-200 text-lg">
                    {item.label}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY ATTEND ================= */}

      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-blue-700 uppercase font-semibold tracking-widest">
              Why Attend
            </span>

            <h2 className="mt-4 text-5xl font-bold text-slate-900">
              Learn, Network & Collaborate
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-9">
              Gain insights from leading cardiologists, participate in
              scientific discussions, discover cutting-edge innovations and
              connect with healthcare professionals from across the country.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">

            <div className="bg-slate-50 rounded-3xl p-8">
              <div className="text-5xl">🎤</div>
              <h3 className="mt-6 text-2xl font-semibold">
                Expert Speakers
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                Learn directly from nationally renowned cardiologists and
                healthcare experts.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8">
              <div className="text-5xl">🫀</div>
              <h3 className="mt-6 text-2xl font-semibold">
                Scientific Sessions
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                Explore the latest research, clinical practices and innovative
                treatment approaches.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8">
              <div className="text-5xl">🤝</div>
              <h3 className="mt-6 text-2xl font-semibold">
                Networking
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                Connect with peers, faculty members and healthcare leaders from
                across India.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Home;
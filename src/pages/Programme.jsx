const Programme = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-blue-900">
        Scientific Programme
      </h1>

      <div className="mt-10 space-y-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            09:00 AM — Registration
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            10:00 AM — Keynote Lecture
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            12:00 PM — Scientific Sessions
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            02:00 PM — Hands-on Workshop
          </h2>
        </div>

      </div>

    </section>
  );
};

export default Programme;
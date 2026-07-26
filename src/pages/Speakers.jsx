const Speakers = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-blue-900">
        Speakers
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-10">

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <img
            src="https://via.placeholder.com/200"
            alt="Speaker"
            className="w-40 h-40 rounded-full mx-auto"
          />
          <h2 className="mt-4 font-semibold">
            Dr. John Doe
          </h2>
          <p className="text-gray-500">
            AIIMS Delhi
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <img
            src="https://via.placeholder.com/200"
            alt="Speaker"
            className="w-40 h-40 rounded-full mx-auto"
          />
          <h2 className="mt-4 font-semibold">
            Dr. Jane Smith
          </h2>
          <p className="text-gray-500">
            Apollo Hospitals
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <img
            src="https://via.placeholder.com/200"
            alt="Speaker"
            className="w-40 h-40 rounded-full mx-auto"
          />
          <h2 className="mt-4 font-semibold">
            Dr. Arun Kumar
          </h2>
          <p className="text-gray-500">
            NEIGRIHMS
          </p>
        </div>

      </div>

    </section>
  );
};

export default Speakers;
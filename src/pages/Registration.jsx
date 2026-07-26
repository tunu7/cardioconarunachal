const Registration = () => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-blue-900">
        Registration
      </h1>

      <form className="mt-10 bg-white shadow rounded-xl p-8 space-y-5">

        <input
          className="w-full border p-3 rounded-lg"
          placeholder="Full Name"
        />

        <input
          className="w-full border p-3 rounded-lg"
          placeholder="Email"
        />

        <input
          className="w-full border p-3 rounded-lg"
          placeholder="Phone Number"
        />

        <input
          className="w-full border p-3 rounded-lg"
          placeholder="Hospital"
        />

        <button className="bg-blue-900 text-white px-6 py-3 rounded-lg">
          Register
        </button>

      </form>

    </section>
  );
};

export default Registration;
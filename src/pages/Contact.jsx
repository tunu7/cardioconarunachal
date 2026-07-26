const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-blue-900">
        Contact Us
      </h1>

      <div className="mt-10 grid md:grid-cols-2 gap-10">

        <div>

          <h2 className="text-xl font-semibold">
            Venue
          </h2>

          <p className="mt-2 text-gray-600">
            Itanagar, Arunachal Pradesh
          </p>

          <h2 className="mt-8 text-xl font-semibold">
            Email
          </h2>

          <p className="text-gray-600">
            info@cardioconarunachal.org
          </p>

          <h2 className="mt-8 text-xl font-semibold">
            Phone
          </h2>

          <p className="text-gray-600">
            +91 98765 43210
          </p>

        </div>

        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Itanagar&output=embed"
          className="w-full h-96 rounded-xl shadow"
        />

      </div>

    </section>
  );
};

export default Contact;
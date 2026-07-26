import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="h-[70vh] flex flex-col items-center justify-center">

      <h1 className="text-7xl font-bold text-blue-900">
        404
      </h1>

      <p className="mt-4 text-gray-500">
        Page Not Found
      </p>

      <Link
        to="/"
        className="mt-8 bg-blue-900 text-white px-6 py-3 rounded-lg"
      >
        Back Home
      </Link>

    </section>
  );
};

export default NotFound;
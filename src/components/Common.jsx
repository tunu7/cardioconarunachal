import { Link } from "react-router-dom";

/* =====================================================
   Container
===================================================== */

export const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-7xl mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
};

/* =====================================================
   Section Title
===================================================== */

export const SectionTitle = ({
  title,
  subtitle,
  center = true,
}) => {
  return (
    <div className={`${center ? "text-center" : ""} mb-12`}>
      {subtitle && (
        <p className="text-blue-700 uppercase tracking-widest font-semibold mb-2">
          {subtitle}
        </p>
      )}

      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        {title}
      </h2>
    </div>
  );
};

/* =====================================================
   Page Hero
===================================================== */

export const PageHero = ({
  title,
  subtitle,
}) => {
  return (
    <section className="bg-linear-to-r from-blue-900 to-blue-700 text-white py-20">

      <Container>

        <div className="text-center">

          <h1 className="text-4xl md:text-5xl font-bold">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-5 text-blue-100 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}

        </div>

      </Container>

    </section>
  );
};

/* =====================================================
   Button
===================================================== */

export const Button = ({
  children,
  to,
  type = "button",
  onClick,
  variant = "primary",
  className = "",
}) => {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition duration-300";

  const variants = {
    primary:
      "bg-blue-700 hover:bg-blue-800 text-white",

    secondary:
      "border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white",

    light:
      "bg-white text-blue-700 hover:bg-slate-100",
  };

  if (to) {
    return (
      <Link
        to={to}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

/* =====================================================
   Input
===================================================== */

export const Input = ({
  label,
  type = "text",
  placeholder,
  ...props
}) => {
  return (
    <div>

      {label && (
        <label className="block mb-2 font-medium text-slate-700">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        {...props}
      />

    </div>
  );
};

/* =====================================================
   Select
===================================================== */

export const Select = ({
  label,
  children,
  ...props
}) => {
  return (
    <div>

      {label && (
        <label className="block mb-2 font-medium text-slate-700">
          {label}
        </label>
      )}

      <select
        className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        {...props}
      >
        {children}
      </select>

    </div>
  );
};

/* =====================================================
   TextArea
===================================================== */

export const TextArea = ({
  label,
  rows = 5,
  placeholder,
  ...props
}) => {
  return (
    <div>

      {label && (
        <label className="block mb-2 font-medium text-slate-700">
          {label}
        </label>
      )}

      <textarea
        rows={rows}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
        {...props}
      />

    </div>
  );
};

/* =====================================================
   Badge
===================================================== */

export const Badge = ({ children }) => {
  return (
    <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
      {children}
    </span>
  );
};

/* =====================================================
   Divider
===================================================== */

export const Divider = () => {
  return (
    <div className="border-t border-slate-200 my-10"></div>
  );
};

/* =====================================================
   Loading Spinner
===================================================== */

export const Loading = () => {
  return (
    <div className="flex justify-center items-center py-10">

      <div className="w-10 h-10 border-4 border-blue-700 border-t-transparent rounded-full animate-spin"></div>

    </div>
  );
};
import {
  FaUserMd,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaHandshake,
  FaHeartbeat,
} from "react-icons/fa";

/* ==========================================
   SPEAKER CARD
========================================== */

export const SpeakerCard = ({
  image,
  name,
  designation,
  hospital,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      <img
        src={image}
        alt={name}
        className="w-full h-72 object-cover"
      />

      <div className="p-6">

        <div className="flex items-center gap-2 text-blue-700 mb-2">
          <FaUserMd />
          <span className="text-sm font-medium">
            Speaker
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          {name}
        </h3>

        <p className="text-blue-700 mt-2">
          {designation}
        </p>

        <p className="text-slate-500">
          {hospital}
        </p>

      </div>

    </div>
  );
};

/* ==========================================
   PROGRAMME CARD
========================================== */

export const ProgrammeCard = ({
  time,
  title,
  speaker,
}) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-blue-700">

      <div className="flex justify-between flex-wrap gap-4">

        <div>

          <h3 className="font-bold text-lg">
            {title}
          </h3>

          <p className="text-slate-600 mt-2">
            {speaker}
          </p>

        </div>

        <div className="text-blue-700 font-semibold flex items-center gap-2">
          <FaCalendarAlt />
          {time}
        </div>

      </div>

    </div>
  );
};

/* ==========================================
   HIGHLIGHT CARD
========================================== */

export const HighlightCard = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-xl shadow p-8 text-center hover:-translate-y-2 transition">

      <div className="text-blue-700 text-5xl mb-5 flex justify-center">
        {icon}
      </div>

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-slate-600">
        {description}
      </p>

    </div>
  );
};

/* ==========================================
   COMMITTEE CARD
========================================== */

export const CommitteeCard = ({
  name,
  role,
  image,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden text-center">

      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">

        <h3 className="text-xl font-bold">
          {name}
        </h3>

        <p className="text-blue-700 mt-2">
          {role}
        </p>

      </div>

    </div>
  );
};

/* ==========================================
   VENUE CARD
========================================== */

export const VenueCard = ({
  venue,
  address,
}) => {
  return (
    <div className="bg-white rounded-xl shadow p-8">

      <div className="flex items-center gap-3 text-blue-700 text-xl mb-4">

        <FaMapMarkerAlt />

        <h3 className="font-bold">
          {venue}
        </h3>

      </div>

      <p className="text-slate-600">
        {address}
      </p>

    </div>
  );
};

/* ==========================================
   SPONSOR CARD
========================================== */

export const SponsorCard = ({
  logo,
  name,
}) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex items-center justify-center h-40 hover:shadow-lg transition">

      <img
        src={logo}
        alt={name}
        className="max-h-20 object-contain"
      />

    </div>
  );
};

/* ==========================================
   STAT CARD
========================================== */

export const StatCard = ({
  number,
  title,
  icon,
}) => {
  return (
    <div className="bg-blue-700 text-white rounded-xl p-8 text-center">

      <div className="text-4xl mb-4 flex justify-center">
        {icon}
      </div>

      <h3 className="text-4xl font-bold">
        {number}
      </h3>

      <p className="mt-3">
        {title}
      </p>

    </div>
  );
};

/* ==========================================
   FEATURE CARD
========================================== */

export const FeatureCard = ({
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">

      <h3 className="text-xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-slate-600">
        {description}
      </p>

    </div>
  );
};

/* ==========================================
   QUICK INFO CARD
========================================== */

export const QuickInfoCard = ({
  type,
  value,
}) => {
  const icons = {
    Date: <FaCalendarAlt />,
    Venue: <FaMapMarkerAlt />,
    Delegates: <FaUsers />,
    Networking: <FaHandshake />,
    Theme: <FaHeartbeat />,
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <div className="text-blue-700 text-2xl mb-4">
        {icons[type]}
      </div>

      <h4 className="font-semibold text-slate-900">
        {type}
      </h4>

      <p className="mt-2 text-slate-600">
        {value}
      </p>

    </div>
  );
};
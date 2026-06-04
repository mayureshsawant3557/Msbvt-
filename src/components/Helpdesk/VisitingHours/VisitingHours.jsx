import {
  FaBriefcase,
  FaBuilding,
  FaBullhorn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaQuestionCircle,
  FaRegClock,
} from "react-icons/fa";

const visitingSessions = [
  {
    title: "Morning Session",
    time: "11:00 AM - 12:00 PM",
    location: "Head Office",
  },
  {
    title: "Evening Session",
    time: "03:00 PM - 04:00 PM",
    location: "Head Office / Virtual Lokshahi Divas",
  },
];

const noticeLinks = [
  {
    title: "Frequently Asked Questions",
    description: "Learn more about questions and contact persons, our",
    linkText: "Frequently Asked Questions",
    icon: FaQuestionCircle,
    iconColor: "text-sky-600",
    tabName: "Frequently Asked Question",
  },
  {
    title: "Grievance Redressal",
    description: "To apply our",
    linkText: "Grievance Redressal",
    icon: FaBullhorn,
    iconColor: "text-amber-500",
    tabName: "Grievance Redressal",
  },
  {
    title: "Helpline Number",
    description: "Contact Board Helpline No.",
    linkText: " 93212 35321",
    icon: FaPhoneAlt,
    iconColor: "text-green-600",
  },
  {
    title: "District Office",
    description: "Contact respective District Vocational Education and Training Office. Address and contact details are available under Helpdesk",
    linkText: "District Office",
    icon: FaBuilding,
    iconColor: "text-violet-600",
    tabName: "District Office",
  },
  {
    title: "Regional Office",
    description: "ontact respective Regional Office Address and contact details are available at, our",
    linkText: "Regional Office",
    icon: FaMapMarkerAlt,
    iconColor: "text-red-500",
    tabName: "Regional Office",
  },
  {
    title: "Lokshahi Divas",
    description: "Attend Lokshahi Divas physically or virtually",
    linkText: "Lokshahi Divas",
    icon: FaBriefcase,
    iconColor: "text-teal-600",
    tabName: "Lokshahi Divas",
  },
];

function SessionCard({ session }) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-md">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-bold text-slate-800">{session.title}</h3>
        <span className="rounded-full bg-sky-600 px-3 py-1 text-xs font-semibold text-white">
          Working Days
        </span>
      </div>

      <p className="mt-2 text-2xl font-bold text-sky-700">{session.time}</p>
      <p className="mt-1 text-sm font-semibold text-slate-700">
        {session.location}
      </p>
    </div>
  );
}

function NoticeItem({ item, onTabSwitch }) {
  const Icon = item.icon;

  const handleClick = (tabName) => {
    if (tabName && onTabSwitch) {
      onTabSwitch(tabName);
    }
  };

  return (
    <div className="flex gap-4 border-b border-slate-200 py-3 last:border-b-0">
      <Icon className={`mt-1 text-2xl ${item.iconColor}`} />

      <div>
        <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
        <p className="text-sm leading-5 text-slate-700">
          {item.description}{" "}
          {item.tabName ? (
            <button
              type="button"
              onClick={() => handleClick(item.tabName)}
              className="font-semibold text-sky-700 underline cursor-pointer bg-transparent border-none p-0 text-sm"
            >
              {item.linkText}
            </button>
          ) : (
            <span className="font-semibold text-sky-700">
              {item.linkText}
            </span>
          )}
          .
        </p>
      </div>
    </div>
  );
}

export default function VisitingHours({ onTabSwitch }) {
  return (
    <section className="space-y-6">
      <div className="rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-500 p-4 shadow-md md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white shadow-md ring-4 ring-white/40">
            <FaRegClock className="text-4xl text-sky-600" />
          </div>

          <div className="text-white">
            <h2 className="font-serif text-3xl font-bold">Visiting Hours</h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {visitingSessions.map((session) => (
          <SessionCard key={session.title} session={session} />
        ))}
      </div>

      <div className="rounded-xl bg-white p-4 shadow-md md:p-6">
        <h3 className="text-lg font-bold text-slate-800">Important Notice</h3>

        <div className="mt-2">
          {noticeLinks.map((item) => (
            <NoticeItem key={item.title} item={item} onTabSwitch={onTabSwitch} />
          ))}
        </div>
      </div>
      
    </section>
  );
}
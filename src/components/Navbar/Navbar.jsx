import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaBullhorn,
  FaChevronDown,
  FaPause,
  FaPhoneAlt,
  FaTimes,
  FaVolumeUp,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "About",
    submenu: [
      { title: "Board", path: "#" },
      { title: "Vision", path: "#" },
      { title: "Mission", path: "#" },
      { title: "Values", path: "#" },
      { title: "Objectives", path: "#" },
      { title: "Goals", path: "#" },
      { title: "Organization Structure", path: "#" },
      { title: "Governing Board", path: "#" },
      { title: "Governing Council", path: "#" },
      { title: "Office Bearers", path: "#" },
    ],
  },
  {
    name: "Search",
    submenu: [
      { title: "Institutes", path: "#" },
      { title: "Courses", path: "#" },
    ],
  },
  {
    name: "Examination",
    submenu: [
      { title: "Examination Circular", path: "#" },
      { title: "Examination Pattern", path: "#" },
      { title: "Exam Timetable", path: "#" },
      { title: "Certificate Verification", path: "#" },
    ],
  },
  { name: "STEP", path: "#" },
  { name: "Unauthorized Institutes", path: "#" },
  {
    name: "Helpdesk",
    submenu: [
      { title: "Help Desk", path: "/helpdesk" },
      { title: "RTI", path: "#" },
    ],
  },
];

const isInternalPath = (path) => path && path.startsWith("/");

const NavItemLink = ({ item, className, children, onClick }) => {
  if (isInternalPath(item.path)) {
    return (
      <Link to={item.path} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <a href={item.path || "#"} className={className} onClick={onClick}>
      {children}
    </a>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-[#0D1B5E] text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-4">
            <FaVolumeUp className="cursor-pointer" />
            <FaPause className="cursor-pointer" />

            <button type="button">A+</button>
            <button type="button">A</button>
            <button type="button">A-</button>

            <select className="bg-transparent outline-none">
              <option className="text-black">English</option>
              <option className="text-black">Marathi</option>
            </select>
          </div>

          <button
            type="button"
            className="bg-red-600 px-3 py-1 rounded flex items-center gap-2"
          >
            <FaPhoneAlt size={12} />
            Helpline
          </button>
        </div>
      </div>

      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="/bharat.png"
              alt="Government of India logo"
              className="w-24 h-24 object-contain"
            />

            <img
              src="/maharashtra seal.png"
              alt="Government of Maharashtra seal"
              className="w-24 h-24 object-contain"
            />
          </div>

          <div className="text-center flex-1 px-8">
            <p className="text-sm text-gray-600">Government of Maharashtra</p>

            <h2 className="font-bold text-lg md:text-xl text-[#0D1B5E]">
              Skill, Employment, Entrepreneurship and Innovation Department
            </h2>

            <h1 className="font-bold text-xl md:text-2xl text-[#0D1B5E]">
              Maharashtra State Board of Skill, Vocational Education and
              Training
            </h1>
          </div>

          <img
            src="/msbvet logo.png"
            alt="MSBVET logo"
            className="w-24 h-24 object-contain"
          />
        </div>
      </header>

      <nav className="bg-[#0D1B5E] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => (
                <li key={item.name} className="relative group cursor-pointer">
                  {item.submenu ? (
                    <>
                      <div className="flex items-center gap-1 hover:text-yellow-300 transition">
                        {item.name}
                        <FaChevronDown
                          size={10}
                          className="group-hover:rotate-180 transition-transform"
                        />
                      </div>

                      <div className="absolute left-0 top-full z-50 hidden group-hover:block">
                        <div className="mt-2 w-64 bg-white text-gray-800 shadow-lg rounded-md py-2">
                          {item.submenu.map((subItem) => (
                            <NavItemLink
                              key={subItem.title}
                              item={subItem}
                              className="block px-4 py-3 hover:bg-gray-100 transition"
                            >
                              {subItem.title}
                            </NavItemLink>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <NavItemLink
                      item={item}
                      className="hover:text-yellow-300 transition"
                    >
                      {item.name}
                    </NavItemLink>
                  )}
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="md:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-label="Toggle navigation"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {isOpen && (
            <ul className="md:hidden pb-4 space-y-3">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <NavItemLink
                    item={item}
                    className="block cursor-pointer hover:text-yellow-300"
                    onClick={() => !item.submenu && setIsOpen(false)}
                  >
                    {item.name}
                  </NavItemLink>

                  {item.submenu && (
                    <div className="mt-2 ml-4 space-y-2 text-sm text-blue-100">
                      {item.submenu.map((subItem) => (
                        <NavItemLink
                          key={subItem.title}
                          item={subItem}
                          className="block hover:text-yellow-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.title}
                        </NavItemLink>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      <div className="bg-orange-100 border-y">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="bg-orange-500 text-white px-4 py-2 font-semibold shrink-0 flex items-center gap-2">
            <FaBullhorn size={14} />
            Announcements
          </div>

          <div className="overflow-hidden flex-1 relative">
            <div
              className="whitespace-nowrap text-orange-700 font-medium py-2"
              style={{
                display: "inline-block",
                animation: "marquee 20s linear infinite",
              }}
            >
              Candidate Registration Started | Admission Process Open |
              Examination Schedule Released | Verification Portal Active |
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

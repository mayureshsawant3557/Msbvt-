import { useState } from "react";
import {
  FaVolumeUp,
  FaPause,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { FaChevronDown } from "react-icons/fa";

const navLinks = [
  { name: "Home" },
  {
    name: "About",
    arrow: true,
    submenu: [
      "Board",
      "Vision",
      "Mission",
      "Values",
      "Objectives",
      "Goals",
      "Organization Structure",
      "Governing Board",
      "Governing Council",
      "Office Bearers",
    ],
  },
  { name: "Search", 
    arrow: true,
    submenu: [
        "Institutes",
        "Courses",],
    },
  { name: "Examination", 
    arrow: true,
    submenu: [
        "Examination Circular",
        "Examination Patter",
        "Exam Timetable",
        "Certificate Verification",
    ],
},

  { name: "STEP" },
  { name: "Unauthorized Institutes" },
  { name: "Helpdesk", 
    arrow: true,
    submenu: [
        "Help Desk",
        "RTI",
],},
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#0D1B5E] text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-4">
            <FaVolumeUp className="cursor-pointer" />
            <FaPause className="cursor-pointer" />

            <button>A+</button>
            <button>A</button>
            <button>A-</button>

            <select className="bg-transparent outline-none">
              <option className="text-black">English</option>
              <option className="text-black">Marathi</option>
            </select>
          </div>

          <button className="bg-red-600 px-3 py-1 rounded">
            Helpline
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Left Logos */}
          <div className="flex items-center gap-4">
            <img
              src="./public/bharat.png"
              alt="Gov Logo"
              className="w-24 h-24 object-contain"
            />

            <img
              src="./public/maharashtra seal.png"
              alt="Maharashtra Logo"
              className="w-24 h-24 object-contain"
            />
          </div>

          {/* Center Text */}
          <div className="text-center flex-1 px-8">
            <p className="text-sm text-gray-600">
              Government of Maharashtra
            </p>

            <h2 className="font-bold text-lg md:text-xl text-[#0D1B5E]">
              Skill, Employment, Entrepreneurship and Innovation Department
            </h2>

            <h1 className="font-bold text-xl md:text-2xl text-[#0D1B5E]">
              Maharashtra State Board of Skill,
              Vocational Education and Training
            </h1>
          </div>

          {/* Right Logo */}
          <div>
            <img
              src="./public/msbvet logo.png"
              alt="MSBVET"
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-[#0D1B5E] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8">
              <ul className="hidden md:flex items-center gap-8">
  {navLinks.map((item) => (
    <li
      key={item.name}
      className="relative group cursor-pointer"
    >
      <div className="flex items-center gap-1 hover:text-yellow-300 transition">
        {item.name}

        {item.arrow && (
          <FaChevronDown
            size={10}
            className="group-hover:rotate-180 transition-transform"
          />
        )}
      </div>

      {/* Dropdown */}
      {item.submenu && (
        <div className="absolute left-0 top-full z-50 hidden group-hover:block">
          <div className="mt-2 w-64 bg-white text-gray-800 shadow-lg rounded-md py-2">
            {item.submenu.map((subItem) => (
              <a
                key={subItem}
                href="#"
                className="block px-4 py-3 hover:bg-gray-100 transition"
              >
                {subItem}
              </a>
            ))}
          </div>
        </div>
      )}
    </li>
  ))}
</ul>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <ul className="md:hidden pb-4 space-y-3">
              {navLinks.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-yellow-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      {/* Announcement Bar */}
      {/* Announcement Bar */}
<div className="bg-orange-100 border-y">
  <div className="max-w-7xl mx-auto flex items-center">
    
    <div className="bg-orange-500 text-white px-4 py-2 font-semibold shrink-0">
      📢 Announcements
    </div>

    <div className="overflow-hidden flex-1 relative">
      <div
        className="whitespace-nowrap text-orange-700 font-medium py-2"
        style={{
          display: "inline-block",
          animation: "marquee 20s linear infinite",
        }}
      >
        Candidate Registration Started • Admission Process Open •
        Examination Schedule Released • Verification Portal Active •
      </div>
    </div>

  </div>
</div>
    </>
  );
}
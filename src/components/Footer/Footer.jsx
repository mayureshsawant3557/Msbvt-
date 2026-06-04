// Footer.jsx

import {
  FaInstagram,
  FaFacebookF,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#00246B] text-white">
      {/* Background Circle Pattern */}
      <div className="absolute right-[-150px] top-10 h-[350px] w-[350px] rounded-full border border-white/5"></div>
      <div className="absolute right-[-80px] top-20 h-[220px] w-[220px] rounded-full border border-white/5"></div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr_1.8fr]">
          {/* Column 1 */}
          <div>
            <p className="mb-3 text-sm text-gray-300">
              Government of Maharashtra
            </p>

            <p className="mb-4 text-lg leading-relaxed text-white">
              Skill, Employment, Entrepreneurship and
              <br />
              Innovation Department
            </p>

            <h3 className="max-w-md text-2xl font-bold leading-snug">
              Maharashtra State Board of Skill,
              Vocational Education and Training
            </h3>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-md bg-white/10 transition-all duration-300 hover:bg-pink-600"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-md bg-white/10 transition-all duration-300 hover:bg-blue-600"
              >
                <FaFacebookF size={22} />
              </a>
            </div>
          </div>

          {/* About Us */}
          <nav>
            <h4 className="mb-3 text-lg font-semibold">About Us</h4>

            <div className="mb-5 h-[1px] w-full bg-white/20"></div>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="transition hover:text-blue-200"
                >
                  › Board of Directors
                </a>
              </li>
            </ul>
          </nav>

          {/* Support */}
          <nav>
            <h4 className="mb-3 text-lg font-semibold">Support</h4>

            <div className="mb-5 h-[1px] w-full bg-white/20"></div>

            <ul className="space-y-3">
              <li>
                <a href="#" className="transition hover:text-blue-200">
                  › Help
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-blue-200">
                  › Sitemap
                </a>
              </li>
            </ul>
          </nav>

          {/* Policies */}
          <nav>
            <h4 className="mb-3 text-lg font-semibold">Policies</h4>

            <div className="mb-5 h-[1px] w-full bg-white/20"></div>

            <ul className="space-y-3">
              <li>
                <a href="#" className="transition hover:text-blue-200">
                  › Disclaimer and Policies
                </a>
              </li>
            </ul>
          </nav>

          {/* Statistics Card */}
          <div>
            <h4 className="mb-3 text-lg font-semibold">Statistics</h4>

            <div className="mb-5 h-[1px] w-full bg-white/20"></div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
              {/* Total Visitors */}
              <div className="mb-4 flex items-center gap-4 rounded-xl bg-white/5 p-4">
                <div className="rounded-lg bg-white/10 p-3">
                  <FaUsers size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-300">
                    Total Visitors
                  </p>
                  <p className="text-2xl font-bold">1753039</p>
                </div>
              </div>

              {/* Today's Count */}
              <div className="mb-4 flex items-center gap-4 rounded-xl bg-white/5 p-4">
                <div className="rounded-lg bg-white/10 p-3">
                  <FaUsers size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-300">
                    Today's Count
                  </p>
                  <p className="text-2xl font-bold">14133</p>
                </div>
              </div>

              {/* Last Updated */}
              <div className="flex items-center gap-4 rounded-xl bg-white/5 p-4">
                <div className="rounded-lg bg-white/10 p-3">
                  <FaCalendarAlt size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-300">
                    Last Updated
                  </p>
                  <p className="text-2xl font-bold">02-06-2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-16 border-t border-white/20 pt-8">
          <p className="text-center text-sm text-gray-300">
            © Maharashtra State Board of Skill, Vocational Education and
            Training. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
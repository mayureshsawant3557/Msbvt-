export default function VisitingHours({ onTabSwitch }) {
  const handleTabClick = (tabName) => {
    if (tabName && onTabSwitch) {
      onTabSwitch(tabName);
    }
  };

  return (
    <section className="space-y-6">
      <div className="rounded-xl bg-slate-600 via-cyan-500 to-teal-500 p-4 shadow-md md:p-6">
        <div className="text-white">
          <h2 className="font-serif text-3xl font-bold">Visiting Hours</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Morning  */}
        <div className="rounded-xl bg-white p-4 shadow-md">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-base font-bold text-slate-800">Morning Session</h3>
            <span className="rounded-full bg-orange-400 px-3 py-1 text-xs font-semibold text-white">
              Working Days
            </span>
          </div>
          <p className="mt-2 text-2xl font-bold text-black">11:00 AM - 12:00 PM</p>
          <p className="mt-1 text-sm font-semibold text-slate-700">Head Office</p>
        </div>

        {/* Evening  */}
        <div className="rounded-xl bg-white p-4 shadow-md">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-base font-bold text-slate-800">Evening Session</h3>
            <span className="rounded-full bg-orange-400 px-3 py-1 text-xs font-semibold text-white">
              Working Days
            </span>
          </div>
          <p className="mt-2 text-2xl font-bold text-black">03:00 PM - 04:00 PM</p>
          <p className="mt-1 text-sm font-semibold text-slate-700">Head Office / Virtual Lokshahi Divas</p>
        </div>
      </div>

      <div className="rounded-xl bg-white p-4 shadow-md md:p-6">
        <h3 className="text-lg font-bold text-slate-800">Important Notice</h3>

        <div className="mt-2">
          {/* FAQ */}
          <div className="border-b border-slate-200 py-3 last:border-b-0">
            <div>
              <h4 className="text-sm font-bold text-slate-800">Frequently Asked Questions</h4>
              <p className="text-sm leading-5 text-slate-700">
                Read Frequently Asked Question, our{" "}
                <button
                  type="button"
                  onClick={() => handleTabClick("Frequently Asked Question")}
                  className="font-semibold text-sky-700 underline cursor-pointer bg-transparent border-none p-0 text-sm"
                >
                  Frequently Asked Questions
                </button>
                .
              </p>
            </div>
          </div>

          {/* Grievance Redressal */}
          <div className="border-b border-slate-200 py-3 last:border-b-0">
            <div>
              <h4 className="text-sm font-bold text-slate-800">Grievance Redressal</h4>
              <p className="text-sm leading-5 text-slate-700">
                To apply our{" "}
                <button
                  type="button"
                  onClick={() => handleTabClick("Grievance Redressal")}
                  className="font-semibold text-sky-700 underline cursor-pointer bg-transparent border-none p-0 text-sm"
                >
                  Grievance Redressal
                </button>
                .
              </p>
            </div>
          </div>

          {/* Helpline Number */}
          <div className="border-b border-slate-200 py-3 last:border-b-0">
            <div>
              <h4 className="text-sm font-bold text-slate-800">Helpline Number</h4>
              <p className="text-sm leading-5 text-slate-700">
                Contact Board Helpline No.{" "}
                <span className="font-semibold text-sky-700"> 93212 35321</span>
                .
              </p>
            </div>
          </div>

          {/* District Office */}
          <div className="border-b border-slate-200 py-3 last:border-b-0">
            <div>
              <h4 className="text-sm font-bold text-slate-800">District Office</h4>
              <p className="text-sm leading-5 text-slate-700">
                Contact respective District Vocational Education and Training Office. Address and contact details are available under Helpdesk{" "}
                <button
                  type="button"
                  onClick={() => handleTabClick("District Office")}
                  className="font-semibold text-sky-700 underline cursor-pointer bg-transparent border-none p-0 text-sm"
                >
                  District Office
                </button>
                .
              </p>
            </div>
          </div>

          {/* Regional Office */}
          <div className="border-b border-slate-200 py-3 last:border-b-0">
            <div>
              <h4 className="text-sm font-bold text-slate-800">Regional Office</h4>
              <p className="text-sm leading-5 text-slate-700">
                ontact respective Regional Office Address and contact details are available at, our{" "}
                <button
                  type="button"
                  onClick={() => handleTabClick("Regional Office")}
                  className="font-semibold text-sky-700 underline cursor-pointer bg-transparent border-none p-0 text-sm"
                >
                  Regional Office
                </button>
                .
              </p>
            </div>
          </div>

          {/* Lokshahi Divas */}
          <div className="border-b border-slate-200 py-3 last:border-b-0">
            <div>
              <h4 className="text-sm font-bold text-slate-800">Lokshahi Divas</h4>
              <p className="text-sm leading-5 text-slate-700">
                Attend Lokshahi Divas physically or virtually{" "}
                <button
                  type="button"
                  onClick={() => handleTabClick("Lokshahi Divas")}
                  className="font-semibold text-sky-700 underline cursor-pointer bg-transparent border-none p-0 text-sm"
                >
                  Lokshahi Divas
                </button>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
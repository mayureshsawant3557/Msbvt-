import React, { useState } from "react";

import { regionalOffices } from "./data";

export default function RegionalOffice() {
  const [activeRegionalCity, setActiveRegionalCity] = useState("Mumbai");

  return (
    <div className="text-left text-gray-800">
      <h3 className="text-[16px] font-bold mb-4">
        Regional Office
      </h3>

      <div className="mb-4">
        <select
          className="w-full border border-gray-200 p-2 rounded-sm outline-none text-[14px] bg-white"
          value={activeRegionalCity}
          onChange={(e) => setActiveRegionalCity(e.target.value)}
        >
          {Object.keys(regionalOffices).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Content */}
        <div className="flex-1 border border-gray-200 p-4 bg-white rounded-sm">
          <div className="font-bold text-[14px]">Address:</div>
          <div className="ml-6 mt-1 text-[14px] leading-relaxed text-gray-700">
            {regionalOffices[activeRegionalCity].address}
          </div>

          <div className="mt-4 space-y-3">
            <div>
              <div className="font-bold text-[14px]">Google Location:</div>
              <div className="ml-6 mt-0.5">
                <a href={regionalOffices[activeRegionalCity].googleLocation} className="text-blue-500 hover:underline text-[14px] break-all" target="_blank" rel="noreferrer">
                  {regionalOffices[activeRegionalCity].googleLocation}
                </a>
              </div>
            </div>

            <div>
              <div className="font-bold text-[14px]">Phone No:</div>
              <div className="ml-6 mt-0.5 text-[14px] text-gray-700">{regionalOffices[activeRegionalCity].phone}</div>
            </div>

            <div>
              <div className="font-bold text-[14px]">Website:</div>
              <div className="ml-6 mt-0.5">
                <a href={regionalOffices[activeRegionalCity].website} className="text-blue-500 hover:underline text-[14px]" target="_blank" rel="noreferrer">
                  {regionalOffices[activeRegionalCity].website}
                </a>
              </div>
            </div>

            <div>
              <div className="font-bold text-[14px]">E-Mail Address:</div>
              <div className="ml-6 mt-0.5">
                <a href={`mailto:${regionalOffices[activeRegionalCity].email}`} className="text-blue-500 hover:underline text-[14px]">
                  {regionalOffices[activeRegionalCity].email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Map */}
        <div className="w-full lg:w-[350px] border border-gray-200 bg-white h-[250px] lg:h-auto rounded-sm">
          <iframe
            title="Google Map"
            src={`https://maps.google.com/maps?q=${regionalOffices[activeRegionalCity].mapQuery}&t=k&z=14&ie=UTF8&iwloc=&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '250px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

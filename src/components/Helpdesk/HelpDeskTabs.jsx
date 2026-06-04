import { useState } from "react";
import GrievanceRedressal from "./GrievanceRedressal/GrievanceRedressal";
import FAQ from "./FAQ/FAQ";
import HeadOffice from "./HeadOffice/HeadOffice";
import RegionalOffice from "./RegionalOffice/RegionalOffice";
import DistrictOffice from "./DistrictOffice/DistrictOffice";
import VisitingHours from "./VisitingHours/VisitingHours";
const tabs = [
  "Head Office",
  "Regional Office",
  "District Office",
  "Lokshahi Divas",
  "Visiting Hours",
  "Frequently Asked Question",
  "Grievance Redressal",
];

export default function HelpdeskTabs() {
  const [activeTab, setActiveTab] = useState("Head Office");

  return (
    <div className="bg-[#f5f5f5] border border-gray-300 p-4">
      {/* Header Label */}
      <div className="inline-block bg-slate-500 text-white px-5 py-2 rounded-md font-semibold shadow-md mb-4">
        Helpdesk
      </div>

      {/* Tabs */}
      <div className="bg-white border border-gray-300">
        <div className="flex flex-wrap border-b border-gray-300 bg-[#f8f8f8]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-6 py-3 text-[15px] transition-all duration-200
                ${
                  activeTab === tab
                    ? "bg-white text-gray-800 border border-gray-300 border-b-white -mb-px"
                    : "text-blue-600 hover:text-blue-800"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[500px] p-6 bg-white">
          {activeTab === "Head Office" && <HeadOffice />}
          {activeTab === "Regional Office" && <RegionalOffice />}
          {activeTab === "District Office" && <DistrictOffice />}

          {activeTab === "Lokshahi Divas" && (
            <div>
              <h2 className="text-xl font-semibold">
                Lokshahi Divas Content
              </h2>
            </div>
          )}

          {activeTab === "Visiting Hours" && (
            <VisitingHours onTabSwitch={setActiveTab} />
          )}

          {activeTab === "Frequently Asked Question" && (
            <div>
              <h2 className="text-xl font-semibold">
                <FAQ />
              </h2>
            </div>
          )}

          {activeTab === "Grievance Redressal" && (
            <div>
              <h2 className="text-xl font-semibold">
                <GrievanceRedressal />
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
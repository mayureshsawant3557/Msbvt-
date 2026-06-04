import React from "react";

export default function LokshahiDivas() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-slate-600 rounded-xl p-8 text-white shadow-md">
        <h2 className="text-3xl font-bold font-serif mb-2">Lokshahi Divas</h2>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Physical Meeting Card */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col">
          <h3 className="text-xl font-bold text-slate-800 mb-4">
            Head Office (4th Thursday of every month)
          </h3>
          <div className="space-y-3 mb-6 text-slate-600 flex-grow">
            <div className="flex">
              <span className="font-semibold w-24">Date:</span>
              <span>25 June 2026</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-24">Time:</span>
              <span>11:00 AM - 12:00 PM</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-24">Location:</span>
              <span>Board Headquarters</span>
            </div>
          </div>
        </div>

        {/* Virtual Meeting Card */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col">
          <h3 className="text-xl font-bold text-slate-800 mb-4">
            Virtual Lokshahi Divas (4th Thursday of every month)
          </h3>
          <div className="space-y-3 mb-6 text-slate-600 flex-grow">
            <div className="flex">
              <span className="font-semibold w-24">Date:</span>
              <span>25 June 2026</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-24">Time:</span>
              <span>10:00 AM - 11:00 AM</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-24">Platform:</span>
              <span>Microsoft Teams</span>
            </div>
          </div>
          <a
            href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_YWQ3NDUyNWMtMGUwMi00MzEzLWFkYjgtZjg0MTYwYWE2MmMy%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%25220e33ea86-e6ec-4be8-a40e-02a587d16926%2522%252c%2522Oid%2522%253a%25229be84fae-e31e-4ed2-8096-a8eda82db24c%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=c3e727c4-ff8d-4676-9982-8fa5964d1afc&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-sm"
          >
            Join VC
          </a>
        </div>
        
      </div>
    </div>
  );
}

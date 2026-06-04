import React from "react";

export default function HeadOffice() {
  return (
    <div className="text-left text-gray-800">
      <h3 className="text-[16px] font-bold mb-4">
        Maharashtra State Board of Skill, Vocational Education and Training
      </h3>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Content */}
        <div className="flex-1 border border-gray-200 p-4 bg-white rounded-sm">
          <div className="ml-6 text-[14px] leading-relaxed text-gray-700">
            <p>Maharashtra State Board of Skill, Vocational Education and Training</p>
            <p>4th Floor, Center of Excellence Building,</p>
            <p>C/o Government Industrial Training Institute,</p>
            <p>Balashaeb Thakurwadi, Mithagar Road,</p>
            <p>Mulund (East), Mumbai 400081</p>
          </div>
          
          <div className="mt-4 space-y-3">
            <div>
              <div className="font-bold text-[14px]">Google Location:</div>
              <div className="ml-6 mt-0.5">
                <a href="https://maps.app.goo.gl/vJMwEiKFCTmMmZLZ6?g_st=iw" className="text-blue-500 hover:underline text-[14px] break-all" target="_blank" rel="noreferrer">
                  https://maps.app.goo.gl/vJMwEiKFCTmMmZLZ6?g_st=iw
                </a>
              </div>
            </div>
            
            <div>
              <div className="font-bold text-[14px]">Phone No:</div>
              <div className="ml-6 mt-0.5 text-[14px] text-gray-700">08655944851 / 52</div>
            </div>
            
            <div>
              <div className="font-bold text-[14px]">Helpline No.:</div>
              <div className="ml-6 mt-0.5 text-[14px] text-gray-700">9321235321</div>
            </div>
            
            <div>
              <div className="font-bold text-[14px]">Website:</div>
              <div className="ml-6 mt-0.5">
                <a href="http://msbsvet.edu.in" className="text-blue-500 hover:underline text-[14px]" target="_blank" rel="noreferrer">
                  msbsvet.edu.in
                </a>
              </div>
            </div>
            
            <div>
              <div className="font-bold text-[14px]">E-Mail Address:</div>
              <div className="ml-6 mt-0.5">
                <a href="mailto:msbve.secretary@dvet.gov.in" className="text-blue-500 hover:underline text-[14px]">
                  msbve.secretary@dvet.gov.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Map */}
        <div className="w-full lg:w-[350px] border border-gray-200 bg-white h-[250px] lg:h-auto rounded-sm">
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=Government%20Industrial%20Training%20Institute%20Mulund&t=&z=14&ie=UTF8&iwloc=&output=embed"
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

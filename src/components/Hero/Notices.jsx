function Notices() {
return (

    <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
      {/* Heading */}
    <div className="bg-slate-500 text-white px-[18px] py-[10px] flex items-center gap-[10px]">
        <span className="text-[18px]">☰</span>
        <h1 className="text-[18px] font-semibold">
        Important Notices
        </h1>
    </div>

      {/* Notice List */}
    <div className="px-[16px] py-[14px] h-[240px] overflow-y-auto">
        <ul className="list-disc pl-[22px] text-blue-700 text-[14px]">
        <li className="mb-[16px] cursor-pointer hover:underline">
            June 2026 - Brief schedule of the 1 year course duration.
        </li>

        <li className="mb-[16px] cursor-pointer hover:underline">
            APRIL - 2026, 2 YEAR EXAM (SOP)
        </li>

        <li className="mb-[16px] cursor-pointer hover:underline">
            APRIL-2026 (2 YEAR ) DETAIL TIME TABLE
        </li>

        <li className="mb-[16px] cursor-pointer hover:underline">
            REGULAR FINAL DETAIL TIME TABLE-2026
        </li>

        <li className="mb-[16px] cursor-pointer hover:underline">
            EX STUDENT FINAL DETAIL TIME TABLE-2026
        </li>

        <li className="mb-[16px] cursor-pointer hover:underline">
            Regarding approval of new courses from the training session 2026-27
        </li>

        </ul>
    </div>
    </div>
)
}
export default Notices
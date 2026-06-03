import { useState } from "react";

// Dropdown options for user types
const userTypes = [
  "Candidate",
  "Staff/Management",
  "Skill Development Institute (SDI)",
  "Promoting Organization",
];

function RegisterModal({ isOpen, onClose }) {
  const [selectedType, setSelectedType] = useState("");

  // Don't render anything if modal is closed
  if (!isOpen) return null;

  return (
    /* Dark overlay - click outside closes modal */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 
                 animate-[fadeIn_0.3s_ease] p-4"
      onClick={onClose}
    >
      {/* Modal box - stop click from closing */}
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-md 
                   animate-[scaleIn_0.3s_ease] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="bg-[#0D1B5E] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
           
            <h2 className="text-white text-lg font-semibold">
              New User Registration
            </h2>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="bg-red-600 hover:bg-red-700 text-white w-8 h-8 
                       rounded-full flex items-center justify-center 
                       text-lg font-bold transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-8">
          {/* Label */}
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Select User Type
          </label>

          {/* Dropdown */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 
                       text-gray-700 text-base bg-white focus:border-blue-500 
                       focus:outline-none transition-colors appearance-none
                       cursor-pointer"
          >
            <option value="" disabled>
              -- Select User Type --
            </option>
            {userTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          {/* Continue button */}
          <button
            className="mt-6 w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white 
                       py-3 rounded-lg text-base font-semibold 
                       transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;

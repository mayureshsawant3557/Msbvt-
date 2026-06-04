import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

const userTypes = [
  "Candidate",
  "Staff / Management",
  "Skill Development Institute (SDI)",
  "Promoting Organization",
];

function RegisterModal({ isOpen, onClose }) {
  const [selectedType, setSelectedType] = useState("");

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="text-center mb-6">


          <h2 className="text-2xl font-bold text-blue-900">
            New Registration
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Select your user type to continue
          </p>
        </div>

        {/* Dropdown */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            User Type
          </label>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select User Type</option>

            {userTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 py-3 rounded-xl font-medium"
          >
            Cancel
          </button>

          <button
            className="flex-1 bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-xl font-medium"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
import { useState, useEffect, useCallback } from "react";
import { FaUser, FaEye, FaEyeSlash, FaSyncAlt } from "react-icons/fa";

// Generate a random captcha string
function generateCaptcha(length = 5) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function SignInPopup({ isOpen, onClose }) {
  const [profileId, setProfileId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaCode, setCaptchaCode] = useState("");

  // Generate captcha on mount and when refreshed
  const refreshCaptcha = useCallback(() => {
    setCaptchaCode(generateCaptcha());
    setCaptchaInput("");
  }, []);

  useEffect(() => {
    if (isOpen) {
      refreshCaptcha();
      setProfileId("");
      setPassword("");
      setShowPassword(false);
    }
  }, [isOpen, refreshCaptcha]);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (captchaInput.toUpperCase() !== captchaCode.toUpperCase()) {
      alert("Invalid captcha code. Please try again.");
      refreshCaptcha();
      return;
    }
    console.log("Login attempt:", { profileId, password });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 
                 animate-[fadeIn_0.3s_ease] p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-md 
                   animate-[scaleIn_0.3s_ease] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="bg-[#0D1B5E] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaUser className="text-white text-xl" />
            <h2 className="text-white text-lg font-semibold">Sign In</h2>
          </div>
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
        <form onSubmit={handleLogin} className="px-6 py-6 space-y-4">
          {/* Profile ID */}
          <input
            type="text"
            placeholder="PROFILE ID"
            value={profileId}
            onChange={(e) => setProfileId(e.target.value)}
            className="w-full border-l-4 border-l-gray-800 border-y border-r 
                       border-gray-300 px-4 py-3 text-gray-700 text-base 
                       bg-white focus:border-l-blue-600 focus:outline-none 
                       transition-colors placeholder:text-gray-400"
            required
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-l-4 border-l-gray-800 border-y border-r 
                         border-gray-300 px-4 py-3 pr-12 text-gray-700 text-base 
                         bg-white focus:border-l-blue-600 focus:outline-none 
                         transition-colors placeholder:text-gray-400"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 
                         text-gray-500 hover:text-gray-700 transition-colors"
            >
              {showPassword ? <FaEyeSlash className="text-lg" /> : <FaEye className="text-lg" />}
            </button>
          </div>

          {/* Captcha */}
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="TYPE CAPTCHA CODE"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              className="w-[180px] border-l-4 border-l-gray-800 border-y border-r 
                         border-gray-300 px-3 py-2.5 text-gray-700 text-sm 
                         bg-white focus:border-l-blue-600 focus:outline-none 
                         transition-colors placeholder:text-gray-400"
              required
            />
            <div
              className="bg-gray-900 text-white px-4 py-2 rounded 
                         font-bold text-xl tracking-[0.3em] select-none
                         min-w-[120px] text-center"
              style={{
                fontFamily: "'Courier New', monospace",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
              }}
            >
              {captchaCode}
            </div>
            <button
              type="button"
              onClick={refreshCaptcha}
              className="text-blue-600 hover:text-blue-800 p-1 
                         hover:rotate-180 transition-transform duration-300"
            >
              <FaSyncAlt className="text-xl" />
            </button>
          </div>

          {/* Help Link */}
          <div className="flex items-center text-[15px] pt-1">
            <p className="text-gray-800 font-semibold">Having Trouble Signing In ?</p>
            <span className="text-blue-700 ml-2 cursor-pointer hover:underline font-semibold">
              Click Here
            </span>
          </div>

          {/* Login Button */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white 
                         px-10 py-2.5 rounded-lg text-base font-semibold 
                         transition-colors shadow-md hover:shadow-lg"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInPopup;

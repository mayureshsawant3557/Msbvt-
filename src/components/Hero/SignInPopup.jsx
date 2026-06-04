import { useState } from "react";
import { FaEye, FaEyeSlash, FaSyncAlt } from "react-icons/fa";

function SignInPopup({ isOpen, onClose }) {
  const [profileId, setProfileId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 7).toUpperCase();
  }

  const [captcha, setCaptcha] = useState(() => generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (captchaInput !== captcha) {
      alert("Invalid Captcha");
      refreshCaptcha();
      return;
    }

    console.log("Login Success", {
      profileId,
      password,
    });
  };

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
          <h2 className="text-2xl font-bold text-blue-900">Sign In</h2>
          <p className="text-gray-500 text-sm">
            Access your account securely
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Profile ID */}
          <input
            type="text"
            placeholder="Profile ID"
            value={profileId}
            onChange={(e) => setProfileId(e.target.value)}
            className="w-full border rounded-xl p-3"
            required
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-xl p-3 pr-10"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-4 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Captcha */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Captcha"
              value={captchaInput}
              onChange={(e) =>
                setCaptchaInput(e.target.value.toUpperCase())
              }
              className="flex-1 border rounded-xl p-3"
              required
            />

            <div className="bg-blue-900 text-white px-4 py-3 rounded-xl font-bold">
              {captcha}
            </div>

            <button
              type="button"
              onClick={refreshCaptcha}
              className="text-blue-700"
            >
              <FaSyncAlt />
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold"
          >
            Sign In
          </button>
        </form>

        {/* Trouble Signing In */}
        <div className="text-center mt-5 text-sm">
          <span className="text-gray-600">
            Having Trouble Signing In?
          </span>

          <button
            type="button"
            className="text-blue-700 font-semibold ml-1 hover:underline"
          >
            Click Here
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInPopup;
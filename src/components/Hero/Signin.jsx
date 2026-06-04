function Signin() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 mt-2">

      {/* Sign In Button */}
      <div className="flex justify-center mb-4">
        <div className="bg-blue-900 text-white px-6 py-2 rounded-lg text-[18px] font-semibold flex items-center gap-2 shadow-lg">
          <span>👤</span>
          <p>Sign In</p>
        </div>
      </div>

      {/* Existing User */}
      <div className="grid grid-cols-2 items-center mb-4">
        <p className="text-center text-[18px] text-gray-700 font-semibold">Existing User ?</p>
        <div className="flex justify-center">
          <button className="bg-orange-700 hover:bg-orange-800 text-white px-5 py-1.5 rounded-full text-[14px] font-semibold transition-colors">
            Sign In
          </button>
        </div>
      </div>

      {/* Not Registered */}
      <div className="grid grid-cols-2 items-center mb-6">
        <p className="text-center text-[18px] text-gray-700 font-semibold">Not Registered ?</p>
        <div className="flex justify-center">
          <button className="bg-orange-700 hover:bg-orange-800 text-white px-4 py-1.5 rounded-full text-[14px] font-semibold transition-colors">
            Register Here
          </button>
        </div>
      </div>

      {/* Help Link */}
      <div className="flex justify-center text-[16px] mt-3">
        <p className="text-gray-800 font-semibold">Having Trouble Signing In ?</p>
        <span className="text-blue-800 ml-2 cursor-pointer hover:underline font-semibold">Click Here</span>
      </div>

    </div>
  )
}

export default Signin
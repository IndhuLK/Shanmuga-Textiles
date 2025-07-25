import React from "react";
import Logo from "../assets/HomeImg/Logo.png";

const LogIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-sm w-full bg-white p-8 rounded-lg shadow">
        {/* Logo */}
        <div className="flex items-center gap-3">
        <img src={Logo} alt="Logo" className="h-24 w-28" />
                  <p
                    className="text-xl font-semibold bg-gradient-to-r from-[#32754c] 
                  to-[#2a469e] bg-clip-text text-transparent italic"
                  >
                    Shri Shanmuga Textiles
                  </p>
                  </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold text-green-800 mb-6">
          Sign in
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="cleo_ondricka@hotmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Forgot Password 
          <div className="flex justify-end">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-900 transition"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;

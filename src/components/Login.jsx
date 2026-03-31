import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_medium.jpg"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black"></div>

      <div className="relative z-20 border border-b-gray-800">
        <Header />
      </div>

      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="bg-black/80 p-10 rounded-md text-white w-100">
          <h1 className="text-3xl font-bold mb-6">Sign In</h1>

          <input
            type="text"
            placeholder="Email or phone number"
            className="w-full mb-4 p-3 bg-gray-800 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-3 bg-gray-800 rounded"
          />

          <button className="w-full bg-red-600 py-3 rounded hover:bg-red-700">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

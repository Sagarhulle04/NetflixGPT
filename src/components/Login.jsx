import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="h-screen w-full relative">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_medium.jpg"
        alt="main-image"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
    </div>
  );
};

export default Login;

import React from "react";

const Header = () => {
  return (
    <div className=" px-10 flex justify-between items-center">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-03-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
        className="h-20 w-60"
      />

      <div className="flex gap-6 ">
        <select
          name=""
          id=""
          className="border cursor-pointer px-4 py-2 bg-black rounded-md text-white "
        >
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>

        <button className="bg-red-500 px-4 py-2 cursor-pointer text-white rounded-md">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import logo from "../assets/svg/desktop.svg";

function Navbar() {
  return (
    <div className="">
      <nav className="bg-white flex items-center shadow-3xl w-full h-[10%] z-[100] absolute top-0 left-0">
        <img
          src={logo}
          className=" md:ml-[128px] md:h-[30px] xs:h-[25px] xs:ml-[20px]"
          alt="Handout"
        />
      </nav>
    </div>
  );
}

export default Navbar;

import React from "react";
import logo from "../assets/svg/desktop.svg";

function Navbar() {
  return (
    <div className="">
      <nav className="bg-white flex items-center shadow-md w-full h-[10%] z-[100] fixed top-0 left-0  ">
        <img src={logo} className=" ml-[128px] h-[30px] " alt="Handout" />
      </nav>
    </div>
  );
}

export default Navbar;

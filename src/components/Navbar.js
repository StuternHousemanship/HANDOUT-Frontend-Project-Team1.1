/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/svg/desktop.svg";
import { NonAuthRoutes } from "../url";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="">
      <nav className="bg-white flex items-center justify-between shadow-3xl w-full h-[10%] z-[100] fixed top-0 left-0">
        <img
          src={logo}
          className="cursor-pointer md:ml-[128px] md:h-[30px] xs:h-[25px] xs:ml-[20px]"
          alt="Handout"
          onClick={() => navigate(NonAuthRoutes.Home)}
        />
        <ul className="flex mr-4 ">
          <button
            type="button"
            className=" font-[700] mr-4 py-1 px-2 rounded bg-[#077369] text-[#FEFEFE] text-[16px]"
            onClick={() => navigate(NonAuthRoutes.SignUp)}
          >
            Sign up
          </button>
          <button
            type="button"
            className=" font-[700] mr-4 py-1 px-2 rounded bg-[#077369] text-[#FEFEFE] text-[16px]"
            onClick={() => navigate(NonAuthRoutes.LogIn)}
          >
            Login
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

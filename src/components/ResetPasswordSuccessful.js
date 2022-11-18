/* eslint-disable react/function-component-definition */
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { NonAuthRoutes } from "../url";
import successrobot from "../assets/svg/successrobot.svg";

const ResetPasswordSuccessful = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate(NonAuthRoutes.LogIn);
  };
  return (
    <div className="w-screen h-screen relative flex flex-col items-center justify-center">
      <Navbar />
      <div className="flex  flex-col items-center justify-center  ">
        <img
          src={successrobot}
          className="w-[120px] h-[120px] xs:hidden md:flex "
          alt="Handout"
        />
        <h2 className="font-Raleway font-[700] text-[32px] leading-[40px] text-black ">
          Cheers!
        </h2>
        <p className="text-[14px] text-center leading-[28px] font-Raleway ">
          You just reset your password
        </p>
        <button
          type="button"
          className=" md:w-[480px] xs:w-[240px] md:h-[60px] xs:h-[40px] md:mt-[50px] xs:mt-[30px] rounded-[4px] bg-[#077369] text-white md:text-[16px] xs:text-[14px] font-[700] font-Raleway "
          onClick={() => handleLogin()}
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordSuccessful;

import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { NonAuthRoutes } from "../url";
import successrobot from "../assets/svg/successrobot.svg";

function ForgotPasswordSuccessful() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen relative flex flex-col items-center justify-center">
      <Navbar />
      <div className="flex flex-col items-center justify-center  ">
        <img
          src={successrobot}
          className="w-[120px] h-[120px] xs:hidden md:flex "
          alt="Handout"
        />
        <h2 className="font-Raleway font-[700] text-[32px] mt-6 leading-[40px] text-black ">
          Cheers!
        </h2>
        <p className="md:text-[14px] xs:text-[12px] mt-[10px] xs:mb-[150px] md:mb-[30px] text-center md:leading-[24px] xs:leading-[18px] font-Raleway ">
          We’ve sent you an email with detailed instructions on <br /> how to
          create a new password.
        </p>
        <button
          type="button"
          className=" md:w-[480px] xs:w-[240px] md:h-[60px] xs:h-[40px] md:mt-[30px] xs:mt-[30px] rounded-[4px] bg-[#077369] text-white md:text-[16px] xs:text-[14px] font-[700] font-Raleway "
          onClick={() => navigate(NonAuthRoutes.ResetPassword)}
        >
          Reset password
        </button>
        <p className="md:text-[14px] xs:text-[12px] mt-[5px] text-center md:leading-[24px] xs:leading-[18px] font-Raleway ">
          Didn’t receive the email? Check your spam folder or <br />{" "}
          <button
            type="button"
            onClick={() => window.location.reload(false)}
            className="font-bold font-Raleway"
          >
            try another email address.
          </button>
        </p>
      </div>
    </div>
  );
}

export default ForgotPasswordSuccessful;

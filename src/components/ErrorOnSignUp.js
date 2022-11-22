import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";
import dizzyrobot from "../assets/svg/dizzyrobot.svg";
import Navbar from "./Navbar";

function ErrorOnSignUp() {
  const navigate = useNavigate();
  /** Fuction to navigate back to sign up page after encountering an error on signing up */
  const handleSignUp = () => {
    navigate(NonAuthRoutes.SignUp);
  };

  return (
    <div className="w-screen h-screen relative flex flex-col items-center justify-center">
      <Navbar />
      <div className="flex flex-col items-center justify-center  ">
        <img src={dizzyrobot} className="w-[120px] h-[120px] " alt="Handout" />
        <h2 className="font-Raleway mt-[10px] font-[700] text-[32px] leading-[40px] text-[#000000] ">
          Uh-Oh!
        </h2>
        <p className="text-[16px] mt-[10px] text-center leading-[28px] font-Raleway ">
          Looks like something went wrong while verifying <br />
          your email. Don&apos;t worry, you can try again.
        </p>
        <button
          type="button"
          className=" md:w-[480px] xs:w-[240px] md:h-[60px] xs:h-[40px] md:mt-[50px] xs:mt-[30px] rounded-[4px] bg-[#077369] text-white md:text-[16px] xs:text-[14px] font-[700] font-Raleway "
          onClick={() => handleSignUp()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export default ErrorOnSignUp;

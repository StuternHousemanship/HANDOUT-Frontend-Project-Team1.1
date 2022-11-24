import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";
import dizzyrobot from "../assets/svg/dizzyrobot.svg";
import OnboardingHeader from "./header/OnboardingHeader";

function ErrorOnLogin() {
  const navigate = useNavigate();
  /** Fuction to navigate back to login page after encountering an error on logging in */
  const handleLogin = () => {
    navigate(NonAuthRoutes.LogIn);
  };

  return (
    <div className="w-screen h-screen relative flex flex-col items-center justify-center">
      <OnboardingHeader />
      <div className="flex flex-col items-center justify-center  ">
        <img src={dizzyrobot} className="w-[120px] h-[120px] " alt="Handout" />
        <h2 className="font-Raleway font-[700] text-[32px] text-[#000000] text-center leading-[40px] ">
          Unable to connect to your account.
        </h2>
        <p className="mt-[24px] font-[500] leading-[24px] font-[Raleway] text-[16px] text-center ">
          Due to poor network connection, please try <br /> logging in again
        </p>
        <p className="mt-[24px] font-[500] leading-[24px] font-[Raleway] text-[16px] text-center ">
          If issue keeps happening, please reach out to <br /> the &nbsp;
          <button
            type="button"
            className="text-[#077369] font-[700] leading-[24px] font-[Raleway] text-[16px] text-center  "
          >
            Help centre.
          </button>
        </p>
        <button
          type="button"
          className="mt-[78.5px] leading-[19px] font-[700] font-[Raleway] text-[16px] text-center text-[#077369] "
          onClick={() => handleLogin()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export default ErrorOnLogin;

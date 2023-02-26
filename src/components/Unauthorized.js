import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";
import dizzyrobot from "../assets/svg/dizzyrobot.svg";
import OnboardingHeader from "./header/OnboardingHeader";

function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen relative flex flex-col items-center justify-center">
      <OnboardingHeader />
      <div className="flex flex-col items-center justify-center  ">
        <img
          src={dizzyrobot}
          className="w-[120px] h-[120px] mb-[20px]"
          alt="Handout"
        />
        <span className="w-full flex items-center justify-center">
          <h2 className="font-Raleway font-[700] text-[#000000] text-center  ">
            Please kindly{" "}
            <button
              type="button"
              className="font-[700] font-[Raleway] text-[16px] text-[#077369] "
              onClick={() => navigate(NonAuthRoutes.LogIn)}
            >
              login
            </button>{" "}
            to your account or{" "}
            <button
              type="button"
              className=" font-[700] font-[Raleway] text-[16px] text-[#077369] "
              onClick={() => navigate(NonAuthRoutes.SignUp)}
            >
              sign up
            </button>
            <p className="font-Raleway font-[700] text-[#000000] text-center ">
              if you have not created one
            </p>
          </h2>
        </span>
      </div>
    </div>
  );
}

export default Unauthorized;

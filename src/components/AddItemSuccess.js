import React from "react";
// import { useNavigate } from "react-router-dom";
import OnboardingHeader from "./header/OnboardingHeader";
// import { NonAuthRoutes } from "../url";
import successrobot from "../assets/svg/successrobot.svg";

function AddItemSuccess() {
  // const navigate = useNavigate();
  return (
    <div className="w-screen h-screen relative flex flex-col items-center justify-center">
      <OnboardingHeader />
      <div className="flex flex-col items-center justify-center  ">
        <img
          src={successrobot}
          className="w-[120px] h-[120px] xs:hidden md:flex "
          alt="Handout"
        />
        <h2 className="font-Raleway font-[700] text-[32px] mt-2 leading-[40px] text-black ">
          Successful!
        </h2>
        <p className="md:text-[14px] xs:text-[12px] mt-[10px] xs:mb-[150px] md:mb-[20px] text-center md:leading-[24px] xs:leading-[18px] font-Raleway ">
          Your Item has been listed succesfully,
        </p>

        <p className="md:text-[14px] xs:text-[12px] mt-[5px] text-center md:leading-[24px] xs:leading-[18px] font-Raleway ">
          Redirecting to the lsted item page in 8s...
        </p>
      </div>
    </div>
  );
}

export default AddItemSuccess;

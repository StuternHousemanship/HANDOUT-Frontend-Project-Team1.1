import React from "react";
// import { useNavigate } from "react-router-dom";
import OnboardingHeader from "./header/OnboardingHeader";
// import { NonAuthRoutes } from "../url";
import dizzyrobot from "../assets/svg/dizzyrobot.svg";

function AddItemError() {
  // const navigate = useNavigate();
  return (
    <div className="w-screen h-screen relative flex flex-col items-center justify-center">
      <OnboardingHeader />
      <div className="flex flex-col items-center justify-center  ">
        <img
          src={dizzyrobot}
          className="w-[120px] h-[120px] xs:hidden md:flex "
          alt="Handout"
        />
        <h2 className="font-Raleway font-[700] text-[32px] mt-6 leading-[40px] text-black ">
          Error!
        </h2>
        <p className="md:text-[14px] xs:text-[12px] mt-[10px] xs:mb-[150px] md:mb-[30px] text-center md:leading-[24px] xs:leading-[18px] font-Raleway ">
          An error occured, not able to upload listed <br />
          item due to some errors.
        </p>

        <p className="md:text-[14px] xs:text-[12px] mt-[5px] text-center md:leading-[24px] xs:leading-[18px] font-Raleway ">
          Redirecting to list items page.
        </p>
      </div>
    </div>
  );
}

export default AddItemError;

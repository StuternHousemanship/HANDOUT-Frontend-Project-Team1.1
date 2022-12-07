import React from "react";
import dizzyrobot from "../assets/svg/dizzyrobot.svg";
import Onboardingheader from "./header/OnboardingHeader";

function DeleteAccount() {
  return (
    <div className="w-screen h-screen relative flex flex-col items-center justify-center ">
      <div className="xs:hidden md:flex ">
        <Onboardingheader />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <img src={dizzyrobot} className="w-[120px] h-[120px] " alt="Handout" />
        <h2 className="xs:hidden md:flex font-Raleway font-[700] text-[32px] text-[#000000] leading-[40px] ">
          Uh-Oh!
        </h2>
        <p className="mt-[24px] font-[500] leading-[24px] font-[Raleway] text-[16px] xs:flex md:hidden text-center ">
          looks like something went wrong while <br /> deleting this item
        </p>
        <p className="text-[14px] md:text-[16px] text-center text-[#000000] font-Raleway leading-[28px]">
          Redirecting to item details page......
        </p>
      </div>
    </div>
  );
}

export default DeleteAccount;

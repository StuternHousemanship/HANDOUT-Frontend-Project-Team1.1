import React from "react";
import successrobot from "../assets/svg/successrobot.svg";
import Onboardingheader from "./header/OnboardingHeader";

function DeleteAccount() {
  return (
    <div className="w-screen h-screen relative flex flex-col items-center justify-center ">
      <div className="xs:hidden md:flex ">
        <Onboardingheader />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <img
          src={successrobot}
          className="w-[120px] h-[120px] "
          alt="Handout"
        />
        <h2 className="text-[14px] font-Raleway font-[600] md:text-[20px] text-[#000000] leading-[28px] mt:[10px] md:mt-[30px]">
          item deleted successfully deleted
        </h2>
        <p className="text-[14px] md:text-[16px] text-center text-[#000000] font-Raleway leading-[28px]">
          Redirecting to item details page......
        </p>
      </div>
    </div>
  );
}

export default DeleteAccount;

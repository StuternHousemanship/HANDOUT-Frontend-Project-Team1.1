import React from "react";
import successrobot from "../assets/svg/successrobot.svg";

function LoginSuccess() {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <img
        src={successrobot}
        className="w-[120px] h-[120px] xs:hidden md:block "
        alt="Handout"
      />
      <h2 className="font-Raleway font-[700] text-[32px] leading-[40px] text-[#278178] ">
        Success
      </h2>
      <p className="text-[16px] text-center leading-[28px] font-Raleway ">
        That was a successfull login let&apos;s proceed <br /> to your
        dashboard...{" "}
      </p>
    </div>
  );
}

export default LoginSuccess;

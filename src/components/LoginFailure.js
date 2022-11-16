import React from "react";
import dizzyrobot from "../assets/svg/dizzyrobot.svg";

function LoginFailure() {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <img
        src={dizzyrobot}
        className="w-[120px] h-[120px] xs:hidden md:block "
        alt="Handout"
      />
      <h2 className="xs:hidden md:flex font-Raleway font-[700] text-[32px] text-[#000000] leading-[40px] ">
        Uh-Oh!
      </h2>
      <p className="xs:hidden md:flex text-[16px] text-center leading-[28px] text-[#000000] font-Raleway ">
        Unable to connect to your account. Not to <br /> worry, you can try
        again
      </p>
      <p className="font-[700] font-[Raleway] leading-[22px] text-[#191919] text-[16px] xs:flex md:hidden text-center ">
        Unable to connect to your account...
      </p>
      <p className="mt-[24px] font-[500] leading-[24px] font-[Raleway] text-[16px] xs:flex md:hidden text-center ">
        Due to poor network connection, please try <br /> logging in again
      </p>
      <p className="mt-[24px] font-[500] leading-[24px] font-[Raleway] text-[16px] xs:flex md:hidden text-center ">
        If issues keep happening, please reach out to the &nbsp;
        <button
          type="button"
          className="text-[#077369] font-[700] leading-[24px] font-[Raleway] text-[16px] xs:flex md:hidden text-center  "
        >
          Help centre.
        </button>
      </p>
      <button
        type="button"
        className="xs:hidden md:block w-[480px] h-[60px] mt-[50px] rounded-[4px] bg-[#077369] text-white text-[20px] font-[700] font-Raleway "
      >
        Reset Password
      </button>
      <button
        type="button"
        className="mt-[78.5px] leading-[19px] font-[700] font-[Raleway] text-[16px] xs:flex md:hidden text-center  "
      >
        Try again
      </button>
    </div>
  );
}

export default LoginFailure;

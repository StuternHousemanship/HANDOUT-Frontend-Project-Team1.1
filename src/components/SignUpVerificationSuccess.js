import React from "react";
import { useNavigate } from "react-router-dom";
import successrobot from "../assets/svg/successrobot.svg";
import { NonAuthRoutes } from "../url";

function SignUpVerificationSuccess() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center  ">
      <img
        src={successrobot}
        className="w-[120px] h-[120px] xs:hidden md:block "
        alt="Handout"
      />
      <h2 className="font-Raleway font-[700] text-[32px] leading-[40px] ">
        Verification!
      </h2>
      <p className="text-[16px] text-center leading-[28px] font-Raleway ">
        A verification email has been sent to your <br /> email address
      </p>
      <button
        type="button"
        onClick={() => navigate(NonAuthRoutes.VerifyEmail)}
        className="xs:hidden md:block w-[480px] h-[60px] mt-[50px] rounded-[4px] bg-[#077369] text-white text-[16px] font-[700] font-Raleway "
      >
        Let&apos;s go
      </button>
    </div>
  );
}

export default SignUpVerificationSuccess;

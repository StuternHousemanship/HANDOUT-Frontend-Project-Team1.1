import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";
import successrobot from "../assets/svg/successrobot.svg";

function LoginSuccess() {
  const navigate = useNavigate();

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
        That was a successfull login let&apos;s proceed <br /> to your dashboard{" "}
        <button
          type="button"
          onClick={() => navigate(NonAuthRoutes.DashboardOnboarding)}
          className="text-[#278178] font-[700] "
        >
          here
        </button>
      </p>
    </div>
  );
}

export default LoginSuccess;

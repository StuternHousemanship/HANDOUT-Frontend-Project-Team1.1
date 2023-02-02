import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/svg/desktop.svg";
import { NonAuthRoutes } from "../../url";
// import avatar from "../../assets/svg/Avatar.svg";

function OnboardingHeader() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="bg-white flex items-center justify-between shadow-3xl w-full h-[10%] z-[100] fixed top-0 left-0">
        <button
          type="button"
          onClick={() => navigate(NonAuthRoutes.Home)}
          className="cursor-pointer md:ml-[128px] md:h-[30px] xs:h-[25px] xs:ml-[20px]"
        >
          <img src={logo} className=" md:h-[30px] xs:h-[25px]" alt="Handout" />
        </button>
      </nav>
    </div>
  );
}

export default OnboardingHeader;

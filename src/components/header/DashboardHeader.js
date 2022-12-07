import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import logo from "../../assets/svg/desktop.svg";
import { NonAuthRoutes, AuthRoutes } from "../../url";
import avatar from "../../assets/svg/Avatar.svg";
import help from "../../assets/svg/help.svg";
import acct from "../../assets/svg/acct.svg";
import settings from "../../assets/svg/settings.svg";
import logout from "../../assets/svg/logout.svg";

function DashboardHeader() {
  const navigate = useNavigate();
  const [showAvatarDropDown, setShowAvatarDropDown] = useState(false);

  /** Function to toggle avatar dropdown */
  const toggleAvatar = () => {
    setShowAvatarDropDown(!showAvatarDropDown);
  };

  return (
    <div>
      <nav className="bg-white flex items-center justify-between shadow-3xl w-full sm:h-[10%] xs:h-[8%] xl:h-[8%] z-[100] fixed top-0 left-0">
        <div className="flex items-center justify-center">
          <button type="button" onClick={() => navigate(NonAuthRoutes.Home)}>
            <img
              src={logo}
              className="cursor-pointer md:ml-[78px] md:h-[30px] xs:h-[25px] xs:ml-[20px]"
              alt="Handout"
            />
          </button>
        </div>
        <ul className="flex xs:hidden md:flex ">
          <button type="button" onClick={toggleAvatar}>
            <img
              alt="avatar"
              src={avatar}
              className="mr-[56px] w-[30px] h-[30px]"
            />
          </button>
        </ul>
        <div
          className={
            showAvatarDropDown
              ? "w-[190px] fixed top-[65px] right-0 z-[2] bg-white shadow-md"
              : "hidden"
          }
        >
          <ul className="flex flex-col items-center font-Raleway text-[12px] py-[30px]">
            <div className="w-[80%]">
              <button
                type="button"
                className="flex"
                onClick={() => navigate(AuthRoutes.AccountOverview)}
              >
                <img alt="Settings" src={acct} className="ml-1 mr-4" />
                <p>My account</p>
              </button>
            </div>
            <div className="w-[80%]">
              <button type="button" className="mt-[30px] flex">
                <img alt="Settings" src={help} className="ml-1 mr-4" />
                <p>Help and support</p>
              </button>
            </div>
            <div className="w-[80%]">
              <button type="button" className="my-[30px] flex">
                <img alt="Settings" src={settings} className="ml-1 mr-4" />
                <p>Settings</p>
              </button>
            </div>
            <hr className="w-[80%] text-gray-400 flex items-center justify-center" />
            <div className="w-[80%]">
              <button
                type="button"
                onClick={() => navigate(NonAuthRoutes.Home)}
                className="text-[#A40D0D] mt-[20px] flex "
              >
                <img alt="Settings" src={logout} className="ml-1 mr-4" />
                <p>Log out</p>
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default DashboardHeader;

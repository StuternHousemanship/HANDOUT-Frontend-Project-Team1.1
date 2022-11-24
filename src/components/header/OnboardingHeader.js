import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/svg/desktop.svg";
import { NonAuthRoutes } from "../../url";
import item from "../../assets/svg/all-items.svg";
import notifications from "../../assets/svg/notifications.svg";
import sell from "../../assets/svg/sell.svg";
import avatar from "../../assets/svg/Avatar.svg";

function OnboardingHeader() {
  const navigate = useNavigate();
  const navbarMenus = [
    {
      image: item,
      name: "All items",
    },
    {
      image: sell,
      name: "My Listings",
    },
    {
      image: notifications,
      name: "Notifications",
    },
  ];
  return (
    <div>
      <nav className="bg-white flex items-center justify-between shadow-3xl w-full h-[10%] z-[100] fixed top-0 left-0">
        <button
          type="button"
          onClick={() => navigate(NonAuthRoutes.LandingPage)}
        >
          <img
            src={logo}
            className="cursor-pointer md:ml-[128px] md:h-[30px] xs:h-[25px] xs:ml-[20px]"
            alt="Handout"
          />
        </button>
        <ul className="flex xs:hidden md:flex ">
          {navbarMenus.map((items) => (
            <div className="flex items-center flex-col w-auto mr-[56px]">
              <div className=" ">
                <img
                  alt={items.name}
                  src={items.image}
                  className="w-[20px] h-[20px]"
                />{" "}
              </div>
              <div className="">
                <button type="button" className="font-Raleway text-[12px] ">
                  {items.name}{" "}
                </button>
              </div>
            </div>
          ))}
          <button type="button">
            <img
              alt="avatar"
              src={avatar}
              className="mr-[56px] w-[30px] h-[30px]"
            />
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default OnboardingHeader;

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { AuthRoutes } from "../url";
import OnboardingHeader from "../components/header/OnboardingHeader";
import avatar from "../assets/svg/Avatar.svg";
// import showPwd from "../assets/svg/show-password.svg";
// import hidePwd from "../assets/svg/hide-password.svg";

function EditProfile() {
  const navigate = useNavigate();
  const [phoneNovalue, setPhoneNoValue] = useState();
  // const [pwd, setPwd] = useState("");
  // const [isRevealPwd, setIsRevealPwd] = useState(false);
  return (
    <div>
      <OnboardingHeader />
      <div className=" flex md:inline-flex lg:inline-flex justify-center items-center w-[100%] h-auto">
        <div className="flex flex-col align-center justify-center mt-[100px] w-[full] h-auto mx-[15px]">
          <div
            className=" flex items-center justify-center sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[1030px] h-[220px] rounded-[10px] bg-[#F1F6F6] mx-[15px]
"
          >
            <div className="flex   ">
              <img alt="avatar" src={avatar} className=" w-[50px] h-[50px]" />
            </div>
          </div>
          <form className="w-full">
            <div className="flex flex-wrap mx-3 mt-[42px]">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block font-Raleway text-[14px]  font-[500] tracking-wide text-[#001C35] mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="block w-full bg-[transparent]  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-first-name"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block font-Raleway text-[14px]  font-[500] tracking-wide text-[#001C35] mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="block w-full bg-[transparent]  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-wrap mx-3 mt-[42px]">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block font-Raleway text-[14px]  font-[500] tracking-wide text-[#001C35] mb-2"
                  htmlFor="grid-first-name"
                >
                  Email Address
                </label>
                <input
                  className="block w-full bg-[transparent]  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-first-name"
                  type="text"
                  placeholder="Tobajohncena@gmail.com"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block font-Raleway text-[14px]  font-[500] tracking-wide text-[#001C35] mb-2"
                  htmlFor="grid-first-name"
                >
                  Mobile
                </label>
                <PhoneInput
                  required
                  defaultCountry="NG"
                  international
                  countryCallingCodeEditable={false}
                  value={phoneNovalue}
                  onChange={setPhoneNoValue}
                  id="mobile"
                  placeholder="812 345 6789"
                  className=" border border-grey-light w-full p-3 rounded mb-2 outline-0  xs:text-[14px] md:text-[16px] xs:h-[45px] md:h-[56px] "
                />
              </div>
            </div>
            {/* <div className="flex flex-wrap mx-3 mt-[42px]">
              <div className="relative w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
                <label
                  className="block font-Raleway text-[14px]  font-[500] tracking-wide text-[#001C35] mb-2"
                  htmlFor="grid-first-name"
                >
                  Password
                </label>
                <input
                  className="  block w-full bg-[transparent]  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-first-name"
                  type={isRevealPwd ? "text" : "password"}
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  placeholder="**************"
                />
                <img
                  className="w-6 absolute  pr-3 flex items-center"
                  alt="passwrd"
                  title={isRevealPwd ? "Hide password" : "Show password"}
                  src={isRevealPwd ? showPwd : hidePwd}
                  onClick={() => setIsRevealPwd((prevState) => !prevState)}
                />
              </div>
              <button
                type="button"
                className="font-Raleway font-[700] bg-[#077369] text-[#FFFFFF] "
                // onClick={() => navigate(NonAuthRoutes.LogIn)}
              >
                Change

            </div>
             </button> */}
            <div className="w-full md:w-3/4 px-3 mb-6 md:mb-0 my-[10px]">
              <div className="flex mx-3 ">
                <button
                  type="button"
                  className="font-Raleway font-[600] bg-transparent border border-[#077369] text-[14px] text-[#077369] w-[200px] h-[40px] rounded  "
                  onClick={() => navigate(AuthRoutes.AccountOverview)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="font-Raleway font-[600] bg-[#077369] text-[14px]  text-[#FFFFFF] rounded w-[200px] h-[40px] mx-[20px] "
                  // onClick={() => navigate(NonAuthRoutes.LogIn)}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;

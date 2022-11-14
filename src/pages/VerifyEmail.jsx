import React from "react";
import logo from "../assets/svg/desktop.svg";

function VerifyEmail() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh]">
      {/* laptop and ipad view */}
      <div className="xs: heddin flex flex-col justify-center items-center w-full h-[100vh] bg-white">
        <div className="xs:hidden md:block w-full h-[80px] bg-white border-b-[3px] border-[#F1F7F7] ">
          <img
            className="w-[157px] h-[44] ml-[120px] my-[26px]"
            src={logo}
            alt=""
          />
        </div>

        <div className="xs:hidden md:inline-flex lg:inline-flex flex flex-col justify-center items-center w-full h-[100vh]">
          <div className="w-[640px] h-[500px] bg-[#F1F7F7]">
            <div className="flex flex-col justify-center items-center">
              <div className="w-80 h-11 mt-12 font-[700] leading-40 text-[32px] font-Raleway text-[#2F2F2A]">
                Verify your email
              </div>

              <hr className="w-[540px] border-1 border-[#969696] mt-[24px] " />

              <div className="w-96 h-10 mt-14 font-[500] leading-[24px] text-[#4B4B4B] font-Raleway text-center text-[16px]">
                Glad to have you join the community. Click the button below to
                complete setting up your account
              </div>

              <button
                type="button"
                className="w-[502px] h-[59px] font-[700]  rounded bg-[#077369]  mt-20 text-[#FEFEFE] text-[20px]"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden lg:hidden flex flex-col justify-center items-center w-full h-[100vh]">
        <div className="md:hidden lg:hidden w-full h-[80px] bg-white border-b-[2px] border-[#F1F7F7] ">
          <img
            className="w-[104px] h-[26] ml-[20px] my-[23px]"
            src={logo}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center w-[428px] h-[926px]  my-10 bg-white">
          <div className="w-full h-subWidth ">
            <div className="flex flex-col justify-center items-center">
              <div className="w-56 h-8  font-[700] text-[24px] leading-[34px] font-Raleway text-[#191919]">
                Verify your email
              </div>
              <div className="w-80 h-10 mt-11 text-[13px] leading-[24px] text-center font-Raleway text-[#191919] font-[400] ">
                Glad to have you join the community. Click the button to
                complete setting up your account
              </div>
              <button
                type="button"
                className="w-[388px] h-[53px] bg-[#077369] font-[700] mt-14 text-[#FEFEFE] text-[16px] tracking-wide font-Raleway "
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;

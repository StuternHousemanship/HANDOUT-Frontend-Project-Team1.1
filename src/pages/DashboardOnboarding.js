import React from "react";
import sellIcon from "../assets/svg/sell.svg";
import frame1844 from "../assets/svg/Frame 1000001844.svg";
import exploreIcon from "../assets/svg/explore.svg";
import OnboardingHeader from "../components/header/OnboardingHeader";

function DashboardOnboarding() {
  return (
    <>
      <OnboardingHeader />
      <div className="xs:hidden md:inline-flex lg:inline-flex flex flex-col justify-center items-center w-[100%] h-auto">
        <div className="flex flex-col mt-[100px] w-[80%] h-auto ">
          <h2 className="w-[401px] h-[48px] text-[#191919] font-[Raleway] text-[700] text-[40px] leading-48 ">
            Welcome Jane Doe!
          </h2>
          <div className="sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[1030px] h-[360px] rounded-[10px]  ">
            <img className="mt-[32px] " src={frame1844} alt="Barna" />
          </div>

          <div className="sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[1030px] h-auto flex flex-row justify-around items-center">
            <div className="sm:w-[400px]mt-[2px] md:w-[400px]mt-[2px] lg:w-[488px] h-[364] flex flex-col justify-center items-center px-[24px] py-[32px]">
              <img
                className="w-[31px] h-[31px] mt-[48px] "
                src={sellIcon}
                alt=""
              />
              <p className="w-[220px] h-[32px] my-[15px] text-[24px] mt-[] text-[700] font-Raleway leading-32 text-[#191919] ">
                Sell to real people{" "}
              </p>
              <div className="sm:text-[16px] md:text-[16px] lg:w-[440px] h-[48px] font-Raleway text-[500] text-[20px] leading-24 text-[#2F2F2A] text-center">
                Have an item you want to give out? You can list it on Hangout
                from anywhere, with ease.{" "}
              </div>
              <button
                type="button"
                className="sm:w-[250px] md:w-[250px] lg:flex flex-col justify-center items-center bg-[#077369] w-[320px] h-[60px] rounded-[4px] py-[12px] px-[50px] text-[#FEFEFE] font-Raleway text-[20px] text-[700] leading-[24px] mt-[50px] "
              >
                List Items
              </button>
            </div>
            <div className="sm:w-[400px] md:w-[400px] lg:w-[488px] h-[364] flex flex-col justify-center items-center px-[24px] py-[32px] ">
              <img
                className="w-[39px] h-[39px] mt-[40px] "
                src={exploreIcon}
                alt="explore icon"
              />
              <div className="w-[220px] h-[32px] my-[15px] text-[24px] mt-[] text-[700] font-Raleway leading-32 text-[#191919]">
                Something for you{" "}
              </div>

              <div className="sm:text-[16px] md:text-[16px] lg:w-[440px] h-[48px] font-Raleway text-[500] text-[20px] leading-24 text-[#2F2F2A] text-center ">
                Discover items that you didn’t know you need. Whatever you are
                into, find it on Hangout.
              </div>
              <button
                type="button"
                className="sm:w-[250px] md:w-[250px] lg:flex flex-col justify-center items-center bg-[#077369] w-[320px] h-[60px] rounded-[4px] py-[12px] px-[50px] text-[#FEFEFE] font-Raleway text-[20px] text-[700] leading-[24px] mt-[50px] "
              >
                Browse all
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden lg:hidden flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mt-[100px] ">
          <div className="w-[379px] h-[40px] text-[#191919] font-[Raleway] text-[700] text-[24px] leading-[40px] tracking-wide ">
            Welcome Jane Doe!
          </div>
          <div className="w-[387px] h-[173px] rounded-[5px] ">
            <img className="mt-[20px] " src={frame1844} alt="Barna" />
          </div>

          <div className="flex flex-col justify-around items-center">
            <div className="w-[488px] h-[364] flex flex-col justify-center items-center px-[24px] py-[32px]">
              <img
                className="w-[19px] h-[19px] mt-[11px] text-[#077369] "
                src={sellIcon}
                alt=""
              />
              <p className="w-[220px] h-[32px] my-[15px] text-[24px] mt-[] text-[700] font-Raleway leading-32 text-[#191919] ">
                Sell to real people{" "}
              </p>
              <div className="w-[440px] h-[48px] font-Raleway text-[500] text-[16px] leading-[24px] text-[#2F2F2A] text-center">
                Have an item you want to give out? You can list it on Hangout
                from anywhere, with ease.{" "}
              </div>
              <button
                type="button"
                className="flex flex-col justify-center items-center bg-[#077369] w-[220px] h-[48px] rounded-[4px] py-[12px] px-[50px] text-[#FEFEFE] font-Raleway text-[20px] text-[700] leading-[24px] mt-[30px] "
              >
                List Items
              </button>
            </div>
            <div className="w-[488px] h-[364] flex flex-col justify-center items-center px-[24px] py-[32px] ">
              <img
                className="w-[21px] h-[21px] mt-[] text-[ #077369] "
                src={exploreIcon}
                alt=""
              />
              <div className="w-[220px] h-[32px] my-[15px] text-[24px] mt-[] text-[700] font-Raleway leading-32 text-[#191919]">
                Something for you{" "}
              </div>

              <div className="w-[440px] h-[48px] font-Raleway text-[500] text-[16px] leading-[24px] text-[#2F2F2A] text-center ">
                Discover items that you didn’t know you need. Whatever you are
                into, find it on Hangout.
              </div>
              <button
                type="button"
                className="flex flex-col justify-center items-center bg-[#077369] w-[220px] h-[48px] rounded-[4px] py-[12px] px-[50px] text-[#FEFEFE] font-Raleway text-[20px] text-[700] leading-[24px] mt-[30px] "
              >
                Browse all
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardOnboarding;

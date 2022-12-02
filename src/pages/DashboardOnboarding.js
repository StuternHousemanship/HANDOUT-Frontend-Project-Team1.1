import React from "react";
import sellIcon from "../assets/svg/sell (1).svg";
import onboarding from "../assets/svg/onboarding.png";
import exploreIcon from "../assets/svg/explore.svg";
import OnboardingHeader from "../components/header/OnboardingHeader";

function DashboardOnboarding() {
  return (
    <>
      <OnboardingHeader />
      <div className="xs:hidden md:inline-flex lg:inline-flex flex flex-col justify-center items-center w-screen h-screen mt-[] ">
        <div className="flex flex-col justify-center items-center w-[80%] h-auto mt-[40px] ">
          <div className="flex flex-col justify-start items-start w-[100%] h-[30px] mb-[10px] ">
            <h2 className="md:mt-[10px] lg:mt-[10px] xl:mt-[30px]text-[#191919] font-[Raleway] font-[700] text-[20px] leading-48 ">
              Welcome Jane Doe!
            </h2>
          </div>

          <div className="flex justify-center items-center w-[100%] h-auto ">
            <div className="sm:w-[100%] md:w-[100%] flex justify-end lg:w-[100%] flex justify-end xl:flex justify-end w-[100%] h-[250px] rounded-[10px] bg-gradient-to-r from-[#077369] to-[#ccfbf1] ">
              <div className="sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[80%] h-full flex justify-between items-center ">
                <div className="flex flex-col justify-center text-left text-[28px] font-Raleway text-[#f3eeee] ">
                  <h3 className="md: text-[16px] lg:text-[25px] xl: text-[32px] ">
                    Welcome to a
                  </h3>
                  <h3 className="md:text-[24px] lg:text-[28px] xl:text-[38px] font-[700] text-[#FEFEFE] ">
                    community first
                  </h3>
                  <h3 className="md:text-[16px] lg:text-[25px] xl:text-[30px]">
                    market place
                  </h3>
                </div>

                <div>
                  <img
                    className="min-w-[250px] max-h-[250px]"
                    src={onboarding}
                    alt="handout"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] h-auto flex flex-row justify-around items-center ">
            <div className="sm:w-[400px]mt-[2px] md:w-[400px]mt-[2px] lg:w-[400px] h-[300] flex flex-col justify-center items-center px-[24px] py-[32px]">
              <div className="w-[44px] h-[44px] bg-[#EEF7F7] rounded-[50%] mb-[10px] flex justify-center items-center text-[#077369] ">
                <img className="w-[20px] h-[20px] " src={sellIcon} alt="" />
              </div>
              <p className="text-[16px] mb-[10px] font-[700] font-Raleway leading-32 text-[#191919] ">
                Sell to real people{" "}
              </p>
              <p className="sm:text-[16px] md:text-[16px] lg:w-[440px] h-[48px] font-Raleway text-[500] text-[20px] leading-24 text-[#2F2F2A] text-center">
                Have an item you want to give out? You can list it on Hangout
                from anywhere, with ease.{" "}
              </p>
              <button
                type="button"
                className="sm:w-[250px] md:w-[250px] mt-[35px] lg:w-[320px] flex flex-col justify-center items-center bg-[#077369] w-[320px] h-[40px] rounded-[4px] py-[10px] px-[50px] text-[#FEFEFE] font-Raleway text-[] font-[700] leading-[24px] mt-[20px] "
              >
                List Items
              </button>
            </div>
            <div className="sm:w-[400px] md:w-[400px] lg:w-[488px] h-[364] flex flex-col justify-center items-center px-[24px] py-[32px] ">
              <div className="w-[44px] h-[44px] bg-[#EEF7F7] rounded-[50%] mb-[10px] flex justify-center items-center text-[#077369]">
                <img
                  className="w-[20px] h-[20px] "
                  src={exploreIcon}
                  alt="explore icon"
                />
              </div>
              <p className="my-[] text-[] mb-[10px] font-[700] font-Raleway leading-32 text-[#191919]">
                Something for you{" "}
              </p>

              <p className="sm:text-[16px] md:text-[16px] lg:font-Raleway text-[500] text-[] leading-24 text-[#2F2F2A] text-center ">
                Discover items that you didn’t know you need. Whatever you are
                into, find it on Hangout.
              </p>
              <button
                type="button"
                className="sm:w-[250px] md:w-[250px] mt-[] lg:w-[320px] flex flex-col justify-center items-center bg-[#077369] w-[320px] h-[40px] rounded-[4px] py-[10px] px-[50px] text-[#FEFEFE] font-Raleway text-[] font-[700] leading-[24px] mt-[20px] "
              >
                Browse all
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden lg:hidden flex flex-col justify-center items-center px-[10px] ">
        <div className="flex flex-col justify-center items-center mt-[100px] w-[100%] h-[screen] ">
          <div className="flex flex-col justify-start items-start w-[100%] h-[40px] text-[#191919] font-[Raleway] font-[700] text-[16px] leading-[40px] tracking-wide ">
            <p>Welcome Jane Doe!</p>
          </div>
          <div className="flex justify-center items-center w-[100%] h-auto px-[5px] ">
            <div className="flex justify-end w-[100%] h-[150px] rounded-[4px] bg-gradient-to-r from-[#077369] to-[#ccfbf1] ">
              <div className="w-[90%] h-full flex justify-between items-center ">
                <div className="flex flex-col justify-center text-left font-Raleway text-[#f3eeee] ">
                  <h3 className="text-[16px] ">Welcome to a</h3>
                  <h3 className="text-[18px] font-[700] text-[#FEFEFE] ">
                    community first
                  </h3>
                  <h3 className="text-[16px]">market place</h3>
                </div>

                <div>
                  <img
                    className="min-w-[180px] max-h-[150px]"
                    src={onboarding}
                    alt="handout"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-around items-center w-[100%] h-auto ">
            <div className="w-[90%] h-[300px] flex flex-col justify-center items-center px-[24px] py-[32px]">
              <div className="w-[44px] h-[44px] bg-[#EEF7F7] rounded-[50%] mb-[10px] flex justify-center items-center text-[#077369]">
                <img
                  className="w-[19px] h-[19px] text-[#077369] "
                  src={sellIcon}
                  alt=""
                />
              </div>
              <p className="w-[220px] h-[32px] my-[15px] text-[24px] font-[700] font-Raleway leading-32 text-[#191919] ">
                Sell to real people{" "}
              </p>
              <p className="font-Raleway font-[500] text-[16px] leading-[24px] text-[#2F2F2A] text-center">
                Have an item you want to give out? You can list it on Hangout
                from anywhere, with ease.{" "}
              </p>
              <button
                type="button"
                className="flex flex-col justify-center items-center bg-[#077369] w-[220px] h-[48px] rounded-[4px] py-[12px] px-[50px] text-[#FEFEFE] font-Raleway text-[16px] font-[700] leading-[24px] mt-[30px] "
              >
                List Items
              </button>
            </div>
            <div className="w-[90%] h-[300px] flex flex-col justify-center items-center px-[24px] py-[32px] ">
              <div className="w-[44px] h-[44px] bg-[#EEF7F7] rounded-[50%] mb-[10px] flex justify-center items-center text-[#077369]">
                <img
                  className="w-[20px] h-[20px] text-[#077369] "
                  src={exploreIcon}
                  alt=""
                />
              </div>
              <p className="my-[10px] text-[24px] font-[700] font-Raleway leading-32 text-[#191919]">
                Something for you{" "}
              </p>

              <p className="font-Raleway text-[500] text-[16px] leading-[24px] text-[#2F2F2A] text-center ">
                Discover items that you didn’t know you need. Whatever you are
                into, find it on Hangout.
              </p>
              <button
                type="button"
                className="flex flex-col justify-center items-center bg-[#077369] w-[220px] h-[48px] rounded-[4px] py-[12px] px-[50px] text-[#FEFEFE] font-Raleway text-[16px] font-[700] leading-[24px] mt-[30px] "
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

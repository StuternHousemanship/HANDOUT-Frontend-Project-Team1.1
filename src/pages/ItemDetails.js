import React, { useNavigate } from "react-router-dom";
import { AuthRoutes } from "../url";
import UserHeader from "../components/header/UserHeader";
import main from "../assets/img/main.png";
import small1 from "../assets/img/small1.png";
import small2 from "../assets/img/small2.png";
import green from "../assets/svg/green.svg";
import Vector from "../assets/svg/vector.svg";

function ViewAllItems() {
  const navigate = useNavigate();
  return (
    <>
      <UserHeader />
      <main className="flex item-center justify-center w-full min-h-screen bg-[#FAFBFB]">
        <div className="mt-[100px] flex flex-col">
          <section className="flex flex-col gap-y-6">
            <div className="flex flex-row gap-x-4 items-center justify-start pl-[250px]">
              <h3 className="font-bold text-[32px] leading-[32px]  font-raleway">
                Casio Watch
              </h3>
              <button
                type="button"
                className="bg-[#E6F1F0] border w-20 h-6 text-xs rounded-md text-[#077369] leading-6 font-raleway font-semibold"
              >
                Available
              </button>
              <img src={green} alt="green dot" className="w-[12px] h-[12px] " />
            </div>

            <div className="w-full">
              <hr />
            </div>

            <div className="flex items-center flex-row gap-x-4 justify-center">
              <div>
                <img
                  src={main}
                  alt="casio watch"
                  className="border w-[588px] h-[504px] rounded-xl mt-6"
                />
              </div>

              <div className="hidden md:grid grid-cols-1">
                <img
                  src={small2}
                  alt="casio watch"
                  className="w-[386px] h-[240px] border rounded-xl mt-5"
                />
                <img
                  src={small1}
                  alt="casio watch"
                  className="w-[386px] h-[240px] mt-4 border rounded-xl"
                />
              </div>
            </div>
          </section>

          <section className="flex flex-col-reverse md:flex-row px-4">
            <main className="flex-1 w-[100%] pl-[250px]">
              <div className="w-[100%] h-[175px]">
                <h4 className="text-[24px] font-medium my-[16px]">
                  About this item
                </h4>
                <p className="text-[16px] w-[100%] leading-5">
                  Casio Watch Series 3 38mm Gray Case Black Aluminium Smartwatch
                  - MTF02LLA
                </p>
              </div>
              <section className="h-[128px] w-full mt-[32px]">
                <h4 className="mt-[32px] text-[24px] leading-[24px] font-medium text-[#969696]">
                  Location
                </h4>
                <div className="flex space-x-20 mt-[8px]">
                  <p>Lagos/Ogudu G.R.A</p>
                  <p className="">Nigeria</p>
                </div>
              </section>
              <section className="w-full h-[156px] mt-[32px]">
                <div>
                  <h4 className="leading-[24px] text-[24px] mb-[12px] font-medium text-[#969696]">
                    Sellers Details
                  </h4>
                  <p className="leading-[22px] text-[16px]  font-semibold">
                    Sunny Chinnedum
                  </p>
                </div>
                <div className="flex space-x-20 text-[16px] leading-[22px] mt-[12px] font-normal">
                  <p>+234 812 345 6789</p>
                  <a href="mailto:sellersemail@gmail.com">
                    sellersemail@gmail.com
                  </a>
                </div>
              </section>
              <section className="flex space-x-20 mt-[32px]">
                <div className="flex space-x-2">
                  <h4 className="text-[16px] leading-[24px]">Date Created:</h4>
                  <p className="opacity-40">12/11/2022</p>
                </div>
                <div className="flex space-x-2">
                  <h4 className="text-[16px] leading-[24px]">Last Modified:</h4>
                  <p className="opacity-40">10/11/2022</p>
                </div>
              </section>
              <div className="flex gap-x-4">
                <button
                  type="button"
                  onClick={() => navigate(AuthRoutes.DeleteItemSuccess)}
                  className="border bg-[#ff9999] w-1/2 h-[60px] my-[18px]  rounded-[4px] text-[#A40D0D] text-center font-bold leading-[24px] text-[16px]"
                >
                  Delete this item
                </button>
                <button
                  type="button"
                  onClick={() => navigate(AuthRoutes.EditItem)}
                  className="border bg-[#E6F1F0] w-1/2 h-[60px] my-[18px]  rounded-[4px] text-[#077369] text-center font-bold leading-[24px] text-[16px]"
                >
                  Edit this item
                </button>
              </div>
            </main>

            <section className="flex-[0.7] w-full">
              <section className="w-full h-[118px] pl-[24px]">
                <p className="mt-[24px] mb-[8px] text-[#4B4B4B] leading-[32px] text-[14px] font-semibold">
                  item price
                </p>
                <div className="flex space-x-4">
                  <p className="font-bold leading-[22px] text-[16px]">NGN:</p>
                  <p className="font-bold text-[28px] leading-[22px] text-[#077369]">
                    Free
                  </p>
                </div>
              </section>
              <div className="h-[480px] w-full pl-[24px]">
                <section className="mt-[24px]">
                  <p className="font-semibold leading-[24px] text-[14px] mb-[4px] ">
                    color
                  </p>
                  <div className="flex space-x-2.5">
                    <img
                      src={Vector}
                      alt="color"
                      className="w-[15px] h-[15px]"
                    />
                    <p className="mb-[4px] text-[24px] leading-[24px]">
                      Orange
                    </p>
                  </div>
                </section>
                <hr className="w-1/2" />
                <section className="my-[32px]">
                  <p className="font-semibold leading-[24px] text-[14px] text-[#2F2F2A]">
                    category
                  </p>
                  <p className="leading-[24px] text-[24px] tracking-tight">
                    Phones and Gadgets
                  </p>
                </section>
                <hr className="w-1/2" />
                <section className="my-[32px]">
                  <p className="font-semibold leading-[24px] text-[14px] text-[#2F2F2A]">
                    Condition
                  </p>
                  <p className="leading-[24px] text-[24px] tracking-tight">
                    Damaged
                  </p>
                </section>
                <hr className="px-6 w-1/2" />

                <section className="my-[32px]">
                  <p className="font-semibold leading-[24px] text-[14px] text-[#2F2F2A]">
                    Delivery option
                  </p>
                  <p className="leading-[24px] text-[24px] tracking-tight">
                    Pickup
                  </p>
                </section>
              </div>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}

export default ViewAllItems;

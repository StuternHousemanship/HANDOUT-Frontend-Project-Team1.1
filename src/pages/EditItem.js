/* eslint-disable react/button-has-type */
import React from "react";
// import { useNavigate } from "react-router-dom";
import main from "../assets/img/main.png";
import small1 from "../assets/img/small1.png";
import small2 from "../assets/img/small2.png";
import green from "../assets/svg/green.svg";
import Condition from "../components/Condition";
import Categories from "../components/Categories";
import Color from "../components/Color";
import ShippingOptions from "../components/ShippingOptions";
import Country from "../components/Country";
// import { NonAuthRoutes, AuthRoutes } from "../url";
// import Vector from "../assets/svg/Vector.svg";
import OnboardingHeader from "../components/header/OnboardingHeader";

function ViewAllItems() {
  // const navigate = useNavigate();
  return (
    <>
      {OnboardingHeader()}
      <main className=" flex flex-col w-full h-full  md:items-center md:bg-[#f5f5f5f5]  ">
        <div className=" flex flex-col sm: w-[58%] md:w-[65%] md:h-[50px] xs:text-start md:border-b-[0.25px] xs:ml-[21px] mt-[85px] border-[#BDBDBD]">
          <p className="font-[700] font-Raleway md:text-[24px]  xs:text-[18px]  ">
            My Listings
          </p>
        </div>
        <div className="mt-[100px] flex flex-col">
          <section className="flex flex-col gap-y-6">
            <div className="flex flex-row gap-x-4 items-center justify-start pl-[250px]">
              <h3 className="font-bold text-[32px] leading-[32px]  font-raleway">
                Casio Watch
              </h3>
              <button className="bg-[#E6F1F0] border w-20 h-6 text-xs rounded-md text-[#077369] leading-6 font-raleway font-semibold">
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
                  className="w-[386px] h-[240px] border rounded-xl mt-5 bg-[#252525
]"
                />
                <img
                  src={small1}
                  alt="casio watch"
                  className="w-[386px] h-[240px] mt-4 border rounded-xl"
                />
              </div>
            </div>
          </section>
        </div>

        <div className=" sm:flex sx:flex-col md:w-[65%] h-[700px] xs:mt-[100px] md:mt-[25px] ">
          {/* Left-side */}
          <div className=" flex-col md:w-[68%]">
            {/* Item Name */}
            {/* <div className="h-[120px] md:w-[96%] bg-white rounded-lg flex-col pt-[20px] pl-[20px] justify-center items-center">
              <div className="h-[30px] w-[full] mb-[0px]">
                <p className="font-Raleway font-[500] mb-[20px]">Item Name</p>
              </div>

              <input
                type="text"
                placeholder="Input name of item"
                className="  p-3 w-[95%] h-[40px] font-Raleway text-[16px] rounded-[2px] border-[1px] border-[#717171] outline-0  "
              />
            </div> */}
            {/* Item Description */}
            <div className="h-[240px] md:w-[96%] bg-white rounded-lg flex-col mt-[25px] pt-[20px] pl-[20px] justify-center items-center">
              <div className="h-[30px] w-[full] mb-[0px]">
                <p className="font-Raleway font-[500] mb-[20px]">
                  Item Description
                </p>
              </div>

              <textarea
                type="text-area"
                rows="6"
                placeholder="Casio Watch Series 3 38mm Gray Case Black Aluminium Smartwatch - MTF02LLA
                you put me for ambulance…see what you did to me… God save me please…
                these well-structured bad boy lyrics has got a thing to it. Come in “Get Layd” and
                the rest they say is history. omah lay is definitely one for the future.
                Read more...."
                className="  p-3 w-[95%]  font-Raleway text-[16px] rounded-[8px] border-[1px] border-[#717171] outline-0 text-[#2F2F2A] "
              />
            </div>
            {/* Location */}
            <div className=" xs:hidden sm:block h-[120px] md:w-[96%] bg-white rounded-lg flex-col mt-[25px] pt-[20px] pl-[20px] justify-center items-center">
              <div className="h-[30px] w-[full] mb-[0px]">
                <p className="font-Raleway font-[500] mb-[20px]">Location</p>
              </div>

              <div className="text-start float right">
                <Country />

                <input
                  type="text"
                  placeholder="State/City"
                  className=" p-3 w-[47%] h-[40px] font-Raleway text-[16px] rounded-[2px] border-[1px] border-[#717171] outline-0  "
                />
              </div>
            </div>
            {/* Shipping */}
            <div className=" xs:hidden sm:block h-[120px] md:w-[96%] bg-white rounded-lg flex-col mt-[25px] pt-[20px] pl-[20px] justify-center items-center">
              <div className="h-[30px] w-[full] mb-[0px]">
                <p className="font-Raleway font-[500] mb-[20px]">
                  Shipping Option
                </p>
              </div>
              <ShippingOptions />
            </div>
          </div>
          {/* Right-side */}
          <div className=" md:w-[32%]">
            {/* price */}
            <div className="h-[100px] md:w-[100%] bg-white rounded-lg flex-col pt-[15px] pl-[20px]  justify-center items-center">
              <div className="h-[30px] md:w-[100%] ">
                <p className="font-Raleway font-[500]  text-[12px] mb-[20px]">
                  Item Price
                </p>
              </div>
              <label
                className="flex  items-center justify-start"
                htmlFor="price"
              >
                <p className="font-[700] text-[16px] font-Raleway text-[#077369]">
                  NGN:
                </p>
                <input
                  id="price"
                  type="text"
                  placeholder="200,000.00"
                  className=" md:p-2  p-4 w-[60%] h-[36px] ml-[12px] font-Raleway text-[#077369] text-[127%] rounded-[2px] border-[1px] border-[#077369] outline-0  "
                />
              </label>
            </div>

            {/* Item Filters */}
            <div className="h-[310px] md:w-[100%] w-[100%] bg-white rounded-lg mt-[25px] flex flex-col justify-center    ">
              {/* color */}
              <p className="font-Raleway xs:hidden sm:block font-[500]  text-[12px] ml-[45px] ">
                Colour
              </p>
              <div className="mt-[10px] xs:hidden sm:block mb-[17px] ml-[45px]  h-[32px]">
                <Color />
              </div>
              <hr className="w-[64%] md:w-[64%] font-[700] text-[#BDBDBD] mb-[15px] ml-[49px]   " />
              {/* categories */}
              <p className="font-Raleway font-[500]  ml-[45px] text-[12px] ">
                Item category
              </p>
              <div className="mt-[10px] mb-[17px] ml-[45px] h-[32px]">
                <Categories />
              </div>
              <hr className=" w-[64%] md:w-[64%] font-[700] text-[#BDBDBD] mb-[15px] ml-[49px] " />
              <button
                className=" xs-block sm:hidden h-[45px] w-[65%] font-Raleway text-[15px] font-[700] leading-[20px] tracking-wide rounded text-white bg-[#077369]"
                type="button"
              >
                <p>Add item</p>
              </button>
              {/* condition */}
              <p className=" xs:hidden sm:block font-Raleway font-[500] ml-[45px] text-[12px]  ">
                Item condition
              </p>
              <div className=" xs:hidden sm:block mt-[10px]  mb-[10px] ml-[45px] h-[32px]">
                <Condition />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ViewAllItems;

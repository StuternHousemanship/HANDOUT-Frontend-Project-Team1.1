/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from "react";
import { useNavigate } from "react-router-dom";

function AccountRecovered() {
  const navigate = useNavigate();

  const goToLogIn = () => {
    navigate("/login");
  };
  return (
    <div className="xs:w-[428px] xs:h-[900px] xs:bg-white sm:h-[100vh] sm:w-screen sm:bg-[#E5E5E5] flex justify-center items-center ">
      <form className=" xs:w-full xs:h-full bg-white sm:w-[609px] sm:h-[438px] flex justify-center items-center flex-col relative">
        <h1 className="  text-[#424242] absolute  sm:top-[48px] xs:top-[335.05px] sm:left-[80px] xs:left-[45px] font-Inter font-[700] sm:text-[36px] xs:text-[27.0411px] sm:leading-[44px] xs:leading-[33px] ">
          Account Recovered!
        </h1>
        <p className="  absolute font-Inter font-[400] text-[16px] text-[#000000] leading-[16px] sm:top-[149px] xs:top-[411px] sm:left-[80.5px] xs:left-[45px] sm:w-[463px] xs:w-[349px]  ">
          You have successully confirmed and recovered your account!
        </p>
        <button
          type="button"
          onClick={goToLogIn}
          className=" absolute   sm:top-[274px] xs:top-[505px] sm:left-[80px]   xs:left-[45px] text-center rounded text-[1.25rem] bg-[#424242] text-white font-[700] sm:w-[450px] xs:w-[338px] sm:h-[56px] xs:h-[42.06px] "
        >
          Login
        </button>
      </form>
    </div>
    // <div className="sm:h-[100vh] xs:w-[428px] xs:h-[900] xs:bg-white sm:w-screen sm:bg-[#E5E5E5] flex justify-center items-center ">
    //   <form className="  bg-white  xs:w-full xs:h-full sm:w-[609px] sm:h-[438px] flex justify-center flex-col relative">
    //     <h1 className=" xs:top-[335.05px] xs:text-[27.0411px] xs:leading-[33px]   text-[#424242] absolute ml-[0px] top-[48px] xs:left-[45.09px] sm:top-[48px] sm:left-[80px]  font-Inter font-[700] text-[36px] leading-[44px] ">
    //       Account Recovered!
    //     </h1>
    //     <p className="  absolute font-Inter font-[400] text-[16px] text-[#000000] leading-[16px] top-[149px] left-[80.5px]  ">
    //       You have successully confirmed and recovered your account!
    //     </p>
    //     <button
    //       type="button"
    //       onClick={goToLogIn}
    //       className=" absolute  top-[274px] ml-[79.5px] text-center pl-[199px] pr-[196px] py-[16px] mx-[55.5px] rounded text-[1.25rem] bg-[#424242] text-white font-[700] mb-[50px] hover:bg-green-dark focus:outline-none my-1"
    //     >
    //       Login
    //     </button>
    //   </form>
  );
}
export default AccountRecovered;

import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";
// eslint-disable-next-line import/no-unresolved

function AccountRecovered() {
  const navigate = useNavigate();

  const goToLogIn = () => {
    navigate(NonAuthRoutes.LogIn);
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
  );
}
export default AccountRecovered;

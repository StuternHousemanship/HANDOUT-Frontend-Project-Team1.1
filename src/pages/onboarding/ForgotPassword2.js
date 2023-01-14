import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../../url";

function ForgotPassword() {
  const navigate = useNavigate();

  /** Handle to switch to login */
  const handleClick = () => {
    navigate(NonAuthRoutes.LogIn);
  };

  return (
    <div className="sm:h-[100vh] sm:w-screen sm:bg-[#E5E5E5] flex justify-center items-center xs:w-[428px] xs:h-[900px] xs:bg-white  ">
      <form className="bg-white sm:w-[609px] sm:h-[438px] xs:w-full xs:h-full flex justify-center  relative">
        <div className="absolute sm:top-[48px] sm:left-[80px] xs:top-[335px] xs:left-[45px] mb-[40px] ">
          <h1 className="text-[#424242] font-Inter font-[700] text-[36px] leading-[44px] ">
            Forgot password
          </h1>
        </div>
        <p className="text-[#424242] xs:w-[349px] sm:w-[418px] text-[16px] leading-[19.36px] absolute sm:top-[149px] sm:left-[80px] xs:top-[411px] xs:left-[45px] mb-[40px] ">
          Kindly go to your email inbox or spam folder to confirm and change
          your password
        </p>
        <button
          type="submit"
          className=" xs:w-[338px] sm:w-[450px] xs:h-[42px] sm:h-[56px] rounded-[4px] border-[1px] border-[#717171] outline-0 bg-[#424242] text-white font-sans text-[20px] leading-[23px] font-[400] absolute sm:top-[238px] sm:left-[80px] xs:top-[505px] xs:left-[45px] "
          onClick={handleClick}
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;

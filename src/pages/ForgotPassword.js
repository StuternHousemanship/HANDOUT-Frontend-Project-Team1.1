import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  /** Handle to switch to forgot password page2 */
  const handleClick = () => {
    navigate(NonAuthRoutes.ForgotPassword2);
  };

  return (
    <div className="sm:h-[100vh] sm:w-screen sm:bg-[#E5E5E5] flex justify-center items-center xs:w-[428px] xs:h-[900px] xs:bg-white  ">
      <form className="bg-white sm:w-[609px] sm:h-[438px] xs:w-full xs:h-full flex justify-center  relative">
        <div className="absolute sm:top-[48px] sm:left-[80px] xs:top-[316px] xs:left-[40px] mb-[40px] ">
          <h1 className="text-[#424242] font-Inter font-[700] text-[36px] leading-[44px] ">
            Forgot password
          </h1>
        </div>

        <label
          htmlFor="mail"
          className="absolute sm:top-[132px] sm:left-[80px] xs:top-[406px] xs:left-[40px]"
        >
          <p className="text-[#424242] text-[16px] sm:font-[400] leading-[18px] mb-[8px] ">
            Email
          </p>
          <input
            type="email"
            id="mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className=" p-3 sm:w-[450px] xs:w-[348px] h-[56px] rounded-[4px] border-[1px] border-[#717171] outline-0  "
          />
        </label>
        <button
          type="submit"
          className=" xs:w-[348px] sm:w-[450px]  h-[56px] rounded-[4px] border-[1px] border-[#717171] outline-0 bg-[#424242] text-white font-sans text-[20px] leading-[23px] font-[400] absolute sm:top-[238px] sm:left-[80px] xs:top-[512px] xs:left-[40px] "
          onClick={handleClick}
        >
          Continue
        </button>
        <Link
          to="/login"
          className="text-[#424242] flex justify-center items-center text-center underline absolute sm:top-[318px] xs:top-[592px] "
        >
          {" "}
          Back to Login
        </Link>
      </form>
    </div>
  );
}

export default ForgotPassword;

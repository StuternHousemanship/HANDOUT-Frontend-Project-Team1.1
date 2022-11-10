import React from "react";
import { Link } from "react-router-dom";

function VerifyEmail() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh]">
      {/* laptop and ipad view */}
      <div className="xs: heddin flex flex-col justify-center items-center w-full h-[100vh] bg-[#E5E5E5]">
        <div className="xs:hidden md:inline-flex lg:inline-flex flex flex-col justify-center items-center w-full h-h-[100vh]">
          <div className="w-largeScreenWidth h-largeScreenHeight bg-white">
            <div className="ml-20">
              <div className="w-80 h-11 mt-12 font-bold leading-10 text-4xl text-buttonColor">
                Verify your email
              </div>

              <div className="w-96 h-10 mt-14 leading-5 text-black font-normal">
                Kindly go to your email inbox or spam folder to confirm and
                verify your email address.
              </div>

              <button
                type="button"
                className="w-largeScreenHeight h-14 rounded bg-buttonColor mt-20 text-white"
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden lg:hidden flex flex-col justify-center items-center w-full h-[100vh]">
        <div className="flex flex-col justify-center items-center w-[428px] h-[926px] mt-24 my-10 bg-white">
          <div className="w-full h-subWidth">
            <div className="ml-14">
              <div className="w-56 h-8 mt-9 font-bold leading-8 text-[27.04px] text-buttonColor">
                Verify your email
              </div>
              <div className="w-80 h-10 mt-11">
                Kindly go to your email inbox or spam folder to confirm and
                verify your email address.
              </div>
              <button
                type="button"
                className="w-80 h-11 bg-buttonColor mt-14 text-white"
              >
                <Link to="/login"> Okay </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;

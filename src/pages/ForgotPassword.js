/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";
import "../App.css";
import ForgotPasswordSuccessful from "../components/ForgotPasswordSuccessful";
import Onboardingheader from "../components/header/OnboardingHeader";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
    setValidEmail(emailRegex);
  });

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setPage(2);
  };

  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full h-screen  bg-white relative">
      <Onboardingheader />
      {page === 1 ? (
        <div className="bg-white mt-[0] items-center relative justify-center  ">
          <div className="bg-[#FFFFFF]  min-h-screen flex flex-col items-center justify-center  ">
            <div className="container max-w-[430px]  flex-1 flex flex-col items-center relative justify-center px-8">
              <form className="md:bg-[#F1F7F7] px-10 py-8 rounded absolute top-[18%] text-[#424242] w-full  md:shadow-6xl md:border-[1px]">
                <div className="flex flex-col items-start w-[306px] h-[50px] ">
                  <h1 className="xs:text-[20px] xs:leading-[28px] mt-[5px] mb-2 md:text-[22px] font-[700] md:leading-[40px] font-Raleway tracking-wide ">
                    Forgot your password?
                  </h1>
                </div>
                <hr className="md:block xs:hidden" />

                <p className="text-[13px] font-400 mt-8 font-Raleway mb-[12px] text-[#191919]">
                  Enter your email address and we will send you a link <br /> to
                  reset your pawssword
                </p>

                <label htmlFor="email">
                  <p className="font-Raleway font-400 text-[13px] text-[#191919] ">
                    Email
                  </p>
                </label>

                <input
                  id="email"
                  type="email"
                  className="block border  outline-1 w-full p-3 rounded"
                  name="email"
                  placeholder="example@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  required
                />
                <span
                  className={
                    email && !validEmail && !emailFocus ? "flex" : "hidden"
                  }
                >
                  <p className="invalid  mb-2 mt-1">
                    Please, enter a valid Email
                  </p>
                </span>
                <div className="mt-2">
                  <button
                    type="submit"
                    className="enabled"
                    disabled={!validEmail}
                    onClick={handleForgotPassword}
                  >
                    <p className="font-Raleway">Continue</p>
                  </button>
                </div>

                <div className="text-center text-[14px] mb-8 mt-4 font-[700] font-Raleway text-[#278178]">
                  <button
                    type="button"
                    onClick={() => navigate(NonAuthRoutes.LogIn)}
                  >
                    <p>Back to Log-in</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        // <ForgotPasswordError />
        <ForgotPasswordSuccessful />
      )}
    </div>
  );
}

export default ForgotPassword;

/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-duplicates
import { Link } from "react-router-dom";

import Cookies from "js-cookie";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
// eslint-disable-next-line import/no-cycle
// import onboarding from "../api/onboarding";
// eslint-disable-next-line import/no-cycle, import/no-duplicates
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line import/no-cycle
import { SignUp as signUp } from "../api/onboarding";
import "../App.css";
import { NonAuthRoutes } from "../url";

import logo from "../assets/svg/desktop.svg";
import frame16 from "../assets/svg/Frame 16.svg";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneNovalue, setPhoneNoValue] = useState();

  const navigate = useNavigate();

  /** Function to validate password using thr Validator package */

  /** Function to take off warnings in console on app load */
  useEffect(() => {
    const ac = new AbortController();

    document.title = "Sign Up - Handout";
    return function cleanup() {
      ac.abort();
    };
  }, []);

  useEffect(() => {
    const emailRegex = /[*@!#%&()^~{}]+/.test(email);
    setValidEmail(emailRegex);
  })

  // const emailRegex = /[ `!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/
//  const emailRegex = /[*@!#%&()^~{}]+/.test(email);

  /** Handle to navigate to next page to complete sign up */
  const handleSignUp = (e) => {
    e.preventDefault();
    // setButtonIsLoading(true);

    navigate(NonAuthRoutes.SignUpTwo);

    signUp(firstName, lastName, email, phoneNovalue).then((response) => {
      if (response.status === 200) {
        const accessToken = response.access_token;
        const refreshToken = response.refresh_token;
        Cookies.set("accessToken", accessToken);
        localStorage.setItem("token", refreshToken);
      }
    });
  };

  return (
    <div className="hidden md:inline-flex lg: inline-flex flex w-full h-sreen font-Raleway ">
      <div className="flex flex-col items-center justify-center w-[46%] h-screen bg-[#E7EFED]">
        <div className="mt-[20px] mx-[230px]">
          <img className="w-[208px] h-[56px] " src={logo} alt="" />
        </div>

        <div className="w-[350px] h-[350px] mx-[120px] mt-[30px]">
          <img className="" src={frame16} alt="" />
        </div>

        <div className="flex flex-col items-center justify-center w-[457px] h-[217px] mx-[105px]">
          <div className="text-[40px] text-[#077369] leading-[48px] font-Raleway text-center tracking-wide font-[700] mt-[9px]">
            We’ve got something for everyone
          </div>
          <div className="text-center font-[500] text-[16px] leading-[24px] tracking-wide text-[#000000] mt-[5px] font-Raleway">
            Buy, sell do it all over
          </div>
        </div>
      </div>
      <div className="w-[54%] h- bg-[#FFFFFF]">
        <div className="form bg-[#FFFFFF]">
          <div className="bg-[FFFFFF] py-[20px] min-h-screen flex flex-col">
            <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <div className="bg-white px-6 py-8 rounded  text-[#424242] w-full">
                <div className="flex flex-col items-start w-[306px] h-[80px] ">
                  <h1 className=" text-[32px] font-[700] leading-[20px] font-Raleway tracking-wide">
                    Create account
                  </h1>

                  <div className="my-[15px] font-Raleway">
                    <p>
                      Already have an account &nbsp;
                      <Link to="/login" className="font-Raleway font-[700] text-[#077369]">
                        Log in
                      </Link>
                    </p>
                  </div>
                </div>
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}

                <label htmlFor="firstName"> First Name</label>
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4 "
                  name="firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />

                <label htmlFor="email"> Email</label>
                <input
                  type="email"
                  className="block border border-grey-light w-full p-3 rounded"
                  name="email"
                  placeholder="example@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                  required
                />
                <span className={email && !validEmail && !emailFocus ? "flex" : "hidden"}>
                  <p className="invalid">Please, enter a valid Email</p>
                </span>
                <label htmlFor="mobile" className="mt-4" > Mobile </label>
                <PhoneInput
                  required
                  defaultCountry="NG"
                  international
                  countryCallingCodeEditable={false}
                  value={phoneNovalue}
                  onChange={setPhoneNoValue}
                  id="mobile"
                  className=" border border-grey-light w-full p-3 rounded mb-4 outline-0  "
                />
                <button
                  type="submit"
                  // className="w-full text-center py-3 rounded bg-[#077369] text-white hover:bg-green-dark focus:outline-none mt-5"
                  className="enabled"
                    disabled={
                      !firstName ||
                        !lastName ||
                        !email ||
                        !phoneNovalue ||
                        !validEmail
                    }
                  onClick={handleSignUp}
                >
                  Continue
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

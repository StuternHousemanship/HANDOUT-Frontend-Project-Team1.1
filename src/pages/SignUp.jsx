/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-duplicates
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import validator from "validator";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
// eslint-disable-next-line import/no-cycle
// import onboarding from "../api/onboarding";
// eslint-disable-next-line import/no-cycle, import/no-duplicates
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line import/no-cycle
import { SignUp as signUp } from "../api/onboarding";
import showPwd from "../assets/svg/show-password.svg";
import hidePwd from "../assets/svg/hide-password.svg";
import { NonAuthRoutes } from "../url";

function SignUp() {
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pwdConfirm, setPwdconfirm] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isRevealConfirmPwd, setIsRevealConfirmPwd] = useState(false);
  const [phoneNovalue, setPhoneNoValue] = useState();
  const [passwordStrong, setPasswordStrong] = useState(true);

  /** Function to validate password using thr Validator package */
  const handlePasswordOnChange = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
      })
    ) {
      setPasswordStrong(true);
    } else {
      setPasswordStrong(false);
    }

    setPassword(value);
  };

  /** Function to take off warnings in console on app load */
  useEffect(() => {
    const ac = new AbortController();

    document.title = "Sign Up - Handout";
    return function cleanup() {
      ac.abort();
    };
  }, []);

  const navigate = useNavigate();

  /** Handle to Sign Up and route to the email verification  page */
  const handleSignUp = (e) => {
    e.preventDefault();
    // setButtonIsLoading(true);

    navigate(NonAuthRoutes.VerifyEmail);

    signUp(firstName, lastName, email, phoneNovalue, password).then(
      (response) => {
        if (response.status === 200) {
          const accessToken = response.access_token;
          const refreshToken = response.refresh_token;
          Cookies.set("accessToken", accessToken);
          localStorage.setItem("token", refreshToken);
        }
      }
    );
  };

  return (
    <div className="form bg-[#E5E5E5]">
      <form className="bg-[FFFFFF] py-[72px] min-h-screen flex flex-col">
        <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-[#424242] w-full">
            <h1 className="mb-8 text-3xl font-Inter">Create account</h1>
            <label htmlFor="firstName"> First Name</label>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4 "
              name="firstname"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="lastname"
              onChange={(e) => setLastName(e.target.value)}
            />

            <label htmlFor="email"> Email</label>
            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="mobile"> Mobile </label>
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
            <div className="relative">
              <label htmlFor="password"> Password</label>
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="pwd"
                type={isRevealPwd ? "text" : "password"}
                value={password}
                onChange={(e) => handlePasswordOnChange(e.target.value)}
                // onChange={(e) => setPwd(e.target.value)}
              />
              <img
                className="w-6 absolute top-10 right-2"
                title={isRevealPwd ? "Hide password" : "Show password"}
                src={isRevealPwd ? showPwd : hidePwd}
                onClick={() => setIsRevealPwd((prevState) => !prevState)}
              />
              {passwordStrong ? null : (
                <p className="text-[#d42121] border border-[#d42121] text-center rounded">
                  Must be more than 8 characters <br />
                  Must include uppercase letters, lowercase letters and number
                  from 0 - 9
                </p>
              )}
            </div>
            <div className="relative">
              <label htmlFor="password"> Re-enter password</label>
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="pwd"
                type={isRevealConfirmPwd ? "text" : "password"}
                value={pwdConfirm}
                onChange={(e) => setPwdconfirm(e.target.value)}
              />
              <img
                className="w-6 absolute top-10 right-2"
                title={isRevealConfirmPwd ? "Hide password" : "Show password"}
                src={isRevealConfirmPwd ? showPwd : hidePwd}
                onClick={() => setIsRevealConfirmPwd((prevState) => !prevState)}
              />
            </div>

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-[#424242] text-white hover:bg-green-dark focus:outline-none my-1"
              onClick={handleSignUp}
            >
              Continue
            </button>
            <div className="underline text-grey-dark mt-6 text-center">
              <Link to="/login"> Log into existing account</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default SignUp;

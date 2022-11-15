/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
import validator from "validator";
import "react-phone-number-input/style.css";

import showPwd from "../assets/svg/show-password.svg";
import hidePwd from "../assets/svg/hide-password.svg";
import { NonAuthRoutes } from "../url";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [pwdConfirm, setPwdconfirm] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isRevealConfirmPwd, setIsRevealConfirmPwd] = useState(false);
  const [passwordStrong, setPasswordStrong] = useState(true);
  const navigate = useNavigate();

  /** Function to validate password using the Validator package */
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

    document.title = "Reset Password - Handout";
    return function cleanup() {
      ac.abort();
    };
  }, []);

  /** function to handle reset password Button */
  const handleResetPassword = (e) => {
    e.preventDefault();
    navigate(NonAuthRoutes.AccountRecovered);

    // setButtonIsLoading(true);
    // onboarding
    // eslint-disable-next-line no-undef
    // .ResetPassword(password)
    // .then((response) => {
    //   if (response.status === 200) {
    //     const accessToken = response.access_token;
    //     const refreshToken = response.refresh_token;
    //     Cookies.set("accessToken", accessToken);
    //     localStorage.setItem("token", refreshToken);
    //   }
    // });
  };

  return (
    <div className="form bg-[#E5E5E5]">
      <form className=" bg-[FFFFFF] py-[72px] min-h-screen flex flex-col">
        <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-[#424242] w-full">
            <h1 className="mb-8 text-3xl font-Inter">Reset Password</h1>

            <div className="relative">
              <label htmlFor="password"> Password</label>
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="pwd"
                required
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
              <label htmlFor="password"> Enter new password</label>
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="pwd"
                required
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
            <div className="underline text-grey-dark mt-6 cursor-pointer text-end">
              <p onClick={() => navigate(NonAuthRoutes.ForgotPassword)}>
                Forgot password
              </p>
            </div>

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-[#424242] text-white hover:bg-green-dark focus:outline-none my-1"
              onClick={handleResetPassword}
            >
              Continue
            </button>
            <div className="underline text-grey-dark mt-6 text-center cursor-pointer">
              <p onClick={() => navigate(NonAuthRoutes.LogIn)}>Back to logIn</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ResetPassword;

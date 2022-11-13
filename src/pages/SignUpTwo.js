/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import ValidatePassword from "./ValidatePassword";
import "../App.css";
import logo from "../assets/svg/desktop.svg";
import frame16 from "../assets/svg/Frame 16.svg";
import caution from "../assets/svg/caution.svg";
import checkmark from "../assets/svg/checkmark.svg";
import showPwd from "../assets/svg/show-password.svg";
import hidePwd from "../assets/svg/hide-password.svg";
// eslint-disable-next-line import/no-cycle
import { SignUp as signUp } from "../api/onboarding";

import { NonAuthRoutes } from "../url";

function SignUpTwo() {
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState(false);
  const [pwdConfirm, setPwdconfirm] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const [validPasswordConfirm, setValidPasswordConfirm] = useState(false);
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isRevealConfirmPwd, setIsRevealConfirmPwd] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const navigate = useNavigate();
  const [checks, setChecks] = useState({
    upperCaseCheck: false,
    lowerCaseCheck: false,
    characterLengthCheck: false,
    numberCheck: false,
  });

  /** Function to take off warnings in console on app load */
  useEffect(() => {
    const ac = new AbortController();
    document.title = "Sign Up - Handout";
    return function cleanup() {
      ac.abort();
    };
  }, []);
  useEffect(() => {
    const match = pwdConfirm === password;
    setValidPasswordConfirm(match);
  }, [password, pwdConfirm]);

  /** Handle to Sign Up and route to the email verification  page */
  const handleSignUp = (e) => {
    e.preventDefault();
    // setButtonIsLoading(true);

    navigate(NonAuthRoutes.VerifyEmail);

    signUp(password).then((response) => {
      if (response.status === 201) {
        const accessToken = response.access_token;
        const refreshToken = response.refresh_token;
        Cookies.set("accessToken", accessToken);
        localStorage.setItem("token", refreshToken);
      }
    });
  };

  /** Function to validate password using thr Validator package */
  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordOnChange = (e) => {
    setPwdconfirm(e.target.value);
  };

  const handleOnFocus = () => {
    setValidate(true);
    setPasswordFocus(true);
  };
  const handleConfirmPasswordOnFocus = () => {
    setConfirmPasswordFocus(true);
  };
  const handleOnBlur = () => {
    setValidate(false);
  };
  const handleConfirmPasswordOnBlur = () => {
    setConfirmPasswordFocus(false);
  };
  const handleOnKeyUp = (e) => {
    const { value } = e.target;
    const upperCaseCheck = /[A-Z]/.test(value);
    const lowerCaseCheck = /[a-z]/.test(value);

    const numberCheck = /[0-9]/.test(value);
    const characterLengthCheck = e.target.value.length >= 8;
    setChecks({
      upperCaseCheck,
      lowerCaseCheck,
      characterLengthCheck,
      numberCheck,
    });
  };

  return (
    <>
      <div className=" xs:hidden md:inline-flex lg: flex w-full h-sreen">
        <div className="flex flex-col items-center justify-center w-[46%] h-screen bg-[#E7EFED]">
          <div className="mt-[20px] mx-[230px]">
            <img className="w-[208px] h-[56px] " src={logo} alt="" />
          </div>

          <div className="w-[350px] h-[350px] mx-[120px] mt-[30px]">
            <img className="" src={frame16} alt="" />
          </div>

          <div className="flex flex-col items-center justify-center w-[457px] h-[217px] mx-[105px]">
            <div className="text-[40px] text-[#077369] leading-[48px] text-center tracking-wide font-[700] mt-[9px] font-Raleway">
              We’ve got something for everyone
            </div>
            <div className="text-center font-[500] text-[16px] leading-[24px] tracking-wide text-[#000000] mt-[5px] font-Raleway">
              Buy, sell do it all over
            </div>
          </div>
        </div>

        <div className=" font-Raleway w-[54%] h-screen bg-[#FFFFFF]">
          <div className="form bg-[#FFFFFF]">
            <div className="bg-[FFFFFF] py-[72px] min-h-screen flex flex-col">
              <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 rounded  text-[#424242] w-full">
                  <div className="flex flex-col items-start w-[306px] h-[80px] mb-[20px]">
                    <h1 className=" text-[32px] font-[700] leading-[40px] font-Raleway tracking-wide">
                      Create account
                    </h1>
                    <span className="flex">
                      Already have an account &nbsp;
                      <p
                        className=" cursor-pointer font-[700] text-[#278178]"
                        onClick={() => navigate(NonAuthRoutes.LogIn)}
                      >
                        {" "}
                        Log in
                      </p>
                    </span>
                  </div>
                  {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                  <div className="relative">
                    <label htmlFor="password"> Password</label>
                    <input
                      className={
                        checks.upperCaseCheck &&
                        checks.lowerCaseCheck &&
                        checks.characterLengthCheck &&
                        checks.numberCheck &&
                        passwordFocus
                          ? "validInput"
                          : !passwordFocus &&
                            checks.upperCaseCheck &&
                            checks.lowerCaseCheck &&
                            checks.characterLengthCheck &&
                            checks.numberCheck
                          ? "input"
                          : !checks.upperCaseCheck &&
                            !checks.lowerCaseCheck &&
                            !checks.characterLengthCheck &&
                            !checks.numberCheck &&
                            passwordFocus
                          ? "inValidInput"
                          : !passwordFocus && !password
                          ? "input"
                          : "inValidInput"
                      }
                      name="password"
                      type={isRevealPwd ? "text" : "password"}
                      value={password}
                      onChange={handlePasswordOnChange}
                      onFocus={handleOnFocus}
                      onBlur={handleOnBlur}
                      onKeyUp={handleOnKeyUp}
                      required="true"
                    />
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img
                      className="w-6 absolute top-10 right-2"
                      title={isRevealPwd ? "Hide password" : "Show password"}
                      src={isRevealPwd ? showPwd : hidePwd}
                      alt=""
                      onClick={() => setIsRevealPwd((prevState) => !prevState)}
                    />
                    {!passwordFocus ? (
                      <span>
                        <p className="text-[11px] text-[#191919] ">
                          Must include an Uppercase letter, lowercase letter,
                          number and have at least 8 characters
                        </p>
                      </span>
                    ) : null}
                    {validate ? (
                      <ValidatePassword
                        upperLowerCaseIcon={
                          checks.upperCaseCheck && checks.lowerCaseCheck
                            ? checkmark
                            : caution
                        }
                        upperLowerCaseFlag={
                          checks.upperCaseCheck && checks.lowerCaseCheck
                            ? "valid"
                            : "invalid"
                        }
                        characterLengthIcon={
                          checks.characterLengthCheck ? checkmark : caution
                        }
                        characterLengthFlag={
                          checks.characterLengthCheck ? "valid" : "invalid"
                        }
                        numberFlagIcon={
                          checks.numberCheck ? checkmark : caution
                        }
                        numberFlag={checks.numberCheck ? "valid" : "invalid"}
                      />
                    ) : null}
                  </div>
                  <div className="relative mt-4 ">
                    <label htmlFor="pwdConfirm"> Confirm password</label>
                    <input
                      className={
                        confirmPasswordFocus && !validPasswordConfirm
                          ? "inValidInput"
                          : confirmPasswordFocus && validPasswordConfirm
                          ? "validInput"
                          : !confirmPasswordFocus && !pwdConfirm
                          ? "input"
                          : !confirmPasswordFocus && validPasswordConfirm
                          ? "validInput"
                          : confirmPasswordFocus && !pwdConfirm
                          ? "input"
                          : "inValidInput"
                      }
                      name="pwdConfirm"
                      type={isRevealConfirmPwd ? "text" : "password"}
                      value={pwdConfirm}
                      onChange={handleConfirmPasswordOnChange}
                      onFocus={handleConfirmPasswordOnFocus}
                      onBlur={handleConfirmPasswordOnBlur}
                      required="true"
                    />
                    <img
                      className="w-6 absolute top-10 right-2"
                      title={
                        isRevealConfirmPwd ? "Hide password" : "Show password"
                      }
                      src={isRevealConfirmPwd ? showPwd : hidePwd}
                      alt=""
                      onClick={() =>
                        setIsRevealConfirmPwd((prevState) => !prevState)
                      }
                    />
                    <span
                      className={
                        confirmPasswordFocus && !validPasswordConfirm
                          ? "flex"
                          : "hidden"
                      }
                    >
                      <img src={caution} className="mt-1" alt="" />
                      <p className="invalid mt-1 ml-1">
                        Password does not match
                      </p>
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="enabled"
                    disabled={
                      (!checks.upperCaseCheck &&
                        !checks.lowerCaseCheck &&
                        !checks.characterLengthCheck &&
                        !checks.numberCheck) ||
                      !validPasswordConfirm ||
                      !checkbox
                    }
                    onClick={handleSignUp}
                  >
                    Create account
                  </button>
                  <div className="flex w-full">
                    <input
                      className="mr-[5px] border-solid border-1 [#2F2F2A]"
                      type="checkbox"
                      onChange={() => setCheckbox(!checkbox)}
                    />
                    <p className="text-[14px] ">
                      By signing up you agree to the term and condtions
                    </p>
                  </div>
                  <div>
                    <p
                      className="font-[700] text-[20px] leading-[24px] tracking-wide text-[#077369] mt-6 text-center cursor-pointer font-Raleway"
                      onClick={() => navigate(NonAuthRoutes.Home)}
                    >
                      Cancel
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden lg:hidden flex flex-col justify-center items-center w-full h-screen bg-[FFFFFF]">
        <div className="mt-[] mx-[143px]">
          <img className="w-[141px] h-[36px] " src={logo} alt="" />
        </div>

        <div className="W-[306Ppx] h-[68px] ml-[20px] mr-[90px] text-[24px] text-[#077369] leading-[34px] tracking-wider font-[700] mt-[22.5px]">
          We’ve got something for <br /> everyone
        </div>

        <div className="form bg-[#FFFFFF]">
          <div className="bg-[FFFFFF] py-[] flex flex-col">
            <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <div className="bg-white px-6 text-[#424242] w-full">
                <div className="flex flex-col items-start w-[306px] h-[80px] mt-[44px]">
                  <h1 className=" text-[20px] leading-[28px] font-[700]">
                    Create account
                  </h1>
                  <p className="text-[14px] font-[400] leading-[20px]">
                    Already have an account Log in
                  </p>
                </div>

                <div className="relative">
                  <label htmlFor="password"> Password</label>
                  <input
                    className="block border border-grey-light w-full h-[48px] p-3 rounded mb-4"
                    name="pwd"
                    type={isRevealPwd ? "text" : "password"}
                    value={password}
                    // onChange={(e) => handlePasswordOnChange(e.target.value)}
                    // onChange={(e) => setPwd(e.target.value)}
                  />
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <img
                    className="w-6 absolute top-10 right-2"
                    title={isRevealPwd ? "Hide password" : "Show password"}
                    src=""
                    alt=""
                    onClick={() => setIsRevealPwd((prevState) => !prevState)}
                  />
                  {/* {passwordStrong ? null : (
                    <p className="text-[#d42121] border border-[#d42121] text-center rounded">
                      Must be more than 8 characters <br />
                      Must include uppercase letters, lowercase letters and
                      number from 0 - 9
                    </p>
                  )}
                  <p className="text-[12px] leading-[20px] font-[400] mt-[-10px] mb-[10px]">
                    Must include an uppercase letter, lowercase letter, number
                    and have at least 8 characters.
                  </p> */}
                </div>
                <div className="relative">
                  <label htmlFor="password"> Confirm password</label>
                  <input
                    className="block border border-grey-light w-full h-[48px] p-3 rounded mb-4"
                    name="pwd"
                    type={isRevealConfirmPwd ? "text" : "password"}
                    value={pwdConfirm}
                    onChange={(e) => setPwdconfirm(e.target.value)}
                  />
                  <img
                    className="w-6 absolute top-10 right-2"
                    title={
                      isRevealConfirmPwd ? "Hide password" : "Show password"
                    }
                    src=""
                    alt=""
                    onClick={() =>
                      setIsRevealConfirmPwd((prevState) => !prevState)
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-[52px] text-center py-3 rounded bg-[#077369] text-white hover:bg-green-dark focus:outline-none my-1"
                  onClick={handleSignUp}
                >
                  Create account
                </button>

                <div className="flex w-full">
                  <input
                    className="mr-[5px] border-solid border-1 [#2F2F2A] "
                    type="checkbox"
                  />
                  <p className="text-[14px]">
                    By signing up you agree to the term and condtions
                  </p>
                </div>

                <div className="font-[700] text-[16px] leading-[24px] tracking-wide text-[#044838] mt-6 text-center">
                  Cancel
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpTwo;

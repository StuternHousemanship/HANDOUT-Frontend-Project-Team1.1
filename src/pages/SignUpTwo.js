/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
// import Cookies from "js-cookie";
import validator from "validator";

import logo from "../assets/svg/desktop.svg";
import frame16 from "../assets/svg/Frame 16.svg";

function SignUpTwo() {
  const [password, setPassword] = useState("");
  const [pwdConfirm, setPwdconfirm] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isRevealConfirmPwd, setIsRevealConfirmPwd] = useState(false);
  const [passwordStrong, setPasswordStrong] = useState(true);

  // const [passwordStrong, setPasswordStrong] = useState(true);

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

  const handleSignUp = (e) => {
    e.preventDefault();
    // setButtonIsLoading(true);
  };

  return (
    <>
      <div className="hidden md:inline-flex lg: inline-flex flex w-full h-sreen bg-[#D7D7D7]">
        <div className="flex flex-col items-center justify-center w-[668px] h-screen bg-[#E7EFED]">
          <div className="mt-[20px] mx-[230px]">
            <img className="w-[208px] h-[56px] " src={logo} alt="" />
          </div>

          <div className="w-[350px] h-[350px] mx-[120px] mt-[30px]">
            <img className="" src={frame16} alt="" />
          </div>

          <div className="flex flex-col items-center justify-center w-[457px] h-[217px] mx-[105px]">
            <div className="text-[40px] text-[#077369] leading-[48px] text-center tracking-wide font-[700] mt-[9px]">
              We’ve got something for everyone
            </div>
            <div className="text-center font-[500] text-[16px] leading-[24px] tracking-wide text-[#000000] mt-[5px] font-Raleway">
              Buy, sell do it all over
            </div>
          </div>
        </div>

        <div className="w-[772px] h-screen bg-[#FFFFFF]">
          <div className="form bg-[#FFFFFF]">
            <div className="bg-[FFFFFF] py-[72px] min-h-screen flex flex-col">
              <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded  text-[#424242] w-full">
                  <div className="flex flex-col items-start w-[306px] h-[80px] mb-[40px]">
                    <h1 className=" text-[32px] font-[700] leading-[40px] font-Raleway tracking-wide">
                      Create account
                    </h1>
                    <p className="">Already have an account Log in</p>
                  </div>
                  {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
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
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img
                      className="w-6 absolute top-10 right-2"
                      title={isRevealPwd ? "Hide password" : "Show password"}
                      src=""
                      alt=""
                      onClick={() => setIsRevealPwd((prevState) => !prevState)}
                    />
                    {passwordStrong ? null : (
                      <p className="text-[#d42121] border border-[#d42121] text-center rounded">
                        Must be more than 8 characters <br />
                        Must include uppercase letters, lowercase letters and
                        number from 0 - 9
                      </p>
                    )}
                  </div>
                  <div className="relative">
                    <label htmlFor="password"> Confirm password</label>
                    <input
                      className="block border border-grey-light w-full p-3 rounded mb-4"
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
                    className="w-full text-center py-3 rounded bg-[#077369] text-white hover:bg-green-dark focus:outline-none my-1"
                    onClick={handleSignUp}
                  >
                    Create account
                  </button>
                  <div className="flex w-full">
                    <input
                      className="mr-[5px] border-solid border-1 [#2F2F2A]"
                      type="checkbox"
                    />
                    <p>By signing up you agree to the term and condtions</p>
                  </div>
                  <div className="font-[700] text-[20px] leading-[24px] tracking-wide text-[#077369] mt-6 text-center">
                    Cancel
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
                    onChange={(e) => handlePasswordOnChange(e.target.value)}
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
                  {passwordStrong ? null : (
                    <p className="text-[#d42121] border border-[#d42121] text-center rounded">
                      Must be more than 8 characters <br />
                      Must include uppercase letters, lowercase letters and
                      number from 0 - 9
                    </p>
                  )}
                  <p className="text-[12px] leading-[20px] font-[400] mt-[-10px] mb-[10px]">
                    Must include an uppercase letter, lowercase letter, number
                    and have at least 8 characters.
                  </p>
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

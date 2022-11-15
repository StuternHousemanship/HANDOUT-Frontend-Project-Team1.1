/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-duplicates
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
// eslint-disable-next-line import/no-cycle
// import onboarding from "../api/onboarding";
// eslint-disable-next-line import/no-cycle, import/no-duplicates
import { useNavigate } from "react-router-dom";
import ValidatePassword from "./ValidatePassword";
import caution from "../assets/svg/caution.svg";
import checkmark from "../assets/svg/checkmark.svg";
import showPwd from "../assets/svg/show-password.svg";
import hidePwd from "../assets/svg/hide-password.svg";
// eslint-disable-next-line import/no-cycle
import { SignUp as signUp } from "../api/onboarding";
import "../App.css";
import { NonAuthRoutes } from "../url";
import logo from "../assets/svg/desktop.svg";
import HandoutLogo from "../assets/img/HandoutLogo.png";


function SignUp() {
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState(false);
  const [pwdConfirm, setPwdconfirm] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const [validPasswordConfirm, setValidPasswordConfirm] = useState(false);
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isRevealConfirmPwd, setIsRevealConfirmPwd] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneNovalue, setPhoneNoValue] = useState();
  const [step, setStep] = useState(1);
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

  /** Function to set the valid confirm password inputed to the initial password entry */
  useEffect(() => {
    const match = pwdConfirm === password;
    setValidPasswordConfirm(match);
  }, [password, pwdConfirm]);

  /** Handle to Sign Up and route to the email verification  page */
  const handleSignUp2 = (e) => {
    e.preventDefault();
    setPassword("");
        setPwdconfirm("");
    // setButtonIsLoading(true);

    // navigate(NonAuthRoutes.VerifyEmail);

    signUp(firstName, lastName, email, phoneNovalue, password).then(
      (response) => {
        // console.log(response);
        if (response.status === 201) {
          navigate(NonAuthRoutes.VerifyEmail);
          // const accessToken = response.access_token;
          // const refreshToken = response.refresh_token;
          // Cookies.set("accessToken", accessToken);
          // localStorage.setItem("token", refreshToken);
        } return (
          <div>
             <h1>ACCOUNT CREATION WAS NOT SUCCESSFUL</h1>
          </div>
        ) 
      }
    );
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

  /** Function to validate the password */
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

  /** Function to ensure a special character is inputed for the email input */
  useEffect(() => {
    const emailRegex = /[*@!#%&()^~{}]+/.test(email);
    setValidEmail(emailRegex);
  });

  /** Handle to navigate to next page to complete sign up */
  const handleSignUp = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className=" md:inline-flex w-full h-sreen font-Raleway ">

      {/* Left hand side of the sign up page displaying the handout Logo */}
      <div className=" xs:hidden md:flex flex-col items-center justify-center w-[46%] h-screen bg-[#E7EFED]">
        <div className="mt-[20px] mx-[230px]">
          <img className="w-[208px] h-[56px] " src={logo} alt="" />
        </div>

        <div className="w-[350px] h-[350px] mx-[120px] mt-[30px]">
          <img className="" src={HandoutLogo} alt="" />
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

      {/* Right hand side of the sign up page showing the form */}
      {/* First sign up form page displaying user detail inputs */}
      <div className="md:w-[54%] md:h-screen bg-[#FFFFFF] xs:justify-center xs:items-center ">
        {step === 1 ? (
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
                        <Link
                          to="/login"
                          className="font-Raleway font-[700] text-[#077369]"
                        >
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
                  <span
                    className={
                      email && !validEmail && !emailFocus ? "flex" : "hidden"
                    }
                  >
                    <p className="invalid">Please, enter a valid Email</p>
                  </span>
                  <label htmlFor="mobile" className="mt-4">
                    {" "}
                    Mobile{" "}
                  </label>
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
        ) : (

          // Second sign up form page displaying password inputs
          <div className="form bg-[#FFFFFF] ">
            <div className="bg-[FFFFFF]  min-h-screen flex flex-col">
              <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 rounded  text-[#424242] w-full">
                  <div className="xs:flex  md:hidden mx-[143px]">
                    <img className="" src={logo} alt="" />
                  </div>
                  <div className="xs:flex md:hidden text-[24px] text-[#077369] leading-[34px] tracking-wider font-[700] mt-[22.5px]">
                     We’ve got something for <br /> everyone
                  </div>
                  <div className="flex flex-col items-start w-[306px] md:h-[80px] mt-[30px] mb-[20px]">
                    <h1 className="xs:text-[20px] xs:leading-[28px]  md:text-[32px] font-[700] md:leading-[40px] font-Raleway tracking-wide  ">
                      Create account
                    </h1>
                    <span className="flex  ">
                      <p className="xs:text-[14px] md:text-[16px] " >Already have an account? &nbsp;</p>
                      <p
                        className=" cursor-pointer font-[700] text-[#278178] xs:text-[14px] md:text-[16px] "
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
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={handleOnFocus}
                      onBlur={handleOnBlur}
                      onKeyUp={handleOnKeyUp}
                      required
                    />
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img
                      className="w-6 absolute top-9 right-2"
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
                      onChange={(e) => setPwdconfirm(e.target.value)}
                      onFocus={handleConfirmPasswordOnFocus}
                      onBlur={handleConfirmPasswordOnBlur}
                      required
                    />
                    <img
                      className="w-6 absolute top-9 right-2"
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
                    onClick={handleSignUp2}
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

        )}
      </div>
    </div>
  );
}

export default SignUp;

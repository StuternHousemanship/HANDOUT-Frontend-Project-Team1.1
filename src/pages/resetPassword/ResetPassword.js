/* eslint-disable no-nested-ternary */
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ValidatePassword from "../ValidatePassword";
import "./ResetPassword.css";
import caution from "../../assets/svg/caution.svg";
import checkmark from "../../assets/svg/checkmark.svg";
import showPwd from "../../assets/svg/show-password.svg";
import hidePwd from "../../assets/svg/hide-password.svg";
import { NonAuthRoutes } from "../../url";
import ResetPasswordSuccessful from "../../components/ResetPasswordSuccessful";
import Onboardingheader from "../../components/header/OnboardingHeader";

function ResetPassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [validate, setValidate] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const [validPasswordConfirm, setValidPasswordConfirm] = useState(false);
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isRevealConfirmPwd, setIsRevealConfirmPwd] = useState(false);
  const [checks, setChecks] = useState({
    upperCaseCheck: false,
    lowerCaseCheck: false,
    characterLengthCheck: false,
    numberCheck: false,
  });
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const ac = new AbortController();
    document.title = "Sign Up - Handout";
    return function cleanup() {
      ac.abort();
    };
  }, []);

  /** Function to set the valid confirm password inputed to the initial password entry */
  useEffect(() => {
    const match = newPassword === oldPassword;
    setValidPasswordConfirm(match);
  }, [oldPassword, newPassword]);

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

  /** Handle to navigate to next page to complete sign up */
  const handleResetPassword = (e) => {
    e.preventDefault();
    setOldPassword("");
    setNewPassword("");
    setPage(2);
  };

  return (
    <div className=" flex flex-col w-full h-screen justify-center items-center bg-[#FFFFFF] relative ">
      <Onboardingheader />
      {/* body */}
      {page === 1 ? (
        <div className="  bg-[#FFFFFF] fixed top-[6%] justify-center items-center">
          <div className="bg-[#FFFFFF]  min-h-screen flex flex-col">
            <div className="container max-w-[500px] mx-auto flex-1 flex flex-col items-center relative justify-center px-8">
              <form className="md:bg-[#F1F7F7]  px-10 rounded min-h-[450px]  top-[18%] text-[#424242] w-full md:shadow-6xl md:border-[1px]">
                <div className="flex flex-col items-start w-[306px] md:h-[60px] mt-4 mb-0">
                  <h1 className="xs:text-[20px] xs:leading-[28px]  md:text-[22px] font-[700] md:leading-[40px] font-Raleway tracking-wide ">
                    Password Reset
                  </h1>
                </div>
                <hr className="mt-[0px] md:block xs:hidden" />
                <span>
                  <p className="text-[14px] mt-[16px] mb-[12px] text-[#191919] ">
                    Must include an uppercase letter, lowercase letter, number
                    and have at least 8 characters
                  </p>
                </span>
                <div className="relative">
                  <label htmlFor="password">
                    {" "}
                    Password
                    <input
                      id="password"
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
                          : !passwordFocus && !oldPassword
                          ? "input"
                          : "inValidInput"
                      }
                      name="password"
                      type={isRevealPwd ? "text" : "password"}
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      onFocus={handleOnFocus}
                      onBlur={handleOnBlur}
                      onKeyUp={handleOnKeyUp}
                      required
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsRevealPwd((prevState) => !prevState)}
                  >
                    <img
                      className="w-6 absolute top-9 right-2"
                      title={isRevealPwd ? "Hide password" : "Show password"}
                      src={isRevealPwd ? showPwd : hidePwd}
                      alt="password eye"
                    />
                  </button>

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
                      numberFlagIcon={checks.numberCheck ? checkmark : caution}
                      numberFlag={checks.numberCheck ? "valid" : "invalid"}
                    />
                  ) : null}
                </div>
                <div className="relative mt-4 ">
                  <label htmlFor="pwdConfirm">
                    {" "}
                    Re-enter password
                    <input
                      id="pwdConfirm"
                      className={
                        confirmPasswordFocus && !validPasswordConfirm
                          ? "inValidInput"
                          : confirmPasswordFocus && validPasswordConfirm
                          ? "validInput"
                          : !confirmPasswordFocus && !newPassword
                          ? "input"
                          : !confirmPasswordFocus && validPasswordConfirm
                          ? "validInput"
                          : confirmPasswordFocus && !newPassword
                          ? "input"
                          : "inValidInput"
                      }
                      name="pwdConfirm"
                      type={isRevealConfirmPwd ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      onFocus={handleConfirmPasswordOnFocus}
                      onBlur={handleConfirmPasswordOnBlur}
                      required
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      setIsRevealConfirmPwd((prevState) => !prevState)
                    }
                  >
                    <img
                      className="w-6 absolute top-9 right-2"
                      title={
                        isRevealConfirmPwd ? "Hide password" : "Show password"
                      }
                      src={isRevealConfirmPwd ? showPwd : hidePwd}
                      alt=""
                    />
                  </button>
                  <span
                    className={
                      confirmPasswordFocus && !validPasswordConfirm
                        ? "flex"
                        : "hidden"
                    }
                  >
                    <img src={caution} className="mt-1" alt="" />
                    <p className="invalid mt-1 ml-1">Password does not match</p>
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
                    !validPasswordConfirm
                  }
                  onClick={handleResetPassword}
                >
                  Reset password
                </button>
                <div className="text-center text-[14px] my-4 font-[700] text-[#278178]">
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
        <ResetPasswordSuccessful />
      )}
    </div>
  );
}

export default ResetPassword;
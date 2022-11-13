/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Cookies from "js-cookie";
import logo from "../assets/svg/desktop.svg";
import frame16 from "../assets/svg/Frame 16.svg";
// eslint-disable-next-line import/no-cycle
import { Login } from "../api/onboarding";
// import LoginFailure from "./LoginFailure";
// import LoginSuccess from "./LoginSuccess";
import { NonAuthRoutes } from "../url";
import "../App.css";

function LogIn() {
  const [values, setValues] = useState({
    showPassword: false,
  });
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  /** Handle to Login */
  const handleLogin = (e) => {
    e.preventDefault();
    // setButtonIsLoading(true);
    // setSuccess(true);

    // eslint-disable-next-line no-undef
    Login(email, password).then((response) => {
      if (response.status === 200) {
        const accessToken = response.access_token;
        const refreshToken = response.refresh_token;
        Cookies.set("accessToken", accessToken);
        localStorage.setItem("token", refreshToken);
      }
    });
  };
  /** Function to toggle the state of show password */
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <>
      {/* {success ? <LoginSuccess /> : <LoginFailure />} */}
      <div className="xs:hidden md:inline-flex flex w-full h-sreen font-Raleway ">
        <div className="flex flex-col items-center justify-center w-[46%] h-screen bg-[#E7EFED]">
          <div className="mt-[20px] mx-[230px]">
            <img className="w-[208px] h-[56px] " src={logo} alt="" />
          </div>

          <div className="w-[350px] h-[350px] mx-[120px] mt-[30px]">
            <img className="" src={frame16} alt="" />
          </div>

          <div className="flex flex-col items-center justify-center w-[457px] h-[217px] mx-[105px]">
            <div className="text-[40px] text-[#077369] leading-[48px] text-center tracking-wide font-[700] mt-[9px] font-Raleway">
              We help you connect and share.
            </div>
            <div className="text-center font-[500] text-[16px] leading-[24px] tracking-wide text-[#000000] mt-[5px] font-Raleway">
              Buy, sell do it all over
            </div>
          </div>
        </div>

        <div className="sm:h-screen w-[54%] sm:bg-[#FFFFFF] flex flex-col justify-center items-center ">
          <form className="bg-white flex justify-center items-center flex-col ">
            <div className=" w-[450px] flex flex-col flex-start">
              <h1 className="w-[253px] h-[40px] text-[32px] font-[700] leading-[40px] font-Raleway tracking-wide">
                Welcome Back!
              </h1>

              <p className="w-[264px] h-[56px] leading-[28px] tracking-wide font-Raleway text-[20px] font-[700] text-[#278178] mt-[17px]">
                We’ve got something for everyone!
              </p>
            </div>

            <div className="w-[450px] flex flex-col flex-start  h-[44px] mt-[30px]">
              <h2 className="text-[#2F2F2A] font-Raleway font-[700] text-[32px] leading-[40px] tracking-wide">
                Log in
              </h2>
              <span className="flex">
                Don’t have an account &nbsp;
                <p
                  className="font-[700] cursor-pointer text-[#278178] text-[16px] leading-[24px] tracking-wide"
                  onClick={() => navigate(NonAuthRoutes.SignUp)}
                >
                  {" "}
                  Sign Up
                </p>
              </span>
            </div>

            <div className="mt-[50px] ">
              <label htmlFor="mail">
                <p className="text-[#424242] text-[16px] sm:font-[400] leading-[18px] mb-[8px] ">
                  Email
                </p>
                <input
                  type="email"
                  value={email}
                  placeholder="example@mail.com"
                  id="mail"
                  required
                  className=" xs:w-[348px] p-3 sm:w-[450px] h-[56px] rounded-[4px] border-[1px] border-[#717171] outline-0 "
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="mt-[15px]">
              <label htmlFor="password">
                {/* <p className="text-[#424242] text-[16px] font-[400] leading-[18px] mb-[8px]"> */}
                <p>Password</p>
                <Input
                  type={values.showPassword ? "text" : "password"}
                  className="xs:w-[348px] p-3 sm:w-[450px] h-[56px] rounded-[4px] border-[1px] border-[#717171] relative"
                  disableUnderline
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </label>
            </div>
            <div id="log">
              <div className=" text-right mb-[10px]">
                <Link
                  to="/forgotPassword"
                  className=" text-[#2F2F2A] leading-[28px] tracking-wide my-[16px] font-[700] text-[16px] font-Raleway"
                >
                  Forgot Password?
                </Link>
              </div>
              <button
                onClick={handleLogin}
                type="submit"
                className="loginButtonEnabled  "
                disabled={!password || !email}
              >
                Continue
              </button>
            </div>
            <div>
              <p
                className="font-[700] text-[16px] leading-[24px]  tracking-wide text-[#2F2F2A] mt-6 text-center cursor-pointer font-Raleway"
                onClick={() => navigate(NonAuthRoutes.Home)}
              >
                Cancel
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile View */}

      <div className="md:hidden lg:hidden h-screen  bg-[#FFFFFF] flex flex-col justify-center items-center ">
        <form className="bg-white flex  justify-center items-center flex-col w-full h-screen">
          <div className=" w-[387px] flex flex-row items-center justify-center">
            <h1 className="w-[253px] h-[40px] text-[#2F2F2A] text-[24px] font-[700] leading-[40px] font-Raleway tracking-wide">
              Welcome Back!
            </h1>
          </div>
          <div className="w-[387px] flex flex-col flex-start">
            <p className="w-[264px] h-[56px] leading-[28px] tracking-wide font-Raleway text-[20px] font-[700] text-[#278178] mt-[17px]">
              We’ve got something for everyone!
            </p>
          </div>

          <div className=" w-[387px] flex flex-col flex-start  h-[44px] mt-[30px]">
            <h2 className="text-[#2F2F2A] font-Raleway font-[700] text-[20px] leading-[28px] tracking-wide">
              Log in
            </h2>
            <span className="flex">
              Don’t have an account &nbsp;
              <p
                className=" cursor-pointer text-[#278178] font-[400] text-[16px] leading-[24px] tracking-wide"
                onClick={() => navigate(NonAuthRoutes.SignUp)}
              >
                {" "}
                Sign Up
              </p>
            </span>
          </div>

          <div className="mt-[50px] ">
            <label htmlFor="mail">
              <p className="text-[#424242] text-[16px] sm:font-[400] leading-[18px] mb-[8px] ">
                Email
              </p>
              <input
                type="email"
                id="mail"
                required
                className="p-3 w-[387px] h-[48px] rounded-[4px] border-[1px] border-[#717171] outline-0  "
              />
            </label>
          </div>
          <div className="mt-[15px]">
            <label htmlFor="password">
              {/* <p className="text-[#424242] text-[16px] font-[400] leading-[18px] mb-[8px]"> */}
              <p>Password</p>
              {/* </p> */}
              <Input
                type={values.showPassword ? "text" : "password"}
                className="p-3 sm:w-[387px] h-[48px] rounded-[4px] border-[1px] border-[#717171] relative"
                disableUnderline
                required
                value={password}
                // onChange={(e) => handlePasswordOnChange(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />

              {/* <IconButton>
              <VisibilityOffOutlinedIcon className="absolute top-0 left-0" />{" "}
            </IconButton> */}
            </label>
          </div>
          <div className="">
            {/* <div
            className=" text-right my-4"
            onClick={() => navigate(NonAuthRoutes.ForgotPassword)}
          >
            <p className="cursor-pointer text-[#424242] underline my-[16px] ">
              Forgot Password
            </p>
          </div> */}
            <div className=" text-right mb-[10px]">
              <Link
                to="/forgotPassword"
                className=" text-[#278178] leading-[22px] tracking-wide my-[16px] font-[700] text-[14px] font-Raleway"
              >
                Forgot Password
              </Link>
            </div>
            {/* <p
            className="text-[#424242] text-right underline my-[16px] "
            onClick={handleSwitchPage}
          >
            Forgot Password
          </p> */}
            <button
              onClick={handleLogin}
              type="submit"
              className="w-[388px] h-[52px] rounded-[4px] border-[1px] border-[#717171] outline-0 bg-[#077369] text-[#FEFEFE] font-Raleway text-[16px] leading-[23px] font-[400] "
            >
              Continue
            </button>{" "}
            <div className="font-[700] text-[16px] leading-[19px] font-Raleway tracking-wide text-[#278178] mt-6 text-center">
              Cancel
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default LogIn;

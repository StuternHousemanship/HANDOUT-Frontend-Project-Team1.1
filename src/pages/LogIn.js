/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import Cookies from "js-cookie";
import logo from "../assets/svg/desktop.svg";
import frame16 from "../assets/svg/Frame 16.svg";
// eslint-disable-next-line import/no-cycle
// import { Login } from "../api/onboarding";
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
  // const navigate = useNavigate();
  const handleEmailChange = (value) => {
    setEmail(value);
  };

  /** Handle to Login */
  const handleLogin = (e) => {
    e.preventDefault();
    // navigate(NonAuthRoutes.LoginSuccessPage);
    navigate(NonAuthRoutes.ErrorOnLogin);
    // setButtonIsLoading(true);
    // setSuccess(true);

    // eslint-disable-next-line no-undef
    // Login(email, password).then((response) => {
    //   if (response.status === 201) {
    //     const accessToken = response.access_token;
    //     const refreshToken = response.refresh_token;
    //     Cookies.set("accessToken", accessToken);
    //     localStorage.setItem("token", refreshToken);
    //   }
    // });
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
          <div className="flex items-center justify-center mt-[10px]">
            <img
              className=" cursor-pointer w-[208px] h-[35px] "
              src={logo}
              alt=""
              onClick={() => navigate(NonAuthRoutes.Home)}
            />
          </div>

          <div className="lg:w-[350px] lg:h-[350px] md:w-[300px] md:h-[280px] mx-[120px] mt-[30px]">
            <img className="" src={frame16} alt="" />
          </div>

          <div className="flex flex-col items-center justify-center lg:w-[457px] md:w-[385px] h-[217px] lg:mx-[105px] md:mx-[130px] ">
            <div className="md:text-[30px] lg:text-[40px] text-[#077369] lg:leading-[48px] font-Raleway text-center lg:tracking-wide font-[700] mt-[9px]">
              We help you connect <br /> and share.
            </div>
            <div className="text-center font-[500] text-[16px] leading-[24px] tracking-wide text-[#000000] mt-[5px] font-Raleway">
              Buy, sell do it all over
            </div>
          </div>
        </div>

        <div className="sm:h-screen w-[54%] sm:bg-[#FFFFFF] flex flex-col justify-center items-center ">
          <form className="bg-white flex justify-center items-center flex-col ">
            <div className=" lg:w-[450px] md:w-[370px] flex flex-col flex-start">
              <h1 className="w-[253px] h-[40px] text-[32px] font-[700] leading-[40px] font-Raleway tracking-wide">
                Welcome Back!
              </h1>

              <p className="w-[264px] h-[56px] leading-[28px] tracking-wide font-Raleway text-[20px] font-[700] text-[#278178] mt-[17px]">
                We’ve got something for everyone!
              </p>
            </div>

            <div className="lg:w-[450px] md:w-[370px] flex flex-col flex-start  h-[44px] mt-[30px]">
              <h2 className="text-[#2F2F2A] font-Raleway font-[700] text-[32px] leading-[40px] tracking-wide">
                Log in
              </h2>
              <span className="flex">
                Don’t have an account? &nbsp;
                <p
                  className="font-[700] cursor-pointer text-[#278178] text-[16px] leading-[24px] tracking-wide"
                  onClick={() => navigate(NonAuthRoutes.SignUp)}
                >
                  {" "}
                  Sign Up
                </p>
              </span>
            </div>

            <div className="lg:w-[450px] md:w-[370px] mt-[50px] ">
              <label htmlFor="mail">
                <p className="text-[#424242] text-[16px] sm:font-[400] leading-[18px] mb-[8px] ">
                  Email
                </p>
                <input
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  type="email"
                  placeholder="example@mail.com"
                  id="mail"
                  required
                  className=" xs:w-[348px] md:w-[370px] p-3 lg:w-[450px] h-[56px] rounded-[4px] border-[1px] border-[#717171] outline-0  "
                />
              </label>
            </div>
            <div className="lg:w-[450px] md:w-[370px] mt-[15px]">
              <label htmlFor="password">
                {/* <p className="text-[#424242] text-[16px] font-[400] leading-[18px] mb-[8px]"> */}
                <p>Password</p>
                <Input
                  type={values.showPassword ? "text" : "password"}
                  className=" xs:w-[348px] md:w-[370px] p-3 lg:w-[450px] h-[56px] rounded-[4px] border-[1px] border-[#717171] outline-0 relative"
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
            <div className="lg:w-[450px] md:w-[370px]" id="log">
              <div className="w-full text-right mb-[10px]">
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
              <button
                type="button"
                className="font-[700] text-[16px] leading-[24px]  tracking-wide text-[#2F2F2A] mt-6 text-center cursor-pointer font-Raleway"
                onClick={() => navigate(NonAuthRoutes.Home)}
              >
                Cancel
              </button>
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
              Don’t have an account? &nbsp;
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
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
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
                className="p-3 w-[387px] h-[48px] rounded-[4px] border-[1px] border-[#717171] outline-0  "
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
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </label>
          </div>
          <div className="">
            <div className=" text-right mb-[10px]">
              <button
                type="button"
                className="font-[700] text-[15px] leading-[24px]  tracking-wide text-[#2F2F2A] text-center cursor-pointer font-Raleway"
                onClick={() => navigate(NonAuthRoutes.ForgotPassword)}
              >
                Forgot Password?
              </button>
            </div>
            <div className="enabdiv">
              <button
                onClick={handleLogin}
                type="submit"
                className="enab"
                disabled={!password || !email}
              >
                Continue
              </button>
            </div>
            <div className="flex items-center justify-center ">
              <button
                type="button"
                className="font-[700] text-[16px] leading-[24px]  tracking-wide text-[#2F2F2A] mt-6 text-center cursor-pointer font-Raleway"
                onClick={() => navigate(NonAuthRoutes.Home)}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default LogIn;

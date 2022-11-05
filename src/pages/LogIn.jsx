import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import validator from "validator";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
// eslint-disable-next-line import/no-cycle
import { Login } from "../api/onboarding";

function LogIn() {
  const [values, setValues] = useState({
    showPassword: false,
  });
  const [passwordStrong, setPasswordStrong] = useState(true);
  const [password, setPassword] = useState("");

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
  /** Handle Login Button */
  const handleLogin = (e) => {
    e.preventDefault();
    // setButtonIsLoading(true);

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
    <div className="sm:h-[100vh] sm:w-screen sm:bg-[#E5E5E5] flex justify-center items-center xs:w-[428px] xs:h-[926px] xs:bg-white  ">
      <form className="bg-white  xs:w-full xs:h-full sm:w-[609px] sm:h-[532px] flex justify-center items-center flex-col relative">
        <div className="absolute  h-[44px] xs:top-[242px] xs:left-[40px] sm:top-[48px] sm:left-[80px] mb-[40px] ">
          <h1 className="text-[#424242] font-Inter font-[700] text-[36px] leading-[44px] ">
            Log in
          </h1>
        </div>
        <div className="mt-[60px] ">
          <label htmlFor="mail">
            <p className="text-[#424242] text-[16px] sm:font-[400] leading-[18px] mb-[8px] ">
              Email
            </p>
            <input
              type="email"
              id="mail"
              required
              className=" xs:w-[348px] p-3 sm:w-[450px] h-[56px] rounded-[4px] border-[1px] border-[#717171] outline-0  "
            />
          </label>
        </div>
        <div className="relative">
          <label htmlFor="password">
            {/* <p className="text-[#424242] text-[16px] font-[400] leading-[18px] mb-[8px]"> */}
            <p>Password</p>
            {/* </p> */}
            <Input
              type={values.showPassword ? "text" : "password"}
              className="xs:w-[348px] p-3 sm:w-[450px] h-[56px] rounded-[4px] border-[1px] border-[#717171] relative"
              disableUnderline
              required
              value={password}
              onChange={(e) => handlePasswordOnChange(e.target.value)}
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
        {passwordStrong ? null : (
          <p className="text-[#d42121] border border-[#d42121] text-center mt-3  xs:w-[348px] p-3 sm:w-[450px] h-auto rounded-[4px]">
            Must be more than 8 characters, Must include uppercase letters,
            lowercase letters and number from 0 - 9
          </p>
        )}
        <div>
          <p className="text-[#424242] text-right underline my-[16px] ">
            Forgot Password
          </p>
          <button
            onClick={handleLogin}
            type="submit"
            className=" xs:w-[348px] sm:w-[450px] h-[56px] rounded-[4px] border-[1px] border-[#717171] outline-0 bg-[#424242] text-white font-sans text-[20px] leading-[23px] font-[400] "
          >
            Continue
          </button>{" "}
          <br />
          <Link
            to="/signup"
            className="text-[#424242] flex justify-center items-center text-center underline mt-[16px] "
          >
            {" "}
            Do not have an account? Sign Up!
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LogIn;

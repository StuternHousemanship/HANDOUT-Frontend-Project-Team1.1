import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

function LogIn() {
  // const [showIcon, setShowIcon] = useState(false);
  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <div className="sm:h-[100vh] sm:w-screen sm:bg-[#E5E5E5] flex justify-center items-center xs:w-[428px] xs:h-[926px] xs:bg-white  ">
      <form className="bg-white  xs:w-full xs:h-full sm:w-[609px] sm:h-[532px] flex justify-center items-center flex-col relative">
        <div className="absolute  h-[44px] xs:top-[242px] xs:left-[40px] sm:top-[48px] sm:left-[80px] ">
          <h1 className="text-[#424242] font-Inter font-[700] text-[36px] leading-[44px] ">
            Log in
          </h1>
        </div>
        <div className="sm:my-8  xs:my-[24] ">
          <label htmlFor="mail">
            <p className="text-[#424242] text-[16px] sm:font-[400] leading-[18px] sm:mb-[8px] ">
              Email
            </p>
            <input
              type="email"
              id="mail"
              required
              className=" xs:w-[348px] sm:w-[450px] h-[56px] rounded-[4px] border-[1px] border-[#717171] outline-0  "
            />
          </label>
        </div>
        <div className="">
          <label htmlFor="password">
            <p className="text-[#424242] text-[16px] font-[400] leading-[18px] mb-[8px]">
              Password
            </p>
            <Input
              type={values.showPassword ? "text" : "password"}
              className="xs:w-[348px] sm:w-[450px] h-[56px] rounded-[4px] border-[1px] border-[#717171] relative"
              disableUnderline
              required
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
        <div>
          <p className="text-[#424242] text-right underline my-[16px] ">
            Forgot Password
          </p>
          <button
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

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import showPwd from "../assets/svg/show-password.svg";
import hidePwd from "../assets/svg/hide-password.svg";

function SignUp() {
  const [pwd, setPwd] = useState("");
  const [pwdConfirm, setPwdconfirm] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isRevealConfirmPwd, setIsRevealConfirmPwd] = useState(false);
  return (
    <div className="form bg-[#E5E5E5]">
      <div className="bg-[FFFFFF] py-[40px] min-h-screen flex flex-col">
        <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-[#424242] w-full">
            <h1 className="mb-8 text-3xl font-Inter">Create account</h1>
            <label htmlFor="firstName"> First Name</label>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4 "
              name="firstname"
              // placeholder="Full Name"
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="lastname"
              // placeholder="Full Name"
            />

            <label htmlFor="email"> Email</label>
            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              /* placeholder="Email" */
            />
            <label htmlFor="mobile"> Mobile </label>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="mobile"
              /* placeholder="mobile " */
            />
            <div className="relative">
              <label htmlFor="password"> Password</label>
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="pwd"
                type={isRevealPwd ? "text" : "password"}
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
              <img
                className="w-6 absolute top-10 right-2"
                title={isRevealPwd ? "Hide password" : "Show password"}
                src={isRevealPwd ? showPwd : hidePwd}
                onClick={() => setIsRevealPwd((prevState) => !prevState)}
              />
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
            >
              Continue
            </button>
            <div className="underline text-grey-dark mt-6 text-center">
              <Link to="/login"> Log into existing account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;

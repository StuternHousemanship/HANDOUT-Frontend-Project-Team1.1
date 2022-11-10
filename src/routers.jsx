/* eslint-disable import/no-cycle */
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes, AuthRoutes } from "./url";
import { ReactComponent as LoadingIcon } from "./assets/svg/loading-icon.svg";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import VerifyEmail from "./pages/VerifyEmail";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPassword2 from "./pages/ForgotPassword2";
import AccountRecovered from "./pages/AccountRecovered";
import ResetPassword from "./pages/ResetPassword";
import SignUpTwo from "./pages/SignUpTwo";

function Routers() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center mt-60">
            <LoadingIcon className="suspense-loading-icon" />
            <p className="text-center">Loading...</p>
          </div>
        }
      >
        <Routes>
          <Route path={NonAuthRoutes.Home} element={<Home />} />
          <Route path={NonAuthRoutes.SignUp} element={<SignUp />} />
          <Route path={NonAuthRoutes.LogIn} element={<LogIn />} />
          <Route path={NonAuthRoutes.VerifyEmail} element={<VerifyEmail />} />
          <Route path={AuthRoutes.Dashboard} element={<Dashboard />} />
          <Route path={NonAuthRoutes.SignUpTwo} element={<SignUpTwo />} />
          <Route
            path={NonAuthRoutes.ForgotPassword}
            element={<ForgotPassword />}
          />
          <Route
            path={NonAuthRoutes.ForgotPassword2}
            element={<ForgotPassword2 />}
          />
          <Route
            path={NonAuthRoutes.AccountRecovered}
            element={<AccountRecovered />}
          />
          <Route
            path={NonAuthRoutes.ResetPassword}
            element={<ResetPassword />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Routers;

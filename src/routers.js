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
import LoginSuccessPage from "./pages/LoginSuccessPage";
import LoginFailurePage from "./pages/LoginFailurePage";
import SignUpVerificationSuccessPage from "./pages/SignUpVerificationSuccessPage";
import LoginOnSuccessfulSignUp from "./components/LoginOnSuccessfulSignUp";
import ErrorOnSignUp from "./components/ErrorOnSignUp";
import ErrorOnLogin from "./components/ErrorOnLogin";

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
          <Route
            path={NonAuthRoutes.LoginSuccessPage}
            element={<LoginSuccessPage />}
          />
          <Route
            path={NonAuthRoutes.SignUpVerify}
            element={<SignUpVerificationSuccessPage />}
          />
          <Route
            path={NonAuthRoutes.LoginFailure}
            element={<LoginFailurePage />}
          />
          <Route
            path={NonAuthRoutes.LoginOnSuccessSignUp}
            element={<LoginOnSuccessfulSignUp />}
          />
          <Route
            path={NonAuthRoutes.ErrorOnSignUp}
            element={<ErrorOnSignUp />}
          />
          <Route path={NonAuthRoutes.ErrorOnLogin} element={<ErrorOnLogin />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Routers;

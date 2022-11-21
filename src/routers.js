/* eslint-disable import/no-cycle */
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes, AuthRoutes } from "./url";
import { ReactComponent as LoadingIcon } from "./assets/svg/loading-icon.svg";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const LogIn = React.lazy(() => import("./pages/LogIn"));
const VerifyEmail = React.lazy(() => import("./pages/VerifyEmail"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const ForgotPassword = React.lazy(() => import("./pages/ForgotPassword"));
const ForgotPassword2 = React.lazy(() => import("./pages/ForgotPassword2"));
const ResetPassword = React.lazy(() => import("./pages/ResetPassword"));
const ResetPasswordSuccessful = React.lazy(() =>
  import("./components/ResetPasswordSuccessful")
);
const AccountRecovered = React.lazy(() => import("./pages/AccountRecovered"));
const LoginSuccessPage = React.lazy(() => import("./pages/LoginSuccessPage"));
const LoginFailurePage = React.lazy(() => import("./pages/LoginFailurePage"));
const SignUpVerificationSuccessPage = React.lazy(() =>
  import("./pages/SignUpVerificationSuccessPage")
);
const LoginOnSuccessfulSignUp = React.lazy(() =>
  import("./components/LoginOnSuccessfulSignUp")
);
const ErrorOnSignUp = React.lazy(() => import("./components/ErrorOnSignUp"));
const ResetPasswordError = React.lazy(() =>
  import("./components/ResetPasswordError")
);
const ErrorOnLogin = React.lazy(() => import("./components/ErrorOnLogin"));
const Navbar = React.lazy(() => import("./components/Navbar"));

function Routers() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center mt-60">
            <LoadingIcon className="suspense-loading-icon" />
          </div>
        }
      >
        <Routes>
          <Route path={NonAuthRoutes.LandingPage} element={<LandingPage />} />
          <Route path={NonAuthRoutes.SignUp} element={<SignUp />} />
          <Route path={NonAuthRoutes.LogIn} element={<LogIn />} />
          <Route path={NonAuthRoutes.VerifyEmail} element={<VerifyEmail />} />
          <Route path={AuthRoutes.Dashboard} element={<Dashboard />} />
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
          <Route
            path={NonAuthRoutes.ResetPasswordSuccessful}
            element={<ResetPasswordSuccessful />}
          />
          <Route
            path={NonAuthRoutes.ResetPasswordError}
            element={<ResetPasswordError />}
          />
          <Route path={NonAuthRoutes.Navbar} element={<Navbar />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Routers;

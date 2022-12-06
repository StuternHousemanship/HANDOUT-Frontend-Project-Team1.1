/* eslint-disable import/no-cycle */
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes, AuthRoutes } from "./url";
import { ReactComponent as LoadingIcon } from "./assets/svg/loading-icon.svg";

const Home = React.lazy(() => import("./pages/Home"));
const SignUp = React.lazy(() => import("./pages/signUp/SignUp"));
const LogIn = React.lazy(() => import("./pages/login/LogIn"));
const VerifyEmail = React.lazy(() => import("./pages/VerifyEmail"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const ForgotPassword = React.lazy(() => import("./pages/ForgotPassword"));
const ForgotPassword2 = React.lazy(() => import("./pages/ForgotPassword2"));
const ResetPassword = React.lazy(() =>
  import("./pages/resetPassword/ResetPassword")
);
const ResetPasswordSuccessful = React.lazy(() =>
  import("./components/ResetPasswordSuccessful")
);
const AccountOverview = React.lazy(() => import("./pages/AccountOverview"));
const DeleteAccountSuccessfully = React.lazy(() =>
  import("./pages/DeleteAccountSucessfully")
);
const EditProfile = React.lazy(() => import("./pages/EditProfile"));
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

const OnboardingHeader = React.lazy(() =>
  import("./components/header/OnboardingHeader")
);

const DashboardOnboarding = React.lazy(() =>
  import("./pages/DashboardOnboarding")
);

const BrowseItems = React.lazy(() => import("./pages/BrowseItems"));
const AddItem = React.lazy(() => import("./pages/addItem"));
const AddItemError = React.lazy(() => import("./components/AddItemError"));
const AddItemSuccess = React.lazy(() => import("./components/AddItemSuccess"));

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
          <Route path={NonAuthRoutes.Home} element={<Home />} />
          <Route path={NonAuthRoutes.SignUp} element={<SignUp />} />
          <Route path={NonAuthRoutes.LogIn} element={<LogIn />} />
          <Route
            path={`${NonAuthRoutes.VerifyEmail}/:userId`}
            element={<VerifyEmail />}
          />
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
            path={`${NonAuthRoutes.ResetPassword}/:userId`}
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
          <Route
            path={NonAuthRoutes.OnboardingHeader}
            element={<OnboardingHeader />}
          />
          <Route
            path={NonAuthRoutes.DashboardOnboarding}
            element={<DashboardOnboarding />}
          />
          <Route
            path={AuthRoutes.AccountOverview}
            element={<AccountOverview />}
          />
          <Route
            path={NonAuthRoutes.DeleteAccountSuccessfully}
            element={<DeleteAccountSuccessfully />}
          />
          <Route path={NonAuthRoutes.EditProfile} element={<EditProfile />} />
          <Route path={AuthRoutes.BrowseItems} element={<BrowseItems />} />
          <Route path={NonAuthRoutes.Home} element={<Home />} />
          <Route path={AuthRoutes.AddItem} element={<AddItem />} />
          <Route path={AuthRoutes.AddItemError} element={<AddItemError />} />
          <Route
            path={AuthRoutes.AddItemSuccess}
            element={<AddItemSuccess />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Routers;

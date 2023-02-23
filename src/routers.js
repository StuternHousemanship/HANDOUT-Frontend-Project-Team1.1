/* eslint-disable import/no-cycle */
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes, AuthRoutes } from "./url";
import { ReactComponent as LoadingIcon } from "./assets/svg/loading-icon.svg";
import ProtectedRoutes from "./components/ProtectedRoutes";

const Home = React.lazy(() => import("./pages/dashboard/Home"));
const SignUp = React.lazy(() => import("./pages/onboarding/signUp/SignUp"));
const LogIn = React.lazy(() => import("./pages/onboarding/login/LogIn"));
const VerifyEmail = React.lazy(() => import("./pages/onboarding/VerifyEmail"));
const Dashboard = React.lazy(() => import("./pages/dashboard/Dashboard"));
const ForgotPassword = React.lazy(() =>
  import("./pages/onboarding/ForgotPassword")
);
const ForgotPassword2 = React.lazy(() =>
  import("./pages/onboarding/ForgotPassword2")
);
const ResetPassword = React.lazy(() =>
  import("./pages/onboarding/resetPassword/ResetPassword")
);
const ResetPasswordSuccessful = React.lazy(() =>
  import("./components/ResetPasswordSuccessful")
);
const AccountOverview = React.lazy(() =>
  import("./pages/dashboard/AccountOverview")
);
const DeleteAccountSuccessfully = React.lazy(() =>
  import("./pages/dashboard/DeleteAccountSucessfully")
);
const EditProfile = React.lazy(() => import("./pages/dashboard/EditProfile"));
const AccountRecovered = React.lazy(() =>
  import("./pages/dashboard/AccountRecovered")
);
const LoginSuccessPage = React.lazy(() =>
  import("./pages/onboarding/LoginSuccessPage")
);
const LoginFailurePage = React.lazy(() =>
  import("./pages/onboarding/LoginFailurePage")
);
const SignUpVerificationSuccessPage = React.lazy(() =>
  import("./pages/onboarding/SignUpVerificationSuccessPage")
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
  import("./pages/dashboard/DashboardOnboarding")
);
const DeleteItemError = React.lazy(() =>
  import("./components/DeleteItemError")
);
const ItemDetails = React.lazy(() => import("./pages/dashboard/ItemDetails"));
const ViewAllItems = React.lazy(() => import("./pages/dashboard/ViewAllItems"));
const EditItem = React.lazy(() => import("./pages/dashboard/EditItem"));
const DeleteItemSuccess = React.lazy(() =>
  import("./components/DeleteItemSuccess")
);
const BrowseItems = React.lazy(() => import("./pages/dashboard/BrowseItems"));
const AddItem = React.lazy(() => import("./pages/dashboard/addItem"));
const AddItemError = React.lazy(() => import("./components/AddItemError"));
const AddItemSuccess = React.lazy(() => import("./components/AddItemSuccess"));

function Routers() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center mt-60 z-50">
            <LoadingIcon className="suspense-loading-icon" />
          </div>
        }
      >
        <Routes>
          <Route path={NonAuthRoutes.Home} element={<Home />} />{" "}
          <Route path={NonAuthRoutes.SignUp} element={<SignUp />} />{" "}
          <Route path={NonAuthRoutes.LogIn} element={<LogIn />} />{" "}
          <Route
            // path={`${NonAuthRoutes.VerifyEmail}/:userId`}
            path={NonAuthRoutes.VerifyEmail}
            element={<VerifyEmail />}
          />
          <Route
            path={NonAuthRoutes.LoginOnSuccessSignUp}
            element={<LoginOnSuccessfulSignUp />}
          />
          <Route
            path={NonAuthRoutes.ForgotPassword}
            element={<ForgotPassword />}
          />{" "}
          <Route
            path={NonAuthRoutes.ForgotPassword2}
            element={<ForgotPassword2 />}
          />{" "}
          <Route
            path={NonAuthRoutes.AccountRecovered}
            element={<AccountRecovered />}
          />{" "}
          <Route
            path={`${NonAuthRoutes.ResetPassword}/:userId`}
            element={<ResetPassword />}
          />
          <Route
            path={NonAuthRoutes.SignUpVerify}
            element={<SignUpVerificationSuccessPage />}
          />{" "}
          <Route
            path={NonAuthRoutes.LoginFailure}
            element={<LoginFailurePage />}
          />
          <Route
            path={NonAuthRoutes.ErrorOnSignUp}
            element={<ErrorOnSignUp />}
          />{" "}
          <Route path={NonAuthRoutes.ErrorOnLogin} element={<ErrorOnLogin />} />{" "}
          <Route
            path={NonAuthRoutes.ResetPasswordSuccessful}
            element={<ResetPasswordSuccessful />}
          />{" "}
          <Route
            path={NonAuthRoutes.ResetPasswordError}
            element={<ResetPasswordError />}
          />{" "}
          <Route
            path={NonAuthRoutes.OnboardingHeader}
            element={<OnboardingHeader />}
          />
          {/* Protected Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path={AuthRoutes.EditProfile} element={<EditProfile />} />
            <Route
              path={AuthRoutes.DeleteAccountSuccessfully}
              element={<DeleteAccountSuccessfully />}
            />
            <Route
              path={AuthRoutes.LoginSuccessPage}
              element={<LoginSuccessPage />}
            />
            <Route
              path={AuthRoutes.DashboardOnboarding}
              element={<DashboardOnboarding />}
            />
            <Route path={AuthRoutes.Dashboard} element={<Dashboard />} />
            <Route
              path={AuthRoutes.AccountOverview}
              element={<AccountOverview />}
            />
            <Route path={AuthRoutes.BrowseItems} element={<BrowseItems />} />
            <Route path={AuthRoutes.AddItem} element={<AddItem />} />
            <Route path={AuthRoutes.AddItemError} element={<AddItemError />} />
            <Route
              path={AuthRoutes.AddItemSuccess}
              element={<AddItemSuccess />}
            />
            <Route
              path={AuthRoutes.DeleteItemSuccess}
              element={<DeleteItemSuccess />}
            />
            <Route path={AuthRoutes.ItemDetails} element={<ItemDetails />} />
            <Route path={AuthRoutes.EditItem} element={<EditItem />} />
            <Route path={AuthRoutes.ViewAllItems} element={<ViewAllItems />} />
          </Route>
          <Route path={NonAuthRoutes.Home} element={<Home />} />
          <Route
            path={NonAuthRoutes.DeleteItemError}
            element={<DeleteItemError />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Routers;

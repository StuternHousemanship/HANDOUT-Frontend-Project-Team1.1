/* eslint-disable prettier/prettier */
/** Authenticated URL Routes */
const AuthRoutes = {
  Dashboard: "/dashboard",
  AccountOverview: "/account-overview",
  BrowseItems: "/browse-items",
  AddItem: "/add-Item",
  AddItemError: "/add-item-error",
  AddItemSuccess: "/add-item-success",
  EditItem: "/edit-item",
  ViewAllItems: "/view-all-items",
  ItemDetails: "/item-details",
  DeleteItemError: "/Delete-Item-Error",
  DeleteItemSuccess: "/Delete-Item-Success",
  DashboardOnboarding: "/dashboard-Onboarding",
  DeleteAccountSuccessfully: "/account-successfully-deleted",
  EditProfile: "/edit-profile",
  LoginSuccessPage: "/Login-Success-Page",
};

/** Non Authenticated URL Routes */
const NonAuthRoutes = {
  Home: "/",
  LogIn: "/login",
  SignUp: "/signup",
  Unauthorized:"/unauthorized",
  Logout: "/logout",
  VerifyEmail: "/verify-email",
  ForgotPassword: "/forgot-Password",
  ForgotPassword2: "/forgot-Password2",
  ResetPassword: "/reset-password",
  ResetPasswordSuccessful: "/reset-password-successful",
  ResetPasswordError: "/reset-password-Error",
  AccountRecovered: "/account-recovered",
  LoginFailure: "/Login-Failure-Page",
  SignUpVerify: "/SignUp-Verification-SuccessPage",
  LoginOnSuccessSignUp: "/Login-OnSuccessful-SignUp",
  ErrorOnSignUp: "/sign-up-error",
  ErrorOnLogin: "/login-error",
  OnboardingHeader: "/Onboarding-Header",
};

export { AuthRoutes, NonAuthRoutes };

/* eslint-disable prettier/prettier */
/** Authenticated URL Routes */
const AuthRoutes = {
  Dashboard: "/dashboard",
  AccountOverview: "/account-overview",
  BrowseItems: "/browse-items",
};

/** Non Authenticated URL Routes */
const NonAuthRoutes = {
  Home: "/",
  LogIn: "/login",
  SignUp: "/signup",
  Logout: "/logout",
  VerifyEmail: "/verify-email",
  ForgotPassword: "/forgot-Password",
  ForgotPassword2: "/forgot-Password2",
  ResetPassword: "/reset-password",
  ResetPasswordSuccessful: "/reset-password-successful",
  ResetPasswordError: "/reset-password-Error",
  AccountRecovered: "/account-recovered",
  LoginSuccessPage: "/Login-Success-Page",
  LoginFailure: "/Login-Failure-Page",
  SignUpVerify: "/SignUp-Verification-SuccessPage",
  LoginOnSuccessSignUp: "/Login-OnSuccessful-SignUp",
  ErrorOnSignUp: "/sign-up-error",
  ErrorOnLogin: "/login-error",
  OnboardingHeader: "/Onboarding-Header",
  DashboardOnboarding: "/dashboard-Onboarding",
};

export { AuthRoutes, NonAuthRoutes };

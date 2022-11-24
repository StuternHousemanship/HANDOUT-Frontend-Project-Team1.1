/** Authenticated URL Routes */
const AuthRoutes = {
  Dashboard: "/dashboard",
};

/** Non Authenticated URL Routes */
const NonAuthRoutes = {
  LandingPage: "/",
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
  ErrorOnSignUp: "/Error-OnSignUp",
  ErrorOnLogin: "/Error-OnLogin",
  OnboardingHeader: "/Onboarding-Header",
};

export { AuthRoutes, NonAuthRoutes };

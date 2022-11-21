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
  ForgotPassword: "/forgotPassword",
  ForgotPassword2: "/forgotPassword2",
  ResetPassword: "/resetpassword",
  ResetPasswordSuccessful: "/resetpasswordsuccessful",
  ResetPasswordError: "/resetpasswordError",
  AccountRecovered: "/accountrecovered",
  LoginSuccessPage: "/LoginSuccessPage",
  LoginFailure: "/LoginFailurePage",
  SignUpVerify: "/SignUpVerificationSuccessPage",
  LoginOnSuccessSignUp: "/LoginOnSuccessfulSignUp",
  ErrorOnSignUp: "/ErrorOnSignUp",
  ErrorOnLogin: "/ErrorOnLogin",
  Navbar: "/Navbar",
};

export { AuthRoutes, NonAuthRoutes };

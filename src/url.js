/** Authenticated URL Routes */
const AuthRoutes = {
  Dashboard: "/dashboard",
};

/** Non Authenticated URL Routes */
const NonAuthRoutes = {
  Home: "/",
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
  SignUpTwo: "/signuptwo",
  LoginSuccessPage: "/LoginSuccessPage",
  LoginFailure: "/LoginFailurePage",
  SignUpVerify: "/SignUpVerificationSuccessPage",
  LoginOnSuccessSignUp: "/LoginOnSuccessfulSignUp",
  ErrorOnSignUp: "/ErrorOnSignUp",
  ErrorOnLogin: "/ErrorOnLogin",
};

export { AuthRoutes, NonAuthRoutes };

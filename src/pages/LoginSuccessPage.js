import React from "react";
import Onboardingheader from "../components/header/OnboardingHeader";
import LoginSuccess from "../components/LoginSuccess";

function LoginSuccessPage() {
  return (
    <div className="w-screen h-screen relative flex flex-col items-center justify-center">
      <Onboardingheader />
      <LoginSuccess />
    </div>
  );
}

export default LoginSuccessPage;

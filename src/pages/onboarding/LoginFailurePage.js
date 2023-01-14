import React from "react";
import LoginFailure from "../../components/LoginFailure";
import Onboardingheader from "../../components/header/OnboardingHeader";

function LoginFailurePage() {
  return (
    <div className="w-screen h-screen relative flex flex-col items-center justify-center">
      <Onboardingheader />
      <LoginFailure />
    </div>
  );
}

export default LoginFailurePage;

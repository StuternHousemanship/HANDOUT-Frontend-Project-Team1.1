import React from "react";
import SignUpVerificationSuccess from "../../components/SignUpVerificationSuccess";
import Onboardingheader from "../../components/header/OnboardingHeader";

function SignUpVerificationSuccessPage() {
  return (
    <div className="w-screen h-screen relative flex flex-col items-center justify-center">
      <Onboardingheader />
      <SignUpVerificationSuccess />
    </div>
  );
}

export default SignUpVerificationSuccessPage;

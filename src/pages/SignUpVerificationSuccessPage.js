import React from "react";
import SignUpVerificationSuccess from "../components/SignUpVerificationSuccess";
import Navbar from "../components/Navbar";

function SignUpVerificationSuccessPage() {
  return (
    <div className="w-screen h-screen relative flex flex-col items-center justify-center">
      <Navbar />
      <SignUpVerificationSuccess />
    </div>
  );
}

export default SignUpVerificationSuccessPage;

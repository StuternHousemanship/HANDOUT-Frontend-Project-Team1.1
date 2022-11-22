import React from "react";
import Navbar from "../components/Navbar";
import LoginFailure from "../components/LoginFailure";

function LoginFailurePage() {
  return (
    <div className="w-screen h-screen relative flex flex-col items-center justify-center">
      <Navbar />
      <LoginFailure />
    </div>
  );
}

export default LoginFailurePage;

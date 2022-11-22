import React from "react";
import LoginSuccess from "../components/LoginSuccess";
import Navbar from "../components/Navbar";

function LoginSuccessPage() {
  return (
    <div className="w-screen h-screen relative flex flex-col items-center justify-center">
      <Navbar />
      <LoginSuccess />
    </div>
  );
}

export default LoginSuccessPage;

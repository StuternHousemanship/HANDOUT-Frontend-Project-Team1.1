import React from "react";
import DashboardHeader from "../../components/header/DashboardHeader";
import LoginSuccess from "../../components/LoginSuccess";

function LoginSuccessPage() {
  return (
    <div className="w-screen h-screen relative flex flex-col items-center justify-center">
      <DashboardHeader />
      <LoginSuccess />
    </div>
  );
}

export default LoginSuccessPage;

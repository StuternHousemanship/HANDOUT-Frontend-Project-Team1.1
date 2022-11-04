/* eslint-disable react/button-has-type */
import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    // CLEAR DATA FROM STORAGE
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="relative ">
      <nav className="bg-gray-300 w-full h-20 ">
        <button
          onClick={logout}
          className="absolute mr-4 top-0 right-0 bg-[#424242] text-white h-10 w-28 my-4 rounded "
        >
          Log out
        </button>
      </nav>
    </div>
  );
}

export default Dashboard;

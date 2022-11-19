import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../logo.svg";
import "../App.css";
import { NonAuthRoutes } from "../url";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const ac = new AbortController();

    navigate(NonAuthRoutes.Navbar);

    return function cleanup() {
      ac.abort();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>A platform for unwanted personal items</p>
        <p>
          This platform allows people to give out useful but unwanted others who
          may need them...
        </p>
        <Link to="signup">
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Go To Sign-Up Page
          </button>
        </Link>
        <Link to="signuptwo">
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Go To Sign-Up Page-2
          </button>
        </Link>
        <span>
          <Link to="login">
            <button
              type="button"
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            >
              Go To Log-In Page
            </button>
          </Link>
          <Link to="dashboard">
            <button
              type="button"
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            >
              Log-out Page
            </button>
          </Link>
          <Link to="resetpassword">
            <button
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            >
              Reset-Password
            </button>
          </Link>
          <Link to="accountrecovered">
            <button
              type="button"
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            >
              Account Recovered
            </button>
          </Link>
          <Link to="LoginOnSuccessfulSignUp">
            <button
              type="button"
              className="bg-green-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            >
              Success Page
            </button>
          </Link>
          <Link to="ErrorOnLogin">
            <button
              type="button"
              className="bg-orange-700 hover:bg-yellow-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            >
              Failure display Page
            </button>
          </Link>
        </span>
      </header>
    </div>
  );
}

export default Home;

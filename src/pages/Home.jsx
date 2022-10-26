import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "../App.css";

function Home() {
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
        <Link to="login">
          <button
            type="button"
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Go To Log-In Page
          </button>
        </Link>
      </header>
    </div>
  );
}

export default Home;

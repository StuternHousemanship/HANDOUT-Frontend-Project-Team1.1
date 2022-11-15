import { React, useState } from "react";
// eslint-disable-next-line import/no-unresolved
import Navbar from "src/components/Navbar";

function ResetPassword() {
  const [page, setPage] = useState(1);
  return (
    <div className="flex-col w-full h-screen bg-[#FEFEFE] relative ">
      <Navbar />
      {/* body */}
      {page === 1 ? (
        <form className="fixed top-[10%] bg-pink-300">
          <p>Form</p>
          <button type="button" onClick={() => setPage(2)}>
            click
          </button>
        </form>
      ) : (
        <div className="absolute top-[10%]] bg-pink-300">
          <p>Account Recovered</p>
          <button type="button" onClick={() => setPage(1)}>
            click
          </button>
        </div>
      )}
    </div>
  );
}

export default ResetPassword;

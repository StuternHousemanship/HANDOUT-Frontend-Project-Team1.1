/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../url";

function DeleteModal2({ closeModal }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/* content */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* header */}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <p className="text-center font-Raleway text-[24px]  md:text-[32px] font-[600] text-[#077369]">
                We’ll miss you 😢
              </p>
            </div>
            {/* body */}
            <div className="relative p-6 flex-auto">
              <p className="text-[17px] md:text-[24px] font-Raleway font-400 ">
                This action cannot be reversed
                <br />
                Are you sure you want to delete your account?
              </p>
            </div>
            {/* footer */}
            <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-[#077369] background-transparent font-Raleway font-500 uppercase px-10  md:px-14 py-2 text-sm outline-none focus:outline-none mr-5 mb-1 ease-linear transition-all duration-150  rounded border border-[#077369]"
                type="button"
                onClick={() => closeModal(false)}
              >
                No
              </button>
              <button
                className="bg-[#077369] text-[#FFFFFF]  font-Raleway font-500 uppercase text-sm px-10  px-14 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() =>
                  navigate(NonAuthRoutes.DeleteAccountSuccessfully)
                }
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
}

export default DeleteModal2;

import React from "react";

function ValidatePassword({
  numberFlag,
  upperLowerCaseFlag,
  characterLengthFlag,
  upperLowerCaseIcon,
  characterLengthIcon,
  numberFlagIcon,
}) {
  return (
    <div className="mt-[5px]">
      <span className="whitespace-nowrap flex ">
        <img src={characterLengthIcon} className=" mr-1 " alt="caution" />
        <p className={characterLengthFlag}>At least 8 characters</p>
      </span>
      <span className="whitespace-nowrap flex ">
        <img src={upperLowerCaseIcon} className=" mr-1 " alt="caution" />
        <p className={upperLowerCaseFlag}>
          Contains Uppercase letters (A-Z), lowercase (a-z)
        </p>
      </span>
      <span className="whitespace-nowrap flex ">
        <img src={numberFlagIcon} className=" mr-1 " alt="caution" />
        <p className={numberFlag}>A number (0-9)</p>
      </span>
    </div>
  );
}

export default ValidatePassword;

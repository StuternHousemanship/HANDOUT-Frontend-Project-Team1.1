// eslint-disable-next-line import/no-cycle
import { handoutOnboarding } from "../config";

/** Send a POST request to Signup Users */
export const SignUp = async (firstName, lastName, email, mobile, password) => {
  const data = {
    firstName,
    lastName,
    email,
    mobile,
    password,
  };
  const stringifiedData = JSON.stringify(data);

  return handoutOnboarding.post("/auth/signUp", stringifiedData);
};
/** Send a POST request to Login Users */
export const Login = async (email, password) => {
  const data = {
    email,
    password,
  };
  const stringifiedData = JSON.stringify(data);
  // console.log(stringifiedData);

  return handoutOnboarding.post("/auth/login", stringifiedData);
};
/** Send a POST request to Reset password Users */
export const ResetPassword = async (oldPassword, newPassword) => {
  const data = {
    oldPassword,
    newPassword,
  };
  const stringifiedData = JSON.stringify(data);

  return handoutOnboarding.patch("/updateUserPassword", stringifiedData);
};

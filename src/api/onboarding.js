// eslint-disable-next-line import/no-cycle
import { handoutOnboarding } from "../config";

/** Send a POST request to Signup Users */
export const SignUp = async (
  firstName,
  lastName,
  email,
  phoneNovalue,
  password
) => {
  const data = {
    firstName,
    lastName,
    email,
    phoneNovalue,
    password,
  };
  const stringifiedData = JSON.stringify(data);

  return handoutOnboarding.post("/users/signUp", stringifiedData);
};
/** Send a POST request to Login Users */
export const Login = async (email, password) => {
  const data = {
    email,
    password,
  };
  const stringifiedData = JSON.stringify(data);

  return handoutOnboarding.get("/users/login", stringifiedData);
};

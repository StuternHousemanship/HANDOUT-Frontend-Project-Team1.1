// eslint-disable-next-line import/no-cycle
import { handoutOnboardingApi } from "../config";

export default {
  /** Send a POST request to Signup New Users */
  async SignUp(firstName, lastName, email, mobile, password) {
    const data = {
      firstName,
      lastName,
      email,
      mobile,
      password,
    };
    const stringifiedData = JSON.stringify(data);
    return handoutOnboardingApi.post("/auth/signup", stringifiedData);
  },

  /** Send a POST request to Login Users */
  async Login(email, password) {
    const data = {
      email,
      password,
    };
    const stringifiedData = JSON.stringify(data);
    // console.log(stringifiedData);

    return handoutOnboardingApi.post("/auth/login", stringifiedData);
  },

  /** Send a POST request to Reset password Users */
  async ResetPassword(oldPassword, newPassword) {
    const data = {
      oldPassword,
      newPassword,
    };
    const stringifiedData = JSON.stringify(data);

    return handoutOnboardingApi.patch("/updateUserPassword", stringifiedData);
  },
};

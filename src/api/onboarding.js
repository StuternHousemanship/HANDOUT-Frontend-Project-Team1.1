// eslint-disable-next-line import/no-cycle
import { handoutOnboarding } from "../config";

export default {
  /** Send a POST request to Sign Up Users */
  async SignUp(firstName, lastName, email, phoneNumber, password) {
    const data = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    };
    const stringifiedData = JSON.stringify(data);

    return handoutOnboarding.post("/users/signUp", stringifiedData);
  },

  /** Send a POST request to Verify Email Account OTP Code for Users */
  async VerifyEmail(OtpCode) {
    const data = {
      OtpCode,
    };
    const stringifiedData = JSON.stringify(data);

    return handoutOnboarding.post("/Verify/OtpCode", stringifiedData);
  },
};

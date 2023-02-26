/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import axios from "axios";
import Cookies from "js-cookie";
import TokenValidate from "./tokenvalidate";

/** Base Url for api PRODUCTION */
// const apiUrl = "https://deliverycog.beargaze.com/";
// const imageBaseUrl = "https://deliverycog.beargaze.com/";

/** Base Url for Images STAGING */
const handoutApiUrl = "https://handout.beargaze.com";
const handoutImageUrl = "https://handout.beargaze.com/";
const jsonUrl = "https://handout-stutern.web.app/";

/** creating an Axios Base Url for all Onboarding Request */
const handoutOnboardingApi = axios.create({
  baseURL: handoutApiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// JWT DECODE SETUP and Onboarding Request Interceptor
const handoutApi = axios.create({
  baseURL: jsonUrl,
});
handoutApi.interceptors.request.use(
  async (config) => {
    if (config.url.includes("/login")) return config;
    if (config.url.includes("/refresh-token")) return config;

    TokenValidate();
    config.headers.Authorization = `${Cookies.get("accessToken")}`;
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { handoutOnboardingApi, handoutApi, handoutImageUrl };

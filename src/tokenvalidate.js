/* eslint-disable import/no-cycle */
/* eslint-disable no-else-return */
/* eslint-disable camelcase */
import axios from "axios";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import moment from "moment";
import { history } from "./index";
import { NonAuthRoutes } from "./url";

const TokenValidate = async () => {
  const accessToken = Cookies.get("accessToken");
  const refresh_token = localStorage.getItem("token");
  if (!refresh_token) return history.push(NonAuthRoutes.login);

  let accessTokenExpireTime;

  try {
    // extracting the token's expiry time with jwt_decode plugin
    accessTokenExpireTime = jwt_decode(accessToken).exp;
  } catch (error) {
    return history.push(NonAuthRoutes.login);
  }

  if (moment.unix(accessTokenExpireTime) - moment(Date.now()) < 10000) {
    // generating new accessToken
    let refreshTokenExpireTime;

    try {
      refreshTokenExpireTime = jwt_decode(refresh_token).exp;
    } catch (error) {
      return history.push(NonAuthRoutes.login);
    }

    if (moment.unix(refreshTokenExpireTime) - moment(Date.now()) > 10000) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line consistent-return
        axios
          .post("https://staging.citrone.co/api/refresh-token", {
            refresh_token,
          })
          .then((res) => {
            if (!res?.data?.access_token) {
              // the execution will never reach in this block, and if it did, it could be some backend issue.
              // eslint-disable-next-line no-console
              console.log("refresh token is gone");
              history.push(NonAuthRoutes.login);
            } else {
              const isAccessToken = res.data.access_token;
              const isRefreshToken = res.data.refresh_token;
              Cookies.set("accessToken", isAccessToken);
              localStorage.setItem("token", isRefreshToken);

              resolve(accessToken);
            }
          });
      });
    } else {
      // refreshToken expired
      Cookies.remove("accessToken");
      localStorage.removeItem("token");
      history.push(NonAuthRoutes.login);
      // eslint-disable-next-line no-console
      console.log("Your session has expired, please login again.");
      // eslint-disable-next-line no-alert
      alert("Your session has expired, please login again.");
    }
    return accessToken;
  } else {
    return accessToken;
  }
};
export default TokenValidate;

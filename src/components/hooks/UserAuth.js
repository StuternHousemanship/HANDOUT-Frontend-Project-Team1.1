import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

function UserAuth() {
  return useContext(AuthContext);
}

export default UserAuth;

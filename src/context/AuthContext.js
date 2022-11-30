import axios from "axios";
import React, { createContext, useState } from "react";
import { apiKey, baseUrl } from "utils/constants";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const token = JSON.parse(localStorage?.getItem("userToken")) || {
    authToken: null,
    name: "",
    email: "",
  };
  //   if (token?.authToken) {
  //     setupAuthHeaderForServiceCalls(token?.authToken);
  //   }
  const [userToken, setUserToken] = useState(token?.authToken);
  const [userDetails, setUserDetails] = useState({
    name: token?.name,
    email: token?.email,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function loginWithCredentials(otpToken) {
    try {
      const res = await axios({
        method: "POST",
        url: `${baseUrl}/client/verify-otp`,
        headers: {
          "rest-api-key": apiKey,
          Authorization: `Bearer ${otpToken}`,
        },
      });

      if (res.status === 200) {
        setUserToken(token);
        setUserDetails({ name: res.data.name, email: res.data.email });

        localStorage?.setItem(
          "userToken",
          JSON.stringify({
            authToken: token,
            name: res.data.name,
            email: res.data.email,
          })
        );
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }

  function logoutUser() {
    localStorage?.removeItem("userToken");
    setUserToken(null);
    setUserDetails({ name: "", email: "" });
  }

  return (
    <AuthContext.Provider
      value={{
        loginWithCredentials,
        logoutUser,
        userToken,
        userDetails,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };

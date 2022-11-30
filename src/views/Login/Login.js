import React, { useState } from "react";
import Layout from "components/Layout";
import PhoneNumberForm from "./PhoneNumberForm";
import OtpForm from "./OtpForm";

const Login = ({ setIsLoggingIn }) => {
  const [isEnteringPhoneNos, setIsEnteringPhoneNos] = useState(true);
  const [isEnteringOtp, setIsEnteringOtp] = useState(false);
  const [otpToken, setOtpToken] = useState(null);
  return (
    <Layout>
      {isEnteringPhoneNos && (
        <PhoneNumberForm
          setIsEnteringPhoneNos={setIsEnteringPhoneNos}
          setIsEnteringOtp={setIsEnteringOtp}
          setOtpToken={setOtpToken}
        />
      )}
      {isEnteringOtp && (
        <OtpForm
          setIsLoggingIn={setIsLoggingIn}
          otpToken={otpToken}
          setOtpToken={setOtpToken}
        />
      )}
    </Layout>
  );
};

export default Login;

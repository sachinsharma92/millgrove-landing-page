import React, { useState } from "react";
import Layout from "components/Layout";
import PhoneNumberForm from "./PhoneNumberForm";
import OtpForm from "./OtpForm";
import styles from "./Login.module.scss";
import Header from "components/Header";
import BackgroundVideo from "assets/videos/temp-video.mp4";

const Login = ({ setIsLoggingIn }) => {
  const [isEnteringPhoneNos, setIsEnteringPhoneNos] = useState(true);
  const [isEnteringOtp, setIsEnteringOtp] = useState(false);
  const [otpToken, setOtpToken] = useState(null);
  return (
    <Layout layoutStyle="login-page-style">
      <div className={`${styles.loginMainContainer} login-mobile`}>
        <Header />

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
      </div>

      <div className="mg-bg-video">
        <video src={BackgroundVideo} autoPlay muted playsInline loop />
      </div>
    </Layout>
  );
};

export default Login;

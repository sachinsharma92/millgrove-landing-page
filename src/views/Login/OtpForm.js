import axios from "axios";
import Button from "components/Button";
import { AuthContext } from "context/AuthContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import OtpInput from "react18-input-otp";
import { MILLGROVE_TREE } from "utils/assets";
import { apiKey, baseUrl } from "utils/constants";
import styles from "./Login.module.scss";
import Timer from "./Timer";

const OtpForm = ({ setIsLoggingIn, otpToken }) => {
  const [otp, setOtp] = useState(null);
  const otpWrapperRef = useRef();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        `${baseUrl}/client/verify-otp`,
        {
          otp,
        },
        {
          headers: {
            "rest-api-key": apiKey,
            Authorization: `Bearer ${otpToken}`,
          },
        }
      );
      if (res.status === 200) {
        setIsLoggingIn(false);
        setIsLoggedIn(true);
      }
      // if (otp !== "111111") return;
      // setIsLoggingIn(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (otp) => {
    setOtp(otp);
  };

  // useEffect(() => {
  //   if (otp === "111111") {
  //     setIsLoggedIn(true);
  //   }
  // }, [otp]);

  return (
    <div className={styles.otpMainWrapper}>
      <div className={styles.bgTree}>
        <MILLGROVE_TREE style={{ height: "200" }} fillColor="#8a7f7f14" />
      </div>
      <div className={styles.otpFormWrapper}>
        <div className={styles.headingWrapper}>
          <h3 className={styles.heading}>Enter One time password</h3>
        </div>
        <div ref={otpWrapperRef} className={styles.otpWrapper}>
          <OtpInput
            inputStyle={styles.otpInput}
            value={otp}
            shouldAutoFocus
            onChange={handleChange}
            numInputs={6}
            isInputNum
            placeholder="000000"
          />
        </div>
        <p className={styles.resendMsg}>
          <span className={styles.resend}>
            Click here to receive a new code
          </span>{" "}
          in <Timer totalSeconds={60} /> secs
        </p>
        <div className={styles.submitBtnWrapper}>
          <Button
            type="submit"
            clickhandler={() => otp?.length === 6 && handleSubmit()}
            text={"Continue"}
            isDisabled={otp?.length === 6 ? false : true}
            customStyles={{
              backgroundColor: "#2E3430",
              color: "#F1EFE5",
              width: "85%",
              padding: "1rem",
              textTransform: "uppercase",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OtpForm;

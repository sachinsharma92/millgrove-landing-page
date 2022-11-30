import React, { useState } from "react";
import Button from "components/Button";
import Layout from "components/Layout";
import PhoneInput from "react-phone-number-input";
import { MILLGROVE_TREE } from "utils/assets";
import styles from "./Login.module.scss";
import "react-phone-number-input/style.css";
import axios from "axios";
import { apiKey, baseUrl } from "utils/constants";

const PhoneNumberForm = ({
  setIsEnteringPhoneNos,
  setIsEnteringOtp,
  setOtpToken,
}) => {
  const [phoneNos, setPhoneNos] = useState(null);
  const [error, setError] = useState({ errorOccured: false, msg: "" });

  const continueHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${baseUrl}/client/login`,
        {
          phone: phoneNos,
        },
        {
          headers: {
            "rest-api-key": apiKey,
          },
        }
      );
      console.log(res);
      setOtpToken(res.data.data.otpToken);
      // if (phoneNos !== "+913333333333") {
      //   setError((prev) => ({
      //     ...prev,
      //     errorOccured: true,
      //     msg: "This number is not registered with us yet,",
      //   }));
      //   e.preventDefault();
      //   return;
      // }
      if (res.status === 200) {
        setIsEnteringPhoneNos(false);
        setIsEnteringOtp(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (val) => {
    setPhoneNos(val);
    setError({ errorOccured: false, msg: "" });
  };

  return (
    <Layout>
      <div className={styles.mainWrapper}>
        <div className={styles.bgTree}>
          {/* <MILLGROVE_TREE style={{ height: "6vw" }} fillColor="red" /> */}
          <MILLGROVE_TREE style={{ height: "6vw" }} fillColor="#8a7f7f14" />
        </div>
        <form onSubmit={continueHandler} className={styles.formWrapper}>
          <div className={styles.headingWrapper}>
            <h3 className={styles.heading}>Enter Phone Number</h3>
          </div>
          <p className={styles.notRegisteredText}>
            Not registered yet? <span>Register here</span>
          </p>
          <div className={styles.phoneNosWrapper}>
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="IN"
              value={phoneNos}
              onChange={handleChange}
            />
          </div>
          <p className={styles.errorText}>
            {error.errorOccured ? error.msg : ""}
            {error.errorOccured && <span> register here</span>}
          </p>
          <div className={styles.submitBtnWrapper}>
            <Button
              type="submit"
              // isDisabled={phoneNos?.length === 10 ? false : true}
              clickhandler={() => continueHandler()}
              text={"Continue"}
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default PhoneNumberForm;

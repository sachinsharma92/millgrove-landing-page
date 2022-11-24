import { DownArrow } from "assets/icons/icons";
import Button from "components/Button";
import Layout from "components/Layout";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { MILLGROVE_TREE } from "utils/assets";
import styles from "./Login.module.scss";
import "react-phone-number-input/style.css";

const PhoneNumberForm = ({ setIsEnteringPhoneNos, setIsEnteringOtp }) => {
  const [phoneNos, setPhoneNos] = useState(null);
  const [error, setError] = useState({ errorOccured: false, msg: "" });

  const continueHandler = () => {
    if (phoneNos !== "+913333333333") {
      setError((prev) => ({
        ...prev,
        errorOccured: true,
        msg: "Phone number not registered.",
      }));
      return;
    }
    setIsEnteringPhoneNos(false);
    setIsEnteringOtp(true);
  };

  const handleChange = (val) => {
    setPhoneNos(val);
    setError({ errorOccured: false, msg: "" });
  };

  return (
    <Layout>
      <div className={styles.mainWrapper}>
        <div className={styles.bgTree}>
          <MILLGROVE_TREE style={{ height: "6vw" }} fillColor="#8a7f7f14" />
        </div>
        <div className={styles.formWrapper}>
          <div className={styles.headingWrapper}>
            <h3 className={styles.heading}>Enter Phone Number</h3>
          </div>
          <div className={styles.phoneNosWrapper}>
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="IN"
              value={phoneNos}
              onChange={handleChange}
            />
          </div>
          <p className={styles.instructionText}>
            {error.errorOccured
              ? error.msg
              : "Please press continue to proceed."}
          </p>
          {error.errorOccured && (
            <p className={styles.instructionText}>
              Please register <span className={styles.navigate}>here</span>
            </p>
          )}
          <div className={styles.submitBtnWrapper}>
            <Button
              isDisabled={!phoneNos ? true : false}
              clickhandler={continueHandler}
              text={"Continue"}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PhoneNumberForm;

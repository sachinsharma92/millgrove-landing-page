import { DownArrow } from "assets/icons/icons";
import Button from "components/Button";
import Layout from "components/Layout";
import React, { useState } from "react";
import OtpInput from "react18-input-otp";
import { MILLGROVE_TREE } from "utils/assets";
import { countries } from "./countries";
import styles from "./Login.module.scss";

const PhoneNumberForm = ({ setIsEnteringPhoneNos, setIsEnteringOtp }) => {
  const [phoneNos, setPhoneNos] = useState(null);
  const [countryCode, setCountryCode] = useState("+91");
  const [error, setError] = useState({ errorOccured: false, msg: "" });

  const continueHandler = () => {
    if (phoneNos !== "3333333333") {
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
            <div className={styles.countryCodeWrapper}>
              <div className={styles.countryCode}>
                <div>+</div>
                <select onChange={(e) => setCountryCode(`+${e.target.value}`)}>
                  {countries.map((country, idx) => (
                    <option
                      value={country.dial_code}
                      selected={country.dial_code === "91"}
                    >
                      {country.dial_code}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.downArrowWrapper}>
                <DownArrow />
              </div>
            </div>
            {/* using otp comp for phone nos as well */}
            <OtpInput
              containerStyle={styles.phoneNosInputContainer}
              inputStyle={styles.phoneNos}
              value={phoneNos}
              shouldAutoFocus
              onChange={handleChange}
              numInputs={10}
              separator={<span> </span>}
              separateAfter={4}
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

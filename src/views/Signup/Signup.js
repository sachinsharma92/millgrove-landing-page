import React, { useState } from "react";
import Button from "components/Button";
import Checkbox from "components/Checkbox/Checkbox";
import Layout from "components/Layout";
import PhoneInput from "react-phone-number-input";
import { MILLGROVE_TREE } from "utils/assets";
import styles from "./Signup.module.scss";

const ERROR_MSG = "This is a required field, can’t be left empty";

const Signup = ({
  isRegistering,
  setIsRegistering,
  isRegisterationSuccessfull,
  setIsRegisterationSuccessfull,
}) => {
  const [userInfo, setUserInfo] = useState({ name: "", phone: "", email: "" });
  const [isBoxChecked, setIsBoxChecked] = useState(false);
  const [error, setError] = useState({
    errorOccured: false,
    nameError: "",
    phoneError: "",
    emailError: "",
  });

  const isAnyFieldEmpty = () => {
    if (!userInfo.name) {
      setError((prev) => ({
        ...prev,
        errorOccured: true,
        nameError: ERROR_MSG,
      }));
      return true;
    }
    if (!userInfo.phone) {
      setError((prev) => ({
        ...prev,
        errorOccured: true,
        phoneError: ERROR_MSG,
      }));
      return true;
    }
    if (!userInfo.email) {
      setError((prev) => ({
        ...prev,
        errorOccured: true,
        emailError: ERROR_MSG,
      }));
      return true;
    }
    return false;
  };

  const handleSubmit = (e) => {
    if (isAnyFieldEmpty()) {
      e.preventDefault();
      return;
    }
    setError((prev) => ({
      ...prev,
      errorOccured: false,
      nameError: "",
      phoneError: "",
      emailError: "",
    }));
    setIsRegistering(false);
    setIsRegisterationSuccessfull(true);
  };

  const updateUserInfo = (field, e) => {
    setError((prev) => ({ ...prev, [`${field}Error`]: ERROR_MSG }));
    if (field === "phone") {
      setUserInfo({ ...userInfo, [field]: e });
    } else {
      setUserInfo({ ...userInfo, [field]: e.target.value });
    }
  };

  const shouldBtnBeDisabled = () => {
    const data = Object.values(userInfo);
    if (!isBoxChecked) return true;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(userInfo.email);
    if (!emailRegex) return true;
    if (data.includes("")) return true;
    return false;
  };

  return (
    <Layout>
      {isRegistering && (
        <div className={styles.mainWrapper}>
          <div className={styles.bgTree}>
            <MILLGROVE_TREE style={{ height: `6vw` }} fillColor="#8a7f7f14" />
          </div>
          <div className={styles.formWrapper}>
            <div className={styles.headingWrapper}>
              <h3 className={styles.heading}>
                Register <span className={styles.smallText}>your</span> Details
              </h3>
            </div>
            <p className={styles.fieldRequiredText}>
              (All Fields are required)
            </p>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className={styles.formInputWrapper}>
                <input
                  name="name"
                  onChange={(e) => updateUserInfo("name", e)}
                  type={"text"}
                  className={styles.formInput}
                  placeholder={"Name *"}
                />
              </div>
              {error.errorOccured && !userInfo.name ? (
                <p className={styles.errorText}>{ERROR_MSG}</p>
              ) : null}
              <div className={styles.phoneNosWrapper}>
                <PhoneInput
                  name="phone"
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="IN"
                  value={userInfo.phone}
                  onChange={(e) => updateUserInfo("phone", e)}
                />
              </div>
              {error.errorOccured && !userInfo.phone ? (
                <p className={styles.errorText}>{ERROR_MSG}</p>
              ) : null}
              <div className={styles.formInputWrapper}>
                <input
                  name="email"
                  onChange={(e) => updateUserInfo("email", e)}
                  type={"email"}
                  className={styles.formInput}
                  placeholder={"Email *"}
                />
              </div>
              {error.errorOccured && !userInfo.email ? (
                <p className={styles.errorText}>{ERROR_MSG}</p>
              ) : null}
              <div className={styles.agreementCheck}>
                <Checkbox
                  isChecked={isBoxChecked}
                  setIsChecked={setIsBoxChecked}
                />
                <p>I accept the terms for processing my personal data</p>
              </div>
              <div className={styles.submitBtnWrapper}>
                <Button
                  // isDisabled={shouldBtnBeDisabled()}
                  text={"Continue"}
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Signup;

import React, { useContext } from "react";
import Checkbox from "components/Checkbox/Checkbox";
import styles from "./Reservation.module.scss";
import { MILLGROVE_GRADIENT_LEAF } from "utils/assets";
import { AuthContext } from "context/AuthContext";

const Input = ({ placeholder, type = "text", value }) => {
  return (
    <input
      disabled
      type={type}
      className={styles.formInput}
      placeholder={placeholder}
      value={value}
    />
  );
};

const ReservationForm = ({ isBoxChecked, setIsBoxChecked }) => {
  const {
    userDetails: { name, email, phone },
  } = useContext(AuthContext);

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formHeadingWrapper}>
        <h1 className={styles.formHeading}>
          Request <span>a</span> Visit
          <MILLGROVE_GRADIENT_LEAF className={styles.gradientLeaf} />
        </h1>
      </div>
      <form className={styles.formContainer}>
        <div className={styles.inputSection}>
          <div className={styles.formInputWrapper}>
            <Input value={name} placeholder={"Name"} type="text" />
          </div>
          <div className={styles.formInputWrapper}>
            <Input value={phone} placeholder={"Phone"} type="text" />
          </div>
          <div className={styles.formInputWrapper}>
            <Input value={email} placeholder={"Email"} type="email" />
          </div>
        </div>
        <div className={styles.agreementCheck}>
          <Checkbox isChecked={isBoxChecked} setIsChecked={setIsBoxChecked} />
          <p>I accept the terms for processing my personal data</p>
        </div>
      </form>
      <div className={styles.requestAVisitBtn}>request a visit</div>
    </div>
  );
};

export default ReservationForm;

import React from "react";
import Checkbox from "components/Checkbox/Checkbox";
import styles from "./Reservation.module.scss";
import { MILLGROVE_GRADIENT_LEAF } from "utils/assets";

const Input = ({ placeholder, type = "text" }) => {
  return (
    <input type={type} className={styles.formInput} placeholder={placeholder} />
  );
};
const ReservationForm = () => {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.formHeadingWrapper}>
        <h1 className={styles.formHeading}>
          Request <span>a</span> Visit
          <MILLGROVE_GRADIENT_LEAF className={styles.gradientLeaf} />
        </h1>
      </div>
      <form>
        <div className={styles.formInputWrapper}>
          <Input placeholder={"Name"} type="text" />
        </div>
        <div className={styles.formInputWrapper}>
          <Input placeholder={"Phone"} type="text" />
        </div>
        <div className={styles.formInputWrapper}>
          <Input placeholder={"Email"} type="email" />
        </div>
        <div className={styles.agreementCheck}>
          <Checkbox />
          <p>I accept the terms for processing my personal data</p>
        </div>
      </form>
      <div className={styles.requestAVisitBtn}>request a visit</div>
    </div>
  );
};

export default ReservationForm;

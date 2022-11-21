import { LeftArrow, RightArrow } from 'assets/icons/icons';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox/Checkbox';
import React from 'react';
import { MILLGROVE_TREE } from 'utils/assets';
import styles from "./Signup.module.scss";

const Input = ({ placeholder, type = "text" }) => {
    return (
        <input type={type} className={styles.formInput} placeholder={placeholder} />
    );
};

const Signup = () => {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.bgTree}>
                <MILLGROVE_TREE style={{ height: '200' }} fillColor="#8a7f7f14" />
            </div>
            <div className={styles.formWrapper}>

                <div className={styles.headingWrapper}>
                    <h3 className={styles.heading}>
                        Register <span className={styles.smallText}>and</span> Begin
                    </h3>
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
                    <div className={styles.submitBtnWrapper}>
                        <Button text={"Continue"} leftIcon={<LeftArrow color='#F1EFE5' />} rightIcon={<RightArrow color='#F1EFE5' />} customStyles={{ backgroundColor: "#2E3430", color: "#F1EFE5", width: "85%", padding: "1rem" }} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
import { LeftArrow, RightArrow } from 'assets/icons/icons';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox/Checkbox';
import Layout from 'components/Layout';
import React, { useState } from 'react';
import { MILLGROVE_TREE } from 'utils/assets';
import styles from "./Signup.module.scss";
import SignupSuccess from './SignupSuccess';


const Signup = ({ isRegistering, setIsRegistering, isRegisterationSuccessfull, setIsRegisterationSuccessfull }) => {

    const [userInfo, setUserInfo] = useState({ name: '', phone: '', email: '' })
    const [isBoxChecked, setIsBoxChecked] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsRegistering(false)
        setIsRegisterationSuccessfull(true)
    }

    const updateUserInfo = (field, e) => {
        setUserInfo({ ...userInfo, [field]: e.target.value })
    }

    const shouldBtnBeDisabled = () => {
        const data = Object.values(userInfo)
        if (!isBoxChecked) return true
        const emailRegex = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(userInfo.email))
        if (!emailRegex) return true
        if (data.includes('')) return true
        return false
    }

    return (
        <Layout>
            {isRegistering && <div className={styles.mainWrapper}>
                <div className={styles.bgTree}>
                    <MILLGROVE_TREE style={{ height: `6vw` }} fillColor="#8a7f7f14" />
                </div>
                <div className={styles.formWrapper}>

                    <div className={styles.headingWrapper}>
                        <h3 className={styles.heading}>
                            Register <span className={styles.smallText}>your</span> Details
                        </h3>
                    </div>
                    <form>
                        <div className={styles.formInputWrapper}>
                            <input onChange={(e) => updateUserInfo('name', e)} type={"text"} className={styles.formInput} placeholder={"Enter Name"} />
                        </div>
                        <div className={styles.formInputWrapper}>
                            <input onChange={(e) => updateUserInfo('phone', e)} type={"text"} className={styles.formInput} placeholder={"Phone"} />
                        </div>
                        <div className={styles.formInputWrapper}>
                            <input onChange={(e) => updateUserInfo('email', e)} type={"email"} className={styles.formInput} placeholder={"Email"} />
                        </div>
                        <div className={styles.agreementCheck}>
                            <Checkbox isChecked={isBoxChecked} setIsChecked={setIsBoxChecked} />
                            <p>I accept the terms for processing my personal data</p>
                        </div>
                        <div className={styles.submitBtnWrapper}>
                            <Button isDisabled={shouldBtnBeDisabled()} clickhandler={handleSubmit} text={"Continue"} />
                        </div>
                    </form>
                </div>
            </div>}

        </Layout>
    )
}

export default Signup
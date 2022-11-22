import Button from 'components/Button'
import Layout from 'components/Layout'
import React from 'react'
import { MILLGROVE_TREE } from 'utils/assets'
import styles from "./Login.module.scss"

const PhoneNumberForm = ({ setIsEnteringPhoneNos, setIsEnteringOtp }) => {

    const continueHandler = () => {
        setIsEnteringPhoneNos(false)
        setIsEnteringOtp(true)
    }
    return (
        <Layout>
            <div className={styles.mainWrapper}>
                <div className={styles.bgTree}>
                    <MILLGROVE_TREE style={{ height: '200' }} fillColor="#8a7f7f14" />
                </div>
                <div className={styles.formWrapper}>
                    <div className={styles.headingWrapper}>
                        <h3 className={styles.heading}>
                            Enter Phone Number
                        </h3>
                    </div>
                    <div className={styles.phoneNosWrapper}>
                        <input />
                    </div>
                    <p className={styles.instructionText}>Please press continue to proceed.</p>
                    <div className={styles.submitBtnWrapper}>
                        <Button clickhandler={continueHandler} text={"Continue"} customStyles={{ backgroundColor: "#2E3430", color: "#F1EFE5", width: "85%", padding: "1rem", textTransform: "uppercase" }} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PhoneNumberForm
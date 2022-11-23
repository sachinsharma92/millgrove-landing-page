import { DownArrow } from 'assets/icons/icons'
import Button from 'components/Button'
import Layout from 'components/Layout'
import React, { useState } from 'react'
import OtpInput from 'react18-input-otp'
import { MILLGROVE_TREE } from 'utils/assets'
import styles from "./Login.module.scss"

const PhoneNumberForm = ({ setIsEnteringPhoneNos, setIsEnteringOtp }) => {
    const [phoneNos, setPhoneNos] = useState(null)


    const continueHandler = () => {
        setIsEnteringPhoneNos(false)
        setIsEnteringOtp(true)
    }

    const handleChange = (val) => {
        setPhoneNos(val)
    }

    return (
        <Layout>
            <div className={styles.mainWrapper}>
                <div className={styles.bgTree}>
                    <MILLGROVE_TREE style={{ height: '6vw' }} fillColor="#8a7f7f14" />
                </div>
                <div className={styles.formWrapper}>
                    <div className={styles.headingWrapper}>
                        <h3 className={styles.heading}>
                            Enter Phone Number
                        </h3>
                    </div>
                    <div className={styles.phoneNosWrapper}>
                        <div className={styles.countryCodeWrapper}>
                            <div className={styles.countryCode}>
                                +91
                            </div>
                            <div className={styles.downArrowWrapper}>
                                <DownArrow />
                            </div>
                        </div>
                        {/* using otp comp for phone nos as well */}
                        <OtpInput containerStyle={styles.phoneNosInputContainer} inputStyle={styles.phoneNos} value={phoneNos} shouldAutoFocus onChange={handleChange} numInputs={10} separator={<span>{" "}</span>} separateAfter={4} />
                    </div>
                    <p className={styles.instructionText}>Please press continue to proceed.</p>
                    <div className={styles.submitBtnWrapper}>
                        <Button clickhandler={continueHandler} text={"Continue"} customStyles={{ backgroundColor: "#2E3430", color: "#F1EFE5", textTransform: "uppercase" }} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PhoneNumberForm
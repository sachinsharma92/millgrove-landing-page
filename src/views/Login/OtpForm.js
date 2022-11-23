import Button from 'components/Button'
import { AuthContext } from 'context/AuthContext'
import React, { useContext, useEffect, useRef, useState } from 'react'
import OtpInput from 'react18-input-otp'
import { MILLGROVE_TREE } from 'utils/assets'
import styles from "./Login.module.scss"

const OtpForm = ({ setIsLoggingIn }) => {

    const [otp, setOtp] = useState(null)
    const otpWrapperRef = useRef();
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

    const handleSubmit = () => {
        setIsLoggingIn(false)
    }

    const handleChange = (otp) => {
        setOtp(otp)
    }

    useEffect(() => {
        if (otp === "111111") {
            setIsLoggedIn(true)
        }
    }, [otp])

    return (
        <div className={styles.otpMainWrapper}>
            <div className={styles.bgTree}>
                <MILLGROVE_TREE style={{ height: '200' }} fillColor="#8a7f7f14" />
            </div>
            <div className={styles.otpFormWrapper}>
                <div className={styles.headingWrapper}>
                    <h3 className={styles.heading}>
                        Enter OTP
                    </h3>
                </div>
                <div ref={otpWrapperRef} className={styles.otpWrapper}>
                    <OtpInput inputStyle={styles.otpInput} value={otp} shouldAutoFocus onChange={handleChange} numInputs={6} />
                </div>
                <p className={styles.resend}><span>Resend Code</span> in 00:06 Secs</p>
                <div className={styles.submitBtnWrapper}>
                    <Button clickhandler={handleSubmit} text={"Continue"} customStyles={{ backgroundColor: "#2E3430", color: "#F1EFE5", width: "85%", padding: "1rem", textTransform: "uppercase" }} />
                </div>
            </div>
        </div>
    )
}

export default OtpForm
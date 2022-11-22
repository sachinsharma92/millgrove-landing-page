import { LeftArrow, RightArrow } from 'assets/icons/icons'
import Button from 'components/Button'
import Layout from 'components/Layout'
import React from 'react'
import { MILLGROVE_TREE } from 'utils/assets'
import styles from './Login.module.scss'

const Login = ({ setIsLoggingIn }) => {

    const handleSubmit = () => {
        setIsLoggingIn(false)
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
                            Enter <span className={styles.smallText}>secret</span> code
                        </h3>
                    </div>
                    <div className={styles.otpWrapper}>
                        <input />
                    </div>
                    <p className={styles.resend}><span>Resend Code</span> in 00:06 Secs</p>
                    <div className={styles.submitBtnWrapper}>
                        <Button clickhandler={handleSubmit} text={"Click here to continue"} leftIcon={<LeftArrow color='#F1EFE5' />} rightIcon={<RightArrow color='#F1EFE5' />} customStyles={{ backgroundColor: "#2E3430", color: "#F1EFE5", width: "85%", padding: "1rem", textTransform: "uppercase" }} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Login
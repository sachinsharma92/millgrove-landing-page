import React from 'react'
import Layout from 'components/Layout';
import styles from "./Signup.module.scss";


const SignupSuccess = () => {
    return (
        <Layout>
            <div className={styles.successMsgWrapper}>
                <h2>Thank You <span className={styles.smallTxt}>for</span> Registering</h2>
                <div className={styles.successDescription}>
                    <p>We’ll get in touch with you shortly to share a One Time Passcode code to access the Millgrove Web Experience. Click here to enter your Passcode.</p>
                </div>
            </div>
        </Layout>

    )
}

export default SignupSuccess
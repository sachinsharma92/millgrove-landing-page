import React, { useEffect, useRef, useState } from 'react'
import OtpInput from 'react18-input-otp'
import { LeftArrow, RightArrow } from 'assets/icons/icons'
import Button from 'components/Button'
import Layout from 'components/Layout'
import { MILLGROVE_TREE } from 'utils/assets'
import styles from './Login.module.scss'
import PhoneNumberForm from './PhoneNumberForm'
import OtpForm from './OtpForm'

const Login = ({ setIsLoggingIn }) => {
    const [isEnteringPhoneNos, setIsEnteringPhoneNos] = useState(true)
    const [isEnteringOtp, setIsEnteringOtp] = useState(false)
    return (
        <Layout>
            {isEnteringPhoneNos && <PhoneNumberForm setIsEnteringPhoneNos={setIsEnteringPhoneNos} setIsEnteringOtp={setIsEnteringOtp} />}
            {isEnteringOtp && <OtpForm setIsLoggingIn={setIsLoggingIn} />}
        </Layout>
    )
}

export default Login
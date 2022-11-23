import React, { useState } from 'react'
import Layout from 'components/Layout'
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
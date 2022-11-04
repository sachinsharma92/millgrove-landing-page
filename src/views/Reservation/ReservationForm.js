import React from 'react'
import Checkbox from 'components/Checkbox/Checkbox'
import styles from './Reservation.module.scss'

const Input = ({ placeholder, type = 'text' }) => {
    return <input type={type} className={styles.formInput} placeholder={placeholder} />
}
const ReservationForm = () => {
    return (
        <div className={styles.formWrapper}>
            <div className={styles.formHeadingWrapper}>
                <h1 className={styles.formHeading}>Reserve <span>a</span> Visit</h1>
            </div>
            <form>
                <div className={styles.formInputWrapper}>
                    <Input placeholder={'Name'} type='text' />
                </div>
                <div className={styles.formInputWrapper}>
                    <Input placeholder={'Phone'} type='text' />
                </div>
                <div className={styles.formInputWrapper}>
                    <Input placeholder={'Email'} type='email' />
                </div>
                <div className={styles.agreementCheck}>
                    <Checkbox />
                    <p>I have read the privacy policy and happily agree to the same.</p>
                </div>
            </form>
        </div>
    )
}

export default ReservationForm
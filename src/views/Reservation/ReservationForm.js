import React from 'react'
import styles from './Reservation.module.scss'

const ReservationForm = () => {
    return (
        <div className={styles.formWrapper}>
            <div className={styles.formHeadingWrapper}>
                <h1 className={styles.formHeading}>Reserve <span>a</span> Visit</h1>
            </div>
        </div>
    )
}

export default ReservationForm
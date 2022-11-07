import { RESERVE_VISIT } from 'utils/assets'
import Border from './Border'
import styles from './Reservation.module.scss'
import ReservationForm from './ReservationForm'
import TreePrint from './TreePrint'


const Reservation = () => {

    return <div className={styles.wrapper}>
        <div>
            <div className={styles.verticalDash}></div>
            <div className={styles.reservationCard}>
                {/* <Border className={styles.halfBorder} /> */}
                <TreePrint className={styles.treePrint} />
                <ReservationForm />
                <RESERVE_VISIT className={styles.reserveVisit}/>
                <div className={styles.verticalDash}></div>
            </div>
            <div className={styles.verticalDash}></div>
        </div>
    </div>
}

export default Reservation
import Border from './Border'
import styles from './Reservation.module.scss'
import TreePrint from './TreePrint'


const Reservation=()=>{ 
    
    return <div className={styles.wrapper}>
            <div>
                <div className={styles.verticalDash}></div>
                <div className={styles.reservationCard}>
                    <Border className={styles.halfBorder}/>
                    <TreePrint className={styles.treePrint}/>
                </div>
                <div className={styles.verticalDash}></div>
            </div>
    </div>
}

export default Reservation
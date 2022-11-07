import React from 'react'
import { CROOKED_LINE, BRANDNAME_HALF_SOLID_TEXT } from 'utils/assets'
import Discover from './Discover'
import styles from './Footer.module.scss'
import rectangleHouse from '../../assets/images/rectangle-house.png'

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
           {/* <h4><sup>The</sup><span>Homes</span></h4>
           <Discover className={styles.discover}/>
            <img className={styles.houseImg} src={rectangleHouse} alt='House' width='628' height='430'/> */}
           <CROOKED_LINE className={styles.crookedLine}/>
           <BRANDNAME_HALF_SOLID_TEXT className={styles.brandName}/>
           <div className={styles.footerLinksWrapper}>
            <p className={styles.spacedLinks}>
                <span>Privacy Policy</span>
                <span>Cookies Policy</span>
            </p>
            <p>©MILLGROVE, 2022. 28.6063° N, 77.3856° E</p>
            <p className={styles.spacedLinks}>
                <a href='https://google.com'>Instagram</a>
                <a href='https://google.com'>Twitter</a>
                <a href='https://google.com'>Facebook</a>
            </p>
           </div>
        </div>
    )
}

export default Footer


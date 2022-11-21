import Header from 'components/Header'
import React from 'react'
import styles from "./Layout.module.scss"


const Layout = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.mainContentWrapper}>
                <Header />
                <div className={styles.childrenWrapper}>
                    {children}
                </div>
            </div>
            <footer>
                <div>
                    <span>Privacy Policy</span>
                    <span>Terms & Conditions</span>
                    <span>Cookies policy</span>
                </div>
                <div>
                    <span className={styles.siteUrl}>www.haryanarera.gov.in</span>
                    <span>HRERA2020A0009</span>
                </div>
            </footer>
        </div>
    )
}

export default Layout
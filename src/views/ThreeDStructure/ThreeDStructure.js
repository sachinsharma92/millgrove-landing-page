import React from 'react'
import styles from './ThreeDStructure.module.scss'
const ThreeDStructure = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.textWrapper}>
            <div className={styles.heading}>
                <h2 className={styles.first}>
                    Shape your life
                </h2>
                <h2 className={styles.second}>On</h2>
                <h2 className={styles.third}>Your own land</h2>
            </div>
            <div className={styles.description}>
                <p>
                Millgrove extends an unparalleled offering to a select few - a rare chance to own a 1000 square yard plot inclusive of an exquisite independent home. With an ambition to kindle a small, tight-knit community of free-thinking individuals, we have thoughtfully arranged only a limited number of plots over our lush 23-acre estate.
                </p>
            </div>
        </div>
        <div className={styles.threeDStructure}>

        </div>

    </div>
  )
}

export default ThreeDStructure
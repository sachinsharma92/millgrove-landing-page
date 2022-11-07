import React from "react"
import styles from "./HomeCarousel.module.scss";

const ScrollIndicator = ({ activeSlide, nosOfSlides }) => {

    const arr = Array(nosOfSlides).fill(true);

    return (
        <div className={styles.scrollIndicatorWrapper}>
            {arr.map((_,index) => (
                <div className={`${styles.dot} ${index===activeSlide && styles.active}`} key={index} ></div>
            ))}
        </div>
    )
}

export default ScrollIndicator
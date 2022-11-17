import React, { useEffect, useRef } from 'react';
import SuperScriptText from 'components/SuperScriptText';
import bgImg from "../../assets/images/rectangle-400.png";
import styles from "./HomeCarousel.module.scss"
import { useIntersection } from 'hooks/useIntersection';

const HomeCarouselChild = ({ houseImage, description, bgImage = bgImg, supTextLocation, activeSlide, setActiveSlide, keyNos, bgColor }) => {

    const slideRef = useRef(null)
    const imgRef = useRef(null)
    const descriptionRef = useRef(null)
    const isSlideInViewport = useIntersection(slideRef, '0px');
    const isImgInViewport = useIntersection(imgRef, '-200px');
    const isDescriptionInViewport = useIntersection(descriptionRef, '-200px');

    // useEffect(() => {
    //     if (isSlideInViewport) {
    //         setActiveSlide(keyNos)
    //     }
    // }, [keyNos])

    // useEffect(() => {
    //     const x = descriptionRef.current
    //     if (descriptionRef.current && keyNos === activeSlide) {
    //         setTimeout(() => {
    //             descriptionRef.current.style.opacity = 1
    //         }, 350)
    //     }
    //     return () => { x.style.opacity = 0 }
    // }, [keyNos, activeSlide])

    return (
        <div ref={slideRef} className={`${styles.slide} `}>
            <div className={styles.houseAndDescWrapper}>
                <img className={`${styles.hide} ${keyNos === activeSlide && styles.appear}`} ref={imgRef} src={houseImage} alt={`${houseImage}`} height="40%" width="100%" />
                <div ref={descriptionRef} className={`${styles.hide} ${keyNos === activeSlide && styles.appear}`}>
                    <SuperScriptText mainText={{ text: description.heading, size: "5vw", color: "#2E3430" }} supText={{ text: 'The', size: "3.5vw", color: "#2E3430", left: supTextLocation?.left }} />
                    <p>
                        {description?.description}
                    </p>
                </div>
            </div>
            <div className={` ${styles.hide} ${keyNos === activeSlide && styles.appear} ${styles.box} ${styles[bgColor]}`}></div>
        </div>
    )
}

export default HomeCarouselChild
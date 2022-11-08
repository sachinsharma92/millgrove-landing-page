import React, { useRef } from 'react';
import SuperScriptText from 'components/SuperScriptText';
import bgImg from "../../assets/images/rectangle-400.png";
import styles from "./HomeCarousel.module.scss" 
import { useIntersection } from 'hooks/useIntersection';

const HomeCarouselChild = ({ houseImage, description, bgImage=bgImg,supTextLocation,setActiveSlide,keyNos }) => {

    const slideRef = useRef(null)
    const imgRef = useRef(null)
    const descriptionRef = useRef(null)
    const isSlideInViewport = useIntersection(slideRef, '0px');
    const isImgInViewport = useIntersection(imgRef, '-200px');
    const isDescriptionInViewport = useIntersection(descriptionRef, '-200px');

    if(isSlideInViewport){
        setActiveSlide(keyNos)
    }

    // if(isDescriptionInViewport){
    //     descriptionRef.current.classList.add("appear")
    //     descriptionRef.current.style.opacity=1
    // }

    return (
        <div ref={slideRef} className={styles.slide}>
            <div className={styles.houseAndDescWrapper}>
            <img style={{opacity:isImgInViewport?1:0}} className={`${styles.fadeIn} ${isImgInViewport && styles.appear}`} ref={imgRef} src={houseImage} alt={`${houseImage}`} height="40%" width="100%" />
                <div ref={descriptionRef} style={{opacity:isImgInViewport?1:0}} className={`${styles.description} ${isImgInViewport && styles.appear}`}>
                    <SuperScriptText mainText={{text:description.heading,size:"5vw",color:"#2E3430"}} supText={{text:'The',size:"3.5vw",color:"#2E3430",left:supTextLocation?.left}}/>
                    <p>
                   {description?.description}
                    </p>
                </div>
            </div>
            {/* <img className={styles.slideBgImg} src={bgImage} alt="background" height="275" width="100%" /> */}
        </div>
    )
}

export default HomeCarouselChild
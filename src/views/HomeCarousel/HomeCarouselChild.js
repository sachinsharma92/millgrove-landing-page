import React, { useRef } from 'react';
import SuperScriptText from 'components/SuperScriptText';
import bgImg from "../../assets/images/rectangle-400.png";
import styles from "./HomeCarousel.module.scss" 
import { useIntersection } from 'hooks/useIntersection';

const HomeCarouselChild = ({ houseImage, description, bgImage=bgImg,supTextLocation,setActiveSlide,keyNos }) => {

    const slideRef = useRef(null)
    const inViewport = useIntersection(slideRef, '0px');

    if(inViewport){
        setActiveSlide(keyNos)
    }

    return (
        <div ref={slideRef} className={styles.slide}>
            <div className={styles.houseAndDescWrapper}>
            <img src={houseImage} alt={`${houseImage}`} height="40%" width="100%" />
                <div className={styles.description}>
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
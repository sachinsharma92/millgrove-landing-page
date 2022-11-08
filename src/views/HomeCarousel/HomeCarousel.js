import React, { useRef, useState } from "react";
import Header from "components/Header";
import HomeCarouselChild from "./HomeCarouselChild";
import swimmingPool from "../../assets/images/swimming-pool.png";
import balcony from "../../assets/images/balcony.png";
import dining from "../../assets/images/dining.png";
import bedroom from "../../assets/images/bedroom.png";
import styles from "./HomeCarousel.module.scss";
import ScrollIndicator from "./ScrollIndicator";
import bgImg from "../../assets/images/rectangle-400.png";
import {useIntersection} from "../../hooks/useIntersection"

const HomeCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const carouselViewRef=useRef()
  // const isVisible=useIntersection(carouselViewRef,`-${Math.round(window.innerHeight/2)}px`)

  // if(isVisible){
  //   console.log('ha aajao',window.innerHeight/2)
  // }
  return (
    <div ref={carouselViewRef} className={styles.wrapper}>
      <Header />
      <div className={styles.scrollIndicatorContainer}>
        <ScrollIndicator activeSlide={activeSlide} nosOfSlides={4} />
      </div>
      <img className={styles.slideBgImg} src={bgImg} alt="background" height="275" width="100%" />
      <div className={styles.carouselWrapper}>
      
        <HomeCarouselChild setActiveSlide={setActiveSlide} keyNos={0} houseImage={swimmingPool} description={{ heading: "HOMES", description: "Millgrove homes embrace grand proportions. They are flooded with natural light and designed with sophisticated elegance and intricate craftsmanship. With an abundance of flexible space within each ‘shell & core’ home, you can finish the interior to suit your personal needs and taste. It is a place to be yourself, on a scale like no other." }} />,
        <HomeCarouselChild setActiveSlide={setActiveSlide} keyNos={1} houseImage={balcony} description={{ heading: "GROUNDS", description: "Cocooned by flourishing greens and blossoming pathways, Millgrove is idyllic. Whether seeking serene time out, reconnection with family and friends, or just a long walk, the sprawling grounds offer an indulgent escape from the bustle of the city. Let nature be your happy place." }} supTextLocation={{ left: "-20%" }} />,
        <HomeCarouselChild setActiveSlide={setActiveSlide} keyNos={2} houseImage={dining} description={{ heading: "COMFORTS", description: "Millgrove offers a unique opportunity to own a freehold property with the customary comforts found in the best condominiums. Services to each home have been meticulously planned so that you don’t have to worry. It is farmhouse-style living with peace of mind." }} supTextLocation={{ left: "-20%" }} />,
        <HomeCarouselChild setActiveSlide={setActiveSlide} keyNos={3} houseImage={bedroom} description={{ heading: "LOCATIONS", description: "Millgrove is delicately distanced from the commotion of the city, yet effortlessly linked to the livelier parts of the National Capital Region. On completion of several nearby government infrastructure projects, Millgrove will become one of the most connected places to live in Delhi NCR." }} supTextLocation={{ left: "-20%" }} />
      </div>
    </div>
  )
}

export default HomeCarousel
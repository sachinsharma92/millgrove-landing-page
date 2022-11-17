import React, { useEffect, useRef } from "react";
import Header from "components/Header";
import HomeCarouselChild from "./HomeCarouselChild";
import swimmingPool from "../../assets/images/swimming-pool.png";
import balcony from "../../assets/images/balcony.png";
import dining from "../../assets/images/dining.png";
import bedroom from "../../assets/images/bedroom.png";
import styles from "./HomeCarousel.module.scss";
import ScrollIndicator from "./ScrollIndicator";
import bgImg from "../../assets/images/rectangle-400.png";
import { useIntersection } from "../../hooks/useIntersection";


const slides = [
  {
    houseImage: swimmingPool,
    bgColor: "lightBrown",
    heading: "HOMES",
    description:
      "Millgrove homes embrace grand proportions. They are flooded with natural light and designed with sophisticated elegance and intricate craftsmanship. With an abundance of flexible space within each ‘shell & core’ home, you can finish the interior to suit your personal needs and taste. It is a place to be yourself, on a scale like no other.",
  },
  {
    houseImage: balcony,
    bgColor: "green",
    heading: "GROUNDS",
    description:
      "Cocooned by flourishing greens and blossoming pathways, Millgrove is idyllic. Whether seeking serene time out, reconnection with family and friends, or just a long walk, the sprawling grounds offer an indulgent escape from the bustle of the city. Let nature be your happy place.",
  },
  {
    houseImage: dining,
    bgColor: "darkBrown",
    heading: "COMFORTS",
    description:
      "Millgrove offers a unique opportunity to own a freehold property with the customary comforts found in the best condominiums. Services to each home have been meticulously planned so that you don’t have to worry. It is farmhouse-style living with peace of mind.",
  },
  {
    houseImage: bedroom,
    bgColor: "blue",
    heading: "LOCATIONS",
    description:
      "Millgrove is delicately distanced from the commotion of the city, yet effortlessly linked to the livelier parts of the National Capital Region. On completion of several nearby government infrastructure projects, Millgrove will become one of the most connected places to live in Delhi NCR.",
  }
]

const HomeCarousel = ({ activeSlide, setActiveSlide, carouselViewRef }) => {


  return (
    <section ref={carouselViewRef} style={{ height: `${slides.length * 50}vh` }} className={styles.cSection} data-scroll-section data-scroll id="scroll-direction">
      <div
        className={styles.cSectionInfo}
        data-scroll
        data-scroll-sticky
        data-scroll-target="#scroll-direction"
      >
        <div className={styles.wrapper} data-scroll>
          <Header />
          <div className={styles.scrollIndicatorContainer}>
            <ScrollIndicator activeSlide={activeSlide} nosOfSlides={4} />
          </div>
          {/* <img
            className={styles.slideBgImg}
            src={bgImg}
            alt="background"
            height="275"
            width="100%"
          /> */}
          <div data-scroll data-scroll-call="fade" className={styles.carouselWrapper}>
            {
              slides.map((slide, idx) => <HomeCarouselChild activeSlide={activeSlide} setActiveSlide={setActiveSlide}
                keyNos={idx}
                bgColor={slide.bgColor}
                houseImage={slide.houseImage}
                description={{
                  heading: slide.heading,
                  description: slide.description,
                }}
                supTextLocation={idx !== 0 && "-20%"}
              />)
            }

          </div>
        </div>
      </div>
    </section>
  )

  // return (
  //   <section className={styles.mainSection} data-scroll-section id="scroll-direction">
  //     <div>
  //       <div ref={carouselViewRef} className={styles.wrapper}
  //         data-scroll
  //         data-scroll-sticky
  //         data-scroll-target="#scroll-direction">
  //         <Header />
  //         <div className={styles.scrollIndicatorContainer}>
  //           <ScrollIndicator activeSlide={activeSlide} nosOfSlides={4} />
  //         </div>
  //         <img
  //           className={styles.slideBgImg}
  //           src={bgImg}
  //           alt="background"
  //           height="275"
  //           width="100%"
  //         />
  //         <div className={styles.carouselWrapper}>
  //           {
  //             slides.map((slide, idx) => <HomeCarouselChild setActiveSlide={setActiveSlide}
  //               keyNos={idx}
  //               houseImage={slide.houseImage}
  //               description={{
  //                 heading: slide.heading,
  //                 description: slide.description,
  //               }}
  //               supTextLocation={idx !== 0 && "-20%"}
  //             />)
  //           }

  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default HomeCarousel;

import React, { useEffect, useRef } from "react";
import SuperScriptText from "components/SuperScriptText";
import bgImg from "../../assets/images/rectangle-400.png";
import styles from "./HomeCarousel.module.scss";
import "../../styles/App.scss"

const HomeCarouselChild = ({
    houseImage,
    description,
    bgImage = bgImg,
    supTextLocation,
    activeSlide,
    setActiveSlide,
    keyNos,
    bgColor,
}) => {
    const slideRef = useRef(null);
    const imgRef = useRef(null);
    const descriptionRef = useRef(null);

    return (
        <div
            ref={slideRef}
            className={`slide${keyNos + 1} ${styles.slide}`}
        >
            <div className={styles.houseAndDescWrapper}>
                <img
                    ref={imgRef}
                    src={houseImage}
                    alt={`${houseImage}`}
                    height="40%"
                    width="100%"
                />
                <div
                    ref={descriptionRef}
                >
                    <SuperScriptText
                        mainText={{
                            text: description.heading,
                            size: "5vw",
                            color: "#2E3430",
                        }}
                        supText={{
                            text: "The",
                            size: "3.5vw",
                            color: "#2E3430",
                            left: supTextLocation?.left,
                        }}
                    />
                    <p>{description?.description}</p>
                </div>
            </div>
            <div
                className={`${styles.box} ${styles[bgColor]}`}
            ></div>
        </div>
    );
};

export default HomeCarouselChild;

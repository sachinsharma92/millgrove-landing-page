import React, { useState } from "react";

// Styles
import "./homecarouselmobile.scss";

//Assets
import carouselImg1 from "assets/images/carousel-img-1.png";
import carouselImg2 from "assets/images/carousel-img-2.png";
import carouselImg3 from "assets/images/carousel-img-3.png";
import carouselImg4 from "assets/images/carousel-img-4.png";
import { LEFT_ARROW, RIGHT_ARROW } from "utils/assets";

const CAROUSEL_DATA_MOBILE = [
  {
    title: "homes",
    text: "Millgrove homes embrace grand proportions. They are flooded with natural light and designed with sophisticated elegance and intricate craftsmanship. With an abundance of flexible space within each ‘shell & core’ home, you can finish the interior to suit your personal needs and taste. It is a place to be yourself, on a scale like no other.",
    img: carouselImg1,
  },
  {
    title: "grounds",
    text: "Cocooned by flourishing greens and blossoming pathways, Millgrove is idyllic. Whether seeking serene time out, reconnecting with family and friends, or just taking a long walk, the sprawling grounds offer an indulgent escape from the bustle of the city. Let nature be your happy place.",
    img: carouselImg2,
  },
  {
    title: "comforts",
    text: "Millgrove offers a unique opportunity to own a freehold property with the customary comforts found in the best condominiums. Services to each home have been meticulously planned so that you don’t have to worry. It is farmhouse-style living with peace of mind.",
    img: carouselImg3,
  },
  {
    title: "location",
    text: "Millgrove is delicately distanced from the commotion of the city, yet effortlessly linked to thelivelier parts of the National Capital Region. On completion of several nearby government infrastructure projects, Millgrove will become one of the most connected places to live in Delhi NCR.",
    img: carouselImg4,
  },
];

function HomeCarouselMobile(props) {
  const [currentItem, setCurrentItem] = useState(0);
  return (
    <div className="home-carousel-mobile">
      <div className="carousel-text-mobile">
        <div className="carousel-heading-mobile">
          {CAROUSEL_DATA_MOBILE[currentItem].title}
        </div>
        <div className="carousel-subtext-mobile">
          {CAROUSEL_DATA_MOBILE[currentItem].text}
        </div>
        <div className="carousel-btns-mobile">
          <div
            style={{ visibility: currentItem > 0 ? "visible" : "hidden" }}
            onClick={() => currentItem > 0 && setCurrentItem(currentItem - 1)}
          >
            <LEFT_ARROW />
          </div>
          <div
            style={{
              visibility:
                currentItem < CAROUSEL_DATA_MOBILE.length - 1
                  ? "visible"
                  : "hidden",
            }}
            onClick={() =>
              currentItem < CAROUSEL_DATA_MOBILE.length - 1 &&
              setCurrentItem(currentItem + 1)
            }
          >
            <RIGHT_ARROW />
          </div>
        </div>
      </div>
      <img
        className="carousel-img-mobile"
        src={CAROUSEL_DATA_MOBILE[currentItem].img}
        alt="carousel-img"
      />
    </div>
  );
}

export default HomeCarouselMobile;

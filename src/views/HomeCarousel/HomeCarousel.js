import React from "react";
import "./homecarousel.scss";
import carouselImg1 from "assets/images/carousel-img-1.png";
import carouselImg2 from "assets/images/carousel-img-2.png";
import carouselImg3 from "assets/images/carousel-img-3.png";
import carouselImg4 from "assets/images/carousel-img-4.png";

function HomeCarousel({ carouselViewRef }) {
  return (
    <>
      <div className="slide1">
        <img src={carouselImg1} alt="" className="carousel-img" />
        <div className="bottom-color-div"></div>
        <div className="carousel-text-div">
          <div className="carousel-heading">Homes</div>
          <div className="carousel-subtext">
            Millgrove homes embrace grand proportions. They are flooded with
            natural light and designed with sophisticated elegance and intricate
            craftsmanship. With an abundance of flexible space within each
            ‘shell & core’ home, you can finish the interior to suit your
            personal needs and taste. It is a place to be yourself, on a scale
            like no other.
          </div>
        </div>
      </div>
      <div className="slide2">
        <img src={carouselImg2} alt="" className="carousel-img" />
        <div className="carousel-text-div">
          <div className="carousel-heading">Grounds</div>
          <div className="carousel-subtext">
            Cocooned by flourishing greens and blossoming pathways, Millgrove is
            idyllic. Whether seeking serene time out, reconnecting with family
            and friends, or just taking a long walk, the sprawling grounds offer
            an indulgent escape from the bustle of the city. Let nature be your
            happy place.
          </div>
        </div>
        <div className="bottom-color-div"></div>
      </div>
      <div className="slide3">
        <img src={carouselImg3} alt="" className="carousel-img" />
        <div className="carousel-text-div">
          <div className="carousel-heading">Comforts</div>
          <div className="carousel-subtext">
            Millgrove offers a unique opportunity to own a freehold property
            with the customary comforts found in the best condominiums. Services
            to each home have been meticulously planned so that you don’t have
            to worry. It is farmhouse-style living with peace of mind.
          </div>
        </div>
        <div className="bottom-color-div"></div>
      </div>
      <div className="slide4">
        <img src={carouselImg4} alt="" className="carousel-img" />
        <div className="carousel-text-div">
          <div className="carousel-heading">Location</div>
          <div className="carousel-subtext">
            Millgrove is delicately distanced from the commotion of the city,
            yet effortlessly linked to thelivelier parts of the National Capital
            Region. On completion of several nearby government infrastructure
            projects, Millgrove will become one of the most connected places to
            live in Delhi NCR.
          </div>
        </div>
        <div className="bottom-color-div"></div>
      </div>
      <section
        ref={carouselViewRef}
        className="home-carousel"
        data-scroll-section
        data-scroll
        id="scroll-direction"
      >
        <div className="slide1-abs">
          <div>
            <img src={carouselImg1} alt="" className="carousel-img" />
            <div className="carousel-text-div">
              <div className="carousel-heading">Homes</div>
              <div className="carousel-subtext">
                Millgrove homes embrace grand proportions. They are flooded with
                natural light and designed with sophisticated elegance and
                intricate craftsmanship. With an abundance of flexible space
                within each ‘shell & core’ home, you can finish the interior to
                suit your personal needs and taste. It is a place to be
                yourself, on a scale like no other.
              </div>
            </div>
            <div className="bottom-color-div"></div>
          </div>
        </div>
        <div className="slide4-abs">
          <div>
            <img src={carouselImg4} alt="" className="carousel-img" />
            <div className="carousel-text-div">
              <div className="carousel-heading">Location</div>
              <div className="carousel-subtext">
                Millgrove is delicately distanced from the commotion of the
                city, yet effortlessly linked to thelivelier parts of the
                National Capital Region. On completion of several nearby
                government infrastructure projects, Millgrove will become one of
                the most connected places to live in Delhi NCR.
              </div>
            </div>
            <div className="bottom-color-div"></div>
          </div>
        </div>
        <div className="carousel-logic-div-1 carousel-logic-div"></div>
        <div className="carousel-logic-div-2 carousel-logic-div"></div>
        <div className="carousel-logic-div-3 carousel-logic-div"></div>
        <div className="carousel-logic-div-4 carousel-logic-div"></div>
      </section>
    </>
  );
}

export default HomeCarousel;

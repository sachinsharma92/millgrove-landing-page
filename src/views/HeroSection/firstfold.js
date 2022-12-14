// Assets
import TEMP_VIDEO from "assets/videos/temp-video.mp4";
import { MILLGROVE_LOGO } from "utils/assets";
import arrowDown from "../../assets/images/arrow-down.svg"

// Styles
import "./firstfold.scss";

function HeroSection() {
  return (
    <div className="hero-section-fold">
      <div className="mg-first-fold">
        <div className="mg-first-fold-top-text">
          <a href="www.haryanarera.gov.in">www.haryanarera.gov.in</a>
          <div>HRERA2020A0009</div>
        </div>
        <div className="mg-first-fold-header" data-scroll>
          <MILLGROVE_LOGO />
        </div>
        <div className="mg-first-fold-text">
          <div>
            <div className="mg-first-fold-heading">
              MEANINGFUL <br />
              LIVING
            </div>
            <div
              className="mg-first-fold-subheading">
              Living at Millgrove transcends ordinary notions of luxury. It is a
              natural haven that gives you a complete sense of belonging. A place
              where you can nurture relationships and make time for what matters
              most.
            </div>
          </div>
        </div>

        <a href="#madeWithCare" className="more-button">
          <img src={arrowDown} alt="" />
          Discover more
        </a>

        <div className="mg-bg-video">
          <video src={TEMP_VIDEO} autoPlay muted playsInline loop />
        </div>
      </div>
    </div>

  );
}

export default HeroSection;

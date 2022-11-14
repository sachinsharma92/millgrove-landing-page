import React from "react";

// Styles
import "./firstfold.scss";

// Assets
import TEMP_VIDEO from "assets/videos/temp-video.mp4";
import {
  DOWN_ARROW,
  MENU_FOLDS,
  MILLGROVE_LOGO,
  REEL_BUTTON,
} from "utils/assets";

function Firstfold(props) {
  return (
    <div className="mg-first-fold" data-scroll-section>
      <div className="mg-first-fold-header" data-scroll>
        <div className="mg-first-fold-menu" onClick={props.openMenu}>
          <MENU_FOLDS />
          MENU
        </div>
        <MILLGROVE_LOGO />
        <div className="mg-first-fold-login">LOGIN</div>
      </div>
      <div className="mg-first-fold-text">
        <div
          className="mg-first-fold-heading"
          data-scroll
          data-scroll-speed="1"
        >
          MEANINGFUL <br />
          LIVING
        </div>
        <div
          className="mg-first-fold-subheading"
          data-scroll
          data-scroll-speed="2"
        >
          Millgrove is a limited collection of private residences nestled in the
          heart of New Gurugram. Just 50 1000sq yard plots have been
          thoughtfully arranged within a 23-acre secure gated community.
          <div className="mg-play-reel-btn">
            <REEL_BUTTON />
          </div>
        </div>
      </div>
      <div className="mg-discover-more">
        <DOWN_ARROW />
        DISCOVER MORE
      </div>
      <div className="mg-bg-video">
        <video src={TEMP_VIDEO} autoPlay muted loop />
      </div>
    </div>
  );
}

export default Firstfold;

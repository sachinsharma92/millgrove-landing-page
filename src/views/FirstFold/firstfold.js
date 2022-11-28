import React, { useContext } from "react";

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
import Button from "components/Button";
import { LeftArrow, RightArrow } from "assets/icons/icons";
import { AuthContext } from "context/AuthContext";

function Firstfold({ setIsRegistering, openMenu, setIsLoggingIn }) {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="mg-first-fold" data-scroll-section>
      <div className="mg-first-fold-top-text">
        www.haryanarera.gov.in
        <br />
        <div>HRERA2020A0009</div>
      </div>
      <div className="mg-first-fold-header" data-scroll>
        <div
        // className="mg-first-fold-menu" onClick={props.openMenu}
        >
          {/* <MENU_FOLDS />
          MENU */}
        </div>
        <MILLGROVE_LOGO />
        <div
        // className="mg-first-fold-login"
        >
          {/* LOGIN */}
        </div>
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
          Living at Millgrove transcends ordinary notions of luxury. It is a
          natural haven that gives youa complete sense of belonging. A place
          where you can nurture relationships and make time for what matters
          most.
          {/* <div className="mg-play-reel-btn">
            <REEL_BUTTON />
          </div> */}
        </div>
        {!isLoggedIn && (
          <div
            data-scroll
            data-scroll-speed="2"
            className="mg-first-fold-auth-btns"
          >
            <Button
              clickhandler={() => setIsLoggingIn(true)}
              text={"LOGIN"}
              variant="secondary"
              // leftIcon={<LeftArrow />}
              // rightIcon={<RightArrow />}
            />
            <Button
              clickhandler={() => setIsRegistering(true)}
              text={"REGISTER"}
              variant="secondary"
              // leftIcon={<LeftArrow />}
              // rightIcon={<RightArrow />}
            />
          </div>
        )}
      </div>
      {/* {isLoggedIn && (
        <div className="mg-discover-more">
          <DOWN_ARROW />
          Discover more
        </div>
      )} */}
      <div className="mg-bg-video">
        <video src={TEMP_VIDEO} autoPlay muted loop />
      </div>
    </div>
  );
}

export default Firstfold;

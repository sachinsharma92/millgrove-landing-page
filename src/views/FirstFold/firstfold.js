import { useContext } from "react";

// Styles
import "./firstfold.scss";

// Assets
import TEMP_VIDEO from "assets/videos/temp-video.mp4";
import Button from "components/Button";
import { AuthContext } from "context/AuthContext";
import {
  MILLGROVE_LOGO
} from "utils/assets";

function Firstfold({ setIsRegistering, openMenu, setIsLoggingIn }) {
  const { isLoggedIn, userToken } = useContext(AuthContext);

  return (
    <div className="mg-first-fold" data-scroll-section>
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
          {!userToken && (
            <div className="mg-first-fold-auth-btns"
            >
              <Button
                clickhandler={() => setIsLoggingIn(true)}
                text={"LOGIN"}
                variant="secondary"
                classname="btn-hero-sec"
              />
              <Button
                clickhandler={() => setIsRegistering(true)}
                text={"REGISTER"}
                variant="secondary"
                classname="btn-hero-sec"
              />
            </div>
          )}
        </div>
      </div>
      <div className="mg-bg-video">
        <video src={TEMP_VIDEO} autoPlay muted playsInline loop />
      </div>
    </div>
  );
}

export default Firstfold;

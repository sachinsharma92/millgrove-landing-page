import { useEffect, useState } from "react";

// Styles
import "styles/App.scss";

//Components
import Home from "./views/Home/home";
import Menu from "views/Menu/menu";
import Reservation from "views/Reservation";
import Firstfold from "views/FirstFold/firstfold";
import Secondfold from "views/SecondFold/secondfold";
import CookiesPopup from "components/CookiesPopup/cookiesPopup";
import Footer from "views/Footer";
import ThreeDView from "views/ThreeDView";
import HomeCarousel from "views/HomeCarousel";

import LocomotiveScroll from "locomotive-scroll";

function App(props) {
  const [menu, setMenu] = useState(false);
  const [loader, setLoader] = useState(true);
  const [cookiesPopup, setCookiesPopup] = useState(true);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);
  return (
    <div className="millgrove" data-scroll-container>
      {cookiesPopup && (
        <CookiesPopup closeCookiesPopup={() => setCookiesPopup(false)} />
      )}
      {loader && <Home />}
      <Firstfold openMenu={() => setMenu(true)} />
      <Secondfold />
      {menu && <Menu closeMenu={() => setMenu(false)} />}
      <ThreeDView />
      <HomeCarousel />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;

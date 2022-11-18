import { useEffect, useRef, useState } from "react";

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
  const [loader, setLoader] = useState(false);
  const [cookiesPopup, setCookiesPopup] = useState(false);
  const [progress, setProgress] = useState(0);
  let container = useRef(null);
  useEffect(() => {
    handleResize();
    const scroll = new LocomotiveScroll({
      // el: document.querySelector("[data-scroll-container]"),
      el: container,
      smooth: true,
      getSpeed: true,
      getDirection: true,
      reloadOnContextChange: true,
    });
    const fadeInOut = (el1, el2) => {
      el1.style.animation = "fade-out 0.2s ease-in-out forwards";
      el2.style.animation = "fade-in 0.2s ease-in-out forwards 0.2s";
    };

    let scrollDirection = "down";
    var scrollableElement = document.body; //document.getElementById('scrollableElement');

    scrollableElement.addEventListener("wheel", checkScrollDirection);
    function checkScrollDirection(event) {
      if (checkScrollDirectionIsUp(event)) {
        scrollDirection = "up";
      } else {
        scrollDirection = "down";
      }
    }
    function checkScrollDirectionIsUp(event) {
      if (event.wheelDelta) {
        return event.wheelDelta > 0;
      }
      return event.deltaY < 0;
    }

    scroll.on("scroll", (args) => {
      // Get all current elements : args.currentElements
      if (typeof args.currentElements["carousel-parent-div"] === "object") {
        let progress = args.currentElements["carousel-parent-div"].progress;
        const elem1 = document.querySelector(".carousel-div-1");
        const elem2 = document.querySelector(".carousel-div-2");
        const elem3 = document.querySelector(".carousel-div-3");
        const elem4 = document.querySelector(".carousel-div-4");
        elem1.style.sticky = "sticky !important";
        elem1.style.top = "0 !important";
        elem2.style.top = "0 !important";
        elem3.style.top = "0 !important";
        elem4.style.top = "0 !important";
        const scrollDiv = document.querySelector(".home-carousel");
        let offset =
          scrollDiv.getBoundingClientRect().bottom / (window.innerHeight * 4);
        offset = 1 - offset;
        if (offset > 0.29 && offset < 0.31) {
          if (scrollDirection === "down") fadeInOut(elem1, elem2);
          else if (scrollDirection === "up") fadeInOut(elem2, elem1);
        } else if (offset > 0.49 && offset < 0.51) {
          if (scrollDirection === "down") fadeInOut(elem2, elem3);
          else if (scrollDirection === "up") fadeInOut(elem3, elem2);
        } else if (offset > 0.59 && offset < 0.61) {
          if (scrollDirection === "down") fadeInOut(elem3, elem4);
          else if (scrollDirection === "up") fadeInOut(elem4, elem3);
        }
        // console.log(args.currentElements["carousel-div"]);
        // console.log(progress);
        // ouput log example: 0.34
        // elem.target.style.opacity = `${progress} !important`;
        // gsap example : myGsapAnimation.progress(progress);
      }
    });
    // setTimeout(() => {
    //   setLoader(false);
    // }, 5000);
  }, []);
  return (
    <div
      className="millgrove"
      ref={(el) => (container = el)}
      data-scroll-container
    >
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
function handleResize() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  const vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  // We listen to the resize event
  window.addEventListener("resize", () => {
    // We execute the same script as before
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
}

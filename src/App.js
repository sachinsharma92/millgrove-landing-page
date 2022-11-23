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

import LocomotiveScroll from "locomotive-scroll";
import { useIntersection } from "hooks/useIntersection";
import debounce from "utils/debounce";
import HomeCarousel from "views/HomeCarousel/HomeCarousel";

function App(props) {
  const [menu, setMenu] = useState(false);
  const [loader, setLoader] = useState(false);
  const [cookiesPopup, setCookiesPopup] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselViewRef = useRef();
  const debounceTimerId = useRef(null);
  const isCarouselInView = useRef(false);
  const scrollRef = useRef();
  isCarouselInView.current = useIntersection(
    carouselViewRef,
    `0px 0px -${window.innerHeight / 1.1}px 0px`
  );

  const animate = ({ scrollDirection, isCarouselInView }) => {
    if (!isCarouselInView) return;

    if (scrollDirection === "down") {
      setActiveSlide((prev) => {
        if (prev === 3) return 3;
        return prev + 1;
      });
    } else if (scrollDirection === "up") {
      setActiveSlide((prev) => {
        if (prev === 0) return 0;
        return prev - 1;
      });
    } else {
      setActiveSlide((prev) => {
        if (prev === 3) return 3;
        return prev + 1;
      });
    }
  };

  useEffect(() => {
    scrollRef.current = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      getDirection: true,
      smoothMobile: true,
    });

    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);

  useEffect(() => {
    scrollRef.current.on("scroll", (instance) => {
      if (isCarouselInView.current) {
        const elem1 = document.querySelector(".slide1");
        const elem1abs = document.querySelector(".slide1-abs");
        const elem2 = document.querySelector(".slide2");
        const elem3 = document.querySelector(".slide3");
        const elem4 = document.querySelector(".slide4");
        const elem4abs = document.querySelector(".slide4-abs");

        const scroll1 = document.querySelector(".carousel-logic-div-1");
        const scroll2 = document.querySelector(".carousel-logic-div-2");
        const scroll3 = document.querySelector(".carousel-logic-div-3");
        const scroll4 = document.querySelector(".carousel-logic-div-4");

        if (
          document.body.scrollTop > scroll1.getBoundingClientRect().top &&
          document.body.scrollTop < scroll1.getBoundingClientRect().bottom
        ) {
          elem1.classList.remove("invisible");
          if (instance.direction === "down")
            elem1.classList.add("visible-noanim");
          else elem1.classList.add("visible");
        } else {
          elem1.classList.remove("visible");
          elem1.classList.remove("visible-noanim");
          elem1.classList.add("invisible");
        }
        if (
          document.body.scrollTop > scroll2.getBoundingClientRect().top &&
          document.body.scrollTop < scroll2.getBoundingClientRect().bottom
        ) {
          elem2.classList.remove("invisible");
          elem2.classList.add("visible");
        } else {
          elem2.classList.remove("visible");
          elem2.classList.add("invisible");
        }
        if (
          document.body.scrollTop > scroll3.getBoundingClientRect().top &&
          document.body.scrollTop < scroll3.getBoundingClientRect().bottom
        ) {
          elem3.classList.remove("invisible");
          elem3.classList.add("visible");
        } else {
          elem3.classList.remove("visible");
          elem3.classList.add("invisible");
        }
        if (
          document.body.scrollTop > scroll4.getBoundingClientRect().top &&
          document.body.scrollTop < scroll4.getBoundingClientRect().bottom
        ) {
          elem4.classList.remove("invisible");
          if (instance.direction === "up")
            elem4.classList.add("visible-noanim");
          else elem4.classList.add("visible");
        } else {
          elem4.classList.remove("visible");
          elem4.classList.remove("visible-noanim");
          elem4.classList.add("invisible");
        }
      }
    });
  }, [isCarouselInView.current]);

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
      <HomeCarousel carouselViewRef={carouselViewRef} />

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

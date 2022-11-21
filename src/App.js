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
import { useIntersection } from "hooks/useIntersection";
import debounce from "utils/debounce";
import Signup from "views/Signup/Signup";
import SignupSuccess from "views/Signup/SignupSuccess";

function App(props) {
  const [menu, setMenu] = useState(false);
  const [loader, setLoader] = useState(false);
  const [cookiesPopup, setCookiesPopup] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isRegistering, setIsRegistering] = useState(false)
  const [isRegisterationSuccessfull, setIsRegisterationSuccessfull] = useState(false)
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
    });

    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);

  useEffect(() => {
    const fadeInOut = (el1, el2) => {
      el1.style.animation = "fade-out 0.5s ease-in-out forwards";
      el2.style.animation = "fade-in 0.5s ease-in-out forwards 0.2s";
    };

    scrollRef.current.on("scroll", (instance) => {
      if (isCarouselInView.current) {
        const scrollDiv = document.querySelector("#scroll-direction");
        let offset =
          scrollDiv.getBoundingClientRect().bottom / (window.innerHeight * 4); // using 4 since nos if slides is four
        offset = 1 - offset;
        const elem1 = document.querySelector(".slide1");
        const elem2 = document.querySelector(".slide2");
        const elem3 = document.querySelector(".slide3");
        const elem4 = document.querySelector(".slide4");
        if (offset > 0.29 && offset < 0.31) {
          if (instance.direction === "down") fadeInOut(elem1, elem2);
          else if (instance.direction === "up") fadeInOut(elem2, elem1);
        } else if (offset > 0.49 && offset < 0.51) {
          if (instance.direction === "down") fadeInOut(elem2, elem3);
          else if (instance.direction === "up") fadeInOut(elem3, elem2);
        } else if (offset > 0.59 && offset < 0.61) {
          if (instance.direction === "down") fadeInOut(elem3, elem4);
          else if (instance.direction === "up") fadeInOut(elem4, elem3);
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
      {/* {} */}
      <Firstfold openMenu={() => setMenu(true)} setIsRegistering={setIsRegistering} />
      <Secondfold />
      {menu && <Menu closeMenu={() => setMenu(false)} />}
      <ThreeDView />
      <HomeCarousel
        carouselViewRef={carouselViewRef}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
      <Reservation />
      <Footer />
      {isRegistering && <Signup isRegistering={isRegistering} setIsRegistering={setIsRegistering} isRegisterationSuccessfull={isRegisterationSuccessfull} setIsRegisterationSuccessfull={setIsRegisterationSuccessfull} />}
      {isRegisterationSuccessfull && <SignupSuccess />}
    </div>
  );
}

export default App;

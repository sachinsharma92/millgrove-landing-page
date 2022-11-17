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


function App(props) {
  const [menu, setMenu] = useState(false);
  const [loader, setLoader] = useState(false);
  const [cookiesPopup, setCookiesPopup] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselViewRef = useRef();
  const debounceTimerId = useRef(null);
  const isCarouselInView = useRef(false)
  const scrollRef = useRef()
  isCarouselInView.current = useIntersection(carouselViewRef, `0px 0px -${window.innerHeight / 1.1}px 0px`)


  const animate = ({ scrollDirection, isCarouselInView }) => {
    if (!isCarouselInView) return

    if (scrollDirection === "down") {
      setActiveSlide(prev => {
        if (prev === 3) return 3
        return prev + 1
      })
    } else if (scrollDirection === "up") {
      setActiveSlide(prev => {
        if (prev === 0) return 0
        return prev - 1
      })
    } else {
      setActiveSlide(prev => {
        if (prev === 3) return 3
        return prev + 1
      })
    }
  }


  useEffect(() => {
    scrollRef.current = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      getDirection: true
    });

    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);

  useEffect(() => {
    const debouncedAnimation = debounce({ callback: animate, delay: 50, timerRef: debounceTimerId })
    scrollRef.current.on('scroll', (instance) => {
      if (isCarouselInView.current) {
        debouncedAnimation({ scrollDirection: instance.direction, isCarouselInView: isCarouselInView.current })
      }
    })
  }, [isCarouselInView.current])

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
      <HomeCarousel carouselViewRef={carouselViewRef} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;

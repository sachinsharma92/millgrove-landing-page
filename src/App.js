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
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselViewRef = useRef();
  const debounceTimerId = useRef(null);

  function debounce(callback, delay) {
    return () => {
      clearTimeout(debounceTimerId.current);
      debounceTimerId.current = setTimeout(() => {
        callback.call()
      }, delay);
    }
  }
  function animate() {
    console.log('animate')
    setActiveSlide(prev => {
      if (prev === 3) return 0
      return prev + 1
    })
  }
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    const debouncedAnimation = debounce(animate, 50)
    scroll.on('scroll', (instance) => {
      console.log(instance)
      if (true) {
        debouncedAnimation()
        console.log('heyy', carouselViewRef.current, instance.values, carouselViewRef.current === instance.values.includes(carouselViewRef.current))
      }
    })
    scroll.on('call', (value, way, obj) => {
      if (value === "fade") {
        if (obj.inView) {
          obj.el.classList.add('newClass')
        } else {
          obj.el.classList.remove('newClass')
        }
      }

    })
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
      <HomeCarousel carouselViewRef={carouselViewRef} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import "./homecarousel.scss";

function HomeCarousel(props) {
  // useEffect(() => {
  //   const target = document.querySelector(".home-carousel");
  //   function handleIntersection(entries) {
  //     entries.forEach((entry, observer, observe) => {
  //       if (entry.isIntersecting) {
  //         document.addEventListener("scroll", () => {
  //           console.log(entry.target.getBoundingClientRect().top);
  //           const offset = window.innerHeight;
  //           const stickyDiv = document.querySelector(".carousel-div");
  //         });
  //       } else {
  //       }
  //     });
  //   }
  //   const observer = new IntersectionObserver(handleIntersection, {
  //     threshold: 0.25,
  //   });
  //   observer.observe(target);
  // }, []);

  return (
    <div
      id="stick-carousel"
      data-scroll-id="carousel-parent-div"
      className="home-carousel"
      data-scroll
      data-scroll-section
      data-scroll-position="top"
    >
      <div
        className="carousel-div-1"
        data-scroll
        data-scroll-sticky
        data-scroll-target="#stick-carousel"
      ></div>
      <div
        className="carousel-div-2"
        data-scroll
        data-scroll-sticky
        data-scroll-target="#stick-carousel"
      ></div>
      <div
        className="carousel-div-3"
        data-scroll
        data-scroll-sticky
        data-scroll-target="#stick-carousel"
      ></div>
      <div
        className="carousel-div-4"
        data-scroll
        data-scroll-sticky
        data-scroll-target="#stick-carousel"
      ></div>
    </div>
  );
}

export default HomeCarousel;

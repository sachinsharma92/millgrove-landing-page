import React, { useEffect } from "react";

// Styles
import "./secondfold.scss";

// Assets
import SECOND_FOLD_IMAGE from "assets/images/second-fold-img.png";
import { MILLGROVE_LOGO, WELCOME_TO_PLANT } from "utils/assets";

function Secondfold(props) {
  // useEffect(() => {
  //   const target = document.querySelector(".second-fold-img");
  //   function handleIntersection(entries) {
  //     entries.forEach((entry, observer, observe) => {
  //       if (entry.isIntersecting) {
  //         document.addEventListener("scroll", () => {
  //           if (
  //             window.innerHeight / 2 <
  //               entry.target.getBoundingClientRect().top &&
  //             entry.target.getBoundingClientRect().top -
  //               window.innerHeight / 2 <
  //               window.innerHeight / 2
  //           ) {
  //             let offsetVal =
  //               window.innerHeight / entry.target.getBoundingClientRect().top -
  //               1;
  //             target.style.width = `${offsetVal * 80 + 20}%`;
  //             target.style.opacity = `${offsetVal * 0.8 + 0.2}`;
  //             target.style.borderRadius = `${offsetVal * 14 + 2}px`;
  //           } else if (
  //             entry.target.getBoundingClientRect().top > 0 &&
  //             entry.target.getBoundingClientRect().top <= window.innerHeight
  //           ) {
  //             let offsetVal =
  //               (entry.target.getBoundingClientRect().top * 2) /
  //               window.innerHeight;
  //             offsetVal = 1 - offsetVal;
  //             target.style.backgroundPosition = `50% ${offsetVal * -40}px`;
  //           }
  //         });
  //       } else {
  //         document.removeEventListener("scroll", () => {});
  //       }
  //     });
  //   }

  //   const observer = new IntersectionObserver(handleIntersection);
  //   observer.observe(target);
  // }, []);

  return (
    <div className="mg-second-fold" data-scroll-section>
      <div className="mg-second-fold-text">
        <div className="mg-second-fold-heading">
          Made <span>with</span> Care
        </div>
        <div className="mg-second-fold-subheading">
          Our purpose has always been simple. To create somewhere we can be
          proud to call home; somewhere to leave a fitting legacy. We warmly
          invite you to join our small, peaceful community, where neighbours
          become friends. Welcome to Millgrove - a private collection of homes
          nestled in the heart of Gurugram.
        </div>
        <div className="mg-second-fold-footer">Millgrove</div>
      </div>
      {/* <img
        className="second-fold-img"
        src={SECOND_FOLD_IMAGE}
        alt="second-fold-img"
      /> */}
      <div className="second-fold-img"></div>
    </div>
  );
}

export default Secondfold;

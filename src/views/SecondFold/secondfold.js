import React, { useEffect } from "react";

// Styles
import "./secondfold.scss";

// Assets
import SECOND_FOLD_IMAGE from "assets/images/second-fold-img.png";
import {
  MILLGROVE_LOGO,
  SIMPLE_TREE,
  SIMPLE_TREE_RIGHT,
  WELCOME_TO_PLANT,
} from "utils/assets";

function Secondfold(props) {
  useEffect(() => {
    const target = document.querySelector(".second-fold-img");
    function handleIntersection(entries) {
      entries.forEach((entry, observer, observe) => {
        if (entry.isIntersecting) {
          document.addEventListener("scroll", () => {
            if (
              window.innerHeight / 2 <
                entry.target.getBoundingClientRect().top &&
              entry.target.getBoundingClientRect().top -
                window.innerHeight / 2 <
                window.innerHeight / 2
            ) {
              let offsetVal =
                window.innerHeight / entry.target.getBoundingClientRect().top -
                1;
              target.style.width = `${offsetVal * 80 + 20}%`;
              target.style.opacity = `${offsetVal * 0.8 + 0.2}`;
              target.style.borderRadius = `${offsetVal * 14 + 2}px`;
            } else if (
              entry.target.getBoundingClientRect().top > 0 &&
              entry.target.getBoundingClientRect().top <= window.innerHeight
            ) {
              let offsetVal =
                (entry.target.getBoundingClientRect().top * 2) /
                window.innerHeight;
              offsetVal = 1 - offsetVal;
              target.style.backgroundPosition = `50% ${offsetVal * -40}px`;
            }
          });
        } else {
          document.removeEventListener("scroll", () => {});
        }
      });
    }

    const observer = new IntersectionObserver(handleIntersection);
    observer.observe(target);
  }, []);

  return (
    <div className="mg-second-fold">
      <SIMPLE_TREE className={"second-fold-tree"} />
      <SIMPLE_TREE_RIGHT className={"second-fold-tree-2"} />
      <div className="mg-second-fold-text">
        <div className="mg-second-fold-heading">
          Made <span>with</span> Care
        </div>
        <div className="mg-second-fold-subheading">
          Our intent is simple. To create somewhere we can be proud to call
          home; somewhere we can leave a fitting legacy. We are crafting a place
          that goes beyond commonplace notions of luxury, to give you a complete
          sense of belonging. A place where you can nurture relationships and
          make time for the things that matter most. Welcome to Millgrove - a
          private collection of homes nestled in the heart of Gurugram.
        </div>
        <div className="mg-second-fold-footer">
          From your friends at<div>Millgrove</div>
        </div>
      </div>
      {/* <img
        className="second-fold-img"
        src={SECOND_FOLD_IMAGE}
        alt="second-fold-img"
      /> */}
      <div className="second-fold-img"></div>
      <div className="mg-welcome-to">
        <WELCOME_TO_PLANT className={"welcome-to-plant"} />
        <div className="mg-welcome-to-heading">Welcome to</div>
        <MILLGROVE_LOGO className={"mg-welcome-to-logo"} />
        <div className="mg-welcome-to-subheading">
          Millgrove is a limited collection of private residences nestled in the
          heart of New Gurugram. Just 50 1000sq yard plots have been
          thoughtfully arranged within a 23-acre secure gated community.
        </div>
      </div>
    </div>
  );
}

export default Secondfold;

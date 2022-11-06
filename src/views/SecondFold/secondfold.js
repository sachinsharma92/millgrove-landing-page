import React from "react";

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
  return (
    <div className="mg-second-fold">
      <SIMPLE_TREE className={"second-fold-tree"} />
      <SIMPLE_TREE_RIGHT className={"second-fold-tree-2"} />
      <div className="mg-second-fold-text">
        <div className="mg-second-fold-heading">One simple intent</div>
        <div className="mg-second-fold-subheading">
          To create somewhere we would be proud to call home. Somewhere we could
          leave a meaningful legacy. We have crafted a place that goes beyond
          commonplace notions of luxury and gives you an uncomplicated sense of
          belonging. A place where you can make time for the things that matter
          most.
        </div>
        <div className="mg-second-fold-footer">
          From your friends at<div>Millgrove</div>
        </div>
      </div>
      <img
        className="second-fold-img"
        src={SECOND_FOLD_IMAGE}
        alt="second-fold-img"
      />
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

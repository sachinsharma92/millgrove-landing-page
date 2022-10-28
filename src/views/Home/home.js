import React from "react";

// Styles
import "./home.scss";

// Assets
import { MILLGROVE_LOGO } from "utils/assets";
import { MILLGROVE_TREE } from "utils/assets";

function Home(props) {
  return (
    <div className="millgrove-home">
      <span className="millgrove-title">
        <MILLGROVE_LOGO className="millgrove-logo" />
      </span>
      <MILLGROVE_TREE className={"millgrove-tree"} />
      <MILLGROVE_TREE className={"millgrove-tree-2"} />
      <div className="millgrove-home-loading">
        <span>LOADING</span>
      </div>
      <div className="millgrove-home-loading-bar">
        <div className="millgrove-home-loading-bar-fill"></div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Layout.module.scss";

const Layout = ({ children, layoutStyle, footer }) => {
  return (
    <div className={`${styles.wrapper} ${layoutStyle}`}>
      <div className={styles.mainContentWrapper}>
        {/* <Header /> */}
        <div className={styles.childrenWrapper}>{children}</div>
      </div>

      {footer && <footer>
        <div className="left-footer-links">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Cookies policy</Link>
        </div>
        <div className={styles.rightFooter}>
          <a
            className="siteUrl"
            href={"https://haryanarera.gov.in/"}
            target="#blank"
          >
            www.haryanarera.gov.in
          </a>
          <span>HRERA2020A0009</span>
        </div>
      </footer>}
    </div>
  );
};

export default Layout;

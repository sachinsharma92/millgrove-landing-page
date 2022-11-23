import React from "react";
import { MILLGROVE_LOGO } from "../../utils/assets";
import styles from "./Header.module.scss";

const Header = ({ children, defaultElements = true }) => {
  return (
    <header className={styles.header}>
      {defaultElements ? (
        <div className={styles.companyLogo}>
          <MILLGROVE_LOGO />
        </div>
      ) : null}
      {defaultElements ? (
        <div className={styles.reraDetails}>
          <a
            className={styles.siteUrl}
            href={"https://haryanarera.gov.in/"}
            target="#blank"
          >
            www.haryanarera.gov.in
          </a>
          <div>HRERA2020A0009</div>
        </div>
      ) : null}

      {!defaultElements && children}
    </header>
  );
};

export default Header;

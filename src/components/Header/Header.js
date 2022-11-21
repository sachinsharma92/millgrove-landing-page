import React from "react";
import Button from "components/Button";
import { MENU_FOLDS, MILLGROVE_LOGO } from "../../utils/assets";
import styles from "./Header.module.scss";

const customStyles = { color: "#404040", borderColor: "#404040" };

const Header = ({ children, defaultElements = true }) => {
  return (
    <header className={styles.header}>
      {defaultElements ? <a className={styles.siteUrl} href={"https://haryanarera.gov.in/"}>www.haryanarera.gov.in</a> : null}

      {defaultElements ? <MILLGROVE_LOGO /> : null}
      {defaultElements ? <span>HRERA2020A0009</span> : null}

      {!defaultElements && children}
    </header>
  );
};

export default Header;

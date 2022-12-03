import styles from "./Footer.module.scss";
import millGroveFooter from "../../assets/images/millglove-footer.svg"
import millGroveFooterBold from "../../assets/images/millglove-footer-bold.svg"
import millGroveFooterMobile from "../../assets/images/mobile-footer-logo.svg"

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.themeText}>
        <img src={millGroveFooterBold} className={styles.themeTextBold} alt="" />
        <img src={millGroveFooter} alt="" />
      </div>
      <div className={styles.themeTextMobile}>
        <img src={millGroveFooterMobile} alt="" />
      </div>
      <div className={styles.footerLinksWrapper}>
        <div className={styles.footerLinks}>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Cookies policy</Link>
        </div>
        {/* <p>©MILLGROVE, 2022. 28.6063° N, 77.3856° E</p> */}
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
      </div>
    </div>
  );
};

export default Footer;

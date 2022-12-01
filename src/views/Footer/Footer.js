import styles from "./Footer.module.scss";
import millGroveFooter from "../../assets/images/millglove-footer.svg"
import millGroveFooterBold from "../../assets/images/millglove-footer-bold.svg"

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.themeText}>
        <img src={millGroveFooterBold} className={styles.themeTextBold} alt="" />
        <img src={millGroveFooter} alt="" />
      </div>
      <div className={styles.footerLinksWrapper}>
        <p className={styles.spacedLinks}>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Cookies Policy</span>
        </p>
        {/* <p>©MILLGROVE, 2022. 28.6063° N, 77.3856° E</p> */}
        <p className={`${styles.spacedLinks} ${styles.haryanaLinks}`}>
          <a href="https://google.com">www.haryanarera.gov.in</a>
          <a href="https://google.com">HRERA2020A0009</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

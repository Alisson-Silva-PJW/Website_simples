//MODULE CSS DA LAYOUT FOOTER
import styles from "../layout/Footer.module.css";

//REACT ICONS
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li className={styles.footer}>
          <FaFacebookF />
        </li>
        <li className={styles.footer}>
          <FaInstagram />
        </li>
        <li className={styles.footer}>
          <FaWhatsapp />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

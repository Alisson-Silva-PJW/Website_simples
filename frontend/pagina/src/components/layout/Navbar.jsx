//MODULE CSS DA NAVBAR
import styles from "../layout/Navbar.module.css";

//LOGO
import logo from "../../assets/Logo.png";

//REACT ROUTER
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.img_logo}>
        <Link to="/">
          <img src={logo} alt="Toys" />
        </Link>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/Products">Products</Link>
        </li>
        <li className={styles.item}>
          <Link to="/About">About</Link>
        </li>
        <li className={styles.item}>
          <Link to="/Contact">Contact</Link>
        </li>
        <li className={styles.btn}>
          <button>Sign up</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

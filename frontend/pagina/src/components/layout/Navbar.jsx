//MODULE CSS DA NAVBAR
import styles from "../layout/Navbar.module.css";

//REACT ROUTER
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <h1>Navbar</h1>
      </div>
      <Link to="/">Home</Link>
      <Link to="/Products">Products</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
      <div>
        <button>Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;

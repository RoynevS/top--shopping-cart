import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import PropTypes from "prop-types";

const Header = ({ itemsInCart }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
            <span
              className={`${styles.cartAmount} ${
                itemsInCart.length && styles.visible
              }`}
            >
              {itemsInCart.length || 0}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  itemsInCart: PropTypes.array,
};

export default Header;

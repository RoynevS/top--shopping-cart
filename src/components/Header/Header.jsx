import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import PropTypes from "prop-types";

const Header = ({ itemsInCart }) => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <span>{itemsInCart.length || null}</span>
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

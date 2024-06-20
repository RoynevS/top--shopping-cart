import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ text, onClick, type = "button", className = "general" }) => {
  return (
    <button type={type} className={styles[className]} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;

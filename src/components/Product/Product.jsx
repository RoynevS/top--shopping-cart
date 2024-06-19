import PropTypes from "prop-types";
import styles from "./Product.module.css";
import { useState } from "react";

const Product = ({
  id,
  src,
  rating,
  count,
  title,
  description,
  category,
  price,
  onClick,
}) => {
  const [amount, setAmount] = useState(1);
  return (
    <div>
      <div>
        <img
          src={src}
          alt={`Picture of ${title}`}
          className={styles.productImage}
        />
        <div className={styles.ratingWrapper}>
          <p className={styles.productRating}>Rating: {rating}</p>
          <p className={styles.productCount}>{count}</p>
        </div>
      </div>
      <div className={styles.descriptionWrapper}>
        <h2 className={styles.productTitle}>{title}</h2>
        <p className={styles.productDescription}>{description}</p>
        <p className={styles.productCategory}>{category}</p>
      </div>
      <div className={styles.priceWrapper}>
        <p className={styles.productPrice}>{price}</p>
        <button onClick={() => amount > 1 && setAmount(amount - 1)}>-</button>
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <button onClick={() => setAmount(amount + 1)}>+</button>
        <button onClick={() => onClick(id, amount)}>Add to Cart</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string,
  rating: PropTypes.number,
  count: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  onClick: PropTypes.func,
};

export default Product;

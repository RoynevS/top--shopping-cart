import PropTypes from "prop-types";
import styles from "./Product.module.css";
import { useState } from "react";

const Product = ({
  // id,
  // src,
  // rating,
  // count,
  // title,
  // description,
  // category,
  // price,
  product,
  onClick,
}) => {
  const [amount, setAmount] = useState(1);
  return (
    <div>
      <div>
        <img
          src={product.image}
          alt={`Picture of ${product.title}`}
          className={styles.productImage}
        />
        <div className={styles.ratingWrapper}>
          <p className={styles.productRating}>Rating: {product.rating.rate}</p>
          <p className={styles.productCount}>{product.rating.count}</p>
        </div>
      </div>
      <div className={styles.descriptionWrapper}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productCategory}>{product.category}</p>
      </div>
      <div className={styles.priceWrapper}>
        <p className={styles.productPrice}>{product.price}</p>
        <button onClick={() => amount > 1 && setAmount(amount - 1)}>-</button>
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <button onClick={() => setAmount(amount + 1)}>+</button>
        <button onClick={() => onClick(product, amount)}>Add to Cart</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  // id: PropTypes.number,
  // src: PropTypes.string,
  // rating: PropTypes.number,
  // count: PropTypes.number,
  // title: PropTypes.string,
  // description: PropTypes.string,
  // category: PropTypes.string,
  // price: PropTypes.number,
  product: PropTypes.object,
  onClick: PropTypes.func,
};

export default Product;

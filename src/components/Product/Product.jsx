import PropTypes from "prop-types";
import styles from "./Product.module.css";
import { useState } from "react";
import Button from "../Button/Button";

const Product = ({ product, onClick, onDelete, status = "product" }) => {
  // if product is in cart it has an amount so we set the amount to that
  const [amount, setAmount] = useState(product.amount || 1);

  const onChangeInput = (value) => {
    if (typeof value === "number" || typeof value === "string")
      setAmount(parseInt(value));
    if (status === "cart") onClick(product, value, status);
  };

  return (
    <div>
      <div>
        <img
          src={product.image}
          alt={`Picture of ${product.title}`}
          className={styles.productImage}
        />
        {status === "product" && (
          <div className={styles.ratingWrapper}>
            <p className={styles.productRating}>
              Rating: {product.rating.rate}
            </p>
            <p className={styles.productCount}>{product.rating.count}</p>
          </div>
        )}
      </div>
      <div className={styles.descriptionWrapper}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        {status === "product" && (
          <>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productCategory}>{product.category}</p>
          </>
        )}
      </div>
      <div className={styles.priceWrapper}>
        <p className={styles.productPrice}>{product.price}</p>
        {status === "product" ? (
          <Button
            text="-"
            onClick={() => amount > 1 && setAmount(amount - 1)}
          />
        ) : (
          <Button
            text="-"
            onClick={() => {
              amount > 1 && setAmount((prevAmount) => prevAmount - 1);
              onClick(product, amount - 1, status);
            }}
          />
        )}

        <input
          type="number"
          value={amount}
          onChange={(event) => onChangeInput(event.target.value)}
        />
        {status === "product" ? (
          <Button text="+" onClick={() => setAmount(amount + 1)} />
        ) : (
          <Button
            text="+"
            onClick={() => {
              setAmount((prevAmount) => prevAmount + 1);
              onClick(product, amount + 1, status);
            }}
          />
        )}

        {status === "product" ? (
          <Button
            text="Add to Cart"
            onClick={() => onClick(product, amount, status)}
          />
        ) : (
          <Button text="Delete" onClick={() => onDelete(product.id)} />
        )}
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  status: PropTypes.string,
};

export default Product;

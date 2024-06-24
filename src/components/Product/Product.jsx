import PropTypes from "prop-types";
import styles from "./Product.module.css";
import { useContext, useState } from "react";
import Button from "../Button/Button";
import { toTitleCase } from "../../utility/utility";
import { CartContext } from "../../App";

const Product = ({ product, onDelete, status = "product" }) => {
  // if product is in cart it has an amount so we set the amount to that
  const { setItems } = useContext(CartContext);
  const [amount, setAmount] = useState(product.amount || 1);

  const onChangeInput = (value) => {
    if (typeof value === "number" || typeof value === "string")
      setAmount(parseInt(value));
    if (status === "cart") setItems(product, value, status);
  };

  return (
    <div className={styles.productCard}>
      <div>
        <img
          src={product.image}
          alt={`Picture of ${product.title}`}
          className={styles.productImage}
        />
        {status === "product" && (
          <div className={styles.ratingWrapper}>
            <p className={styles.productRating}>
              <span className={styles.rating}>Rating:</span>{" "}
              {product.rating.rate}
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
            <p className={styles.productCategory}>
              {toTitleCase(product.category)}
            </p>
          </>
        )}
      </div>
      <div className={styles.priceWrapper}>
        <p className={styles.productPrice}>{`${(
          Math.round(product.price * 100) / 100
        ).toFixed(2)}$`}</p>
        <div className={styles.amountWrapper}>
          {status === "product" ? (
            <Button
              text="-"
              onClick={() => amount > 1 && setAmount(amount - 1)}
              className="amountBtn"
            />
          ) : (
            <Button
              text="-"
              onClick={() => {
                amount > 1 && setAmount((prevAmount) => prevAmount - 1);
                setItems(product, amount - 1, status);
              }}
              className="amountBtn"
            />
          )}

          <input
            className={styles.amountInput}
            type="number"
            value={amount}
            onChange={(event) => onChangeInput(event.target.value)}
          />
          {status === "product" ? (
            <Button
              text="+"
              onClick={() => setAmount(amount + 1)}
              className="amountBtn"
            />
          ) : (
            <Button
              text="+"
              onClick={() => {
                setAmount((prevAmount) => prevAmount + 1);
                setItems(product, amount + 1, status);
              }}
              className="amountBtn"
            />
          )}
        </div>

        {status === "product" ? (
          <Button
            text="Add to Cart"
            onClick={() => setItems(product, amount, status)}
            className="addToCart"
          />
        ) : (
          <Button
            text="Delete"
            onClick={() => onDelete(product.id)}
            className="deleteBtn"
          />
        )}
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
  onDelete: PropTypes.func,
  status: PropTypes.string,
};

export default Product;

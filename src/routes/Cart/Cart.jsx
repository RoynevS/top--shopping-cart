import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Product from "../../components/Product/Product";
import Button from "../../components/Button/Button";
import styles from "./Cart.module.css";

const Cart = ({ itemsInCart, setItemsInCart, setItems }) => {
  const deleteProduct = (id) => {
    const newProducts = itemsInCart.filter((product) => product.id !== id);
    setItemsInCart([...newProducts]);
  };

  const calculateTotal = () => {
    const total = itemsInCart
      .map((product) => product.price * product.amount)
      .reduce((acc, cur) => acc + cur, 0);
    return (Math.round(total * 100) / 100).toFixed(2);
  };

  return (
    <main className={styles.cartMain}>
      <div className={styles.cartWrapper}>
        {itemsInCart.length === 0 ? (
          <>
            <h2>Cart is empty</h2>
            <Link to="/products">Go to our Products</Link>
          </>
        ) : (
          <>
            {itemsInCart.map((product) => (
              <Product
                key={product.id}
                product={product}
                onClick={setItems}
                onDelete={deleteProduct}
                status="cart"
              />
            ))}
            <div className={styles.buyProductsDiv}>
              <p className={styles.total}>Total: {calculateTotal()}$</p>
              <Button
                text="Buy Products"
                onClick={() => alert(calculateTotal())}
                className="buyProductsBtn"
              />
            </div>
          </>
        )}
      </div>
    </main>
  );
};

Cart.propTypes = {
  itemsInCart: PropTypes.array,
  setItemsInCart: PropTypes.func,
  setItems: PropTypes.func,
};

export default Cart;

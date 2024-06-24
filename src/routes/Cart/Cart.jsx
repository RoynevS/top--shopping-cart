import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Product from "../../components/Product/Product";
import Button from "../../components/Button/Button";
import styles from "./Cart.module.css";
import { calculateTotal } from "../../utility/utility";
import { useContext } from "react";
import { CartContext } from "../../App";

const Cart = ({ setItemsInCart }) => {
  const { itemsInCart } = useContext(CartContext);
  const deleteProduct = (id) => {
    const newProducts = itemsInCart.filter((product) => product.id !== id);
    setItemsInCart([...newProducts]);
  };

  const total = calculateTotal(itemsInCart);

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
                onDelete={deleteProduct}
                status="cart"
              />
            ))}
            <div className={styles.buyProductsDiv}>
              <p className={styles.total}>Total: {total}$</p>
              <Button
                text="Buy Products"
                onClick={() => alert(total)}
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
  setItemsInCart: PropTypes.func,
};

export default Cart;

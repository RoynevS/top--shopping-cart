import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Product from "../../components/Product/Product";
import Button from "../../components/Button/Button";

const Cart = ({ itemsInCart, setItemsInCart, setItems }) => {
  const deleteProduct = (id) => {
    const newProducts = itemsInCart.filter((product) => product.id !== id);
    setItemsInCart([...newProducts]);
  };

  const calculateTotal = () => {
    return itemsInCart
      .map((product) => product.price * product.amount)
      .reduce((acc, cur) => acc + cur, 0);
  };

  return (
    <main>
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
          <p>{calculateTotal()}</p>
          <Button text="Buy Products" onClick={() => alert(calculateTotal())} />
        </>
      )}
    </main>
  );
};

Cart.propTypes = {
  itemsInCart: PropTypes.array,
  setItemsInCart: PropTypes.func,
  setItems: PropTypes.func,
};

export default Cart;

import { useLocation } from "react-router-dom";
import { createContext, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./routes/HomePage/HomePage";
import Products from "./routes/Products/Products";
import Cart from "./routes/Cart/Cart";
import ErrorPage from "./routes/ErrorPage/ErrorPage";

const CartContext = createContext({
  itemsInCart: [],
  setItems: () => {},
});

function App() {
  const locationObj = useLocation();
  const location = locationObj.pathname;
  const [itemsInCart, setItemsInCart] = useState([]);

  const setItems = (product, amount, status) => {
    if (itemsInCart.find((element) => element.id === product.id)) {
      setItemsInCart(
        itemsInCart.map((element) => {
          if (element.id === product.id) {
            return {
              ...product,
              amount: status === "cart" ? amount : element.amount + amount,
            };
          }
          return element;
        })
      );
      return;
    }
    setItemsInCart([...itemsInCart, { ...product, amount }]);
  };

  return (
    <>
      <CartContext.Provider value={{ itemsInCart, setItems }}>
        <Header />
        {location === "/" ? (
          <HomePage />
        ) : location === "/products" ? (
          <Products />
        ) : location === "/cart" ? (
          <Cart
            itemsInCart={itemsInCart}
            setItemsInCart={setItemsInCart}
            setItems={setItems}
          />
        ) : (
          <ErrorPage />
        )}
      </CartContext.Provider>
      <Footer />
    </>
  );
}

export default App;
export { CartContext };

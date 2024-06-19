import { useParams } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./routes/HomePage/HomePage";
import Products from "./routes/Products/Products";
import Cart from "./routes/Cart/Cart";

function App() {
  const { site } = useParams();
  const [itemsInCart, setItemsInCart] = useState([]);

  const setItems = (id, amount) => {
    if (itemsInCart.find((product) => product.id === id)) {
      setItemsInCart(
        itemsInCart.map((product) => {
          if (product.id === id) {
            return {
              id: product.id,
              amount: product.amount + amount,
            };
          }
          return product;
        })
      );
      return;
    }
    setItemsInCart([...itemsInCart, { id, amount }]);
    console.log(itemsInCart);
  };

  return (
    <>
      <Header itemsInCart={itemsInCart} />
      {site === "products" ? (
        <Products setItems={setItems} />
      ) : site === "cart" ? (
        <Cart itemsInCart={itemsInCart} setItems={setItems} />
      ) : (
        <HomePage />
      )}
      <Footer />
    </>
  );
}

export default App;

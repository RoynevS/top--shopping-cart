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

  const setItems = (product, amount) => {
    if (itemsInCart.find((element) => element.id === product.id)) {
      setItemsInCart(
        itemsInCart.map((element) => {
          if (element.id === product.id) {
            return {
              ...product,
              amount: element.amount + amount,
            };
          }
          return element;
        })
      );
      return;
    }
    setItemsInCart([...itemsInCart, { ...product, amount }]);
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

import { useParams, useState } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./routes/HomePage/HomePage";
import Products from "./routes/Products/Products";
import Cart from "./routes/Cart/Cart";

function App() {
  const { site } = useParams();
  const [itemsInCart, setItemsInCart] = useState([]);

  return (
    <>
      <Header itemsInCart={itemsInCart} />
      {site === "products" ? (
        <Products setItems={setItemsInCart} />
      ) : site === "cart" ? (
        <Cart itemsInCart={itemsInCart} setItems={setItemsInCart} />
      ) : (
        <HomePage />
      )}
      <Footer />
    </>
  );
}

export default App;

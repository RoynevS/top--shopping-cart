import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Product from "../../components/Product/Product";

const Products = ({ setItems }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const products = await data.json();

      setProducts(products);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <main>
      {products.map((product) => (
        <Product key={product.id} product={product} onClick={setItems} />
      ))}
    </main>
  );
};

Products.propTypes = {
  setItems: PropTypes.func,
};

export default Products;

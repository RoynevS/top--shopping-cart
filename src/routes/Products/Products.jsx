import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Product from "../../components/Product/Product";

const Products = ({ setItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const products = await data.json();
      console.log(products);

      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <main>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          // id={product.id}
          // src={product.image}
          // rating={product.rating.rate}
          // count={product.rating.count}
          // title={product.title}
          // description={product.description}
          // category={product.category}
          // price={product.price}
          onClick={setItems}
        />
      ))}
    </main>
  );
};

Products.propTypes = {
  setItems: PropTypes.func,
};

export default Products;

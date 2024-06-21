import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Product from "../../components/Product/Product";
import Filter from "../../components/Filter/Filter";
import styles from "./Products.module.css";

const Products = ({ setItems }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState({
    title: "",
    category: "all",
    price: 1000,
  });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((products) => setProducts(products));
    fetch("https://fakestoreapi.com/products/categories")
      .then((data) => data.json())
      .then((categories) => setCategories(categories));
  }, []);

  const filterProducts = (filterObj) => {
    setFilter(filterObj);
  };

  const displayFilteredProducts = products
    .filter((product) => product.title.toLowerCase().includes(filter.title))
    .filter((product) => {
      if (filter.category === "all") return true;
      return product.category === filter.category;
    })
    .filter((product) => product.price <= filter.price);

  if (products.length === 0 || categories.length === 0)
    return <h2>Loading...</h2>;

  return (
    <main className={styles.mainContainer}>
      <Filter
        filterProducts={filterProducts}
        categories={categories}
        filter={filter}
      />
      <section className={styles.productContainer}>
        {displayFilteredProducts.length === 0 ? (
          <h2>No matches found</h2>
        ) : (
          displayFilteredProducts.map((product) => (
            <Product key={product.id} product={product} onClick={setItems} />
          ))
        )}
      </section>
    </main>
  );
};

Products.propTypes = {
  setItems: PropTypes.func,
};

export default Products;

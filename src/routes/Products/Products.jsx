import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Product from "../../components/Product/Product";
import Filter from "../../components/Filter/Filter";

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

  const renderFilteredProducts = () => {
    const displayedProducts = products
      .filter((product) => product.title.toLowerCase().includes(filter.title))
      .filter((product) => {
        if (filter.category === "all") return true;
        return product.category === filter.category;
      })
      .filter((product) => product.price <= filter.price);

    return displayedProducts;
  };

  if (products.length === 0 || categories.length === 0)
    return <h2>Loading...</h2>;

  return (
    <>
      <Filter
        filterProducts={filterProducts}
        categories={categories}
        filter={filter}
      />
      <main>
        {renderFilteredProducts().map((product) => (
          <Product key={product.id} product={product} onClick={setItems} />
        ))}
      </main>
    </>
  );
};

Products.propTypes = {
  setItems: PropTypes.func,
};

export default Products;

import PropTypes from "prop-types";
import { useState } from "react";

const Filter = ({ filterProducts, categories, filter }) => {
  const [search, setSearch] = useState("");
  const [sliderValue, setSliderValue] = useState(1000);

  const changeSearchHandler = (event) => {
    setSearch(event.target.value);
    filterProducts({ ...filter, title: event.target.value });
  };

  const changeCategoryHandler = (event) => {
    filterProducts({ ...filter, category: event.target.value });
  };

  const changePriceHandler = (event) => {
    setSliderValue(parseInt(event.target.value));
    filterProducts({ ...filter, price: parseInt(event.target.value) });
  };

  return (
    <aside>
      <form>
        <div>
          <label htmlFor="search">Search</label>
          <input
            type="search"
            name="search"
            id="search"
            value={search}
            onChange={changeSearchHandler}
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            defaultValue="all"
            onChange={changeCategoryHandler}
          >
            <option value="all">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="price-slider">Price</label>
          <input
            type="range"
            name="price-slider"
            id="price-slider"
            value={sliderValue}
            onChange={changePriceHandler}
            min={0}
            max={1000}
            step={10}
          />
          <output>{sliderValue}</output>
        </div>
      </form>
    </aside>
  );
};

Filter.propTypes = {
  filterProducts: PropTypes.func,
  categories: PropTypes.array,
  filter: PropTypes.object,
};

export default Filter;

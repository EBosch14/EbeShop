import { useId, useState } from "react";
import { getProducts } from "../services/getProducts";

export default function Filters() {
  const [minPrice, setMinPrice] = useState(0);
  const PRICE_ID = useId();
  const CATEGORY_ID = useId();

  const { products } = getProducts();
  const categories = [...new Set(products.map((product) => product.category))];

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
  };

  return (
    <section className="flex flex-row justify-between items-center w-full px-12 text-xs font-bold">
      <div className="text-yellow-50 flex gap-2 items-center">
        <label htmlFor={PRICE_ID}>Min Price: </label>
        <input
          onChange={handleChangeMinPrice}
          className="cursor-pointer w-36"
          type="range"
          name="setPrice"
          id={PRICE_ID}
          min="0"
          max="7000"
        />
        <span>$ {minPrice}</span>
      </div>
      <div className="flex gap-2 items-center">
        <label className="text-yellow-50" htmlFor={CATEGORY_ID}>
          Category:{" "}
        </label>
        <select className="px-2 py-1 cursor-pointer" id={CATEGORY_ID}>
          <option value="all">All</option>
          {categories.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
    </section>
  );
}

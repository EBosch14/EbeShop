import ProductsList from "./assets/components/ProductsList";
import { useState } from "react";
import { getProducts } from "./assets/services/getProducts";
import Header from "./assets/components/Header";

export default function App() {
  const { products } = getProducts();
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || filters.category === product.category)
      );
    });
  };

  const filteredProducts = filterProducts(products); 

  return (
    <>
      <Header/>
      <ProductsList products={filteredProducts} />
    </>
  );
}

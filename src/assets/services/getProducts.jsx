import { useState, useEffect } from "react";

export const getProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProds = async () => {
      try {
        const response = await fetch("/Products.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProds();
  }, []);

  return { products };
};

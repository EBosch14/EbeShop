import { useState, useEffect } from "react";

export const getProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const resp = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await resp.json();
        setProducts(data);
      } catch (error) {
        return error;
      }
    };
    getProducts();
  }, []);

  return { products };
};

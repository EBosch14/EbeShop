import { useEffect } from "react";
import { getProducts } from "../services/getProducts";
import ProductCard from "./ProductCard";

export default function () {
  const { products } = getProducts();

  useEffect(() =>{
    products.slice(0,1).forEach(e => console.log(e.category))
  }, [products])

  if (!products) {
    return <div>Loading Page...</div>;
  } else {
    return (
      <div className="w-full flex justify-center items-center bg-slate-700">
        <main className="m-8 grid grid-cols-[repeat(auto-fit,_minmax(250px,1fr))] gap-x-8 gap-y-6">
          {products.slice(0,10).map((prod) => {
            return (
              <ProductCard
                id={prod.id}
                images={prod.images}
                price={prod.price}
                title={prod.title}
              ></ProductCard>
            );
          })}
        </main>
      </div>
    );
  }
}

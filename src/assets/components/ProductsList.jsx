import { getProducts } from "../services/getProducts";
import ProductCard from "./ProductCard";

export default function () {
  const { products } = getProducts();

  if (!products) {
    return <div>Loading Page...</div>;
  } else {
    return (
      <main className="container max-w-full mx-auto my-14 flex flex-row items-center justify-center flex-wrap gap-x-16 gap-y-12">
        {products.map((prod) => {
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
    );
  }
}

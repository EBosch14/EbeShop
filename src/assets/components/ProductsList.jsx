import { getProducts } from "../services/getProducts";
import ProductCard from "./ProductCard";

export default function () {
  const { products } = getProducts();

  if (!products) {
    return <div>Loading Page...</div>;
  } else {
    return (
      <main>
        {products.map((prod) => {
          return (
            <ProductCard
              id={prod.id}
              images={prod.images}
              category={prod.category}
              description={prod.description}
              price={prod.price}
              title={prod.title}
            ></ProductCard>
          );
        })}
        ;
      </main>
    );
  }
}

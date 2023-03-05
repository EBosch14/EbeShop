import ProductCard from "./ProductCard";
import useFilters from "../hooks/useFilters";
import { getProducts } from "../services/getProducts";

export default function () {
  const { products } = getProducts();
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <div className="w-full flex justify-center items-cente">
      <main className="m-8 grid grid-cols-[repeat(auto-fit,_minmax(250px,1fr))] gap-x-8 gap-y-6">
        {filteredProducts.map((prod) => {
          return (
            <ProductCard
              id={prod.id}
              image={prod.image}
              price={prod.price}
              title={prod.title}
              product={prod}
            ></ProductCard>
          );
        })}
      </main>
    </div>
  );
}

import ProductCard from "./ProductCard";

export default function ({products}) {

  if (!products) {
    return <div>Loading Page...</div>;
  } else {
    return (
      <div className="w-full flex justify-center items-cente">
        <main className="m-8 grid grid-cols-[repeat(auto-fit,_minmax(250px,1fr))] gap-x-8 gap-y-6">
          {products.map((prod) => {
            return (
              <ProductCard
                id={prod.id}
                image={prod.image}
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

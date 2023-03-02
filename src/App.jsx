import FilterCategory from "./assets/components/FilterCategory";
import ProductsList from "./assets/components/ProductsList";

export default function App() {
  return (
    <>
      <header>
        <h1 className="container text-5xl mx-auto mt-8">EbeShop</h1>
        <FilterCategory></FilterCategory>
      </header>
      <ProductsList></ProductsList>
    </>
  );
}

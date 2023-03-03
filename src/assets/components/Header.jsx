import Filters from "./Filters";

export default function () {
  return (
    <header className="flex flex-col items-center gap-8 w-full">
      <h1 className="text-5xl text-yellow-50">EbeShop</h1>
      <Filters />
    </header>
  );
}

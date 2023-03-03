import { useState, createContext } from "react";

//1. Create Context --- To comsume
export const FiltersContext = createContext();

//2. Create Provider
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

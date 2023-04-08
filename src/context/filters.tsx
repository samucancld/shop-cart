import React from "react";
import { useState } from "react";
import { CAT, Filter } from "../components/Filters";

export type FiltersContextType = [Filter, React.Dispatch<React.SetStateAction<Filter>>];
const defaultFilters: FiltersContextType = [{} as Filter, () => {}];
export const FiltersContext = React.createContext<FiltersContextType>(defaultFilters);
export const FiltersProvider = ({ children }: { children: JSX.Element[] }) => {
  const [filters, setFilters] = useState({
      category: CAT.ALL,
      minPrice: 0,
      maxPrice: 20500,
    }
  )

  return <FiltersContext.Provider value={[filters, setFilters]}>
    {children}
  </FiltersContext.Provider>
}
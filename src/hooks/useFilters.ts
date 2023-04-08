import { useContext, useEffect, useState } from "react"
import { FiltersContext } from "../context/filters"
import { Product } from "../interfaces/product.model"
import { getProducts } from "../mocks/api-client-service"

export function useFilters() {
  const [filters, setFilters] = useContext(FiltersContext)
  const [products, setFilteredProducts] = useState<Product[]>([])
  useEffect(() => { getProducts({ filters, count: 1000 }).subscribe(setFilteredProducts) }, [filters])
  return {filters, setFilters, products}
}
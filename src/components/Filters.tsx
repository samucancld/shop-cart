import { ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction, useId, useState } from 'react'
import { useFilters } from '../hooks/useFilters';
import './Filters.css'

export interface Filter {
  category: CAT;
  minPrice: number;
  maxPrice: number;
}

export enum CAT {
  ALL = 'all',
  DECO = 'home-decoration',
  SMARTPHONES = 'smartphones',
  LAPTOPS = 'laptops',
}

export function Filters() {
  const {filters, setFilters} = useFilters()

  const minPriceId = useId();
  const maxPriceId = useId();
  const categoryId = useId();

  const handleMinPriceChange = (event: ChangeEvent<HTMLInputElement>) => setFilters({...filters, minPrice: Number(event.target.value)})
  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => setFilters({...filters, category: event.target.value as CAT})
  const handleMaxPriceChange = (event: ChangeEvent<HTMLInputElement>) => setFilters({...filters, maxPrice: Number(event.target.value)})

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceId}>Min price ${filters.minPrice}</label>
        <input onChange={handleMinPriceChange} type="range" id={minPriceId} min="0" max="1000"/>
      </div>
      <br />
      <div>
        <label htmlFor={maxPriceId}>Max price ${filters.maxPrice}</label>
        <input onChange={handleMaxPriceChange} type="range" id={maxPriceId} min="0" max="10000"/>
      </div>
      <div>
        <label htmlFor={categoryId}>Category</label>
        <select onChange={handleCategoryChange} id={categoryId}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
          <option value="home-decoration">Deco</option>
        </select>
      </div>
    </section>
  )
}
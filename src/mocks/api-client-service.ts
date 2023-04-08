import { map, Observable, of } from 'rxjs';
import { CAT, Filter } from '../components/Filters';
import { Product } from '../interfaces/product.model';
import productsJson from './products.json' assert {type: 'json'};

export function getProducts({ count = 10, filters = { category: CAT.ALL, minPrice: 0, maxPrice: Number.MAX_SAFE_INTEGER } }: { filters?: Filter, count: number}): Observable<Product[]> {
  return of(productsJson.products).pipe(
    map(products => products.filter(product => {
      if (filters.category !== 'all' && product.category !== filters.category) return false;
      if (product.price < filters.minPrice) return false;
      if (product.price > filters.maxPrice) return false;
      return true;
    })),
    map(products => products.slice(0, count)),
  );
}

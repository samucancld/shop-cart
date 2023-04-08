import './Footer.css'
import { Filter } from "./Filters";
import { useFilters } from '../hooks/useFilters';
import { useContext } from 'react';
import { CartContext } from '../context/cart';

export function Footer() {
  const {filters} = useFilters();
  const [cart] = useContext(CartContext)
  return (<>
      {<footer className="footer">
      {
        JSON.stringify(filters, null, 2)
      }
      </footer>}
  </>
  )
}

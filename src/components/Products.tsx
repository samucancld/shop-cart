import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useFilters } from '../hooks/useFilters'
import { useContext } from 'react'
import { CartContext } from '../context/cart'
import { Product } from '../interfaces/product.model'

export function Products() {
  const { products } = useFilters()
  const [cart, addToCart, __, removeFromCart] = useContext(CartContext)

  const checkIsProductInCart = (product: Product) => cart.some(
    item => item.id === product.id
  )

  return (
    <main className="products">
      <ul>
        {
          products &&
          products.map(product => {
            const isProductInCard = checkIsProductInCart(product);
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <div className={isProductInCard ? 'cartButtonsContainer': ''}>
                  <button style={{
                    backgroundColor: '#09f'
                  }} onClick={() => addToCart(product)}>
                    <AddToCartIcon/>
                  </button>
                  {isProductInCard &&
                    <button style={{
                      backgroundColor: 'red'
                    }} onClick={() => removeFromCart(product)}>
                      <RemoveFromCartIcon/>
                    </button>
                  }
                </div>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}
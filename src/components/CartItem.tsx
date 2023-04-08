import { useContext } from "react";
import { CartContext } from "../context/cart";
import { CartItem_ } from "../interfaces/cart-item.model";

export function CartItem({cartItem}: {cartItem: CartItem_}) {
  const [_, addToCart, ___, removeFromCart] = useContext(CartContext)
  return (
    <li>
      <img src={cartItem.thumbnail} alt={cartItem.title} />
      <div>
        <strong>{cartItem.title}</strong> - ${cartItem.price}
      </div>

      <footer>
        <small>
          Qty: {cartItem.quantity}
        </small>
        <button onClick={() => removeFromCart(cartItem)}>-</button>
        <button onClick={() => addToCart(cartItem)}>+</button>
      </footer>
    </li>
  )
}
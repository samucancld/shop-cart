import { useContext, useId } from "react";
import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from "./Icons";
import './Cart.css'
import { CartItem } from "./CartItem";
import { useCart } from "../hooks/useCart";
import { CartContext } from "../context/cart";

export function Cart() {
  const cartId = useId()
  const [cart, _, clearCart] = useContext(CartContext);

  return (<>
    <label className="cart-button" htmlFor={cartId}><CartIcon/></label>
    <input id={cartId} type="checkbox" hidden/>

    <aside className="cart">
      <ul>
        {cart.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem}/>)}
      </ul>
      <button onClick={clearCart}>
      <ClearCartIcon />
    </button>
    </aside>
  </>)
}
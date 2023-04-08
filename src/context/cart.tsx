import React, { useReducer } from "react";
import { useState } from "react";
import { CartItem_ } from "../interfaces/cart-item.model";
import { Product } from "../interfaces/product.model";

interface CartState {
  cart: CartItem_[];
}

const initialCartState = {
  cart: [],
}

const cartReducer = (state: CartState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TO_CART' : {
      const { id } = payload
      const CartItemInCartIndex = state.cart.findIndex(item => item.id === id)
      if (CartItemInCartIndex >= 0) {
        const newCart = structuredClone(state.cart);
        newCart[CartItemInCartIndex].quantity += 1;
        console.log(newCart);
        return {cart: newCart};
      } else return {cart: [...state.cart, {...payload, quantity: 1}]}
    }
    case 'REMOVE_FROM_CART' : {
      const { id } = payload
      const CartItemInCartIndex = state.cart.findIndex(item => item.id === id)
      if (CartItemInCartIndex >= 0 && state.cart[CartItemInCartIndex].quantity > 1) {
        const newCart = structuredClone(state.cart);
        newCart[CartItemInCartIndex].quantity -= 1;
        return {cart: newCart};
      } else return {cart: [...state.cart.filter(item => item.id !== id)]}
    }
    case 'CLEAR_CART' : {
      return initialCartState;
    }
  }
}

export type CartContextType = [
  CartItem_[],
  (product: Product) => void,
  () => void,
  (product: Product) => void,
];

const defaultCart: CartContextType = [[], () => { }, () => { }, () => { }];
export const CartContext = React.createContext<CartContextType>(defaultCart);

export const CartProvider = ({ children }: { children: JSX.Element[] }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState)

  const addToCart = (product: Product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    })
  }

  const removeFromCart = (product: Product) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    })
  }

  const clearCart = () => dispatch({type: 'CLEAR_CART'})

  return <CartContext.Provider value={[state.cart, addToCart, clearCart, removeFromCart]}>
    {children}
  </CartContext.Provider>
}
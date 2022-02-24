import React, { createContext } from 'react'


export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const name = 'Sebitas'

  return (
    <CartContext.Provider value={{name}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
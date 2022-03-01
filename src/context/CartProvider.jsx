import React, { createContext, useState } from 'react'


export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [arrayProducts, setArrayProducts] = useState([])


  return (
    <CartContext.Provider value={{arrayProducts, setArrayProducts}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
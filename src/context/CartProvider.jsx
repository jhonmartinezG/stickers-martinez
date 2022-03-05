import React, { createContext, useState } from 'react'


export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [arrayProducts, setArrayProducts] = useState([])
    const [cuantity, setCuantity] = useState(0)
    const isInCart = (id) => {
      return arrayProducts.some(item => item.id === id)
    }


  return (
    <CartContext.Provider value={{arrayProducts, setArrayProducts, cuantity, setCuantity, isInCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
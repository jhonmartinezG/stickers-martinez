import React, { createContext, useState } from 'react'


export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [arrayProducts, setArrayProducts] = useState([])
    const [cuantity, setCuantity] = useState(0)
    const isInCart = (id) => {
      return arrayProducts.some(item => item.id === id)
    }
    const [total, setTotal] = useState(0)


  return (
    <CartContext.Provider value={{arrayProducts, setArrayProducts, cuantity, setCuantity, isInCart, total, setTotal}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
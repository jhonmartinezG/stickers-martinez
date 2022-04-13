import React, { createContext, useState } from 'react'


export const CartContext = createContext()

const CartProvider = ({ children }) => {

    let  [arrayProducts, setArrayProducts] = useState([])
    let [cuantity, setCuantity] = useState(0)
    const isInCart = (id) => {
      return arrayProducts.some(item => item.id === id)
    }
    let [total, setTotal] = useState(0)
    const [info, setInfo] = useState(null)


  return (
    <CartContext.Provider value={{arrayProducts, setArrayProducts, cuantity, setCuantity, isInCart, total, setTotal, info, setInfo}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
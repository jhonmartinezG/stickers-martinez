import React, { useContext } from 'react'
import CartProvider, { CartContext } from "../../context/CartProvider";


const Cart = () => {
  const { arrayProducts, setArrayProducts } = useContext(CartContext)

  const clear = () => {
    setArrayProducts([])
  }

  const deleteItem = (id) => {
    setArrayProducts(arrayProducts.filter(item => item.id !== id))
  }


  return (
  <div>
    <div className='flex justify-end'>
      <button type="button" class="btn btn-danger" onClick={() => clear()}>Vaciar carrito</button>
    </div>
    <div className='flex flex-wrap'>
    {
      arrayProducts.length <= 0 ?  <h1>Carrito vacio, vuelve a la tienda y agrega productos</h1> : arrayProducts.map(item => (
        <div class="card w-72 mx-3" key={item.id} >
          <img src={item.image} class="card-img-top" alt="..." style={{ width: '18rem', height: '18rem' }}/>
          <div class="card-body">
            <h4 class="card-text">{item.title}</h4>
            <h5>{`$ ${item.price}`} </h5>
            <h5>{`cantidad: ${item.cuantity}`} </h5>
          </div>
          <button type="button" class="btn btn-danger" onClick={() => deleteItem(item.id)}>Eliminar</button>
        </div>
      ))
    } 
    </div>
  </div>
  
  )
}

export default Cart
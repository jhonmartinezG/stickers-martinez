import React from 'react'

const CartDetail = ({ total, shipping }) => {
  return (
    <div className='w-80 justify-center items-center bg-gray-light p-10 '>
        <h3>Mi carrito</h3>
        <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>{`$ ${total}`}</p>
        </div>
        <div className='flex justify-between'>
            <p>Envio</p>
            <p>{`$ ${shipping}`}</p>
        </div>
        <div className='flex justify-between'>
            <h6>Total</h6>
            <p>{`$ ${total + shipping  }`}</p>
        </div>
        <button type="button" class="btn btn-success">Realizar compra</button>
    </div>
  )
}

export default CartDetail
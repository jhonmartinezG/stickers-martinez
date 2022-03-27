import React from 'react'
import { Link } from 'react-router-dom'


const CartDetail = ({ total, shipping }) => {
  return (
    <div className='w-80 justify-center items-center bg-gray-light p-10 '>
        <h3>Mi carrito</h3>
        <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>{`$ ${new Intl.NumberFormat().format(total)}`}</p>
        </div>
        <div className='flex justify-between'>
            <p>Envio</p>
            <p>{`$ ${new Intl.NumberFormat().format(shipping)}`}</p>
        </div>
        <div className='flex justify-between'>
            <h6>Total</h6>
            <p>{`$ ${new Intl.NumberFormat().format(total + shipping)  }`}</p>
        </div>
        <Link to={'/cart/checkout'}><button type="button" className="btn btn-success">Realizar compra</button></Link> 
    </div>
  )
}

export default CartDetail
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartProvider";
import CartDetail from './components/CartDetail';
import './Cart.css'




const Cart = () => {
  const { arrayProducts, setArrayProducts, cuantity, setCuantity, total, setTotal } = useContext(CartContext)

  const clear = () => {
    setArrayProducts([])
    setCuantity(0)
  }

  const deleteItem = (id) => {
    setArrayProducts(arrayProducts.filter(item => item.id !== id))
    
    const product = arrayProducts.filter(item => item.id === id)

    setCuantity(cuantity - product[0].cuantity)
    setTotal(total - (product[0].price * product[0].cuantity))
  }


  return (
  <div>
    <div className='flex flex-wrap'>
    {
      arrayProducts.length <= 0 ? <div className='flex flex-col justify-center items-center w-full'>
        <h1 className='my-10'>Carrito vacio, vuelve a la tienda y agrega productos</h1>
        <Link to={'/'} >
            <button type="button" className="btn btn-info my-10">Vuelve al inicio y agrega productos</button>  
        </Link>
      </div>
        : 
        

        <div>
          <div className='w-fit '>
              <CartDetail total={total} shipping={20000} />
          </div>
          <div className='flex '>
            <div>
              <button type="button" className="btn btn-danger m-4" onClick={() => clear()}>Vaciar carrito</button>
              <div className='container-cart flex  items-center wrap'>
                {arrayProducts.map(item => (
                  <div className='flex ' key={item.id}>
                    <div className="card w-72 m-3"  >
                      <img src={item.image} className="card-img-top" alt="..." style={{ width: '18rem', height: '18rem' }}/>
                        <div className="card-body">
                          <h4 className="card-text">{item.title}</h4>
                          <h5>{`$ ${item.price}`} </h5>
                          <h5>{`cantidad: ${item.cuantity}`} </h5>
                        </div>
                        <button type="button" className="btn btn-danger" onClick={() => deleteItem(item.id)}>Eliminar</button>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
              
          </div>
        </div>
      } 
    </div>
  </div>
  
  )
}

export default Cart
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartProvider";



const Cart = () => {
  const { arrayProducts, setArrayProducts, cuantity, setCuantity } = useContext(CartContext)

  const clear = () => {
    setArrayProducts([])
  }

  const deleteItem = (id) => {
    setArrayProducts(arrayProducts.filter(item => item.id !== id))
    
    const product = arrayProducts.filter(item => item.id == id)
    console.log('producto', product[0].cuantity)

    setCuantity(cuantity - product[0].cuantity)
  }

  arrayProducts.filter(item => console.log(item.id))
  

  console.log(arrayProducts)

  return (
  <div>
    
    <div className='flex flex-wrap'>
    {
      arrayProducts.length <= 0 ? <div>
        <h1>Carrito vacio, vuelve a la tienda y agrega productos</h1>
        <Link to={'/'} >
            <button type="button" class="btn btn-info">Vuelve al inicio y agrega productos</button>  
        </Link>
      </div>
        : 
        <div>
          <button type="button" className="btn btn-danger m-4" onClick={() => clear()}>Vaciar carrito</button>
          <div className='flex'>
            {arrayProducts.map(item => (
              <div className='flex '>
                <div className="card w-72 mx-3" key={item.id} >
                  <img src={item.image} className="card-img-top" alt="..." style={{ width: '18rem', height: '18rem' }}/>
                    <div className="card-body">
                      <h4 className="card-text">{item.title}</h4>
                      <h5>{`$ ${item.price}`} </h5>
                      <h5>{`cantidad: ${item.cuantity}`} </h5>
                    </div>
                  <button type="button" class="btn btn-danger" onClick={() => deleteItem(item.id)}>Eliminar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      } 
    </div>
  </div>
  
  )
}

export default Cart
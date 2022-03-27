import React from 'react';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { CartContext } from '../../context/CartProvider';
import empty from '../../assets/empty.png'



const Checkout = () => {

  const { arrayProducts, cuantity, total } = useContext(CartContext)

  console.log('productos', arrayProducts, 'cantidad', cuantity, 'total', total)

  const totalCost = new Intl.NumberFormat().format(total + 20000);

  const finishPurchase = () => {
    Swal.fire(
      'Compra realizada',
      `Tu compra ha sido registrada y guardada con exito`,
      'success'
    )
  }


  return (

    arrayProducts.length >= 1 ? 
    <div className=' flex justify-center item-center h-screen'>
      <form className='flex  item-center flex-col' >
        <div className='flex justify-center items-center flex-col my-10'>
          <h1>Ingresa los datos de tu domiclio</h1>
          <h2>Y finaliza tu compra</h2>
        </div>

        <div className='w-100 flex flex-col border border-secondary p-10 mb-10'>
          <h4>Datos de la compra</h4>
          <h5>Items</h5>
          <ul>
            {arrayProducts.map(item => <li key={item.id}>{item.title}</li>)}
          </ul>
          <h5>Cantidad total de items</h5>
          <p>{cuantity} </p>
          <h5>Precio final</h5>
          <p>{totalCost} </p>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Correo Electronico</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Correo Electronico" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Nombre Completo</label>
            <input type="text" className="form-control" id="inputName" placeholder="Nombre Completo" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Direccion</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="Direccion" />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Detalles de la direccion</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartamento, Urbanizacion o piso" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">Ciudad</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>  
          <div className="form-group col-md-6">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
        </div>
        <button type="submit" className="btn btn-success" onClick={() => finishPurchase()}>Realizar Compra</button>
      </form> 
    </div> :
    <div className='m-auto flex flex-col justify-center item-center'>
      <img src={empty} alt="empty" className='w-3/6' />
      <h4>No hay elementos seleccionados, por favor vuelve al inicio y selecciona los elementos que deseas comprar</h4>
    </div>
    
  )
}

export default Checkout
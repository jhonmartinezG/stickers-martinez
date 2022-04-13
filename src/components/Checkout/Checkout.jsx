import React from 'react';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { CartContext } from '../../context/CartProvider';
import useFirestore from '../../hooks/useFirestore';
import { useState } from 'react';

const Checkout = () => {

  let { arrayProducts, cuantity, total, setCuantity, setArrayProducts } = useContext(CartContext)
  const { createOrder, orders, success } = useFirestore()

  const [form, setForm] = useState({
    buyer: {
        name: '',
        fullName: '',
        address: '',
        detailAdress: '',
        city: '',
        zipCode: ''
    },
    items: arrayProducts,
    totalPurchase: total
});

const handleChangeClient = (e) => {
  setForm({
      ...form,
      buyer: {
          ...form.buyer,
          [e.target.name]: e.target.value,
      }
  });
}


  console.log('productos', arrayProducts, 'cantidad', cuantity, 'total', total)

  const totalCost = new Intl.NumberFormat().format(total + 20000);


  const generateOrderSubmit = (e) => {
    e.preventDefault()
    createOrder({ clientData: form})

    Swal.fire(
      'Compra realizada ',
      `Tu compra ha sido registrada y guardada con exito`,
      'success'
    )

    setArrayProducts([])
    setCuantity(0)
    

  }


  return (
    <>
    { arrayProducts.length >= 1 ?  
    <div className=' flex justify-center item-center h-screen' style={{ display: success && 'none' }}>
      <form className='flex  item-center flex-col' onSubmit={generateOrderSubmit}>
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
            <input type="email" className="form-control" id="inputEmail4" name='email' value={ form.buyer.email } placeholder="Correo Electronico" onChange={handleChangeClient} />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Nombre Completo</label>
            <input type="text" className="form-control" id="inputName" name='fullName' value={ form.buyer.fullName } placeholder="Nombre Completo" onChange={handleChangeClient} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Direccion</label>
          <input type="text" className="form-control" id="inputAddress" name='address' value={ form.buyer.address } placeholder="Direccion" onChange={handleChangeClient} />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Detalles de la direccion</label>
          <input type="text" className="form-control" id="inputAddress2" name='detailAdress' value={ form.buyer.detailAdress } placeholder="Apartamento, Urbanizacion o piso" onChange={handleChangeClient} />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">Ciudad</label>
            <input type="text" className="form-control" id="inputCity" name='city' value={ form.buyer.city } onChange={handleChangeClient} />
          </div>  
          <div className="form-group col-md-6">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" name='zipCode' value={ form.buyer.zipCode }  onChange={handleChangeClient}/>
          </div>
        </div>
        <button className="btn btn-success" type='submit'>Realizar Compra</button>
      </form> 
    </div>  :
    <div className='m-auto flex flex-col justify-center item-center'>
      <h4>Gracias por su compra</h4>
    </div> 
      } 
      {

        <div className='m-auto flex flex-col justify-center item-center h-screen '>
          {success && <h1 >su orden es {orders}</h1>}
        </div>
        
      }
    </>
    
  )
}

export default Checkout
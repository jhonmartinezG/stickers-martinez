import React, { useContext } from 'react'
import { CartContext } from '../../context/CartProvider'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ data }) => {

  return (
    <div key={data[0].id} className="card my-40" style={{ maxWidth: '1500px'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={data[0].pictureUrl} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-text">{data[0].title}</h2>
            <h3 className="card-title mt-10">{data[0].description}</h3>
            <h3 className="card-title">{`$ ${data[0].price} COP`}</h3>
            <ItemCount initalValue={data[0].initalValue} stock={data[0].stock} data={data}/>
          </div>
        </div>
      </div>
  </div>
  )
}

export default ItemDetail
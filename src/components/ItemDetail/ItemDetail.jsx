import React, { useContext } from 'react'
import { CartContext } from '../../context/CartProvider'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ data }) => {

  console.log(data.id)

  return (
    <div key={data.id} className="card my-40" style={{ maxWidth: '1500px'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={data.pictureUrl} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-text">{data.title}</h2>
            <h3 className="card-title">{data.description}</h3>
            <h3 className="card-title">{`$ ${data.price}`}</h3>
            <ItemCount initalValue={data.initalValue} stock={data.stock} dataList={data}/>
          </div>
        </div>
      </div>
  </div>
  )
}

export default ItemDetail
import React, { useState, useEffect, useContext } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { CartContext } from '../../context/CartProvider';

const ItemDetailContainer = () => {

    let {id} = useParams()

    const { info, setInfo } = useContext(CartContext)

    const filteredItem = info.filter(item => item.id === id)


    
  return (
    <div>
          {filteredItem != null ? <h1>{<ItemDetail data={filteredItem}/> }</h1> : <Loading />}
    </div>
  )
}

export default ItemDetailContainer
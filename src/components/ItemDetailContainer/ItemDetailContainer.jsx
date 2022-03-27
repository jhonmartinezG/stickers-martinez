import React, {  useContext } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { CartContext } from '../../context/CartProvider';

const ItemDetailContainer = () => {

    let {id} = useParams()

    const { info } = useContext(CartContext)

    const filteredItem = info.filter(item => item.id === id)

  return (
    <div className='flex justify-center items-center'>
          {filteredItem != null ? <h1>{<ItemDetail data={filteredItem}/> }</h1> : <Loading />}
    </div>
  )
}

export default ItemDetailContainer
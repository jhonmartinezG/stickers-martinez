import React from 'react'
import Item from '../Item/Item'
import Loading from '../Loading/Loading'



const ItemList = ({ data }) => {

  return (
    <div className='d-flex relative  '>
      {
        data ? data.map((item) => (
          <Item 
            id={item.id}
            img={item.pictureUrl}
            title={item.title}
          />
        )) : <Loading />
      }
    </div>
  )
}

export default ItemList
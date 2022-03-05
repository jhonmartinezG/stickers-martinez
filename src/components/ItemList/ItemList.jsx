import React from 'react'
import Item from '../Item/Item'
import Loading from '../Loading/Loading'



const ItemList = ({ data }) => {

  return (
    <div className='flex flex-wrap items-center justify-center '>
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
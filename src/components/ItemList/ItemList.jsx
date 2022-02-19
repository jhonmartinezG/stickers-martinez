import React from 'react'
import { useEffect, useState } from 'react'
import Item from '../Item/Item'


const ItemList = ({ data }) => {

  return (
    <div className='d-flex relative  '>
      {
        data && data.map((item) => (
          <Item 
            id={item.id}
            img={item.pictureUrl}
            title={item.title}
          />
        ))
      }
    </div>
  )
}

export default ItemList
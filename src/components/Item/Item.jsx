import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({ id, img, title, description, price, initalValue, stock }) => {
  return (
      <div className='mx-4 flex flex-col justify-center'> 
        <ul>
            <li key={id}>
                <div className="card" style={{ width: '18rem', height: '10rem' }}>
                    <img src={img} className="card-img-top" alt={title} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">${price}</p>
                        <ItemCount initalValue={initalValue} stock={stock}/>
                        <a href="#" className="btn btn-primary ">Agregar al carrito</a>
                    </div>
                </div>
            </li>
    </ul>
  </div>
  )
}

export default Item
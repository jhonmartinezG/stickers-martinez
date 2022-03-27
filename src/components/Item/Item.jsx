import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ id, img, title }) => {
  return (
      <div className='mx-4 flex flex-col justify-center'> 
        <ul>
            <li key={id}>
                <div className="card" >
                    <img src={img} className="card-img-top" alt={title} style={{ width: '16rem', height: '16rem' }} />
                    <div className="card-body flex flex-col ">
                        <h5 className="card-title">{title}</h5>
                        <Link to={`/item/${id}`} className="btn btn-primary">Detalles</Link>
                    </div>
                </div>
            </li>
        </ul>
      </div>
  )
}

export default Item
import React from 'react'

const ItemDetail = ({ data }) => {
  return (
    <div key={data.id} className="card" style={{ maxWidth: '540px'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={data.pictureUrl} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
            <p className="card-text"><small className="text-muted">Comprar</small></p>
          </div>
        </div>
      </div>
  </div>
  )
}

export default ItemDetail
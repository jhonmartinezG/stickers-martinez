import React from 'react'
import loading from '../../assets/loading.svg'

const Loading = () => {
  return (
    <div className='flex flex-col mt-40'>
        <img src={loading} alt="" />
    </div>
  )
}

export default Loading
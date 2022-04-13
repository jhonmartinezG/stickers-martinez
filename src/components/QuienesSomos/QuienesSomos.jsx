import React from 'react'
import './QuienesSomos.css'
import picture from '../../assets/picture.jpeg';

const QuienesSomos = () => {
  return (
    <div>
      <div className='w-100 title-container h-96'>
        
      </div>
      <div className='w-100 text-container h-96'>
        <h3 className='lorem'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolores nam ut animi eius modi, ex harum ipsa autem quaerat laboriosam explicabo praesentium facilis velit doloremque nihil. Dignissimos, deleniti dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quis nemo quos fugiat accusantium nam optio corrupti, blanditiis numquam dicta ex molestiae reprehenderit voluptatum ad rem perspiciatis fugit voluptatem tempora? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus deleniti adipisci fuga odit sequi deserunt blanditiis quas temporibus, natus, quod fugit dolore iusto, dicta quisquam. Recusandae quo quos numquam itaque.</h3>
      </div>
      <div className='w-100 developer-container h-96' >
        <h4>
          This website was made for educational rasons, the images and some texts are from another websites and internet, so if something belongs to you please contact to me by email
          <a href = "mailto: jhsebastian12@gmail.com"> jhsebastian12@gmail.com</a>
        </h4>
        <img className='image' src={picture} alt="myself" />
      </div>
    </div>
  )
}

export default QuienesSomos
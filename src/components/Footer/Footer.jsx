import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png';
import instagram from '../../assets/instagram.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

const Footer = () => {
  return (
    <div className='w-100 h-70 footer-container mt-40'>
        <div>
            <Link to={'/'} >
                <img className='img-thumbnail img-fluid rounded-circle cursor-pointer' style={{ width: '70px' }} src={logo} alt="" />
            </Link>
        </div>
        <div>
            <h3>Productos</h3>
            <ul>
                <li>Sillas</li>
                <li>Comedores</li>
                <li>Camas</li>
                <li>Espejos</li>
            </ul>
        </div>
        <div>
            <h3>Servicios</h3>
            <ul>
                <li>Política de Reembolso</li>
                <li>Política de Envío</li>
                <li>Política de Privacidad</li>
                <li>Términos y Condiciones</li>
            </ul>
        </div>
        <div>
            <h3>Redes Sociales</h3>
            <ul className='flex justify-around mt-10'>
                <img className='w-10 h-10' src={instagram} alt="instagram" />
                <img className='w-10 h-10' src={linkedin} alt="linkedin" />
                <img className='w-10 h-10' src={github} alt="github" />
            </ul>
            <p>Made with love by Sebastian Martinez</p>
        </div>
    </div>
  )
}

export default Footer;
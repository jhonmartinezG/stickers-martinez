import logo from '../../assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div>
                    <Link to={'/'} >
                        <img className='img-thumbnail img-fluid rounded-circle cursor-pointer' style={{ width: '70px' }} src={logo} alt="" />
                    </Link>
                </div>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex justify-around" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/cart/checkout'} >Tienda</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/quienessomos'} >Quienes Somos</Link>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar;
import logo from '../assets/logo.png';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <div>
                    <img className='img-thumbnail img-fluid rounded-circle cursor-pointer' style={{ width: '70px' }} src={logo} alt="" />
                </div>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse flex justify-around" id="navbarNav">
                    <ul class="navbar-nav">
                        
                        <li class="nav-item">
                        <a class="nav-link" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Tienda</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link " href="#" >Quienese Somos</a>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar;
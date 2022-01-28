import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div className='lg bg-blue text-center text-white h-20 flex  px-20 justify-between items-center shadow-md shadow-gray-dark'>
            <img src={logo} className='w-12 rounded-full cursor-pointer' alt='logo - company' ></img>
            <div className='flex justify-between w-4/12 px-100 text-sm ' >
                <h1 className='text-white hover:underline decoration-yellow decoration-2 cursor-pointer' >Home</h1>
                <h1 className='text-white hover:underline decoration-yellow decoration-2 cursor-pointer'>Tienda</h1>
                <h1 className='text-white hover:underline decoration-yellow decoration-2 cursor-pointer'>Quiénes Somos</h1>
                <h1 className='text-white hover:underline decoration-yellow decoration-2 cursor-pointer'>Contáctenos</h1>
            </div >
            <button className='text-white bg-gradient-to-r from-purple to-pink w-24 h-9 rounded-full hover:saturate-200'>Regístrate</button>
        </div >
    )
}

export default Navbar;
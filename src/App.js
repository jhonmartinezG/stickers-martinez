import './App.css';
import logo from './assets/logo.png'

function App() {
  return (
    <div className='lg bg-gray-dark text-center text-white h-20 flex  px-10 justify-between items-center shadow-md shadow-gray-dark'>
      <img src={logo} className='w-12 rounded-full cursor-pointer' alt='logo - company' ></img>
      <div className='flex justify-around w-3/5 px-100' >
        <h1 className='text-white hover:underline decoration-yellow decoration-4 cursor-pointer' >Home</h1>
        <h1 className='text-white hover:underline decoration-yellow decoration-4 cursor-pointer'>Tienda</h1>
        <h1 className='text-white hover:underline decoration-yellow decoration-4 cursor-pointer'>Quienes Somos</h1>
        <h1 className='text-white hover:underline decoration-yellow decoration-4 cursor-pointer'>Contactenos</h1>
        <h1 className='text-white hover:underline decoration-yellow decoration-4 cursor-pointer'>Regístrate</h1>
      </div >
    </div >
  );
}

export default App;

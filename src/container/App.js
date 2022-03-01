import './App.css';
import Rutas from '../routes';
import CartProvider from '../context/CartProvider';



function App() {
  return (
    <div className='flex flex-col'>
      <CartProvider>
        <Rutas />
      </CartProvider>
    </div>
  );
}

export default App;

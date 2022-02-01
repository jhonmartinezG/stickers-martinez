import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Welcome to Jaus Store" />
    </div>
  );
}

export default App;

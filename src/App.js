import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/> <br/>
      <h1>Palo Macrameando</h1> <br/>
      {/* <ItemListContainer titulo= "Lista de Productos"/> <br/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;

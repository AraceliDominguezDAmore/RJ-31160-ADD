import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemCount from './componentes/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar/> <br/>
      <h1>Palo Macrameando</h1> <br/>
      <ItemListContainer titulo= "Hola Mundo"/> <br/>
      <ItemCount stock={10} initial={1}/>
    </div>
  );
}

export default App;

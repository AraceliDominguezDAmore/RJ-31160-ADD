import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/> 
        <Routes>
          <Route path= "/" element= { <ItemListContainer titulo="Bienvenido a nuestra tienda" /> } />
          <Route path= "/category/:categoryid" element=  { <ItemListContainer titulo="Categorias de productos"/> } />
          <Route path= "/discos/:itemid" element= {<ItemDetailContainer id= {3} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import ItemLisContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';



function App() {
  let hero = "Hola Mundo";
  return (
    <div className="App">
      
      <header className="App-header">
      <NavBar/>
        <h1>{hero}</h1>
      </header>
      <ItemLisContainer/>
    </div>
  ); 
}

export default App;

import imageRickyMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
   const api = await fetch("https://rickandmortyapi.com/api/character");
   const characterApi = await api.json();

   setCharacters(characterApi.results);
  };
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Ricky & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img src={imageRickyMorty}alt="Ricky & Morty" className="img-home"/>
            <button onClick={reqApi} className="btn-search">
              Buscar personas
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;

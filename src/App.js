import React from 'react';
import './App.css';
import Contenu from './Contents/Contenu/Contenu' //export fuct contenu
import ThemeContextProvider from './Contexte/ThemeContext';
import BtnToogle from './Contents/BtnToogle/BtnToogle';


function App() {
  
  return (
    <div className='App'>

      <ThemeContextProvider>
        <BtnToogle/>
        <Contenu/>
      </ThemeContextProvider>
      
    </div>
  );
}

export default App;

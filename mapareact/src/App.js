import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';

import MapView from './Components/MapView.jsx'
import Home from './Components/Home.jsx'

function App() {
  return (
 
    <Routes>

      <Route path='/' element={<Home/>}/>

      <Route path='/map' element={<MapView/>}/>

    </Routes>

  );
}

export default App;

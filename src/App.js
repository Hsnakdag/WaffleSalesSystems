
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React , {createContext} from 'react';
//pages
//import WaffleContentPage from './pages/WaffleContentPage';

import NewProductPage from './pages/NewProductPage';
import WaffleContentPage from './pages/WaffleContentPage';
import data from "./ContextApi"

 export const WaffleContext = createContext();

function App() {
  
  return (
    <WaffleContext.Provider value={data}>
    <div className="App">
              
              <BrowserRouter>
              <Routes>
                <Route path="/" element={<NewProductPage/>}/>
                <Route path='/waffleContentPage' element={<WaffleContentPage/>}/>

              </Routes>
              </BrowserRouter>
    </div>
    </WaffleContext.Provider>
  );
}

export default App;

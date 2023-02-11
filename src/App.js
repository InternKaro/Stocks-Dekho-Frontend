import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import AllStocks from './pages/AllStocks';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Stock from './pages/Stock';
import Search from './pages/Search';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllStocks />}></Route>
          <Route path='/:symbol' element={<Stock />}></Route>
          <Route path='/search' element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

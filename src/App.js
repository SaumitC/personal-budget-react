import React from 'react';
import './App.css';

import { 
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import Chartjsviz from './Chartjsviz/Chartjsviz';
import D3jsviz from './D3jsviz/D3jsviz';

function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/login' element={<LoginPage/>} />
        </Routes>
      </div>
      <Chartjsviz/>
      <D3jsviz/>
      <Footer/>
    </Router>
  );
}

export default App;

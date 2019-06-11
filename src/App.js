import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { observer,inject } from 'mobx-react';
import logo from './logo.svg';
import './App.css';
import './components/SolarSystem'
import SolarSystem from './components/SolarSystem';

// @inject('Planetstore')
// @observer
function App() {
  return (
    <Router> 
      <SolarSystem/>
    </Router>
   
  );
}

export default App;

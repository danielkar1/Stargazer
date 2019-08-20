import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { observer, inject } from 'mobx-react';
import logo from './logo.svg';
import './App.css';
import ContentContainer from './components/LoginContainer'
import Universe from './components/Universe'

@inject('PlanetsStore')
@observer
class App extends Component {

  render() {
    return (
      <Router>
        <Universe />
      </Router>
    );
  }
}
export default App;

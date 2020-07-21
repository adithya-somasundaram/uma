import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import Games from './components/games'
import Navbar from './components/nav'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/games" component={Games} />
      </div>
    </Router>



  );
}

export default App;

import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import './App.css';

import Games from './components/games'

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

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/games'>
          <li>Games</li>
        </Link>
        <button>Sign Out</button>
      </ul>
    </nav>
  );
}

export default App;

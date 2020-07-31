import React, {useState} from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

// import fire from './fire'

import Navbar from './components/nav'
import Home from './components/home'
import MemorySquares from './components/memory-squares'
import PicGame from './components/games'
import DefaultPicGame from './components/default-pic'
import SignUp from './components/sign-up'
import SignIn from './components/sign-in'

import {User} from './User'

function App() {
  const[value, setValue] = useState('hi');

  return (
    <Router>
      <div>
        <Navbar />
        <User.Provider value={{value,setValue}}>
          <Route path="/" exact component={Home} /> 
          <Route path="/memory-squares" exact component={MemorySquares} />
          <Route path="/picture-game" exact component={PicGame} />
          <Route path="/default-pic" exact component={DefaultPicGame} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/sign-in" exact component={SignIn} />
        </User.Provider>
      </div>
    </Router>
  );
}

export default App;

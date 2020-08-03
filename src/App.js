import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// css file
import './App.css';

// components
import Navbar from './components/nav'
import Home from './components/home'
import MemorySquares from './components/memory-squares'
import PicGame from './components/games'
import DefaultPicGame from './components/default-pic'
import SignUp from './components/sign-up'
import SignIn from './components/sign-in'

// hooks
import {User} from './User'

function App() {
  // store user hook
  const[value, setValue] = useState(null);

  return (
    <Router>
      <div>
        {/* Set up routes with navbar and hooks */}
        <User.Provider value={{value,setValue}}>
          <Navbar />
          <Route path="/" exact component={Home} /> 
          <Route path="/memory-squares" exact component={MemorySquares} />
          <Route exact path="/picture-game" render={(props) => <PicGame {...props} name={value}/>} />
          <Route path="/picture-game/default" exact component={DefaultPicGame} />
          {/* <Route path="/my-profile" exact component={MyProfile} /> */}
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/sign-in" exact component={SignIn} />
        </User.Provider>
      </div>
    </Router>
  );
}

export default App;

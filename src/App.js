import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// css file
import './App.css';

// components
import Navbar from './components/Navbar'
import Home from './components/Home'
import MemorySquares from './components/MemorySquares'
import PictureGame from './components/PictureGame'
import DefaultPicGame from './components/DefaultPicGame'
import CustomPicUpload from './components/CustomPicUpload'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

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
          <Route exact path="/picture-game" component={PictureGame} />
          <Route path="/picture-game/default" exact component={DefaultPicGame} />
          <Route path="/picture-game/create" exact component={CustomPicUpload} />
          {/* <Route path="/my-profile" exact component={MyProfile} /> */}
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/sign-in" exact component={SignIn} />
        </User.Provider>
      </div>
    </Router>
  );
}

export default App;

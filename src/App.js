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
import CustomPicGame from './components/CustomPicGame'
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
          <Route exact path="/" component={Home} /> 
          <Route exact path="/memory-squares" component={MemorySquares} />
          <Route exact path="/picture-game" render={(props)=><PictureGame {...props} user={value}/>} />
          <Route exact path="/picture-game/default" component={DefaultPicGame} />
          <Route exact path="/picture-game/create" component={CustomPicUpload} />
          <Route exact path="/picture-game/custom" render={(props)=><CustomPicGame {...props} user={value}/>} />
          {/* <Route path="/my-profile" component={MyProfile} /> */}
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-in" component={SignIn} />
        </User.Provider>
      </div>
    </Router>
  );
}

export default App;

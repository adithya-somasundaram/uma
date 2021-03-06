import React from 'react'

// page image
import Raiders from './raiders.jpg'

function Home() {
    return (
    <div className = "App-general">
        <p className = "title">Welcome to the Ultimate Memory Accelerator!</p>
        <div>Click on one of the games in the top left to begin. Sign in to log your progress :) Thanks, and go Raiders!</div>
        <br></br>
        <img src={Raiders} alt="Raiders" width="70%"/>
        <h4>Picture Credits: Tim Ireland</h4>
    </div>
    );
}

export default Home;

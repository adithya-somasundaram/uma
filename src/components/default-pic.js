import React from 'react'

import Apple from '../apple.jpg'
import Banana from '../banana.jpg'

var x = [[Apple,'apple'],[Banana,'banana']];
var i = 0;

function DefaultPicGame(){
    return(
        <div className= "App-header">
            <h2>Picture Game</h2>
            <img id = "1" src={x[i][0]} alt="Raiders" width="30%"/>
            <input></input>
            <button onClick={() => {
                i += 1;
                document.getElementById('1').src = x[(i)%2][0];
            }} >Check</button>
            <button onClick={() => {
                i += 1;
                document.getElementById('1').src = x[(i)%2][0];
            }} >Overwrite</button>
        </div>
    )
}

export default DefaultPicGame;
import React from 'react'

import Apple from '../apple.jpg'
import Banana from '../banana.jpg'

var x = [[Apple,'apple'],[Banana,'banana']];
var i, score;
const total = x.length;

function DefaultPicGame(){
    reset()
    return(
        <div className= "App-header">
            <h2>Picture Game</h2>
            <img id = 'image' src={x[i][0]} alt="Raiders" width="30%"/>
            <input/>
            <button onClick={() => {
                if(i + 1 < total){
                    i += 1;
                    document.getElementById('image').src = x[i][0];
                    if(i + 1 === total){
                        console.log('yay')
                    }
                }
            }} >Check</button>
            <button onClick={() => {
                if(i + 1 < total){
                    i += 1;
                    score += 1;
                    document.getElementById('image').src = x[i][0];
                    if(i + 1 === total){
                        console.log('yay')
                    }
                }
            }} >Overwrite</button>
            <button onClick={() => {
                if(i + 1 < total){
                    i += 1;
                    document.getElementById('image').src = x[i][0];
                    if(i + 1 === total){
                        console.log('yay')
                    }
                }
            }} >Skip</button>
        </div>
    )
}

function reset(){
    i = 0;
    score = 0;
    var temp = [], location;

    console.log('copy ',x)

    for (var y = 0; y < total; y++) {
        location = Math.floor(Math.random() * (total - y)); //random number in color array
        temp.push(x[location])
        x.splice(location,1)
    }
    x = temp;
    console.log(temp)
}

function recordScore(user, real_score){
    if(user !== ''){

    }
}

export default DefaultPicGame;
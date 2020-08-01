import React, {useContext} from 'react'

// import user hooks
import { User } from '../User'

// import firebase reference
import fire from '../fire'

// import game images
import Apple from '../apple.jpg'
import Banana from '../banana.jpg'

// global vars
var x = [[Apple, 'apple'], [Banana, 'banana']];
var i, score;
const total = x.length;

function DefaultPicGame() {
    const user = useContext(User)

    // initialize game
    reset()

    return (
        <div className="App-header">
            <h2>Picture Game</h2>
            <img id='image' src={x[i][0]} alt="Raiders" width="30%" />
            <input />
            <button onClick={() => {
                if (i + 1 < total) {
                    i += 1;
                    document.getElementById('image').src = x[i][0];
                }
                if (i === total) {
                    recordScore({user}, score)
                }
            }} >Check</button>
            <button onClick={() => {
                if (i + 1 < total) {
                    i += 1;
                    score += 1;
                    document.getElementById('image').src = x[i][0];
                }
                if (i === total) {
                    recordScore({user}, score)
                }
            }} >Overwrite</button>
            <button onClick={() => {
                if (i + 1 < total) {
                    i += 1;
                    document.getElementById('image').src = x[i][0];
                }
                if (i === total) {
                    recordScore({user}, score)
                }
            }} >Skip</button>
        </div>
    )
}

// shuffle image order and reset score
function reset() {
    i = 0;
    score = 0;
    var temp = [], location;

    for (var y = 0; y < total; y++) {
        location = Math.floor(Math.random() * (total - y)); //random number in color array
        temp.push(x[location])
        x.splice(location, 1)
    }
    x = temp;
}

function recordScore(u, real_score) {
    if (u.user['value'] !== '') {
        var name = u.user['value'];     // get user name
        var date = new Date();          // get today's date

        // formulate entry
        var entry = (date.getMonth() + 1).toString() + "-" + date.getDate().toString() + "-" + date.getFullYear().toString() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        
        // write to firebase
        fire.firestore().collection('users')
            .doc(name)
            .collection('picture-game')
            .doc(entry)
            .set({
                score: real_score,
                total_points : total,
                collection : 'default'
         });
    }
}

export default DefaultPicGame;
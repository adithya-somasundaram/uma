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
    console.log('here')
    // initialize game
    reset()

    return (
        <div className="App-header">
            <h2>Picture Game</h2>
            <img id='image' src={x[i][0]} alt="pic" width="30%" />
            <input id='input'/>
            <button onClick={() => {
                console.log(i,total)
                if (i < total) {
                    if(document.getElementById('input').value.toUpperCase() ===
                    x[i][1].toUpperCase()){
                        score += 1;
                    }
                    document.getElementById('input').value = ''
                    i += 1;
                    if(i < total){
                        document.getElementById('image').src = x[i][0];
                    }
                }
                console.log(i, total)
                if (i === total) {
                    console.log('in here')
                    recordScore({user}, score)
                    i += 1
                }
            }} >Check</button>
            <button onClick={() => {
                if (i < total) {
                    i += 1;
                    score += 1;
                    if(i < total){
                        document.getElementById('image').src = x[i][0];
                    }
                }
                if (i === total) {
                    recordScore({user}, score)
                    i += 1
                }
            }} >Overwrite</button>
            <button onClick={() => {
                if (i < total) {
                    i += 1;
                    if(i < total){
                        document.getElementById('image').src = x[i][0];
                    }
                }
                if (i === total) {
                    recordScore({user}, score)
                    i += 1
                }
            }} >Skip</button>
            <button onClick={() => reset()} >Start Over</button>
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
    console.log(u)
    if (u.user['value'] !== '' && u.user['value'] !== null) {
        var name = u.user['value'];     // get user name
        var total_s, total_p;           // will read total games played + total score

        fire.firestore().collection('users')
            .doc(name)
            .get()
            .then(function(doc){
                if(doc.exists){
                    total_p = doc.data()['default_pic_played']
                    total_s = doc.data()['default_pic_score']
                    fire.firestore().collection('users')
                        .doc(name)
                        .update({
                            default_pic_played : (total_p + 1),
                            default_pic_score : total_s + real_score
                        })
                }
            })

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
    } else {
        console.log('no user signed in')
    }
}

export default DefaultPicGame;
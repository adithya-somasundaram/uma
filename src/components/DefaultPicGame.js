import React, { useContext } from 'react'

// import user hooks
import { User } from '../User'

// import firebase reference
import fire from '../fire'

// import game images
import Apple from '../defaultPicGameImg/apple.jpg'
import Banana from '../defaultPicGameImg/banana.jpg'
import GameOver from '../gameOver.jpg'

// holds default images and names
var pictures = [[Apple, 'apple'], [Banana, 'banana']];
var index, score;

// stores total possible score
const total = pictures.length;

function DefaultPicGame() {
    const user = useContext(User)

    // style for input box for user's answers
    const inputStyle = {
        position: 'absolute',
        bottom: '10px',
        marginBottom: '50px',
        float: 'right',
        marginTop: 'auto',
    }

    // style for buttons surrounding input box
    const bottomButtons = {
        position: 'absolute',
        bottom: '5px',
        float: 'right',
        marginTop: 'auto'
    }

    // initialize game
    reset()

    return (
        <div className="App-general">
            <p className = "title">Picture Game</p>
            <img id='image' src={pictures[index][0]} alt="pic" width="30%" />
            <div style={inputStyle}>
                <label>Image name: </label>
                <input id='input' />
                <button onClick={() => {
                    if (index < total) {
                        if (document.getElementById('input').value.toUpperCase() ===
                        pictures[index][1].toUpperCase()) {
                            score += 1;
                        }
                        document.getElementById('input').value = ''
                        index += 1;
                        if (index < total) {
                            document.getElementById('image').src = pictures[index][0];
                        }
                    }
                    
                    if (index === total) {
                        recordScore({ user }, score)
                        document.getElementById('image').src = GameOver
                        index += 1
                    }
                }} >Check</button>
            </div>
            <div style={bottomButtons}>
                <button onClick={() => {
                    if (index < total) {
                        index += 1;
                        score += 1;
                        if (index < total) {
                            document.getElementById('image').src = pictures[index][0];
                        }
                    }
                    if (index === total) {
                        recordScore({ user }, score)
                        document.getElementById('image').src = GameOver
                        index += 1
                    }
                }} >Overwrite</button>
                <button onClick={() => {
                    if (index < total) {
                        index += 1;
                        if (index < total) {
                            document.getElementById('image').src = pictures[index][0];
                        }
                    }
                    if (index === total) {
                        recordScore({ user }, score)
                        document.getElementById('image').src = GameOver
                        index += 1
                    }
                }} >Skip</button>
                <button onClick={() => {
                    reset()
                    document.getElementById('image').src = pictures[index][0]
                }} >Start Over</button>
            </div>
        </div>
    )
}

// shuffle image order and reset score
function reset() {
    index = 0;
    score = 0;
    var temp = [], location;

    for (var y = 0; y < total; y++) {
        location = Math.floor(Math.random() * (total - y)); //random number in color array
        temp.push(pictures[location])
        pictures.splice(location, 1)
    }
    pictures = temp;
}

function recordScore(player, real_score) {
    if (player.user['value'] !== '' && player.user['value'] !== null) {
        var name = player.user['value'];     // get user name
        var total_s, total_p;           // will read total games played + total score

        fire.firestore().collection('users')
            .doc(name)
            .get()
            .then(function (doc) {
                if (doc.exists) {
                    total_p = doc.data()['default_pic_played']
                    total_s = doc.data()['default_pic_score']
                    fire.firestore().collection('users')
                        .doc(name)
                        .update({
                            default_pic_played: (total_p + 1),
                            default_pic_score: total_s + real_score
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
                total_points: total,
                collection: 'default'
            });
    }
}

export default DefaultPicGame;
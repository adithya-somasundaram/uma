import React, { useContext } from 'react'

// import user hooks
import { User } from '../User'

// import firebase reference
import fire from '../fire'

// global vars
var output = []; //random colors array
var score = 0;
var remaining = 16;
var prevGuess = 17;

function MemorySquares() {
    const user = useContext(User)

    // initialize game
    initialize();

    // game buttons style
    const squareStyle = {
        width: '100px',
        height: '100px',
        padding: '5px',
        backgroundColor: 'white'
    }

    // other buttons style
    const bottomButtons = {
        width: '100px',
        padding: '10px'
    }

    // instruction text box style
    const instructions = {
        width: '70%'
    }
    return (
        <div className="App-general">
            <p className = "title">Memory Squares</p>
            <h3 id='score'>Score: {score}</h3>
            <div>
                <button id='1' style={squareStyle} onClick={() => {
                    if (document.getElementById('1').style.backgroundColor === 'white') {
                        document.getElementById('score').innerText = 'Score: ' + (++score);
                        if (prevGuess !== 17) {
                            console.log(prevGuess, document.getElementById(prevGuess.toString()).style.backgroundColor)
                            if (document.getElementById(prevGuess.toString()).style.backgroundColor === output[0]) {
                                document.getElementById('1').style.backgroundColor = 'gray';
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'gray';
                                prevGuess = 17;
                                remaining -= 2;
                                if (!remaining) {
                                    document.getElementById('score').innerText = 'Great Job! Your score: ' + score;
                                    document.getElementById('reset').innerText = 'Start Over';
                                    if({user} !== ''){
                                        recordScore({user},score)
                                    }
                                }
                            } else {
                                document.getElementById('1').style.backgroundColor = output[0];
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'white';
                                prevGuess = 1;
                            }
                        } else {
                            prevGuess = 1;
                            document.getElementById('1').style.backgroundColor = output[0];
                        }
                    }
                }}>?</button>
                <button id='2' style={squareStyle} onClick={() => {
                    if (document.getElementById('2').style.backgroundColor === 'white') {
                        document.getElementById('score').innerText = 'Score: ' + (++score);
                        if (prevGuess !== 17) {
                            console.log(prevGuess, document.getElementById(prevGuess.toString()).style.backgroundColor)
                            if (document.getElementById(prevGuess.toString()).style.backgroundColor === output[1]) {
                                document.getElementById('2').style.backgroundColor = 'gray';
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'gray';
                                prevGuess = 17;
                                remaining -= 2;
                                if (!remaining) {
                                    document.getElementById('score').innerText = 'Great Job! Your score: ' + score;
                                    document.getElementById('reset').innerText = 'Start Over';
                                    if({user}.user['value'] !== ''){
                                        recordScore({user},score)
                                    }
                                }
                            } else {
                                document.getElementById('2').style.backgroundColor = output[1];
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'white';
                                prevGuess = 2;
                            }
                        } else {
                            prevGuess = 2;
                            document.getElementById('2').style.backgroundColor = output[1];
                        }
                    }
                }}>?</button>
                <button id='3' style={squareStyle} onClick={() => {
                    if (document.getElementById('3').style.backgroundColor === 'white') {
                        document.getElementById('score').innerText = 'Score: ' + (++score);
                        if (prevGuess !== 17) {
                            console.log(prevGuess, document.getElementById(prevGuess.toString()).style.backgroundColor)
                            if (document.getElementById(prevGuess.toString()).style.backgroundColor === output[2]) {
                                document.getElementById('3').style.backgroundColor = 'gray';
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'gray';
                                prevGuess = 17;
                                remaining -= 2;
                                if (!remaining) {
                                    document.getElementById('score').innerText = 'Great Job! Your score: ' + score;
                                    document.getElementById('reset').innerText = 'Start Over';
                                    if({user}.user['value'] !== ''){
                                        recordScore({user},score)
                                    }
                                }
                            } else {
                                document.getElementById('3').style.backgroundColor = output[2];
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'white';
                                prevGuess = 3;
                            }
                        } else {
                            prevGuess = 3;
                            document.getElementById('3').style.backgroundColor = output[2];
                        }
                    }
                }}>?</button>
                <button id='4' style={squareStyle} onClick={() => {
                    if (document.getElementById('4').style.backgroundColor === 'white') {
                        document.getElementById('score').innerText = 'Score: ' + (++score);
                        if (prevGuess !== 17) {
                            console.log(prevGuess, document.getElementById(prevGuess.toString()).style.backgroundColor)
                            if (document.getElementById(prevGuess.toString()).style.backgroundColor === output[3]) {
                                document.getElementById('4').style.backgroundColor = 'gray';
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'gray';
                                prevGuess = 17;
                                remaining -= 2;
                                if (!remaining) {
                                    document.getElementById('score').innerText = 'Great Job! Your score: ' + score;
                                    document.getElementById('reset').innerText = 'Start Over';
                                    if({user}.user['value'] !== ''){
                                        recordScore({user},score)
                                    }
                                }
                            } else {
                                document.getElementById('4').style.backgroundColor = output[3];
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'white';
                                prevGuess = 4;
                            }
                        } else {
                            prevGuess = 4;
                            document.getElementById('4').style.backgroundColor = output[3];
                        }
                    }
                }}>?</button>
            </div>
            <div>
                <button id='5' style={squareStyle} onClick={() => {
                    if (document.getElementById('5').style.backgroundColor === 'white') {
                        document.getElementById('score').innerText = 'Score: ' + (++score);
                        if (prevGuess !== 17) {
                            console.log(prevGuess, document.getElementById(prevGuess.toString()).style.backgroundColor)
                            if (document.getElementById(prevGuess.toString()).style.backgroundColor === output[4]) {
                                document.getElementById('5').style.backgroundColor = 'gray';
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'gray';
                                prevGuess = 17;
                                remaining -= 2;
                                if (!remaining) {
                                    document.getElementById('score').innerText = 'Great Job! Your score: ' + score;
                                    document.getElementById('reset').innerText = 'Start Over';
                                    if({user}.user['value'] !== ''){
                                        recordScore({user},score)
                                    }
                                }
                            } else {
                                document.getElementById('5').style.backgroundColor = output[4];
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'white';
                                prevGuess = 5;
                            }
                        } else {
                            prevGuess = 5;
                            document.getElementById('5').style.backgroundColor = output[4];
                        }
                    }
                }}>?</button>
                <button id='6' style={squareStyle} onClick={() => {
                    if (document.getElementById('6').style.backgroundColor === 'white') {
                        document.getElementById('score').innerText = 'Score: ' + (++score);
                        if (prevGuess !== 17) {
                            console.log(prevGuess, document.getElementById(prevGuess.toString()).style.backgroundColor)
                            if (document.getElementById(prevGuess.toString()).style.backgroundColor === output[5]) {
                                document.getElementById('6').style.backgroundColor = 'gray';
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'gray';
                                prevGuess = 17;
                                remaining -= 2;
                                if (!remaining) {
                                    document.getElementById('score').innerText = 'Great Job! Your score: ' + score;
                                    document.getElementById('reset').innerText = 'Start Over';
                                    if({user}.user['value'] !== ''){
                                        recordScore({user},score)
                                    }
                                }
                            } else {
                                document.getElementById('6').style.backgroundColor = output[5];
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'white';
                                prevGuess = 6;
                            }
                        } else {
                            prevGuess = 6;
                            document.getElementById('6').style.backgroundColor = output[5];
                        }
                    }
                }}>?</button>
                <button id='7' style={squareStyle} onClick={() => {
                    if (document.getElementById('7').style.backgroundColor === 'white') {
                        document.getElementById('score').innerText = 'Score: ' + (++score);
                        if (prevGuess !== 17) {
                            console.log(prevGuess, document.getElementById(prevGuess.toString()).style.backgroundColor)
                            if (document.getElementById(prevGuess.toString()).style.backgroundColor === output[6]) {
                                document.getElementById('7').style.backgroundColor = 'gray';
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'gray';
                                prevGuess = 17;
                                remaining -= 2;
                                if (!remaining) {
                                    document.getElementById('score').innerText = 'Great Job! Your score: ' + score;
                                    document.getElementById('reset').innerText = 'Start Over';
                                    if({user}.user['value'] !== ''){
                                        recordScore({user},score)
                                    }
                                }
                            } else {
                                document.getElementById('7').style.backgroundColor = output[6];
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'white';
                                prevGuess = 7;
                            }
                        } else {
                            prevGuess = 7;
                            document.getElementById('7').style.backgroundColor = output[6];
                        }
                    }
                }}>?</button>
                <button id='8' style={squareStyle} onClick={() => {
                    if (document.getElementById('8').style.backgroundColor === 'white') {
                        document.getElementById('score').innerText = 'Score: ' + (++score);
                        if (prevGuess !== 17) {
                            console.log(prevGuess, document.getElementById(prevGuess.toString()).style.backgroundColor)
                            if (document.getElementById(prevGuess.toString()).style.backgroundColor === output[7]) {
                                document.getElementById('8').style.backgroundColor = 'gray';
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'gray';
                                prevGuess = 17;
                                remaining -= 2;
                                if (!remaining) {
                                    document.getElementById('score').innerText = 'Great Job! Your score: ' + score;
                                    document.getElementById('reset').innerText = 'Start Over';
                                    if({user}.user['value'] !== ''){
                                        recordScore({user},score)
                                    }
                                }
                            } else {
                                document.getElementById('8').style.backgroundColor = output[7];
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'white';
                                prevGuess = 8;
                            }
                        } else {
                            prevGuess = 8;
                            document.getElementById('8').style.backgroundColor = output[7];
                        }
                    }
                }}>?</button>
            </div>
            <div>
                <button id='9' style={squareStyle} onClick={() => {
                    if (document.getElementById('9').style.backgroundColor === 'white') {
                        document.getElementById('score').innerText = 'Score: ' + (++score);
                        if (prevGuess !== 17) {
                            console.log(prevGuess, document.getElementById(prevGuess.toString()).style.backgroundColor)
                            if (document.getElementById(prevGuess.toString()).style.backgroundColor === output[8]) {
                                document.getElementById('9').style.backgroundColor = 'gray';
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'gray';
                                prevGuess = 17;
                                remaining -= 2;
                                if (!remaining) {
                                    document.getElementById('score').innerText = 'Great Job! Your score: ' + score;
                                    document.getElementById('reset').innerText = 'Start Over';
                                    if({user}.user['value'] !== ''){
                                        recordScore({user},score)
                                    }
                                }
                            } else {
                                document.getElementById('9').style.backgroundColor = output[8];
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'white';
                                prevGuess = 9;
                            }
                        } else {
                            prevGuess = 9;
                            document.getElementById('9').style.backgroundColor = output[8];
                        }
                    }
                }}>?</button>
                <button id='10' style={squareStyle} onClick={() => {
                    if (document.getElementById('10').style.backgroundColor === 'white') {
                        document.getElementById('score').innerText = 'Score: ' + (++score);
                        if (prevGuess !== 17) {
                            console.log(prevGuess, document.getElementById(prevGuess.toString()).style.backgroundColor)
                            if (document.getElementById(prevGuess.toString()).style.backgroundColor === output[9]) {
                                document.getElementById('10').style.backgroundColor = 'gray';
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'gray';
                                prevGuess = 17;
                                remaining -= 2;
                                if (!remaining) {
                                    document.getElementById('score').innerText = 'Great Job! Your score: ' + score;
                                    document.getElementById('reset').innerText = 'Start Over';
                                    if({user}.user['value'] !== ''){
                                        recordScore({user},score)
                                    }
                                }
                            } else {
                                document.getElementById('10').style.backgroundColor = output[9];
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'white';
                                prevGuess = 10;
                            }
                        } else {
                            prevGuess = 10;
                            document.getElementById('10').style.backgroundColor = output[9];
                        }
                    }
                }}>?</button>
                <button id='11' style={squareStyle} onClick={() => {
                    if (document.getElementById('11').style.backgroundColor === 'white') {
                        document.getElementById('score').innerText = 'Score: ' + (++score);
                        if (prevGuess !== 17) {
                            console.log(prevGuess, document.getElementById(prevGuess.toString()).style.backgroundColor)
                            if (document.getElementById(prevGuess.toString()).style.backgroundColor === output[10]) {
                                document.getElementById('11').style.backgroundColor = 'gray';
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'gray';
                                prevGuess = 17;
                                remaining -= 2;
                                if (!remaining) {
                                    document.getElementById('score').innerText = 'Great Job! Your score: ' + score;
                                    document.getElementById('reset').innerText = 'Start Over';
                                    if({user}.user['value'] !== ''){
                                        recordScore({user},score)
                                    }
                                }
                            } else {
                                document.getElementById('11').style.backgroundColor = output[10];
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'white';
                                prevGuess = 11;
                            }
                        } else {
                            prevGuess = 11;
                            document.getElementById('11').style.backgroundColor = output[10];
                        }
                    }
                }}>?</button>
                <button id='12' style={squareStyle} onClick={() => {
                    if (document.getElementById('12').style.backgroundColor === 'white') {
                        document.getElementById('score').innerText = 'Score: ' + (++score);
                        if (prevGuess !== 17) {
                            console.log(prevGuess, document.getElementById(prevGuess.toString()).style.backgroundColor)
                            if (document.getElementById(prevGuess.toString()).style.backgroundColor === output[11]) {
                                document.getElementById('12').style.backgroundColor = 'gray';
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'gray';
                                prevGuess = 17;
                                remaining -= 2;
                                if (!remaining) {
                                    document.getElementById('score').innerText = 'Great Job! Your score: ' + score;
                                    document.getElementById('reset').innerText = 'Start Over';
                                    if({user}.user['value'] !== ''){
                                        recordScore({user},score)
                                    }
                                }
                            } else {
                                document.getElementById('12').style.backgroundColor = output[11];
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'white';
                                prevGuess = 12;
                            }
                        } else {
                            prevGuess = 12;
                            document.getElementById('12').style.backgroundColor = output[11];
                        }
                    }
                }}>?</button>
            </div>
            <div>
                <button id='13' style={squareStyle} onClick={() => {
                    if (document.getElementById('13').style.backgroundColor === 'white') {
                        document.getElementById('score').innerText = 'Score: ' + (++score);
                        if (prevGuess !== 17) {
                            console.log(prevGuess, document.getElementById(prevGuess.toString()).style.backgroundColor)
                            if (document.getElementById(prevGuess.toString()).style.backgroundColor === output[12]) {
                                document.getElementById('13').style.backgroundColor = 'gray';
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'gray';
                                prevGuess = 17;
                                remaining -= 2;
                                if (!remaining) {
                                    document.getElementById('score').innerText = 'Great Job! Your score: ' + score;
                                    document.getElementById('reset').innerText = 'Start Over';
                                    if({user}.user['value'] !== ''){
                                        recordScore({user},score)
                                    }
                                }
                            } else {
                                document.getElementById('13').style.backgroundColor = output[12];
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'white';
                                prevGuess = 13;
                            }
                        } else {
                            prevGuess = 13;
                            document.getElementById('13').style.backgroundColor = output[12];
                        }
                    }
                }}>?</button>
                <button id='14' style={squareStyle} onClick={() => {
                    if (document.getElementById('14').style.backgroundColor === 'white') {
                        document.getElementById('score').innerText = 'Score: ' + (++score);
                        if (prevGuess !== 17) {
                            console.log(prevGuess, document.getElementById(prevGuess.toString()).style.backgroundColor)
                            if (document.getElementById(prevGuess.toString()).style.backgroundColor === output[13]) {
                                document.getElementById('14').style.backgroundColor = 'gray';
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'gray';
                                prevGuess = 17;
                                remaining -= 2;
                                if (!remaining) {
                                    document.getElementById('score').innerText = 'Great Job! Your score: ' + score;
                                    document.getElementById('reset').innerText = 'Start Over';
                                    if({user}.user['value'] !== ''){
                                        recordScore({user},score)
                                    }
                                }
                            } else {
                                document.getElementById('14').style.backgroundColor = output[13];
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'white';
                                prevGuess = 14;
                            }
                        } else {
                            prevGuess = 14;
                            document.getElementById('14').style.backgroundColor = output[13];
                        }
                    }
                }}>?</button>
                <button id='15' style={squareStyle} onClick={() => {
                    if (document.getElementById('15').style.backgroundColor === 'white') {
                        document.getElementById('score').innerText = 'Score: ' + (++score);
                        if (prevGuess !== 17) {
                            console.log(prevGuess, document.getElementById(prevGuess.toString()).style.backgroundColor)
                            if (document.getElementById(prevGuess.toString()).style.backgroundColor === output[14]) {
                                document.getElementById('15').style.backgroundColor = 'gray';
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'gray';
                                prevGuess = 17;
                                remaining -= 2;
                                if (!remaining) {
                                    document.getElementById('score').innerText = 'Great Job! Your score: ' + score;
                                    document.getElementById('reset').innerText = 'Start Over';
                                    if({user}.user['value'] !== ''){
                                        recordScore({user},score)
                                    }
                                }
                            } else {
                                document.getElementById('15').style.backgroundColor = output[14];
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'white';
                                prevGuess = 15;
                            }
                        } else {
                            prevGuess = 15;
                            document.getElementById('15').style.backgroundColor = output[14];
                        }
                    }
                }}>?</button>
                <button id='16' style={squareStyle} onClick={() => {
                    if (document.getElementById('16').style.backgroundColor === 'white') {
                        document.getElementById('score').innerText = 'Score: ' + (++score);
                        if (prevGuess !== 17) {
                            console.log(prevGuess, document.getElementById(prevGuess.toString()).style.backgroundColor)
                            if (document.getElementById(prevGuess.toString()).style.backgroundColor === output[15]) {
                                document.getElementById('16').style.backgroundColor = 'gray';
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'gray';
                                prevGuess = 17;
                                remaining -= 2;
                                if (!remaining) {
                                    document.getElementById('score').innerText = 'Great Job! Your score: ' + score;
                                    document.getElementById('reset').innerText = 'Start Over';
                                    if({user}.user['value'] !== ''){
                                        recordScore({user},score)
                                    }
                                }
                            } else {
                                document.getElementById('16').style.backgroundColor = output[15];
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'white';
                                prevGuess = 16;
                            }
                        } else {
                            prevGuess = 16;
                            document.getElementById('16').style.backgroundColor = output[15];
                        }
                    }
                }}>?</button>
            </div>
            <br />
            <div>
                <button style={bottomButtons} id='reset' onClick={() => {
                    for (var i = 1; i < 17; i++) {
                        document.getElementById(i.toString()).style.background = 'white';
                        document.getElementById(i.toString()).textContent = '?';
                    }
                    initialize();
                    document.getElementById('score').innerText = 'Score: ' + score;
                    document.getElementById('reset').innerText = 'Reset';
                }}>Reset</button>
            </div>
            <p style={instructions}>Instructions: Clicking on a white square will reveal its secret
            color. Each secret color appears two times. The goal of this game is to match each square
            with the other square that has the same secret color. This is done by clicking on the
            squares consecutively. Make sure to be signed in to save your scores!</p>
        </div >
    );
}

// randomize colors on grid and reset score
function initialize() {
    var location; //random number holder
    //colors to be used
    var colors = ["red", "red", "orange", "orange", "yellow", "yellow", "green", "green", "khaki", "khaki", "chartreuse", "chartreuse", "magenta", "magenta", "aqua", "aqua"];
    for (var i = 0; i < 16; i++) {
        location = Math.floor(Math.random() * (16 - i)); //random number in color array
        output[i] = colors[location]; //sets corresponding square to color at random number
        colors.splice(location, 1); //remove color
    }
    score = 0;
    remaining = 16;
    prevGuess = 17;
}

// write score back to firebase if user logged in
function recordScore(u, s){
    if (u.user['value'] !== '' && u.user['value'] !== null) {
        var name = u.user['value'];     // get user name
        var total_s, total_p;           // will read total games played + total score

        fire.firestore().collection('users')
            .doc(name)
            .get()
            .then(function(doc){
                if(doc.exists){
                    total_p = doc.data()['mem_squares_played']
                    total_s = doc.data()['mem_squares_score']
                    fire.firestore().collection('users')
                        .doc(name)
                        .update({
                            mem_squares_played : (total_p + 1),
                            mem_squares_score : total_s + s
                        })
                }
            })

        var date = new Date();          // get current date

        // formulate data entry
        var entry =  (date.getMonth()+1).toString() + "-" + date.getDate().toString() + "-" + date.getFullYear().toString() + " " + date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
        
        // write to firebase
        fire.firestore().collection('users')
            .doc(name)
            .collection('memory-squares')
            .doc(entry)
            .set({
                score : s,
        });
    } else {
        console.log('no user signed in')
    }
}

export default MemorySquares;
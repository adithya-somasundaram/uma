import React from 'react'

var output = []; //random colors array
var score = 0;
var prevGuess = 17;

function MemorySquares() {

    initialize();

    const squareStyle = {
        width: '100px',
        height: '100px',
        padding: '5px',
        backgroundColor: 'white'
    }

    const bottomButtons = {
        width: '100px',
        padding: '10px'
    }
    return (
        <div className="App-header">
            <h2>Memory Squares</h2>
            <h3 id='score'>Score: {score}</h3>
            <div>
                <button id='1' style={squareStyle} onClick={() => {
                    if (document.getElementById('1') !== 'gray' && prevGuess !== 0) {
                        document.getElementById('score').innerText = 'Score: ' + (++score);
                        if (prevGuess !== 17) {
                            if (document.getElementById(prevGuess.toString()).style.backgroundColor === output[0]) {
                                document.getElementById('1').style.backgroundColor = 'gray';
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'gray';
                                prevGuess = 17;
                            } else {
                                prevGuess = 0;
                                document.getElementById('1').style.backgroundColor = output[0];
                            }
                        } else {
                            prevGuess = 0;
                            document.getElementById('1').style.backgroundColor = output[0];
                        }
                    }
                }}>?</button>
                <button id='2' style={squareStyle} onClick={() => {
                    document.getElementById('2').style.backgroundColor = output[1];
                    document.getElementById('score').innerText = 'Score: ' + (++score);
                }}>?</button>
                <button id='3' style={squareStyle} onClick={() => {
                    document.getElementById('3').style.backgroundColor = output[2];
                    document.getElementById('score').innerText = 'Score: ' + (++score);
                }}>?</button>
                <button id='4' style={squareStyle} onClick={() => {
                    document.getElementById('4').style.backgroundColor = output[3];
                    document.getElementById('score').innerText = 'Score: ' + (++score);
                }}>?</button>
            </div>
            <div>
                <button id='5' style={squareStyle} onClick={() => {
                    document.getElementById('5').style.backgroundColor = output[4];
                    document.getElementById('score').innerText = 'Score: ' + (++score);
                }}>?</button>
                <button id='6' style={squareStyle} onClick={() => {
                    document.getElementById('6').style.backgroundColor = output[5];
                    document.getElementById('score').innerText = 'Score: ' + (++score);
                }}>?</button>
                <button id='7' style={squareStyle} onClick={() => {
                    document.getElementById('7').style.backgroundColor = output[6];
                    document.getElementById('score').innerText = 'Score: ' + (++score);
                }}>?</button>
                <button id='8' style={squareStyle} onClick={() => {
                    document.getElementById('8').style.backgroundColor = output[7];
                    document.getElementById('score').innerText = 'Score: ' + (++score);
                }}>?</button>
            </div>
            <div>
                <button id='9' style={squareStyle} onClick={() => {
                    document.getElementById('9').style.backgroundColor = output[8];
                    document.getElementById('score').innerText = 'Score: ' + (++score);
                }}>?</button>
                <button id='10' style={squareStyle} onClick={() => {
                    document.getElementById('10').style.backgroundColor = output[9];
                    document.getElementById('score').innerText = 'Score: ' + (++score);
                }}>?</button>
                <button id='11' style={squareStyle} onClick={() => {
                    document.getElementById('11').style.backgroundColor = output[10];
                    document.getElementById('score').innerText = 'Score: ' + (++score);
                }}>?</button>
                <button id='12' style={squareStyle} onClick={() => {
                    document.getElementById('12').style.backgroundColor = output[11];
                    document.getElementById('score').innerText = 'Score: ' + (++score);
                }}>?</button>
            </div>
            <div>
                <button id='13' style={squareStyle} onClick={() => {
                    document.getElementById('13').style.backgroundColor = output[12];
                    document.getElementById('score').innerText = 'Score: ' + (++score);
                }}>?</button>
                <button id='14' style={squareStyle} onClick={() => {
                    document.getElementById('14').style.backgroundColor = output[13];
                    document.getElementById('score').innerText = 'Score: ' + (++score);
                }}>?</button>
                <button id='15' style={squareStyle} onClick={() => {
                    document.getElementById('15').style.backgroundColor = output[14];
                    document.getElementById('score').innerText = 'Score: ' + (++score);
                }}>?</button>
                <button id='16' style={squareStyle} onClick={() => {
                    document.getElementById('16').style.backgroundColor = output[15];
                    document.getElementById('score').innerText = 'Score: ' + (++score);
                }}>?</button>
            </div>
            <br />
            <div>
                <button style={bottomButtons} onClick={() => {
                    for (var i = 1; i < 17; i++) {
                        document.getElementById(i.toString()).style.background = 'white';
                        document.getElementById(i.toString()).textContent = '?';
                    }
                    initialize();
                    document.getElementById('score').innerText = 'Score: ' + score;

                }}>Reset</button>
            </div>

        </div >
    );
}

function initialize() {
    var location; //random number holder
    //colors to be used
    var colors = ["red", "red", "orange", "orange", "yellow", "yellow", "green", "green", "Khaki", "Khaki", "Chartreuse", "Chartreuse", "magenta", "magenta", "aqua", "aqua"];
    for (var i = 0; i < 16; i++) {
        location = Math.floor(Math.random() * (16 - i)); //random number in color array
        output[i] = colors[location]; //sets corresponding square to color at random number
        colors.splice(location, 1); //remove color
    }
    score = 0;
    prevGuess = 17;
}

export default MemorySquares;
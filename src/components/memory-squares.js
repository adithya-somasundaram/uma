import React from 'react'

var output = []; //random colors array
var score = 0;
var prevGuess = 17;

function MemorySquares() {

    initialize();
    console.log(output)

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
                    if (document.getElementById('1').style.backgroundColor === 'white') {
                        document.getElementById('score').innerText = 'Score: ' + (++score);
                        if (prevGuess !== 17) {
                            console.log(prevGuess, document.getElementById(prevGuess.toString()).style.backgroundColor)
                            if (document.getElementById(prevGuess.toString()).style.backgroundColor === output[0]) {
                                document.getElementById('1').style.backgroundColor = 'gray';
                                document.getElementById(prevGuess.toString()).style.backgroundColor = 'gray';
                                prevGuess = 17;
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
    var colors = ["red", "red", "orange", "orange", "yellow", "yellow", "green", "green", "khaki", "khaki", "chartreuse", "chartreuse", "magenta", "magenta", "aqua", "aqua"];
    for (var i = 0; i < 16; i++) {
        location = Math.floor(Math.random() * (16 - i)); //random number in color array
        output[i] = colors[location]; //sets corresponding square to color at random number
        colors.splice(location, 1); //remove color
    }
    score = 0;
    prevGuess = 17;
}

export default MemorySquares;
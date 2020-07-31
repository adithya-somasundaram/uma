import React, { useState } from 'react'

var u_name = "", p_name = "";
function SignIn() {
    // const 

    return (
        <div className="App-header">
            <h2>Sign In</h2>
            <div>
                <label>Username: </label>
                <input id='username' type='text' onChange={() => {setUname(document.getElementById('username').value)}} />
                <br></br>
                <label>Password: </label>
                <input id='password' type='password' onChange={() => {setPname(document.getElementById('password').value)}} />
            </div>
            <br></br>
            <button onClick={()=>{verify()}}>Enter</button>
        </div>
    );
}

function setUname(input) {
    u_name = input;
}

function setPname(input) {
    p_name = input;
}

function verify() {
    
}

export default SignIn;
import React, { useContext } from 'react'

// import user hook
import { User } from '../User'

// import firebase reference
import fire from '../fire'
import { Link } from 'react-router-dom';

// global vars holding username and password
var u_name = "", p_name = "";

function SignIn() {
    const { value, setValue } = useContext(User);

    // local style sheets
    const text = {
        float : 'left',
    }

    const link = {
        float : 'left',
        marginTop : '30px',
        paddingLeft : '10px',
        paddingRight : '10px'
    }

    const enter = {
        padding : '10px',
        width : '20%'
    }

    const test = {
        width : '145px',
        marginLeft : '5px'
    }

    // display sign in form if user not signed in
    if (value == null || value === '') {
        return (
            <div className="App-general">
                <h2 id='Header'>Sign In</h2>
                <div>
                    <label>Username: </label>
                    <input id='username' type='text' onChange={() => { setUname(document.getElementById('username').value) }} />
                    <br></br>
                    <label>Password: </label>
                    <input style={test}id='password' type='password' onChange={() => { setPname(document.getElementById('password').value) }} />
                </div>
                <br></br>
                <button style={enter} onClick={() => {
                    var ref = fire.firestore().collection('users').doc(u_name);

                    ref.get().then(function (doc) {
                        if (doc.exists) {
                            if (doc.data()['password'] === p_name) {
                                setValue(u_name)
                            }
                        } else {
                            alert("User does not exist");
                        }
                    }).catch(function (error) {
                        alert("System Error");
                        console.log("Error getting document:", error);
                    });
                }}>Enter</button>
                <div>
                    <h4 style={text}>Don't have an account? click </h4>
                    <Link style={link} to='/sign-up' >here</Link>
                    <h4 style={text}>to sign up!</h4>
                </div>
            </div>
        );
    }

    // display welcome if user signed in
    return (
        <div className="App-general">
            <br></br>
            <h2>Welcome {value}</h2>
            <h3>Click on one of the games in the top left to get started.</h3>
        </div>
    );
}

// input handler for username
function setUname(input) {
    u_name = input;
}

// input handler for password
function setPname(input) {
    p_name = input;
}

export default SignIn;
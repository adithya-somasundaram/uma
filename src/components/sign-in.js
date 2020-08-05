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

    const text = {
        // position : 'absolute',
        // alignItems : 'flex-end'
        float : 'left',
    }

    const link = {
        float : 'left',
        marginTop : '35px',
        paddingLeft : '10px',
        paddingRight : '10px'
    }

    // display sign in form if user not signed in
    if (value == null || value === '') {
        return (
            <div className="App-header">
                <h2 id='Header'>Sign In</h2>
                <div>
                    <label>Username: </label>
                    <input id='username' type='text' onChange={() => { setUname(document.getElementById('username').value) }} />
                    <br></br>
                    <label>Password: </label>
                    <input id='password' type='password' onChange={() => { setPname(document.getElementById('password').value) }} />
                </div>
                <br></br>
                <button onClick={() => {
                    var ref = fire.firestore().collection('users').doc(u_name);

                    ref.get().then(function (doc) {
                        if (doc.exists) {
                            if (doc.data()['password'] === p_name) {
                                console.log('success!')
                                setValue(u_name)
                                // document.getElementById('Header').innerText = "Welcome " + u_name;
                                console.log({ value }, u_name)
                            } else {
                                console.log('failure')
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
        <div className="App-header">
            <br></br>
            <h2>Welcome {value}</h2>
            <h3>Click on one of the games in the top left to get started.</h3>
        </div>
    );
}

function setUname(input) {
    u_name = input;
}

function setPname(input) {
    p_name = input;
}

export default SignIn;
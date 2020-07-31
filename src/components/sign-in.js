import React, { useContext } from 'react'
import fire from '../fire'

import { User } from '../User'

var u_name = "", p_name = "";

function SignIn() {
    const { value, setValue } = useContext(User);

    return (
        <div className="App-header">
            <h2>Sign In</h2>
            <div>
                <label>Username: </label>
                <input id='username' type='text' onChange={() => { setUname(document.getElementById('username').value) }} />
                <br></br>
                <label>Password: </label>
                <input id='password' type='password' onChange={() => { setPname(document.getElementById('password').value) }} />
            </div>
            <div>{value}</div>
            <br></br>
            <button onClick={() => {
                var ref = fire.firestore().collection('users').doc(u_name);

                ref.get().then(function (doc) {
                    if (doc.exists) {
                        if (doc.data()['password'] === p_name) {
                            console.log('success!')
                            setValue(u_name)
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
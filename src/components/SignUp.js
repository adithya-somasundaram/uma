import React, {useContext} from 'react'

// import firebase reference
import fire from '../fire'

// import user hooks
import {User} from '../User'

// local variables
var users = []       
var secrets = []
var username = ''
var password = ''
var confirm_password = ''

function SignUp() {
    // set up user hook
    const { setValue } = useContext(User);

    // local styling
    const enter = {
        padding : '10px',
        width : '20%'
    }

    const user = {
        marginRight : '11vh'
    }
    const pass = {
        marginRight : '11.75vh'
    }

    // store usernames from firebase
    store()

    return (
        <div className="App-general">
            <p className="title">Sign Up</p>
            <form>
                <label style={user}>Username: </label>
                <input id='username' type='text' onChange={() => handleUsernameChange(document.getElementById('username').value)} />
                <br></br>
                <label style={pass}>Password: </label>
                <input type='password' id='password' onChange={() => handlePasswordChange(document.getElementById('password').value)} />
                <br></br>
                <label>Confirm Password: </label>
                <input type='password' id='c_password' onChange={() => handleConfirmPasswordChange(document.getElementById('c_password').value)} />
            </form>
            <br></br>
            <button style={enter} onClick={() => {
                // username and password must pass following conditions:
                if (username.length < 5) {
                    alert("Username must be greater than 5 characters")
                } else if (password.length < 7) {
                    alert("Password must be greater than 7 characters")
                } else if (confirm_password !== password) {
                    alert("Passwords do not match!")
                } else if (users.includes(username)) {
                    alert("Username taken :(")
                } else if (secrets.includes(password)) {
                    alert("Password taken :(")
                } else {
                    // create new account and login
                    fire.firestore().collection('users').doc(username).set({
                        password: password,
                        mem_squares_played: 0,
                        mem_squares_score: 0,
                        default_pic_played: 0,
                        default_pic_score: 0
                    });
                    setValue(username)      // login as new account
                    alert("New account created :)");
                }
            }}>Enter</button>
        </div>
    );

}

// store username input
function handleUsernameChange(input) {
    username = input
}

// store password input
function handlePasswordChange(input) {
    password = input
}

// store password confirmation input
function handleConfirmPasswordChange(input) {
    confirm_password = input
}

// store usernames and passwords from firebase
function store () {
    fire.firestore().collection('users').get().then(
        snapshot => {
            const usernames = []
            const second_secrets = []
            snapshot.forEach(doc => {
                usernames.push(doc.id)
                second_secrets.push(doc.data()['password'])
            })
            users = usernames
            secrets = second_secrets
        }
    );
}

export default SignUp;
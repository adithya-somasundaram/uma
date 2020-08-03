import React, {useContext} from 'react'

// import firebase reference
import fire from '../fire'

// import user hooks
import {User} from '../User'

var users = []
var secrets = []
var username = ''
var password = ''
var confirm_password = ''

function SignUp() {
    const { setValue } = useContext(User);

    // store usernames from firebase
    store()

    return (
        <div className="App-header">
            <h2>Sign Up</h2>
            <form>
                <label>Username: </label>
                <input id='username' type='text' onChange={() => handleUsernameChange(document.getElementById('username').value)} />
                <br></br>
                <label>Password: </label>
                <input type='password' id='password' onChange={() => handlePasswordChange(document.getElementById('password').value)} />
                <br></br>
                <label>Confirm Password: </label>
                <input type='password' id='c_password' onChange={() => handleConfirmPasswordChange(document.getElementById('c_password').value)} />
            </form>
            <br></br>
            <button onClick={() => {
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
                    fire.firestore().collection('users').doc(username).set({
                        password: password
                    });
                    setValue(username)
                    alert("New account created :)");
                }
            }}>Enter</button>
        </div>
    );

}

// input event handlers
function handleUsernameChange(input) {
    username = input
}

function handlePasswordChange(input) {
    password = input
}

function handleConfirmPasswordChange(input) {
    confirm_password = input
}

function store() {
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
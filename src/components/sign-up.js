import React, { Component } from 'react'
import fire from '../fire'

class SignUp extends Component {
    users = []
    componentDidMount(){
        fire.firestore().collection('users').get().then(
            snapshot => {
                const usernames = []
                const secrets = []
                snapshot.forEach(doc => {
                    usernames.push(doc.id)
                    secrets.push(doc.data()['password'])
                })
                this.setState({
                    users: usernames,
                    secret: secrets
                })
            }
        );
    }

    constructor(props){
        super(props);

        this.state = {
            username : '',
            password : '',
            confirm_password : '',
            users: [],
            secret: []
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password : event.target.value
        })
    }

    handleConfirmPasswordChange = (event) => {
        this.setState({
            confirm_password : event.target.value
        })
    }

    createAccount = () => {
        if(this.state.username.length < 5){
            alert("Username must be greater than 5 characters")
        }else if(this.state.password.length < 7){
            alert("Password must be greater than 7 characters")
        }else if(this.state.confirm_password !== this.state.password){
            alert("Passwords do not match!")
        } else if (this.state.users.includes(this.state.username)){
            alert("Username taken :(")
        } else if (this.state.secret.includes(this.state.password)){
            alert("Password taken :(")
        } else {
            fire.firestore().collection('users').doc(this.state.username).set({
                password : this.state.password
            });
            alert("New account created :)");
        }
    }

    render() {
        return (
            <div className="App-header">
                <h2>Sign Up</h2>
                <form>
                    <label>Username: </label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
                    <br></br>
                    <label>Password: </label>
                    <input type='password' value={this.state.password} onChange={this.handlePasswordChange}/>
                    <br></br>
                    <label>Confirm Password: </label>
                    <input type='password' value={this.state.confirm_password} onChange={this.handleConfirmPasswordChange}/>
                </form>
                <br></br>
                <button onClick = {this.createAccount}>Enter</button>
            </div>
        );
    }
}

export default SignUp;
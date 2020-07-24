import React, { Component } from 'react'

class SignUp extends Component {

    constructor(props){
        super(props);

        this.state = {
            username : '',
            password : '',
            confirm_password : ''
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

    render() {
        return (
            <div className="App-header">
                <h2>Sign Up</h2>
                <form>
                    <label>Username: </label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
                    <br></br>
                    <label>Password: </label>
                    <input type='text' value={this.state.password} onChange={this.handlePasswordChange}/>
                    <br></br>
                    <label>Confirm Password: </label>
                    <input type='text' value={this.state.confirm_password} onChange={this.handleConfirmPasswordChange}/>
                </form>
                <br></br>
                <button>Enter</button>
            </div>
        );
    }
}

export default SignUp;
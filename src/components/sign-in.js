import React, { Component } from 'react'

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            username : '',
            password : ''
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

    render() {
        return (
            <div className="App-header">
                <h2>Sign In</h2>
                <form>
                    <label>Username: </label>
                    <input type='text' value= {this.state.username} onChange={this.handleUsernameChange}/>
                    <br></br>
                    <label>Password: </label>
                    <input type='text' value= {this.state.password} onChange={this.handlePasswordChange}/>
                </form>
                <br></br>
                <button>Enter</button>
            </div>
        );
    }
}

export default SignIn;
import React, { Component } from 'react'
import { Link } from "react-router-dom";

class PictureGame extends Component {
    constructor(props) {
        super(props)

        this.linkStyle = {
            float: 'right',
            padding: '10px',
            fontSize: '100%',
            fontFamily: 'Arial',
            marginTop: 'auto',
            marginBottom: '10px'
        }
    }

    render() {
        return (
            <div className="App-header">
                <h2>Picture Game</h2>
                <ul>
                    <Link to='/default-pic'>
                        <button className="game-icons">Use Default Game</button>
                    </Link>
                    <br></br>
                    <Link to='/memory-squares'>
                        <button className="game-icons">Create Custom Game</button>
                    </Link>
                    <br></br>
                    <Link to='/memory-squares'>
                        <button className="game-icons">Use Custom Game</button>
                    </Link>
                </ul>
            </div>
        );
    }

}

export default PictureGame;
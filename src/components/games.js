import React, { Component } from 'react'
import { Link } from "react-router-dom";

import DefaultPic from './default-pic'

class PictureGame extends Component {
    constructor(props){
        super(props)

        console.log(this.props.name)
    }
    render() {
        if(this.props.name == null || this.props.name === ''){
            return(
                <div className="App-header">
                    <DefaultPic/>
                </div>
            )
        }
        return (
            <div className="App-header">
                <h2>Picture Game</h2>
                <ul>
                    <Link to='/picture-game/default'>
                        <button className="game-icons">Use Default Game</button>
                    </Link>
                    <br></br>
                    <Link to='/picture-game/create'>
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
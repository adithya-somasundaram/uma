import React, { useContext } from 'react'
import { Link } from "react-router-dom";

import DefaultPic from './DefaultPicGame'
import { User } from '../User'

function PictureGame() {
    const user = useContext(User)
    console.log(user)
    if (user.value == null || user.value === '') {
        return (
            <DefaultPic />
        );
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
                <Link to='/picture-game/custom'>
                    <button className="game-icons">Use Custom Game</button>
                </Link>
            </ul>
        </div>
    );
}

export default PictureGame;
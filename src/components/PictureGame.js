import React, { Component } from 'react'
import { Link } from "react-router-dom";

// import default picture game and user hook
import DefaultPicGame from './DefaultPicGame'
// import { User } from '../User'

// import firebase connection
import fire from '../fire'

class PictureGame extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user_games: [],
            custom_buttons : []
        }
    }

    async componentDidMount() {
        console.log(this.props)
        if (this.props.user != null && this.props.user !== '') {
            await fire.firestore().collection('users')
                .doc(this.props.user)
                .collection('custom-pic-games')
                .get()
                .then(snapshot => {
                    var temp = []
                    snapshot.forEach(doc => {
                        temp.push(doc.id)
                    })

                    var temp2 = temp.map(game => <button className="game-icons">{game}</button>)
                    this.setState({ user_games: temp, custom_buttons : temp2 })
                })
        }
        console.log(this.state)
    }

    render() {
        if (this.props.user == null || this.props.user === '') {
            return (
                <DefaultPicGame />
            );
        }
        return (
            <div className="App-general">
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
                        {this.state.custom_buttons}
                    </Link>
                </ul>
            </div>
        );
    }
}

export default PictureGame;
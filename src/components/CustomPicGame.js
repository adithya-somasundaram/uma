import React, { Component } from 'react'

// import firebase reference
import fire from '../fire'

class CustomPicGame extends Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [],
            total: 0,
            index: 0,
            score: 0,
            inputStyle: {
                position: 'absolute',
                bottom: '10px',
                marginBottom: '50px',
                float: 'right',
                marginTop: 'auto',
            },
            bottomButtons: {
                position: 'absolute',
                bottom: '5px',
                float: 'right',
                marginTop: 'auto'
            }
        }
    }

    // store custom game images
    async componentDidMount() {
        if (this.props.user != null && this.props.user !== '') {

            // store path to custom game in storage
            var path = '/' + this.props.user + '/custom-pic-game/' + this.props.location.state['game']['game'] + '/';

            // store images and names in state.images
            await fire.storage().ref().child(path).listAll().then(
                image => {
                    const temp = []
                    image.items.forEach(img => {
                        img.getDownloadURL().then(url => {
                            temp.push([img.name, url])
                            this.setState({
                                images: temp,
                                total: temp.length
                            })
                        })
                    })
                }
            )
        }
    }

    incrementIndex() {
        this.setState((prevState) => ({
            index: prevState.index + 1
        }))
    }

    incrementScore() {
        this.setState((prevState) => ({
            score: prevState.score + 1
        }))
    }

    recordScore(user, real_score) {
        console.log(user, real_score)
        if (user !== '' && user !== null) {
            var name = user    // get user name
            var game_name = this.props.location.state['game']['game']
            var total_s, total_p;           // will read total games played + total score

            fire.firestore().collection('users')
                .doc(name)
                .collection('custom-pic-games')
                .doc(game_name)
                .get()
                .then(function (doc) {
                    if (doc.exists) {
                        total_p = doc.data()['games_played']
                        total_s = doc.data()['total_score']
                        fire.firestore().collection('users')
                            .doc(name)
                            .collection('custom-pic-games')
                            .doc(game_name)
                            .update({
                                games_played: (total_p + 1),
                                total_score: total_s + real_score
                            })
                    }
                })

            var date = new Date();          // get today's date

            // formulate entry
            var entry = (date.getMonth() + 1).toString() + "-" + date.getDate().toString() + "-" + date.getFullYear().toString() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

            // write to firebase
            fire.firestore().collection('users')
                .doc(name)
                .collection('picture-game')
                .doc(entry)
                .set({
                    score: real_score,
                    total_points: this.state.total,
                    collection: game_name
                });
        }
    }

    reset() {
        this.setState({
            score : 0,
            index : 0
        })

    }

    render() {
        if (this.props.user == null || this.props.user === '') {
            return (
                <div className="App-general">
                    Sign in to create a custom game!
                </div>
            )
        } else if (this.state.images[0] === undefined) {
            return (
                <div className="App-general">
                    <h2>Loading...</h2>
                </div>)
        }
        return (
            <div className="App-general">
                <p className = "title">{this.props.location.state['game']['game']}</p>
                <img id="image" width="30%" src={this.state.images[this.state.index % this.state.total][1]} alt="rip"></img>
                <div style={this.state.inputStyle}>
                    <label>Image name: </label>
                    <input id='input' />
                    <button onClick={() => {
                        var current = this.state.index
                        var score = this.state.score
                        if (current < this.state.total) {
                            if (document.getElementById('input').value.toUpperCase() ===
                                this.state.images[current][0].toUpperCase()) {
                                this.incrementScore()
                                score += 1
                            }
                            document.getElementById('input').value = ''
                            this.incrementIndex()
                            current += 1
                            if (current < this.state.total) {
                                console.log(current, this.state.total)
                                document.getElementById('image').src = this.state.images[current][1];
                            }
                        }
                        console.log(score)
                        if (current === this.state.total) {
                            console.log('HERE')
                            this.recordScore(this.props.user, score)
                            this.incrementIndex();
                        }
                    }} >Check</button>
                </div>
                <div style={this.state.bottomButtons}>
                    <button onClick={() => {
                        var current = this.state.index
                        var score = this.state.score
                        if (current < this.state.total) {
                            this.incrementIndex()
                            this.incrementScore()
                            current += 1
                            score += 1
                            if (current < this.state.total) {
                                document.getElementById('image').src = this.state.images[current][1];
                            }
                        }
                        if (current === this.state.total) {
                            this.recordScore(this.props.user, score)
                            this.incrementIndex();
                        }
                    }} >Overwrite</button>
                    <button onClick={() => {
                        var current = this.state.index
                        var score = this.state.score
                        if (current < this.state.total) {
                            this.incrementIndex();
                            current += 1
                            if (current < this.state.total) {
                                document.getElementById('image').src = this.state.images[current][1];
                            }
                        }
                        if (current === this.state.total) {
                            this.recordScore(this.props.user, score)
                            this.incrementIndex();
                        }
                    }} >Skip</button>
                    <button onClick={() => this.reset()} >Start Over</button>
                </div>
            </div>)
    }
}

export default CustomPicGame;
import React, { Component } from 'react'


// import firebase reference
import fire from '../fire'

class MyProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        if (this.props.user !== null && this.props.user !== '') {
            var temp = []
            var test  = {
                marginTop : "0px",
                display : "flex-box",
                flexDirection : "row"
            }
            await fire.firestore().collection('users')
                .doc(this.props.user)
                .get()
                .then(function (doc) {
                    var data = doc.data()
                    temp.push(<h4>Memory Squares</h4>)
                    temp.push(<p style={test}>Games Played: {data['mem_squares_played']}</p>)
                    temp.push(<p style={test}>Average Score: {data['mem_squares_score'] / data['mem_squares_played']}</p>)
                    temp.push(<br/>)
                    temp.push(<h4>Default Picture Game</h4>)
                    temp.push(<p style={test}>Games Played: {data['default_pic_played']}</p>)
                    temp.push(<p style={test}>Average Score: {data['default_pic_score'] / data['default_pic_played']}</p>)
                })
            await fire.firestore().collection('users')
                .doc(this.props.user)
                .collection('custom-pic-games')
                .get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        temp.push(<br/>)
                        temp.push(<h4>{doc.id}</h4>)
                        temp.push(<p style={test}>Games Played: {doc.data()['games_played']}</p>)
                        temp.push(<p style={test}>Average Score: {doc.data()['total_score']/doc.data()['games_played']} / {doc.data()['size']}</p>)
                    })

                })
            this.setState({
                data: temp
            })
            console.log(this.state.data)
        }
    }

    render() {
        if (this.props.user == null || this.props.user === '') {
            return (
                <div className="App-general">
                    <p className="title">Log in to view your profile!</p>
                </div>
            )
        } else if (this.state.data[0] === undefined) {
            return (
                <div className="App-general">
                    <h2>Loading...</h2>
                </div>
            )
        } else {
            return (
                <div className="App-general">
                    <p className="title">{this.props.user}</p>
                    {this.state.data}
                </div>
            )
        }
    }
}

export default MyProfile;
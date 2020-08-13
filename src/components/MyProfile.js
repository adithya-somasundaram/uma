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
            var left = {
                // float : "left"
            }
            var right = {
                // paddingLeft : "5px"
            }
            await fire.firestore().collection('users')
                .doc(this.props.user)
                .get()
                .then(function (doc) {
                    var data = doc.data()
                    temp.push(<div>
                        <div style={left}>Memory Squares Games Played: </div>
                        <div style={right}>{data['mem_squares_played']}</div>
                        <div style={left}>Average Memory Squares Score: </div>
                        <div style={right}>{data['mem_squares_score'] / data['mem_squares_played']}</div>
                    </div>
                    )
                    // temp.push(<br/>)
                    temp.push(<div>
                        <div style={left}>Default Picture Games Played: </div>
                        <div style={right}>{data['default_pic_played']}</div>
                        <div style={left}>Average Default Picture Score: </div>
                        <div style={right}>{data['default_pic_score'] / data['default_pic_played']}</div>
                    </div>
                    )
                    // temp.push(<br/>)
                })
            await fire.firestore().collection('users')
                .doc(this.props.user)
                .collection('custom-pic-games')
                .get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        temp.push(<div>
                            <p style={left}>{doc.id} Games Played: </p>
                            <p style={right}>{doc.data()['games_played']}</p>
                            <p style={left}>Average {doc.id} Score: </p>
                            <p style={right}>{doc.data()['total_score']/doc.data()['games_played']} / {doc.data()['size']}</p>
                        </div>
                        )
                        temp.push(<br/>)
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
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
            await fire.firestore().collection('users')
                .doc(this.props.user)
                .get()
                .then(function (doc) {
                    var data = doc.data()
                    temp.push(<div>Memory Squares Games Played: {data['mem_squares_played']}</div>)
                    temp.push(<div>Average Memory Squares Score: {data['mem_squares_score']/data['mem_squares_played']}</div>)
                    temp.push(<div>Default Picture Games Played: {data['default_pic_played']}</div>)
                    temp.push(<div>Average Default Picture Score: {data['default_pic_score']/data['default_pic_played']}</div>)
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


    // storeData(user.value, data)

    // var data_icons = data.map(entry => (<div>{entry}</div>))

    // console.log(data)
    // return (
    //     <div className="App-general">
    //         <p className="title">{user.value}</p>
    //         {data_icons}
    //     </div>
    // )
}

function storeData(username, out) {
    fire.firestore().collection('users')
        .doc(username)
        .get()
        .then(function (doc) {
            if (doc.exists) {
                const temp = doc.data()
                out[0] = temp['mem_squares_played']
                out[1] = temp['mem_squares_score']
                out[2] = temp['default_pic_played']
                out[3] = temp['default_pic_score']
                console.log(doc)
            } else {
                alert('System error');
            }
        }
        )
}

export default MyProfile;
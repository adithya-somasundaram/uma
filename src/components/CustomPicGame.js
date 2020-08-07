import React, {Component} from 'react'

// import firebase reference
import fire from '../fire'

class CustomPicGame extends Component {
    constructor(props){
        super(props)

        this.state = {
            images : [],
            length : 0
        }
    }

    // store custom game images
    async componentDidMount(){
        if(this.props.user != null && this.props.user !== ''){

            // store path to custom game in storage
            var path = '/' + this.props.user + '/custom-pic-game/' + this.props.location.state['game']['game'] +'/';

            // store images and names in state.images
            await fire.storage().ref().child(path).listAll().then(
                image => {
                    const temp = []
                    image.items.forEach(img=>{
                        img.getDownloadURL().then(url => {
                            temp.push([img.name, url])
                            this.setState({
                                images : temp
                            })
                        })
                    })
                }
            )
        }   
    }

    render(){
        if(this.props.user == null || this.props.user === ''){
            return (
                <div className="App-general">
                    Sign in to create a custom game!
                </div>
            )
        } else if(this.state.images[0] === undefined){
            return (
                <div className="App-general">
                   <h2>{this.props.location.state['game']['game']}</h2>
                </div>)
        }
        return (
            <div className="App-general">
               <h2>{this.props.location.state['game']['game']} lmao</h2>
               <img width={"40%"} src={this.state.images[0][1]} alt="rip"></img>
            </div>)
    }
}

export default CustomPicGame;
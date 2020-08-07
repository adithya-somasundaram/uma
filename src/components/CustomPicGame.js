import React, {Component} from 'react'

// import firebase reference
import fire from '../fire'

class CustomPicGame extends Component {
    constructor(props){
        super(props)

        this.state = {
            images : []
        }
    }

    async componentDidMount(){
        if(this.props.user != null && this.props.user !== ''){
            var path = '/' + this.props.user + '/custom-pic-game/' + this.props.location.state['game']['game'] +'/';
            await fire.storage().ref().child(path).listAll().then(
                image => {
                    var temp = []
                    image.items.forEach(img=>{
                        img.getDownloadURL().then(url => {
                            temp.push([img.name, url])
                        })
                    })
                    this.setState({
                        images : temp
                    })
                    console.log("HERE", this.state)
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
               <h2>{this.props.location.state['game']['game']}</h2>
               <img src={this.state.images[0][1]} alt="rip"></img>
            </div>)
    }
}

export default CustomPicGame;
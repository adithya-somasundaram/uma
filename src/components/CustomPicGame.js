import React, {Component} from 'react'

// import firebase reference
import fire from '../fire'

class CustomPicGame extends Component {
    constructor(props){
        super(props)

        this.state = {
            images : [],
            total : 0,
            index : 0,
            score : 0,
            inputStyle : {
                position: 'absolute',
                bottom: '10px',
                marginBottom: '50px',
                float: 'right',
                marginTop: 'auto',
            },
            bottomButtons : {
                position: 'absolute',
                bottom: '5px',
                float: 'right',
                marginTop: 'auto'
            }
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
                                images : temp,
                                total : temp.length
                            })
                        })
                    })
                }
            )
        }   
    }

    incrementIndex(old){
        this.setState({
            index : old + 1
        })
    }

    incrementScore(old){
        this.setState({
            score : old + 1
        })
    }

    recordScore(user, score){

    }

    reset(){

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
                   <h2>Loading...</h2>
                </div>)
        }
        return (
            <div className="App-general">
               <h2>{this.props.location.state['game']['game']} lmao</h2>
               <img width="30%" src={this.state.images[0][1]} alt="rip"></img>
               <div style={this.state.inputStyle}>
                <label>Image name: </label>
                <input id='input' />
                <button onClick={() => {
                    if (this.state.index < this.state.total) {
                        if (document.getElementById('input').value.toUpperCase() ===
                        this.state.images[this.state.index][1].toUpperCase()) {
                            this.incrementScore(this.state.score)
                        }
                        document.getElementById('input').value = ''
                        this.incrementIndex(this.state.index);
                        if (this.state.index < this.state.total) {
                            document.getElementById('image').src = this.state.images[this.state.index][0];
                        }
                    }
                    
                    if (this.state.index === this.state.total) {
                        this.recordScore(this.props.user, this.state.score)
                        this.incrementIndex(this.state.index);
                    }
                }} >Check</button>
            </div>
            <div style={this.state.bottomButtons}>
                <button onClick={() => {
                    if (this.state.index < this.state.total) {
                        this.incrementIndex(this.state.index);
                        this.incrementScore(this.state.score)
                        if (this.state.index < this.state.total) {
                            document.getElementById('image').src = this.state.images[this.state.index][0];
                        }
                    }
                    if (this.state.index === this.state.total) {
                        this.recordScore(this.props.user, this.state.score)
                        this.incrementIndex(this.state.index);
                    }
                }} >Overwrite</button>
                <button onClick={() => {
                    if (this.state.index < this.state.total) {
                        this.incrementIndex(this.state.index);
                        if (this.state.index < this.state.total) {
                            document.getElementById('image').src = this.state.images[this.state.index][0];
                        }
                    }
                    if (this.state.index === this.state.total) {
                        this.recordScore(this.props.user, this.state.score)
                        this.incrementIndex(this.state.index);
                    }
                }} >Skip</button>
                <button onClick={() => this.reset()} >Start Over</button>
            </div>
            </div>)
    }
}

export default CustomPicGame;
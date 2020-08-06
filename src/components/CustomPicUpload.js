import React, { useContext } from 'react'

// import user hook
import { User } from '../User'

// import firebase reference
import fire from '../fire'

var forStorage = []
var temp = null

function CustomPicUpload() {
    const user = useContext(User);
    forStorage = []
    temp = null
    
    if (user.value === '' || user.value == null) {
        return (
            <div className='App-header'>
                <h2>
                    Sign in to create a game!
                </h2>
            </div>
        )
    }
    return (
        <div className="App-header">
            <h2>Create a new game!</h2>
            <label >Custom set title: </label>
            <input id='title'/>
            <input type='file' id='input_file' onChange={(e) => {
                temp = e.target.files[0]
                console.log(temp)
            }} />
            <label>Image name:</label>
            <input id='img_name' type='text' />
            <button onClick={() => {
                if (temp === null) {
                    alert('Upload image!')
                } else if (document.getElementById('img_name').value === null
                    || document.getElementById('img_name').value === '') {
                    alert('Enter image name!')
                } else {
                    forStorage.push([document.getElementById('img_name').value, temp])
                    document.getElementById('img_name').value = ''
                    document.getElementById('input_file').value = null
                    alert('Image added successfully!')
                }
            }}>Add image</button>
            <button onClick={() => {
                var name = null
                forStorage.forEach(element => {
                    name = user.value + '/' + document.getElementById('title').value + '/' + element[0].toString()
                    fire.storage().ref(name).put(element[1])
                })
                alert('Custom game added!')
            }}>Finish custom set!</button>
        </div>
    )
}

export default CustomPicUpload;
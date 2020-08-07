import React, { useContext } from 'react'

// import user hook
import { User } from '../User'

// import firebase reference
import fire from '../fire'

// will hold images to be stored in firebase storage
var forStorage = []
// temp will hold single image
var temp = null

function CustomPicUpload() {
    const user = useContext(User);
    
    // if no user signed in, 
    if (user.value === '' || user.value == null) {
        return (
            <div className='App-general'>
                <h2>
                    Sign in to create a game!
                </h2>
            </div>
        )
    }
    return (
        <div className="App-general">
            <h2>Create a new game!</h2>
            <label >Custom set title: </label>
            <input id='title'/>
            <input type='file' id='input_file' onChange={(e) => {
                // image first stored in temp
                temp = e.target.files[0]
            }} />

            <label>Image name:</label>
            <input id='img_name' type='text' />
            <button onClick={() => {
                // check if temp holds image and is named
                if (temp === null) {
                    alert('Upload image!')
                } else if (document.getElementById('img_name').value === null
                    || document.getElementById('img_name').value === '') {
                    alert('Enter image name!')
                } else {
                    // store image name and temp in forStorage
                    forStorage.push([document.getElementById('img_name').value, temp])
                    document.getElementById('img_name').value = ''
                    document.getElementById('input_file').value = null
                    temp = null
                    alert('Image added successfully!')
                }
            }}>Add image</button>
            <button onClick={() => {
                var name = null // will hold firebase storage path

                // store each name and image in firebase storage
                forStorage.forEach(element => {
                    name = user.value + '/custom-pic-game/' + document.getElementById('title').value + '/' + element[0].toString()
                    fire.storage().ref(name).put(element[1])
                })

                // store custom game name and size in user's account
                fire.firestore().collection('users')
                    .doc(user.value)
                    .collection('custom-pic-games')
                    .doc(document.getElementById('title').value)
                    .set({
                    size : forStorage.length
                });
                alert('Custom game added!')
                document.getElementById('title').value = ''
                reset()
            }}>Finish custom set!</button>
        </div>
    )
}

// clear forStorage and temp
function reset(){
    forStorage = []
    temp = null
}

export default CustomPicUpload;
import React, {useContext} from 'react'

// hooks
import {User} from '../User'

function MyProfile(){
    const user = useContext(User);

    if(user.value === '' || user.value == null){
        return (
            <div className="App-general">
                <p className="title">Log in to view your profile!</p>
            </div>
        )
    }

    return (
        <div>
            {user.value}
        </div>
    )
}

export default MyProfile;
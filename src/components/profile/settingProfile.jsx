import React from 'react'
import Pic from '../images/profile.png'
import "./settingProfile.css"
function settingProfile() {
  return (
    <main>
        <div className="container-box">
            <p id="p2">Edit Profile</p>
            <hr size="4" color="black" />
            <img src={Pic} className="img-thumbnail" alt=''/>
            <button id="buttons">Change Photo</button>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingName" placeholder="name@example.com" />
                <label for="floatingName">Name :</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingPhone" placeholder="Number" />
                <label for="floatingPhone">Phone :</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingLocation" placeholder="Number" />
                <label for="floatingLocation">location Detaila :</label>
            </div>
            <button id="buttons">save</button>
        </div>
    </main>
  )
}

export default settingProfile
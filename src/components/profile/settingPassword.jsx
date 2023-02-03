import React from 'react'
import "./settingPassword.css"

function settingPassword() {
  return (
    <main>
        <div className="container-box">
            <p id="pass_p">Change Password</p>
            <hr size="4" color="black" />
            <p id="pass_p">Old Password :</p>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingName" placeholder="name@example.com" />
            </div>
            <p id="pass_p">New Password :</p>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingName" placeholder="name@example.com" />
            </div>
            <p id="pass_p">Confirm Password :</p>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingName" placeholder="name@example.com" />
            </div>
            <center>
                <button id="pass_btn">Save</button>
            </center>
        </div>
    </main>
  )
}

export default settingPassword
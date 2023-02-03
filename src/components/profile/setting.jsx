import React from 'react'
import { Link, Switch, useHistory } from 'react-router-dom'
import arrow from '../images/arrow.png'
import "./setting.css";
import {Router, Route} from 'react-router-dom'
import { toast } from 'react-toastify';
import SettingPassword from './settingPassword'
import SettingProfile from './settingProfile'
import SingleEdit from './singleEdit';

function Setting() {

    const navigate = useHistory();

    const handleLogout= () =>{
        localStorage.clear();
        navigate.push('/');
        toast.success("log out successful")
    }
  return (
    <div id='main_Setting'>
        <div className="container-blank">
            <div className="row-blank">
                <div className="col-3">
                    <div id="c1_text">
                        <Link to={"/profile"}><li id="setting_back"><img src={arrow} alt="" /></li></Link>
                        <p id="p">Account</p>
                    </div>
                    <div id="c1">
                        <Link to="/profile/3/Edit_profile" className="link_edit">Edit Profile</Link>
                    </div>
                    <div id="c1">
                        <Link to="/profile/3/Edit_pass" className="link_pass">Change Password</Link>
                    </div>
                    <center>
                        <button onClick={handleLogout} id="button">Log Out</button>
                    </center>
                </div>
                <div className="col">
                    <Switch>
                        <Route path="/profile/3/:name" component={SingleEdit} />
                    </Switch>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Setting
import React, {useState} from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import profile from '../images/profile.png'
import "./profile.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PostEvent from './postEvent'
import FavoriteBlank from './favoriteBlank'
import Setting from './setting'
import SettingPassword from './settingPassword'
import SettingProfile from './settingProfile'

import Single from './singlelink'
function Profile() {
    const { url , path} = useRouteMatch();

    const [ data ] = useState(JSON.parse(localStorage.getItem('user')));

  return (
    <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 p_body'>
                    <div className="p_body_info">
                        <div className="pic">
                            <img src={profile} id="pic_profile"  alt=''/>
                            <p id="pic_p">{data.username}</p>
                        </div>
                        <div className="info">
                            <p>User ID : {data.user_id} </p>
                            <p>Phone Number : {data.phone_number} </p>
                            <Link to={'profile/3/Edit_profile'}><p>Email : <span style={{color: "#0d6efd", cursor: "pointer"}}> add email</span> </p></Link>
                        </div>
                    </div>  
                </div>
            </div>
            <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 link'>
                    <Link to="/profile/1"><li id="post">My Post</li></Link>
                    <Link to="/profile/2"><li id="favorite">Favorite</li></Link>
                    <Link to="/profile/3"><li id="setting">Setting</li></Link>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 bodyBlank'>
                    <Switch>
                        <Route path="/profile/:id" component={Single} />
                    </Switch>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile
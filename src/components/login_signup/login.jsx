import React from 'react'
import { useState, useEffect } from "react"
import {Link, useHistory} from 'react-router-dom'
import Axios from 'axios'
import {toast} from 'react-toastify'

import "./login_signup.css"
function Login() {

  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");



  const navigate = useHistory();

  Axios.defaults.withCredentials = true;

  const login = (e) => {
    e.preventDefault();
    Axios.post("https://bunka.cyclic.app/login", {
      phone_number: phone_number,
      password: password,
      

    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0]);

        localStorage.setItem("user",JSON.stringify(response.data[0]));
        console.log(response.data[0])

        toast.success("welcome to Bonka")
        navigate.push('/profile');
        
      }
    });
   
  };

  useEffect(() => {
    Axios.get("https://bunka.cyclic.app/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].phone_number);
      }
    });
  }, []);

  return (
    <>
    {
      <div className='auth'>
        <h1>
          Login
        </h1>
        <form>
        <input
          required
          type="number"
          onChange={(e) => {
            setPhone_number(e.target.value);
          }}
          placeholder="phone number"
          name="phone_number"
          
        />
        <input
          required
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
          name="password"
          
        />
        <button onClick={login}>Log In</button>
          <p>{loginStatus}</p>
          <span>
            No Account yet? <Link to='/signup'>Register</Link>
          </span>
        </form>
    </div>
  }
    </>
  )
}

export default Login
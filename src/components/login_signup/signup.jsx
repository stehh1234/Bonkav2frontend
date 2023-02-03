import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import "./login_signup.css";
import { toast } from 'react-toastify';


const Signup = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [phone_numberReg, setPhone_numberReg] = useState("");

  
  const navigate = useHistory();

  Axios.defaults.withCredentials = true;

  const register =  (e) => {
    e.preventDefault();
    if(!usernameReg || !phone_numberReg || !passwordReg){
        toast.error("all feild must be not empty");
    }else{
      Axios
      .post("https://bunka.cyclic.app/register", {
      username: usernameReg,
      phone_number: phone_numberReg,
      password: passwordReg,

      }).then((response) => {
        console.log(response);
        localStorage.setItem('username','phone_number',response.data)
        console.log(response.data)
      });
      toast.success("sign up successfull!!");
      setTimeout(() => {
        navigate.push("/login")
      }, 500);
    }
  };


  return (
    <>
      {/* <Navbar /> */}
      <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
          placeholder="username"
          name="username"
          
        />
        <input
          required
          type="number"
          onChange={(e) => {
            setPhone_numberReg(e.target.value);
          }}
          placeholder="phone number"
          name="phone_number"
          
        />
        <input
          required
          type="password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
          placeholder="password"
          name="password"
          
        />
        <button onClick={register}>Register</button>
        <p>All Field need to completed</p>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
    </>
  );
};

export default Signup;
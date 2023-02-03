import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"

const Header = () => {
  const [navList, setNavList] = useState(false)

  const user_data = localStorage.getItem('user');

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          
            <div className='button flex'>
              <h4>
                <i class="fa-solid fa-heart-circle-check"></i>
                <Link to='/profile'>
                    <i class="fa-solid fa-user-circle"></i>
                </Link>
              </h4>
              {
                user_data?
                <Link to='/post'>
                  <button className='btn1'>
                    Post
                  </button>
                </Link>:
                <Link to='/signup'>
                  <button className='btn1'>
                    <i className='fa fa-sign-out'></i> Sign In
                  </button>
                </Link>
              }
            </div>
            

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

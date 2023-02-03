import React from 'react'
import { Link } from 'react-router-dom'
import "./postEvent.css"
function PostEvent() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 post-btn'>
                <p id='post-p'>No Post Yet</p>
                <Link to="/post" className="btn btn-warning btn-md">Post</Link>
            </div>
        </div>
    </div>
  )
}

export default PostEvent
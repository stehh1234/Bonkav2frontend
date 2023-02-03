import React from "react"
import Heading from "../common/Heading"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/blog.jpg"
import "./Blog.css"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
        <div className='container recent'>
          <div className="blog-contain">
            <Heading title='New Event Listed' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
          </div>
          <RecentCard />
        </div>
        <div className='container recent'>
          <div className="blog-contain">
            <Heading title='Event Listed' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
          </div>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Blog

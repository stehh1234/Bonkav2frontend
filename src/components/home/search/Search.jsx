import React from "react"
import Heading from "../../common/Heading"
import "./search.css"

const Search = () => {
  return (
    <>
      <section className='search'>
        <div className='container'>
          <Heading title='Search Event' subtitle='Find new & featured Event.' />

          <form className='flex'>
            <div className='box'>
              <span>Province/City</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Event</span>
              <input type='text' placeholder='Event Type' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Search

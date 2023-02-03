import React from "react"
import Featured from "./featured/Featured"
import Search from "./search/Search"
import Recent from "./recent/Recent"
import Location from "./location/Location"

const Home = () => {
  return (
    <>
      <Search />
      <Featured />
      <Recent />
      <Location/>
    </>
  )
}

export default Home

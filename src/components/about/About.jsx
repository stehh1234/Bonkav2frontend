import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Story' subtitle='We are the ones' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sit aliquam exercitationem recusandae, id assumenda. Veritatis dicta odit cupiditate dolore, facere maxime aspernatur laborum? Dolore quibusdam ea itaque eligendi in corporis optio ipsa perspiciatis, error labore beatae tenetur repellat sit iure tempore numquam maiores amet ad magni maxime. Ea tenetur maxime atque voluptatibus iure, veritatis cupiditate, neque debitis totam at consequuntur eligendi officia quas laborum nam optio enim saepe? Ducimus ullam omnis dolore unde ipsam voluptates, totam reprehenderit nostrum dolorum voluptas, eligendi sint nemo. Quae laborum placeat error voluptatum fuga laudantium sunt, aperiam numquam illum dolor! Minima velit non placeat!</p>
            <button className='btn2'>See More</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

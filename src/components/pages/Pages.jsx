import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Signup from "../login_signup/signup"
import Login from "../login_signup/login"
import Profile from "../profile/profile"
import Post from "../post/post"
import Favorite_blank from "../profile/favoriteBlank"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route path='/profile' component={Profile} />
          <Route path='/post' component={Post} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages

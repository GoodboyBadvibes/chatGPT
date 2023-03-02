import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Components/Navbar'
import Body from '../Components/Body'
import Footer from '../Components/Footer'

const Home = props => {
  return (
    <>
      <div>
        <Navbar/>
        <Body/>
        <Footer/>   
      </div>
    </>
  )
}

Home.propTypes = {}

export default Home
import { Link } from 'gatsby'
import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

const Contact = () => {
    return (
        <div>
            <Header />
            <h1>Contact Me</h1>
            <p>If you'd like to follow me on spotify click <a href='https://spotify.com'>Here</a></p>
            <p>To learn more about me click <Link to='/about'>Here</Link></p>
            <p>To return to the home page click <Link to='/'>Here</Link> </p>
            <Footer />
        </div>
    )
}

export default Contact
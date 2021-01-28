import { Link } from 'gatsby'
import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

const About = () => {
    return (
        <div>
            <Header />
            <h1> About me</h1>
            <h2>I am a web developer based in Provo, Utah</h2>
            <p>If you would like to contact me click <Link to='/contact'>Here</Link> </p>
            <p>To return to the home page click <Link to='/'>Here</Link> </p>
            <Footer />
        </div>
    )
}

export default About
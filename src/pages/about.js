import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

const About = () => {
    return (
        <Layout>
            <h1> About me</h1>
            <h2>I am a web developer based in Provo, Utah</h2>
            <p>If you would like to contact me click <Link to='/contact'>Here</Link> </p>
            <p>To return to the home page click <Link to='/'>Here</Link> </p>
        </Layout>

    )
}

export default About
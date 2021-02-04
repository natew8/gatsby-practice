import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

const Home = () => {

    return (
        <Layout>
            <h1>Hello!</h1>
            <h2>My name is Nate, welcome to my page.</h2>
            <p>To contact me click <Link to='/contact'>Here</Link> </p>
            <p>To learn more about me click <Link to='/about'>Here</Link> </p>
        </Layout>
    )
}

export default Home
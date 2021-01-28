import { Link } from 'gatsby'
import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

const Home = () => {
    return (
        <div>
            <Header />
            <h1>Hello!</h1>
            <h2>My name is Nate, welcome to my page.</h2>
            <p>To contact me click <Link to='/contact'>Here</Link> </p>
            <p>To learn more about me click <Link to='/about'>Here</Link> </p>
            <Footer />
        </div>
    )
}

export default Home
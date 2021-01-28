import { Link } from 'gatsby'
import React from 'react'

const Header = () => {
    return (
        <header>
            <h1>Nate Waite</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/blog'>My Blog</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Me</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
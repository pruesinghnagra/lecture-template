import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {

    return (
        <nav>
            <ul role="nav">
                <li><Link to="/demo">Demo</Link></li>
                <li><Link to="/slides">Slideshow</Link></li>
            </ul>
        </nav>
    )
}
export default Nav



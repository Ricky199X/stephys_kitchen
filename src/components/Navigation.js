import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navigation = () => {

    return (
        <nav class="nav">
            <div className="nav-wrapper container">
                <ul id="nav-mobile" class="right hide-on-small-and-down ">
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/breakfast">Breakfast Menu</Link></li>
                    <li><Link to="/lunch">Lunch Menu</Link></li>
                </ul>
            </div>
        </nav>
    )
}


export default Navigation
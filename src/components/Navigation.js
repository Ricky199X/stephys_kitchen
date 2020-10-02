import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navigation = () => {

    return (
        <nav class="nav #1a237e indigo darken-4">
            <div className="nav-wrapper container text right">
                <ul id="nav-mobile" class="right hide-on-small-and-down ">
                    <li><Link to="/breakfast">Breakfast Menu</Link></li>
                    <li><Link to="/lunch">Lunch Menu</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
        </nav>
    )
}


export default Navigation
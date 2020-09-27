import React from 'react'

import logo from '../assets/logo.jpg'

const Contact = () => {
    return (
        <div className="container">
            <div className="logo">
                <img src={logo} height='400px' width='550px' />
            </div>

            <div className="address">
                <p>41 Beckford Street</p>
                <p>Beverly, MA 01915</p>
                <p>(Corner of Beckford and Cabot)</p>
            </div>

            <div className="footer">
                <h4>This is a footer</h4>
            </div>
        </div>
    )
}

export default Contact
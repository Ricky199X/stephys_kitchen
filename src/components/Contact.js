import React from 'react'

import logo from '../assets/logo.jpg'

const Contact = () => {
    return (
        <div className="page-container">

            {/* Contact Page Logo */}
            <section className="contact-page-logo center">
                <div className="logo">
                    <img src={logo} height='400px' width='550px' />
                </div>
            </section>

            {/* Address Div */}
            <section className="box center">
                <p>41 Beckford Street</p>
                <p>Beverly, MA 01915</p>
                <p>(Corner of Beckford and Cabot)</p>
            </section>
        </div>
    )
}

export default Contact
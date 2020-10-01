import React from 'react'

import logo from '../assets/logo.jpg'
import SocialMedia from './SocialMedia'
import About from './About'

class Contact extends React.Component {

    render() {

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
                    <div className="contact-info">
                        <p className="address">41 Beckford Street</p>
                        <p className="address">Beverly, MA 01915</p>
                        <p className="address">(Corner of Beckford and Cabot)</p>
                    </div>
                </section>

                {/* About Blurb */}
                <section className="about-blurb center">
                    <div class="row">
                        <div class="col s12">

                            <About />

                        </div>
                    </div>
                </section>

                {/* Social Media Section */}
                <section className="social center">
                    <SocialMedia />
                </section>
            </div>
        )
    }
}

export default Contact
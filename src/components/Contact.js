import React from 'react'

import logo from '../assets/logo.jpg'
import SocialMedia from './SocialMedia'
import About from './About'

class Contact extends React.Component {

    render() {

        return (
            <div className="container">

                <section className="contact-widgets">
                    <div class="text-center" >
                        <p class="lead-text-center">
                            <span>
                                <i class="fa fa-fw fa-map-marker"></i>
                                <a href="https://www.google.com/maps/place/Stephy's+Kitchen/@42.558039,-70.8840667,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3169817c944cd:0xbc237a9e0435fe9a!8m2!3d42.558039!4d-70.881878">41 Beckford Street - Beverly, MA 01915</a>
                            </span>
                            <span>
                                <i class="fas fa-phone-square-alt"></i>
                                <a href="#">978-921-6393</a>
                            </span>
                        </p>
                    </div>
                </section>

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
import React from 'react'


const Footer = () => {

    const fullYear = new Date().getFullYear()

    // indigo darken-4

    return (
        <footer class="page-footer #1a237e ">
            <div className="row">
                <div className="footer-left col s6">
                    <h5>Stephy's Kitchen &copy; {fullYear}</h5>
                </div>
                <div className="footer-right col s6 ">
                    <h5>Phone: 978-921-6393</h5>
                </div>
            </div>

        </footer>
    )
}

export default Footer
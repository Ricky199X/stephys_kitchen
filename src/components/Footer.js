import React from 'react'


const Footer = () => {

    const fullYear = new Date().getFullYear()

    return (
        <footer class="page-footer #1a237e indigo darken-4">
            <div className="row">
                <div className="col s6">
                    <h5>Stephy's Kitchen &copy; {fullYear}</h5>
                </div>
                <div className="col s6">
                    <i class="fas fa-phone-square-alt fa-2x">978-921-6393</i>
                </div>
            </div>

        </footer>
    )
}

export default Footer
import React from 'react'


const Footer = () => {

    const fullYear = new Date().getFullYear()

    return (
        <footer class="page-footer #1a237e indigo darken-4">
            <div className="row">
                <div className="col s6">
                    <h4>Stephy's Kitchen &copy; {fullYear}</h4>
                </div>
                <div className="col s6">
                    <h4>978-921-6393</h4>
                </div>
            </div>

        </footer>
    )
}

export default Footer
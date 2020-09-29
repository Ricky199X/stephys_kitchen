import React from 'react'
import lunch from '../assets/lunch.jpg'

const Lunch = () => {
    return (
        <div className="page-container">
            <div className="lunch-menu">
                <img src={lunch} height='950px' width='1350px' />
            </div>
        </div>
    )
}

export default Lunch
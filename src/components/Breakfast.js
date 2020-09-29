import React from 'react'
import breakfast from '../assets/breakfast.jpg'

const Breakfast = () => {
    return (
        <div className="page-container">
            <div className="breakfast-menu">
                <img src={breakfast} height='950px' width='1350px' />
            </div>
        </div>
    )
}

export default Breakfast
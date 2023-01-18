import React from 'react'; 

import '../styles/LocatorBar.css'

export default function LocatorBar() {
    return (
        <div className="locator-bar">
            <div className="directory">
                <span id="home">HOME</span> > <span id="parent">COMPUTERS & TABLETS</span> > <span id="child">LAPTOPS</span>
            </div>
            <div className="current-location">Laptops</div>
        </div>
    )
}
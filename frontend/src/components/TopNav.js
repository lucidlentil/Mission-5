import React from 'react'; 

import '../styles/TopNav.css'; 
import {BiUserCircle} from 'react-icons/bi'; 
import {BiSearch} from 'react-icons/bi';
import {FaShoppingCart} from 'react-icons/fa';

export default function TopNav() {
    return (
    <div className="top-nav">
        <div className="top-space"></div>
        <ul className="flex-container-1">
            <li>
                PB Tech
            </li>
            <li>
                Hardwired
            </li>
            <li>
                PB Business
            </li>
            <li>
                PB Education
            </li>
            <li>
                PB Wholesale
            </li>
            <li>
                PB Government
            </li>
            <li>
                PB Health
            </li>
            <li>
                PB IOT
            </li>
        </ul>
        <div className="sub-nav">
            <div className="logo-block">
            <img src="/images/pbtech-logo2.png" alt="PB tech logo" width="20%" id="logo"></img> <div className="nav-icons"><span className="login"><BiUserCircle id="user-icon"/>Login or create account </span><BiSearch className="icons"/> <FaShoppingCart className="icons"/><span></span></div>
            </div>
            <br/>
            <div className="flex-container-2">
            <span className="current-location">Laptops</span>
                <ul className="flex-container-3">
                    <li>
                        Products
                    </li>
                    <li>
                        Brands
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        New Arrivals
                    </li>
                    <li>
                        Promotions
                    </li>
                    <li>
                        Hot Deals
                    </li>
                    <li>
                        Help & Support
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}
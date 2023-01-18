import React from 'react'; 

import '../styles/Footer.css'

export default function Footer() {
    return(
        <div className="footer">
            <div className="footer-flex-1">
                <div>Shop by department</div>
                <div className="footer-departments">
                     <ul>
                        <li>Computers & Tablets</li>
                        <li>PC Parts</li>
                        <li>Pringint & Office</li>
                        <li>TV & AV</li>
                        <li>Gaming</li>
                        <li>Smart Home & Security</li>
                        <li>More</li>
                        <li>Apple</li>
                    </ul>
                    <ul>
                        <li>PC Peripherals & Accessories</li>
                        <li>Networking</li>
                        <li>Phones & Accessories</li>
                        <li>Headphones & Audio</li>
                        <li>Cameras & Drones</li>
                        <li>Toys, Hobbies & STEM</li>
                        <li>Gift Ideas</li>
                    </ul>
                </div>
                </div>
                <div className="footer-flex-2">
                    <div>Company Info</div>
                    <div className="footer-company-info">
                        <ul>
                            <li>About us</li> 
                            <li>Business</li>
                            <li>Education</li>
                            <li>Wholesale</li>
                            <li>Government</li>
                            <li>Health</li>
                            <li>Stores</li>
                            <li>Careers</li>
                            <li>Contact Us</li>
                            <li>News</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-flex-3">
                    <div>Services & Support</div>
                    <div className="footer-services-support">
                        <ul>
                            <li>Help</li>
                            <li>Returns & Warranty</li>
                            <li>Finance</li>
                            <li>IT Services</li>
                            <li>Home Services</li>
                            <li>Repair Services</li>
                            <li>Job Tracker</li>
                            <li>Service Parts</li>
                            <li>System Builder</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-flex-4">
                    <div>Promotions & Offers</div>
                    <ul>
                        <li>Promotions</li>
                        <li>Clearance</li>
                        <li>Hot deals</li>
                        <li>New Arrivals</li>
                        <li>BYOD</li>
                        <li>Tax Free Shopping</li>
                        <li>Events</li>
                        <li>PB Insider</li>
                        <li>PB Advisor</li>
                    </ul>
                </div>
                <div className="footer-flex-5">
                    <div>Become a PB Insider</div>
                    <img src="images/pb-insider.png" alt="PB insider" width="200px" id="insider-image"/>
                </div>
        </div>
    )
}
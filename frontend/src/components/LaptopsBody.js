import React from 'react'; 

import {Link} from 'react-router-dom'; 

import '../styles/LaptopsBody.css';

import CategoryCard from './CategoryCard'; 

export default function LaptopsBody() {
    return (
        <div className="laptops-body">
            <div id="laptop-header">NZ's biggest range of laptops
            </div>
            <div className="card-block">
                <Link to="/browse/business"><CategoryCard image="/images/business-laptops.jpg" alt="Business laptops" category="Business laptops"/></Link>
                <Link to="/browse/home&study"><CategoryCard image="/images/home-study-laptops.jpg" alt="Home & study laptops" category="Home & study laptops"/></Link>
                <Link to="/browse/all" style={{textDecoration:"none", color:"black"}}><CategoryCard image="/images/all-laptops.jpg" alt="All laptops" category="All laptops"/>
                </Link>
           </div>
           <div className="help-block">
                <div className="flex-1"></div>
                <div className="flex-1" id="help-header"><span style={{fontSize:"36px"}}>Need help</span><br/> choosing the right laptop? </div>
                <div className="flex-1"><button id="help-button">VIEW OUR BUYING GUIDE</button></div>
           </div>
           <div className="shop-by">
                Shop by <br/>
                <br/>
                <span className="shop-category">Offers</span>
                <span className="shop-category">Brands</span>
                <span className="shop-category">Most popular</span>
                <span className="shop-category">Latest arrivals</span>
           </div>
        </div>
    )
}
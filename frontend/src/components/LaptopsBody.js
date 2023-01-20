import React from 'react'; 

import '../styles/LaptopsBody.css';

import CategoryCard from './CategoryCard'; 

export default function LaptopsBody() {
    return (
        <div className="laptops-body">
            <div id="laptop-header">NZ's biggest range of laptops
            </div>
            <div className="card-block">
                <CategoryCard image="/images/business-laptops.png" alt="Business laptops" category="Business" link="/browse/business"/>
                <CategoryCard image="/images/home-laptops.png" alt="Home & study laptops" category="Home & study" link="/browse/home&study"/>
                <CategoryCard image="/images/all-laptops.png" alt="All laptops" category="All" link="/browse/all"/>
                
           </div>
           <div className="help-block">
                <div className="flex-1"><img src="/images/cartoon-laptop.png" alt="A laptop" style={{width:"30%", margin:"0px", padding:"0px"}}/></div>
                <div className="flex-1" id="help-header"><span style={{fontSize:"36px"}}>Need help</span><br/> choosing the right laptop? </div>
                <div className="flex-1"><button id="help-button">VIEW OUR BUYING GUIDE</button></div>
           </div>
           <div className="shop-by">
                Shop by
                <br/>
                <span className="shop-category">Offers<br/><img src="/images/offers.png" alt="Some laptops" width="100%"/></span>
                <span className="shop-category">Brands<br/><img src="/images/brand.png" alt="Brands" width="106%"/></span>
                <span className="shop-category">Most popular<br/><img src="/images/most-popular.png" alt="Most popular" width="99%"/></span>
                <span className="shop-category">Latest arrivals<br/><img src="/images/latest-arrivals.png" alt="Latest arrivals" width="85%"/></span>
           </div>
        </div>
    )
}
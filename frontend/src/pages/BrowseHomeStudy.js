import React, {useEffect, useState} from 'react'; 
import {Link} from 'react-router-dom';

import '../styles/BrowseLaptops.css';

import TopNav from '../components/TopNav'; 
import Footer from '../components/Footer'; 

import {RiScales3Fill} from 'react-icons/ri'

export default function BrowseHomeStudy() {

    const [laptopInfo, setLaptopInfo] = useState([]); 
    //const [filteredLaptopInfo, setFilteredLaptopInfo] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/home&study")
        .then((res) => res.json())
        .then((jsonRes) => setLaptopInfo(jsonRes));
    }, []);

    useEffect(() => {
        console.log(laptopInfo); 
    }, [laptopInfo]) 

   

    /*const [businessFilter, setBusinessFilter] = useState(false);
    const updateBusinessFilter = () => {
        setBusinessFilter(!businessFilter); 
        filterLaptops(); 
    }

    const [homeStudyFilter, setHomeStudyFilter] = useState(false);
    const updateHomeStudyFilter = () => {
        setHomeStudyFilter(!homeStudyFilter); 
        filterLaptops();
    }

    const filterLaptops = async() => {
        const filteredLaptops = []; 
        
        //needs to test all filters
        if (!homeStudyFilter && !businessFilter) {
            filteredLaptops.push(...laptopInfo);
            console.log(laptopInfo);
        } 
        if (homeStudyFilter) {
            const values = laptopInfo.filter((laptop)=>{
                return laptop.category === "Home & study"
            })
            filteredLaptops.push(...values);
        }
        if (businessFilter) {
            const values = laptopInfo.filter((laptop)=>{
                return laptop.category === "Business"
            })
            filteredLaptops.push(...values);
        }
            //Need to de-duplicate items in filtered projects array if fits multiple categories
        setFilteredLaptopInfo(filteredLaptops);
    }
    useEffect(() => {
        filterLaptops(); 
    },[businessFilter, laptopInfo, homeStudyFilter]);
    */

    return (
        <div>
            <TopNav/>
            <div className="buttons-bar"><Link to="/browse/all"><button className="category-buttons">ALL</button></Link> <Link to="/browse/business"><button className="category-buttons">BUSINESS</button></Link> <button className="category-button-current">HOME & STUDY</button></div>
            <div className="library-container">
                 <div className="directory">
                    <span id="home">Home </span>&gt;<span id="parent"> Computers & Tablets </span>&gt;<span id="parent"> Laptops </span>&gt;<span className="child"> Home & Study</span>
                </div>
                <div className="showing-items">Displaying 1-{laptopInfo.length} of 5 products</div>
            <div className="laptop-library">
                <div className="sidebar-filters">
                    <span className="filter-header">FILTERS</span>
                    <hr/>
                    <form>
                        <input type="checkbox" name="New arrivals" value="New arrivals" ></input>
                        <label htmlFor="New arrivals"> New arrivals</label>
                        <br/>
                        <input type="checkbox" name="Offers" value="Offers" ></input>
                        <label htmlFor="Offers"> Offers</label> 
                        <br/>
                        <input type="checkbox" name="Pre-order" value="Pre-order" ></input>
                        <label htmlFor="Pre-order"> Pre-order</label>
                    </form>
                    <hr/>
                    <span className="filter-header">Brand</span> 
                    <form>
                        <select name="brands" id="brands">
                            <option value="Dell">Dell</option>
                            <option value="HP">HP</option>
                            <option value="Lenovo">Lenovo</option>
                            <option value="Apple">Apple</option>
                            <option value="Microsoft">Microsoft</option>
                        </select>
                    </form>
                    <hr/>
                
                </div>
                <div className="products">
                    
                        {laptopInfo.map(laptop =>
                            <div className="product">
                                <div className="product-border">
                                <img src={laptop.image} alt={laptop.model} className="product-image"/>
                                <div className="laptop-description">{laptop.brand} {laptop.model}</div>
                                <div>STARS GO HERE</div>
                                <div className="laptop-description">{laptop.cpu_family} with {laptop.memory_size}GB memory</div>
                                <div style={{fontSize: "24px", paddingTop:"10px", fontWeight:"500"}}>${laptop.price}<span style={{fontSize:"20px"}}>exGST</span></div>
                                </div> 
                                <div className="listing-bottom">
                                <button id="add-to-cart">Add to cart</button><span id="compare"><RiScales3Fill style={{color:"EF8121", fontSize:"20px", verticalAlign:"center"}}/> <span>  Compare</span></span>
                                </div>
                                </div>
                            )}
                
                </div>
            </div>
                <div style={{textAlign: "center"}}>There are no more items to display</div>
            </div>
            <Footer/>
        </div>
    )
}
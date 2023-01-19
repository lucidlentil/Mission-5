import React, {useEffect, useState} from 'react'; 
import {Link} from 'react-router-dom';

import '../styles/BrowseLaptops.css';

import TopNav from '../components/TopNav'; 
import Footer from '../components/Footer'; 

import {RiScales3Fill} from 'react-icons/ri'

export default function BrowseAll() {

    const [laptopInfo, setLaptopInfo] = useState([]); 
    //const [filteredLaptopInfo, setFilteredLaptopInfo] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/")
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
    const [showButton, setShowButton] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    function showMore(event) {
        event.preventDefault(); 
        if (laptopInfo.length>5) {
        fetch("http://localhost:3001/showmore")
        .then((res) => res.json())
        .then((jsonRes) => setLaptopInfo(jsonRes));
        }
        setShowButton(current => !current);
        setShowMessage(true);
    }

    return (
        <div>
            <TopNav/>
            <div className="buttons-bar"><button className="category-button-current">ALL</button> <Link to="/browse/business"><button className="category-buttons">BUSINESS</button></Link> <Link to="/browse/home&study"><button className="category-buttons">HOME & STUDY</button></Link></div>
            <div className="library-container">
                 <div className="directory">
                    <span id="home">Home </span>&gt;<span id="parent"> Computers & Tablets </span>&gt;<span className="child"> Laptops</span>
                </div>
                <div className="showing-items">Displaying 1-{laptopInfo.length} of 10 products</div>
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
                <div id="show-more"><button onClick={showMore} className={showButton ? 'hide-button': ''}>View more</button> 
                {
                    showMessage && <div>There are no more items to display</div>
                }
                </div>
            </div>
            <Footer/>
        </div>
    )
}
import React, {useEffect, useState} from 'react'; 
import {Link} from 'react-router-dom';

import '../styles/BrowseLaptops.css';

import {RiScales3Fill} from 'react-icons/ri';
import {BiCircle} from 'react-icons/bi';
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';

export default function BrowseAll() {

    const [laptopInfo, setLaptopInfo] = useState([]); 

    useEffect(() => {
        fetch("http://localhost:3001/")
        .then((res) => res.json())
        .then((jsonRes) => setLaptopInfo(jsonRes));
    }, []);

    useEffect(() => {
        console.log(laptopInfo); 
    }, [laptopInfo]) 

   
    const [price, setPrice] = useState([]); 

    function filterPrice() {

    }
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
            <div className="buttons-bar"><button className="category-button-current">ALL</button> <Link to="/browse/business"><button className="category-buttons">BUSINESS</button></Link> <Link to="/browse/home&study"><button className="category-buttons">HOME & STUDY</button></Link></div>
            <div className="library-container">
                 <div className="directory">
                    <span id="home">Home </span>&gt;<Link to="/" className="parent"> Computers & Tablets </Link>&gt;<span className="child"> Laptops</span>
                </div>
                <div className="showing-items">Displaying 1-{laptopInfo.length} of 10 products</div>
            <div className="laptop-library">
                <div className="sidebar-filters">
                    <span className="filter-header">FILTERS</span>
                    <hr/>
                    <ul style={{listStyle:"none"}} className="check-boxes-text">
                        <li><BiCircle className="check-boxes"/> New arrivals</li>
                        <li><BiCircle className="check-boxes"/> Offers</li>
                        <li><BiCircle className="check-boxes"/> Pre order</li>
                    </ul>
                    
                    <hr/>
                    <span className="filter-header">Brand</span> 
                    <form>
                        <select name="brands" className="drop-down">
                            <option value="blank"></option>
                            <option value="Dell">Dell</option>
                            <option value="HP">HP</option>
                            <option value="Lenovo">Lenovo</option>
                            <option value="Apple">Apple</option>
                            <option value="Microsoft">Microsoft</option>
                        </select>
                    </form>
                    <br/>
                    <hr/>
                    <span className="filter-header">Price</span> 
                    <input type='range' onChange={filterPrice} min={200} max={2800} step={200} value={price}className='slider'></input>
                    <br/>
                    <hr/>
                    <span className="filter-header">CPU family</span> 
                    <form>
                        <select name="CPU" className="drop-down">
                            <option value="blank"></option>
                            <option value="Apple">Apple</option>
                            <option value="Intel Celeron">Intel Celeron</option>
                            <option value="Intel Core i7">Intel Core i7</option>
                            <option value="AMD Ryzen 5">AMD Ryzen 5</option>
                            <option value="AMD A6">AMD A6</option>
                            <option value="Intel Core i5">Intel Core i5</option>
                        </select>
                    </form>
                    <br/>
                    <span className="filter-header">Screen size</span> 
                    <input type='range' onChange={filterPrice} min={200} max={2800} step={200} value={price}className='slider'></input>
                    <span className="filter-header">Memory size</span> 
                    <input type='range' onChange={filterPrice} min={200} max={2800} step={200} value={price}className='slider'></input>
                    <hr/>
                    <span className="filter-header">Customer rating</span> 
                    <ul style={{listStyle:"none"}} className="check-boxes-text">
                        <li><BiCircle className="check-boxes"/> <span className="star-rating"><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></span></li>
                        <li><BiCircle className="check-boxes"/> <span className="star-rating"><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></span></li>
                        <li><BiCircle className="check-boxes"/> <span className="star-rating"><AiFillStar/> <AiFillStar/> <AiFillStar/></span></li>
                        <li><BiCircle className="check-boxes"/> <span className="star-rating"><AiFillStar/> <AiFillStar/></span></li>
                        <li><BiCircle className="check-boxes"/> <span className="star-rating"><AiFillStar/></span></li>
                    </ul>
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
                                <div style={{textAlign: "left", paddingLeft:"5px", fontSize:"20px", color:"#EF8121", fontWeight:"bold"}}><AiOutlineHeart/></div>
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
        </div>
    )
}
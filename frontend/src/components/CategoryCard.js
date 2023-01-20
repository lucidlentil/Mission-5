import React from 'react'; 

import {Link} from 'react-router-dom'

import '../styles/CategoryCard.css';

export default function CategoryCard(props) {
    return (
        <div>
            <div className="card">
                <img src={props.image} alt={props.alt} width="380px" class="card-img"/>
                <div className="laptop-category">
                    {props.category} laptops
                </div>
            </div> 
            <div style={{textAlign: "center", margin:"30px 0px"}}><Link to={props.link}><button className="link-button">VIEW {props.category.toUpperCase()}</button></Link></div>
        </div>
    )
}
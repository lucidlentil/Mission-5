import React from 'react'; 

import '../styles/CategoryCard.css';

export default function CategoryCard(props) {
    return (
        <div>
            <div className="card">
                <img src={props.image} alt={props.alt} width="380px" class="card-img"/>
                <div className="laptop-category">
                    {props.category}
                </div>
            </div> 
        </div>
    )
}
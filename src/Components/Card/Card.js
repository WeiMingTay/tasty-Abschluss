import React from 'react';
import './Card.css';
// import { data } from '../../Services/DummyData';

const Card = ({ card }) => {
    return (
        <div className="container">
            <div className="card" key={card.idCategory}>
                <img src={card.strCategoryThumb} alt={card.strCategory} />
                <h2>{card.strCategory}</h2>
            </div>
        </div>
    );
};

export default Card;

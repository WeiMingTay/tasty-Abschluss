import React from 'react';
import { Link } from 'react-router-dom';
import './SmallCard.css';

const SmallCard = ({ meal }) => {
    return (
        <Link className="small-card-link">
            <div className="small-card" key={meal.idMeal}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                {/* hier wird der Titel nur aus 10 Buchstaben angezeigt,
                 um ein overflow zu vermeiden  */}
                <h2>{meal.strMeal.substring(0, 10) + '...'}</h2>
            </div>
        </Link>
    );
};

export default SmallCard;

import React from 'react';
import './WideCard.css';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const WideCard = ({ meal }) => {
    return (
        <div className="wide-card">
            <div className="image-container1">
                <img src={meal.strMealThumb} alt=""/>
            </div>
            <div className="meal-infos">
                {/* hier wird der Titel nur aus 15 Buchstaben angezeigt,
                 um ein overflow zu vermeiden  */}
                <h4>{meal.strMeal.substring(0, 15) + '...'}</h4>
                <div className="category-name">
                    <div className="blue-point"></div>
                    <span>{meal.strCategory}</span>
                </div>
            </div>
            {/* Der Link führt zur DetailsPage gemäß der jeweiligen Gericht-ID */}
            <Link className="details-arrow-link" to={`/details/${meal.idMeal}`}>
                 <BsFillArrowRightSquareFill className="details-arrow" />
            </Link>
        </div>
    );
};

export default WideCard;

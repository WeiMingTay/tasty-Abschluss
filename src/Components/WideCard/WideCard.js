import React from 'react';
import './WideCard.css';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';

const WideCard = ({ meal, button, onDelete }) => {
    const removeFromFavorite = (key) => {
        localStorage.removeItem(key);
        if (onDelete) {
            onDelete();
        }
    };

    const colorClass = (category) => {
        switch (category) {
            case 'Beef':
                return 'beef-color';
            case 'Breakfast':
                return 'breakfast-color';
            case 'Chicken':
                return 'chicken-color';
            case 'Goat':
                return 'goat-color';
            case 'Lamb':
                return 'lamb-color';
            case 'Miscellaneous':
                return 'miscellaneous-color';
            case 'Pasta':
                return 'pasta-color';
            case 'Pork':
                return 'pork-color';
            case 'Seafood':
                return 'seafood-color';
            case 'Side':
                return 'side-color';
            case 'Starter':
                return 'starter-color';
            case 'Vegan':
                return 'vegan-color';
            case 'Vegetarian':
                return 'vegetarian-color';
            // Add cases for other categories with different colors
            default:
                return 'default-color';
        }
    };
    return (
        <div className="wide-card">
            {button && (
                <AiFillCloseCircle
                    className="remove-btn"
                    onClick={() => removeFromFavorite(meal.idMeal)}
                />
            )}
            <div className="image-container1">
                <img src={meal.strMealThumb} alt="" />
            </div>
            <div className="meal-infos">
                {/* hier wird der Titel nur aus 15 Buchstaben angezeigt,
                 um ein overflow zu vermeiden  */}
                <h4>{meal.strMeal.substring(0, 15) + '...'}</h4>
                <div className="category-name">
                    <div
                        className={`point ${colorClass(meal.strCategory)}`}
                    ></div>
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

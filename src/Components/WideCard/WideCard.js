import React from "react";
import "./WideCard.css";
/* import { BsFillArrowRightSquareFill } from "react-icons/bs"; */
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import Flag from "react-world-flags";

const WideCard = ({ meal, button }) => {
	const removeFromFavorite = (key) => {
		localStorage.removeItem(key);
	};

	let mealString;
	let mealSubstring = meal.strMeal.substring(0, 30);

	if (mealSubstring.length >= 30) {
		mealString = mealSubstring + "...";
	} else {
		mealString = meal.strMeal;
	}

	return (
		<Link className="details-arrow-link" to={`/details/${meal.idMeal}`}>
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
					<h4>{mealString}</h4>
					<div className="category-name">
						{/* <div className="blue-point"></div> */}
{/* Hiermit könnte man evtl was machen, muss noch n weg finden, wie man die AREA zu einem country code macht =) */}
{/* Zur not macht man ein array mit den informationen selbst */}
						<Flag code="my" />

						<span>{meal.strArea}</span>
						
					</div>
				</div>
				{/* Der Link führt zur DetailsPage gemäß der jeweiligen Gericht-ID */}

				{/* <BsFillArrowRightSquareFill className="details-arrow" /> */}
			</div>
		</Link>
	);
};

export default WideCard;

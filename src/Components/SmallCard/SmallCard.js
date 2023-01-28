import React from "react";
import { Link } from "react-router-dom";
import "./SmallCard.css";

const SmallCard = ({ meal }) => {
	let mealString;
	let mealSubstring = meal.strMeal.substring(0, 15);

	if (mealSubstring.length >= 15) {
		mealString = mealSubstring + "...";
	} else {
		mealString = meal.strMeal;
	}
	return (
		<Link className="small-card-link" to={`/details/${meal.idMeal}`}>
			<div className="small-card" key={meal.idMeal}>
				<div>
					<img src={meal.strMealThumb} alt={meal.strMeal} />
				</div>
				{/* hier wird der Titel nur aus 10 Buchstaben angezeigt,
                 um ein overflow zu vermeiden  */}
				<div>
					<h4>{mealString}</h4>
				</div>
			</div>
		</Link>
	);
};

export default SmallCard;

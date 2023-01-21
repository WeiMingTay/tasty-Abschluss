import "./MealOfTheDay.css";
import { useEffect, useState } from "react";

// Inhalte stehen, beim Design habe ich erst nur schnell was hingebaut, weil ich nicht gut an die Vorlage kam... 

// Muss noch verlinkt werden zur Detailseite mit entsprechendem Inhalt (Anhand idMeal)

const MealOfTheDay = () => {
	let [randomMeal, setRandomMeal] = useState([]);

	let url = "https://www.themealdb.com/api/json/v1/1/random.php";

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setRandomMeal(data.meals[0]);
			});
	}, []);
	console.log(randomMeal);
	return (
		<article className="mealOfDay">
			<h4>Meal of the Day</h4>

			<div style={{ backgroundImage: `url(${randomMeal.strMealThumb})` }}>
				<div></div>
				<h5>{randomMeal.strMeal}</h5>
				<div>
					<p>{randomMeal.strCategory}</p>
					<p>{randomMeal.strArea}</p>
				</div>
			</div>
		</article>
	);
};

export default MealOfTheDay;

import Button from "../../Components/Button/Button";
import NavBar from "../../Components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./DetailsPage.css";

const DetailsPage = () => {
	const [meal, setMeal] = useState();

	const params = useParams();
	const mealId = params.id;
	console.log(mealId);

	const fetchMealById = () => {
		fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
			.then((response) => response.json())
			.then((data) => {
				const selectedMeal = data.meals;
				setMeal(selectedMeal);
				console.log(selectedMeal);
			});
	};

	useEffect(() => {
		fetchMealById();
	}, [params.id]);

	return (
		<>
			{meal && (
				<section>
					<img
						src={meal[0].strMealThumb}
						alt={meal[0].strMeal}
						className="MealBackground"
					/>
					<section className="MealSlider">
						<h2>{meal[0].strMeal}</h2>
						<section className="FoodType">
							<h3>{meal[0].strCategory}</h3>
							<h4>{meal[0].strArea}</h4>
						</section>
						{/* Hier könntest evtl mit RadioButtons arbeiten... Lassen sich einfacher togglen. quasi: if (checked) dann anzeigen sonst hide/none.. */}
						<div className="ToggleButtons">
							<button>Ingredients</button>
							<button>Instructions</button>
						</div>
						<section className="ingredientsPage">
							<h2>Ingredients</h2>

							{/* Vielleicht gibt es eine Möglichkeit das zu "Mappen".. Müssten nur herausfinden, wie man die individuelle Zahl jeder Zutat mitrechnet, bzw auslässt. Wenn das nicht geht, sollte eine einfach if abfrage aber funktionieren. quasi wie im obigen Kommentar */}
							<section className="Ingredients">
								<p>
									<span>{meal[0].strMeasure1}</span> {meal[0].strIngredient1}
								</p>
								<p>
									<span>{meal[0].strMeasure2}</span> {meal[0].strIngredient2}
								</p>
								<p>
									<span>{meal[0].strMeasure3}</span> {meal[0].strIngredient3}
								</p>
								<p>
									<span>{meal[0].strMeasure4}</span> {meal[0].strIngredient4}
								</p>
								<p>
									<span>{meal[0].strMeasure5}</span> {meal[0].strIngredient5}
								</p>
								<p>
									<span>{meal[0].strMeasure6}</span> {meal[0].strIngredient6}
								</p>
								<p>
									<span>{meal[0].strMeasure7}</span> {meal[0].strIngredient7}
								</p>
								<p>
									<span>{meal[0].strMeasure8}</span> {meal[0].strIngredient8}
								</p>
								<p>
									<span>{meal[0].strMeasure9}</span> {meal[0].strIngredient9}
								</p>
								<p>
									<span>{meal[0].strMeasure10}</span> {meal[0].strIngredient10}
								</p>
								<p>
									<span>{meal[0].strMeasure11}</span> {meal[0].strIngredient11}
								</p>
								<p>
									<span>{meal[0].strMeasure12}</span> {meal[0].strIngredient12}
								</p>
								<p>
									<span>{meal[0].strMeasure13}</span> {meal[0].strIngredient13}
								</p>
								<p>
									<span>{meal[0].strMeasure14}</span> {meal[0].strIngredient14}
								</p>
								<p>
									<span>{meal[0].strMeasure15}</span> {meal[0].strIngredient15}
								</p>
								<p>
									<span>{meal[0].strMeasure16}</span> {meal[0].strIngredient16}
								</p>
								<p>
									<span>{meal[0].strMeasure17}</span> {meal[0].strIngredient17}
								</p>
								<p>
									<span>{meal[0].strMeasure18}</span> {meal[0].strIngredient18}
								</p>
								<p>
									<span>{meal[0].strMeasure19}</span> {meal[0].strIngredient19}
								</p>
								<p>
									<span>{meal[0].strMeasure20}</span> {meal[0].strIngredient20}
								</p>
							</section>
						</section>

						<section className="instructionsPage">
							<h2>Instructions</h2>
							<section className="Instructions">
								<a>{meal[0].strInstructions}</a>
								<section src={meal[0].strYoutube}>Video</section>
							</section>
						</section>
					</section>
				</section>
			)}
			<NavBar />
		</>
	);
};

export default DetailsPage;

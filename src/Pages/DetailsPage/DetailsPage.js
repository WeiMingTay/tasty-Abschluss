
import NavBar from "../../Components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "./DetailsPage.css";

const DetailsPage = () => {
	const [meal, setMeal] = useState();
	const [measures, setMeasures] = useState([]);
	const [ingredients, setIngredients] = useState([]);

	const params = useParams();
	// Speichern der meal-id, die vom Params Objekt erhaltet wird, in einer Variablen
	const mealId = params.id;

	//Erstellen einer Funktion, die die keys speichert,
	// die keine empty string oder Null werte in den oben genannten Arrays haben
	const filterMealObject = (obj) => {
		//Erstellen von zwei Arrays zum Speichern der measures  und ingredients keys,
		// die von dem meal objekt erhalten werden
		const measures = [];
		const ingredients = [];
		for (let key in obj) {
			if (key.startsWith("strIngredient") && obj[key] && obj[key] !== " ") {
				ingredients.push(obj[key]);
			}
			if (key.startsWith("strMeasure") && obj[key] && obj[key] !== " ") {
				measures.push(obj[key]);
			}
		}
		setIngredients(ingredients);
		setMeasures(measures);
	};

	const fetchMealById = () => {
		//Erstellen einer Funktion, die die meal daten gemäß der mealId  abruft
		fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
			.then((response) => response.json())
			.then((data) => {
				const selectedMeal = data.meals[0];
				filterMealObject(selectedMeal);
				setMeal(selectedMeal);
				console.log(measures, ingredients);
			});
	};

	// Erstellen einer Funktion,dass das meal im localStorage  Speichert ,
	// um es später in der Favoritenliste anzuzeigen
	const addToFavorites = () => {
		//Speichern des  meal objekts im localStorage durch Setzen
		//das key auf den meal-id Wert
		localStorage.setItem(`${meal.idMeal}`, JSON.stringify(meal));
	};

	useEffect(() => {
		fetchMealById();
	}, [params.id, fetchMealById]);

	// const instructionsString = meal.strInstructions;
	// const instructionsWithLines = instructionsString.replaceAll('.', '.\n'); 

    return (
        <>
            {meal && (
                <section>
                    <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="MealBackground"
                    />
                    <section className="MealSlider">
                        <div className="heading-title">
                            <h2>{meal.strMeal}</h2>
                            <button
                                className="favorite-btn"
                                onClick={addToFavorites}
                            >
                                Add to favorites
                            </button>
                        </div>

                        <section className="FoodType">
                            <h3>{meal.strCategory}</h3>
                            <h4>{meal.strArea}</h4>
                        </section>
                        {/* Hier könntest evtl mit RadioButtons arbeiten... Lassen sich einfacher togglen. quasi: if (checked) dann anzeigen sonst hide/none.. */}
                        <div className="ButtonsBox">
							<section className="ToggleButtons">
                            <button>Ingredients</button>
                            <button>Instructions</button>
							</section>
                        </div>
                        <section className="ingredientsPage">
                            <h2>Ingredients</h2>

                            <section className="Ingredients">
                                {meal && (
                                    <>
                                        {measures.map((measure, index) => (
                                            <p>
                                                <span>{measure} </span>
                                                {ingredients[index]}
                                            </p>
                                        ))}
                                    </>
                                )}
                            </section>
                        </section>

                        <section className="instructionsPage">
                            <h2>Instructions</h2>
                            <section className="Instructions">
                                <article className='InstructionText'>{meal.strInstructions.replaceAll('.', '.\n')}</article>
                                <a href={meal.strYoutube} target="_blank" rel="noreferrer" className="VideoButton">Video</a>
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

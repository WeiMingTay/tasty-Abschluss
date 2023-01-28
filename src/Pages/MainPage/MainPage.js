import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import mainMeal from "../../Assets/Img/Card.png";
import Carousel from "../../Components/Carousel/Carousel";
import { useState, useEffect } from "react";
import { fetchAreas, fetchCategories } from "../../Services/Services";
import "./MainPage.css";
import MealOfTheDay from "../../Components/MealOfTheDay/MealOfTheDay";
import { useParams } from "react-router-dom";
import WideCard from '../../Components/WideCard/WideCard';
 

const Main = () => {
	const [categories, setCategories] = useState();
	const [areas, setAreas] = useState();
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [searchResults, setSearchResults] = useState(null);



	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			setError(null);
			try {
				const areas = await fetchAreas();
				setAreas(areas);
				const categories = await fetchCategories();
				setCategories(categories);
			} catch (err) {
				setError(err);
			}
			setLoading(false);
		}
		fetchData();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div className="main-page">
			
			<main>
            <SearchBar setSearchResults={setSearchResults}/>
			{searchResults && (
                <section className="search-results">
                    {/* Wenn der searchResults-Wert nicht null ist, werden die Karten 
            mit den Suchergebnissen gezeigt. */}
                    {searchResults &&
                        searchResults.map((meal) => (
                            <WideCard key={meal.idMeal} meal={meal} />
                        ))}
                </section>
            )}
				 {!searchResults && <><section className="main-meal">
					<h2>Meal of the Day</h2>
					<MealOfTheDay />
					{/*                     <img src={mainMeal} alt="main-meal" />
					 */}
				</section>
				<section className="areas-section">
					<div className="title">
						<h2>Areas</h2>
						<h3>See All</h3>
					</div>
					<Carousel data={areas} button={true} type1={true} />
				</section>
				<section className="areas-section">
					<div className="title">
						<h2>Categories</h2>
						<h3>See All</h3>
					</div>
					<Carousel data={categories} card={true} />
				</section> </>}
			</main>
			<NavBar />
		</div>
	);
};

export default Main;

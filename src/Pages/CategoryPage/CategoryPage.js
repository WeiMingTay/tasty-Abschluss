import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./CategoryPage.css";
import axios from "axios";
import { useEffect } from "react";
import SmallCard from "../../Components/SmallCard/SmallCard";
import Carousel from "../../Components/Carousel/Carousel";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { fetchAreas, fetchMealSorts } from "../../Services/Services";
import { Link } from "react-router-dom";
import WideCard from '../../Components/WideCard/WideCard';

const CategoryPage = () => {
	const [selectedCategory, setSelectedCategory] = useState();
	const [mealSort, setMealSort] = useState();
	const [areas, setAreas] = useState();
	const [searchResults, setSearchResults] = useState(null);

	const params = useParams();

	const fetchSelectedCategory = async (name) => {
		const { data } = await axios.get(
			`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
		);
		setSelectedCategory(data.meals);
	};

	useEffect(() => {
		async function fetchData() {
			const areas = await fetchAreas();
			setAreas(areas);

			const sorts = await fetchMealSorts();
			setMealSort(sorts);
		}
		fetchData();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		fetchSelectedCategory(params.id);
	}, [params.id]);

	return (
		<div className="category-page">
			<header>
				<div className="header-container">
					<Link className="back-arrow-link" to={"/main"}>
						<HiArrowNarrowLeft className="back_arrow" />
					</Link>
					{/* h2/3/4?? */}
					<h1>Search</h1>
				</div>
			</header>
			<SearchBar setSearchResults={setSearchResults} />
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
			{selectedCategory && !searchResults && (
				<section className="areas-section">
					<div className="title">
						<h2>Areas</h2>
						<h3>See All</h3>
					</div>
					<Carousel data={areas} button={true} type1={true} />
				</section>
			)}

			{selectedCategory && !searchResults && (
				<section className="results-section">
					{selectedCategory?.map((meal, index) => (
						<SmallCard meal={meal} key={index} />
					))}
				</section>
			)}
			<NavBar />
		</div>
	);
};

export default CategoryPage;

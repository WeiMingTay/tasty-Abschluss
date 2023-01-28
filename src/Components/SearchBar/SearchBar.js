import React, { useRef } from "react";
import "./SearchBar.css";

const SearchBar = ({ setSearchResults }) => {
	const timerRef = useRef(null);
	const inputRef = useRef();

	// Erstellen der Suchfunktion
	const searchMeal = (searchWord) => {
		if (setSearchResults) {
			// hier wird die alte setTimeout-Funktion aufgeräumt

			clearTimeout(timerRef.current);

			// Eine setTimeout-Funktion wird hinzugefügt, um die Anfrage nach 1 Sekunde zu senden,
			// um zu verhindern, dass bei jedem Tastendruck eine Anfrage gesendet wird

			timerRef.current = setTimeout(() => {
				if (searchWord === "") {
					setSearchResults(null);
					return;
				}
				fetch(
					`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchWord}`
				)
					.then((response) => response.json())
					.then((data) => {
						const meals = data.meals;
						setSearchResults(meals);
						console.log(meals);
					});
			}, 500);
		}
	};

	return (
		<div className="search-bar">
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<input
					ref={inputRef}
					type="text"
                    id="searchBarInput"
					placeholder="Search"
					onChange={(e) => {
						searchMeal(e.target.value);
					}}
				/>
				<label for="searchBarInput">
					<svg
						onClick={(e) => searchMeal(inputRef.current.value)}
						className="search-btn"
						width="76"
						height="49"
						viewBox="0 0 76 49"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="37.7666"
							cy="23.7664"
							r="8.98856"
							stroke="#0A2533"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M44.0183 30.4849L47.5423 33.9997"
							stroke="#0A2533"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</label>
			</form>
		</div>
	);
};

export default SearchBar;

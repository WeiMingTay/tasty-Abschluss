import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import WideCard from "../../Components/WideCard/WideCard";
import "./FavoritesPage.css";

const FavoritesPage = () => {
	const [list, setList] = useState();

	//Erstellen einer Funktion, die die Liste der Lieblingsgerichte anzeigt
	const showFavoritesList = () => {
		// Erstellen eines leeren Arrays, um die  mealstobjekte
		// aus dem localStorage darin zu verschieben
		const favoritesList = [];

		for (let i = 0; i < localStorage.length; i++) {
			let key = localStorage.key(i);
			let retrievedObject = JSON.parse(localStorage.getItem(key));
			favoritesList.push(retrievedObject);
		}

		setList(favoritesList);
	};

	useEffect(() => {
		//Die Funktion wird ausgeführt,
		// nachdem die detailsPage-Komponente montiert wurde
		showFavoritesList();
	}, []);
	return (
		<>
			<section className="favorite-page">
				<h2>Favoriten</h2>
				<div>
					<div>
						{list &&
							list.map((meal, index) => <WideCard key={index} meal={meal} />)}
						{!list && <h2>No favorites to display </h2>}
					</div>
				</div>
			</section>
			<NavBar />
		</>
	);
};

export default FavoritesPage;

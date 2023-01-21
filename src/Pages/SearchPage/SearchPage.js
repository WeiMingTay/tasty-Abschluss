import "./SearchPage.css";
import NavBar from "../../Components/NavBar/NavBar";
import SearchBar from "../../Components/SearchBar/SearchBar";
// Hatte hier überlegt, ob man das wieder mit Routes machen muss... 
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


const SearchPage = () => {
	return (

			<section>
				<div className="searchHeader">
					<Link to="/">
						{/* werden in der index.html importiert */}
					<i class="las la-arrow-left"></i>
					</Link>

					<h3>Suchen</h3>
				</div>
				<SearchBar />
				<NavBar />
			</section>

	);
};

export default SearchPage;

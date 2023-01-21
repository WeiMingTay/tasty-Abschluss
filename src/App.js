import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AreasPage from "./Pages/AreasPage/AreasPage";
import DetailsPage from "./Pages/DetailsPage/DetailsPage";
import FavoritesPage from "./Pages/FavoritesPage/FavoritesPage";
import ProfilPage from "./Pages/ProfilPage/ProfilPage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import StartPage from "./Pages/Startpage/Startpage";
import MainPage from './Pages/MainPage/MainPage';
import WelcomePage from './Pages/WelcomePage/WelcomePage';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<WelcomePage />}></Route>
					<Route path="/start" element={<StartPage />} />
					<Route path="/main" element={<MainPage />}></Route>
					<Route path="/areas" element={<AreasPage />} />
					<Route path="/search" element={<SearchPage />} />
					<Route path="/details" element={<DetailsPage />} />
					<Route path="/favoriten" element={<FavoritesPage />} />
					<Route path="/profil" element={<ProfilPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

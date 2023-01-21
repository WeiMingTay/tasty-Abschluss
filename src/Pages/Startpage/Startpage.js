import Button from "../../Components/Button/Button";
import MealOfTheDay from "../../Components/MealOfTheDay/MealOfTheDay";
import NavBar from "../../Components/NavBar/NavBar";
import SearchBar from "../../Components/SearchBar/SearchBar";

const StartPage = () => {
	return (
		<div>
			<SearchBar />
			<MealOfTheDay />
			{/* Durch den Namen und "props" im Button.js kann man den Text pro Seite nutzen, auch möglich mehrere Parameter (width oder so) einzubauenˇˇ */}
			<Button name="KlickediKlick"/>
			<NavBar />
		</div>
	);
};

export default StartPage;

import Button from "../../Components/Button/Button";
import NavBar from "../../Components/NavBar/NavBar";

const DetailsPage = () => {

	// quasi nur fetchen bzw mit props holen. gefetcht wird auf der Suchseite... Würde ich ausprobieren...
	return (
		<section>
			<h2>Details</h2>
			<Button name="Video" />
			<NavBar />
		</section>
	);
};

export default DetailsPage;

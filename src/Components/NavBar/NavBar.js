import { Link } from "react-router-dom";
import "./NavBar.css";

// Ist ja auch in der Figma Vorlage recht schlicht... sollte mit den paar Zeilen fast fertig sein... Ob wir die Icons behalten oder die aus der Vorlage nehmen, kann man ja schauen... 

const NavBar = () => {
	return (
		<nav>
			<Link to="/">
				<i class="las la-home"></i>
			</Link>
			<Link to="/search">
				<i class="las la-search"></i>
			</Link>
			<Link to="/favoriten">
				<i class="lar la-heart"></i>
			</Link>
			<Link to="/profil">
				<i class="las la-user"></i>
			</Link>
		</nav>
	);
};

export default NavBar;

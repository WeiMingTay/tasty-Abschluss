// import Button from "../../Components/Button/Button";
// import MealOfTheDay from "../../Components/MealOfTheDay/MealOfTheDay";
// import NavBar from "../../Components/NavBar/NavBar";
// import SearchBar from "../../Components/SearchBar/SearchBar";

// const StartPage = () => {
// 	return (
// 		<div>
// 			<SearchBar />
// 			<MealOfTheDay />
// 			{/* Durch den Namen und "props" im Button.js kann man den Text pro Seite nutzen, auch möglich mehrere Parameter (width oder so) einzubauenˇˇ */}
// 			<Button name="KlickediKlick"/>
// 			<NavBar />
// 		</div>
// 	);
// };

import React from 'react';
import './StartPage.css';
import logo from '../../Assets/Img/main.png';
import { Link } from 'react-router-dom';

const StartPage = () => {
    return (
        <div className="start-page">
            <img src={logo} alt="logo" />
            <div className="start-info">
                <h2>All recipe you needed</h2>
                <p>
                    5000+ healthy recipes made by <br />
                    People for your healthy life
                </p>
                <Link to="/main">
                    <button className="start-btn">Get Started</button>
                </Link>
            </div>
            <div className="indicator"></div>
        </div>
    );
};

// export default StartPage;


export default StartPage;









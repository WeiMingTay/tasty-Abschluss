import React from "react";
import "./Card.css";
// import { data } from '../../Services/DummyData';
import { Link } from "react-router-dom";

const Card = ({ card }) => {
	return (
		<div className="container">
			<Link className="card-link" to={`/category/${card.strCategory}`}>
				<div className="card" key={card.idCategory}>
					<div>
						<img src={card.strCategoryThumb} alt={card.strCategory} />
					</div>
					<h2>{card.strCategory}</h2>
				</div>
			</Link>
		</div>
	);
};

export default Card;

// import "./Button.css";
// const Button = (props) => {
// 	return (

// 		<div className="button">
// 			<button>{props.name}</button>
// 		</div>
// 	);
// };

// export default Button;

import React from 'react';
import './Button.css';

const Button = ({ button }) => {
    return <div className="element-btn">{button}</div>;
};

export default Button;
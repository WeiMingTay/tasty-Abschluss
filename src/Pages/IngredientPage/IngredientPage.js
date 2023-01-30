import React, { useState } from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SmallCard from '../../Components/SmallCard/SmallCard';
import './IngredientPage.css';

const IngredientPage = () => {
    const [IngredientSearchResults, setIngredientSearchResults] =
        useState(null);
    return (
        <div className="ingredient_page">
            <SearchBar
                setIngredientSearchResults={setIngredientSearchResults}
                ingSearch={true}
            />
            <div className="results-section">
                {IngredientSearchResults?.map((meal, index) => (
                    <SmallCard meal={meal} key={index} />
                ))}
            </div>
        </div>
    );
};

export default IngredientPage;

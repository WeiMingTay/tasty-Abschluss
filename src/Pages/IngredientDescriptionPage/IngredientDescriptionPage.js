import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './IngredientDescriptionPage.css';

const IngredientDescriptionPage = () => {
    const [ingredient, setIngredient] = useState();
    const params = useParams();
    console.log(params.id);

    const getIngredientData = (ingredient) => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
            .then((response) => response.json())
            .then((data) => {
                const ingredientsList = data.meals;
                console.log(ingredientsList);
                const ingredientData = ingredientsList.find(
                    (ingredientItem) =>
                        ingredientItem.strIngredient === ingredient
                );
                console.log(ingredientData);
                setIngredient(ingredientData);
            });
    };

    useEffect(() => {
        getIngredientData(params.id);
    }, []);
    return <div>{ingredient && ingredient}</div>;
};

export default IngredientDescriptionPage;

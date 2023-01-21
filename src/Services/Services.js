import axios from 'axios';

export const fetchCategories = async () => {
    const { data } = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/categories.php?c=list'
    );

    return data.categories;
};
export const fetchAreas = async () => {
    const { data } = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
    );

    return data.meals;
};
export const fetchIngredients = async () => {
    const { data } = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/list.php?i=list'
    );

    return data.meals;
};

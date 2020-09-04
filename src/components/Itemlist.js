import React from 'react';
import Item from './Item';

const Itemlist = ({ apiResponseData }) => {

    console.log(apiResponseData);

    const mappedResponse = apiResponseData.map((item) => {
        
        const { strMeal, strMealThumb, strArea, strInstructions, idMeal } = item;

        return (
            <Item 
                key={idMeal} 
                strMeal={strMeal} 
                strMealThumb={strMealThumb} 
                strArea={strArea} 
                strInstructions={strInstructions} 
            />
        )
    });
    

    return (
        <div>
            {mappedResponse}
        </div>
    )
}

export default Itemlist;
import React from 'react';


const Item = ({ strMeal, strMealThumb, strArea, strInstructions }) => {

    console.log(strMeal);

    return (
        <div className="ui card">
            <div className="image">
                <img src={strMealThumb} alt={strMeal}></img>
            </div>
            <div className="content">
                <a className="header">{strMeal}</a>
                <div className="meta">
                    <span className="date">{strArea}</span>
                </div>
                <div className="description">
                    {strInstructions}
                </div>
            </div>
        </div>
    )
}

export default Item;
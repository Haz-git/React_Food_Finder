import React from 'react';
import Item from './Item';
import '../css/Itemlist.css';

const Itemlist = ({ apiResponseData }) => {

    const itemListRender = () => {

        if (apiResponseData === null) {

            const nullResponse = (
                    <div className="ui floating message">
                        <p>Sorry! Your Search Didn't Return Any Results! Bummer.</p>
                    </div>
            )
            
            return nullResponse;
        } else {

            const mappedResponse = apiResponseData.map((item) => {
                
                const { strMeal, strMealThumb, strArea, idMeal } = item;

                return (

                    <div className="four wide column">
                        <Item 
                            key={idMeal} 
                            strMeal={strMeal} 
                            strMealThumb={strMealThumb} 
                            strArea={strArea} 
                        />
                    </div>
                )
            });

            return mappedResponse;
        }

    }
    

    return (
        <div className='ui grid container'>
            {itemListRender()}
        </div>
    )
}

export default Itemlist;
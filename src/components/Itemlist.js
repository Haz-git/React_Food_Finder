import React from 'react';

const Itemlist = ({ apiResponseData }) => {

    const mappedResponse = apiResponseData.map((item) => {
        return (
            <div>
                {item.strMeal}
            </div>
        )
    });
    

    return (
        <div>
            {mappedResponse}
        </div>
    )
}

export default Itemlist;
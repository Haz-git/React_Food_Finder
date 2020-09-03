import React, { useState } from 'react';
import Header from './Header';
import Searchbar from './Searchbar';
import Axios from 'axios';
import Itemlist from './Itemlist';

const App = () => {

    const [ apiResponseData, setApiResponseData ] = useState([]);

    const apiRequest = (term) => {
        const requestFunction = async () => {
            const response = await Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
            setApiResponseData(response.data.meals);

            console.log(apiResponseData);
        }

        requestFunction();
    }

    return (
        <>
            <Header />
            <Searchbar apiRequest={apiRequest} />
            {/* <Itemlist apiResponseData={apiResponseData} /> */}
        </>
    )
}

export default App;
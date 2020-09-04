import React, { useState } from 'react';
import Header from './Header';
import Searchbar from './Searchbar';
import axios from 'axios';
import Itemlist from './Itemlist';
import '../css/App.css';

const App = () => {

    const [ apiResponseData, setApiResponseData ] = useState([]);

    const apiRequest = (term) => {

        const requestFunction = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
            console.log(response);
            setApiResponseData(response.data.meals);
        }

        requestFunction();
    }

    return (
        <>
            <Header />
            <Searchbar apiRequest={apiRequest} />
            <Itemlist apiResponseData={apiResponseData} />
        </>
    )
}

export default App;
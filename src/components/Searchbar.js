import React, { useState } from 'react';
import '../css/Searchbar.css';

const Searchbar = ({ apiRequest }) => {

    const [ result, setResult ] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        apiRequest(result);
    }

    const handleChange = (e) => {
        e.preventDefault();
        setResult(e.target.value);
    }

    return (
            <form onSubmit={submitHandler} className="center">
                <div className="ui input">
                    <input
                        type="text" placeholder="Search..." onChange={handleChange} 
                    />
                </div>
            </form>
    )
}

export default Searchbar;
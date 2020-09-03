import React, { useState } from 'react';

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
        <div className="ui input focus">
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Search..." onChange={handleChange} />
            </form>
        </div>
    )
}

export default Searchbar;
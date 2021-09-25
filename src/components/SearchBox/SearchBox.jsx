import React from 'react';
import './SearchBox.css'
const SearchBox = (props) => {
    return (
        <div className="search-container">
            <input className="search-input" type="text" name="nameInput" onChange={props.onInputChange} value={props.inputName} placeholder="start typing..."></input>
            <button className="search-btn">Search</button>
        </div>
    )
}

export default SearchBox;
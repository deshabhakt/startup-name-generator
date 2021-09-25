import React,{useState} from 'react';
import './SearchResultContainer.css';
import NameCard from '../NameCard/NameCard';

const SearchResultContainer = (props)=>{

    return (
        <div className="search-result-conatiner">
        {props.predictedNames.map(element => {
            return <NameCard predictedName={element}/>
        })}
        </div>
    )
}

export default SearchResultContainer;
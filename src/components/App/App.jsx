import React, { useState } from "react";
import './App.css'
import SearchBox from '../SearchBox/SearchBox'
import SearchResultContainer from '../SearchResultContainer/SearchResultContainer'
import Header from '../Header/Header'
import startupNameGenerator from '@rstacruz/startup-name-generator';

// Functional Component
function App() {
    // const lst = [
    //     "HELLO","Bhai","Kaisa","Hai","Kya","kar","raha","mereko","naukri","lagegi","kya","zindagi","zhand","hogayi","hai","ab","to","bs","modiji","hi","sahara","hai"
    //   ];

    const defaultLst = ["HELLO", "Bhai", "Kaisa", "Hai", "Kya", "kar", "raha", "mereko", "naukri", "lagegi", "kya", "zindagi", "zhand", "hogayi", "hai", "ab", "to", "bs", "modiji", "hi", "sahara", "hai"];

    const [predictedNames, setPredictedNames] = useState(defaultLst)


    const [inputName, setInputName] = useState();
    const [numOfNamesGenerated, setNumOfNamesGenerated] = useState(0);

    function onInputChange(event) {
        const newInput = event.target.value;
        setInputName(prevVal => newInput)
        setPredictedNames(prevVal => {
            if (newInput === "") {
                return defaultLst;
            } else
                return startupNameGenerator(newInput)
        });
        setNumOfNamesGenerated(prevVal => predictedNames.length)
    }


    return (
        <div className="app-container">
            <div className="app-header-search-bar">
                <Header />
                <SearchBox onInputChange={onInputChange} inputName={inputName} />
                <h1 className="input-length-counter">Total Names Generated = {numOfNamesGenerated}</h1>
            </div>
            <div className="app-search-results-container">
                <SearchResultContainer predictedNames={predictedNames} />
            </div>
        </div >
    )
}

export default App;


// Class Component

/*
class App extends React.Component{
    render(){
        return (
            <div>This is App.jsx</div>
        )
    }
}
export default App;

*/
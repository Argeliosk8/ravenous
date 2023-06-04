import React, {useState, useEffect} from "react";
import styles from "./SearchBar.module.css"
import Button  from "./Button";


function SearchBar(){
    
    const sortByOptions = {
        "Best Match": "best_match",
        "Highest Rated": "rating",
        "Most Reviewed": "review_count"
    }

    const [searchTerm, setSearchTerm] = useState('');
    const [searchLocation, setSearchLocation] = useState('');
    const [sortingOption, setSortingOption] = useState('best_match')


    function handleClick(event) {
        let key = event.target.value
        setSortingOption(sortByOptions[key])
    }

    function handleTermChange(event) {
        setSearchTerm(event.target.value)
    }

    function handleLocationChange(event) {
        setSearchLocation(event.target.value)
    }

    const searchMessage = {
        term: searchTerm,
        location: searchLocation,
        sorting: sortingOption
    }

    function renderSortingOptions(sortByOptions) {
        let keys = Object.keys(sortByOptions)
        return keys.map((key)=>{
            return (<div><input type="button" value={key} className={styles.sortingButton} ></input></div>)
        })
    }

    return (
        <div className={styles.SearchBarContainer}>
            <div className={styles.sortingContainer}>
                <ul onClick={handleClick} >
                    {renderSortingOptions(sortByOptions)}
                </ul>
            </div>
            <div className={styles.whiteline}></div>
            <div className={styles.inputsContainer}>
                <div><input className={styles.inputSearch} type="text" placeholder="Search Businesses" onChange={handleTermChange}></input></div>
                <div><input className={styles.inputSearch} type="text" placeholder="Where?" onChange={handleLocationChange}></input></div>              
            </div>
            <div className={styles.buttonContainer}>
                <Button searchMessage={searchMessage}/>
            </div>
        </div>
    );
}

export default SearchBar;
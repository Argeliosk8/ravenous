import React, {useState, useEffect} from "react";
import styles from "./SearchBar.module.css"
import Button  from "./Button";


function SearchBar({handleSearch}){

    const sortByOptions = {
        "Best Match": "best_match",
        "Highest Rated": "rating",
        "Most Reviewed": "review_count"
    }

    const [searchCategory, setSearchCategory] = useState('');
    const [searchLocation, setSearchLocation] = useState('');
    const [sortingOption, setSortingOption] = useState('best_match')


    function handleSortingClick(event) {
        let key = event.target.value
        setSortingOption(sortByOptions[key])
    }

    function handleSerchCategory(event) {
        setSearchCategory(event.target.value)
    }

    function handleLocationChange(event) {
        setSearchLocation(event.target.value)
    }

    const searchCriteria = {
        category: searchCategory,
        location: searchLocation,
        sort_by: sortingOption
    }

    function renderSortingOptions(sortByOptions) {
        let keys = Object.keys(sortByOptions)
        return keys.map((key)=>((<div><input type="button" value={key} className={styles.sortingButton} ></input></div>)))
    }

    function handleClick(){        
        handleSearch(searchCriteria.location, searchCriteria.category, searchCriteria.sort_by)
        
      }

    return (
        <div className={styles.SearchBarContainer}>
            <div className={styles.sortingContainer}>
                <ul onClick={handleSortingClick} >
                    {renderSortingOptions(sortByOptions)}
                </ul>
            </div>
            <div className={styles.whiteline}></div>
            <div className={styles.inputsContainer}>
                <div><input className={styles.inputSearch} type="text" placeholder="Search Businesses" onChange={handleSerchCategory}></input></div>
                <div><input className={styles.inputSearch} type="text" placeholder="Where?" onChange={handleLocationChange}></input></div>              
            </div>
            <div className={styles.buttonContainer}>
                <Button handleClick={handleClick}/>
            </div>
        </div>
    );
}

export default SearchBar;
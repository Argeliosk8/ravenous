import React from "react";
import styles from "./SearchBar.module.css"

function Button({searchMessage}) {
    function handleClick(event) {
        event.preventDefault()
        console.log(`Searching Yelp with ${searchMessage.term}, ${searchMessage.location}, ${searchMessage.sorting}`)
    }
    
    return (
        
        <div><input type="submit" value="Let's Go!" className={styles.searchButton} onClick={handleClick}></input></div>
        
    );
}

export default Button;
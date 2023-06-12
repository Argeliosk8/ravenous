import React from "react";
import styles from "./SearchBar.module.css"
import searchBusiness from "../../Utils/YelpApi";


function Button({searchCriteria}) {

    function handleClick(){
        
        searchBusiness(searchCriteria.location, searchCriteria.category, searchCriteria.sort_by)
    }
    
    return (
        
        <div><input type="submit" value="Let's Go!" className={styles.searchButton} onClick={handleClick}></input></div>
        
    );
}

export default Button;
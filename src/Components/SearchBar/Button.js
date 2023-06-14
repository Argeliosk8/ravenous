import React, {useState} from "react";
import styles from "./SearchBar.module.css"
import searchBusiness from "../../Utils/YelpApi";



function Button({handleClick}) {

   
    
    return (
        
        <div>
            <input type="submit" value="Let's Go!" className={styles.searchButton} onClick={handleClick}></input>
        </div>
        
    );
}

export default Button;

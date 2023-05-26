import React from "react";
import styles from "./SearchBar.module.css"

function Button(props) {
    return (
        
        <div><input type="submit" value="Let's Go!" className={styles.searchButton} onClick={props.onClick}></input></div>
        
    );
}

export default Button;
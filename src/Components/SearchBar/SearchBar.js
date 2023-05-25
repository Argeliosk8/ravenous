import React from "react";
import styles from "./SearchBar.module.css"

const searchBar = {
    imgSrc: "https://images.unsplash.com/photo-1491185841098-9ce20f966624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
}

function SearchBar(){
    return (
        <div className={styles.SearchBarContainer}>
            <div className={styles.sortingContainer}>
                <ul>
                    <div><li><a href="#home">Best<br></br>Match</a></li></div>
                    <div><li><a href="#news">Highest<br></br>Rated</a></li></div>
                    <div><li><a href="#contact">Most<br></br>Reviewed</a></li></div>                    
                </ul>
            </div>
            <div className={styles.whiteline}></div>
            <div className={styles.inputsContainer}>
                <div><input className={styles.inputSearch} type="search" placeholder="Search Businesses"></input></div>
                <div><input className={styles.inputSearch} type="search" placeholder="Where?"></input></div>              
            </div>
            <div className={styles.buttonContainer}>
                <div><input type="submit" value="Let's Go!" className={styles.searchButton}></input></div>
            </div>
        </div>
    );
}

export default SearchBar;
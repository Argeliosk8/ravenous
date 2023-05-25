import React, {useState} from 'react';
import BusinessGrid from '../BusinessGrid/BusinessGrid';
import SearchBar from '../SearchBar/SearchBar';
import styles from './App.module.css'



function App() {   
    return (
        <div className={styles.AppContainer}>
            <div className={styles.headerContainer}><h1>ravenous</h1></div>
            <SearchBar />
            <BusinessGrid />
        </div>     
    )
}

export default App;

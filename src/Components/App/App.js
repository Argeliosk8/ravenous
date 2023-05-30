import React, {useState} from 'react';
import BusinessGrid from '../BusinessGrid/BusinessGrid';
import SearchBar from '../SearchBar/SearchBar';
import styles from './App.module.css'

const business = {
    imagesrc: "https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=743&q=80",
    name: "Pizza Nostra",
    address: "101 Elizabeth St",
    city: "Oradell",
    state: "NJ",
    zipcode: "07649",
    type: "ITALIAN",
    rating: 4.8,
    reviews: 90

}

const businesses = [business, business, business, business, business, business];


function App() {   
    return (
        <div className={styles.AppContainer}>
            <div className={styles.headerContainer}><h1>ravenous</h1></div>
            <SearchBar />
            <BusinessGrid businesses={businesses}/>
        </div>     
    )
}

export default App;

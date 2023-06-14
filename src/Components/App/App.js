import React, {useState, useEffect} from 'react';
import BusinessGrid from '../BusinessGrid/BusinessGrid';
import SearchBar from '../SearchBar/SearchBar';
import styles from './App.module.css';
import searchBusiness from "../../Utils/YelpApi";
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

const business = {
    imagesrc: "https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=743&q=80",
    name: 'Pizza',
    address: "101 Elizabeth St",
    city: "Oradell",
    state: "NJ",
    zipcode: "07649",
    type: "ITALIAN",
    rating: 4.8,
    reviews: 90

}




function App() {   

    const [businesses, setBusinesses] = useState([])
   
        const handleSearch = async (location, category, sort_by) =>{
            const tempbusinesses = await searchBusiness(location, category, sort_by)
            setBusinesses(()=>[])
            tempbusinesses.forEach(business => {
                setBusinesses((prev)=>[business, ...prev])
            })
        }

    
    return (
        <div className={styles.AppContainer}>
            <div className={styles.headerContainer}><h1>ravenous</h1></div>
            <SearchBar handleSearch={handleSearch}/>
            <BusinessGrid businesses={businesses}/>
        </div>  
    )
}

export default App;

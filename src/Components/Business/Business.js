import React from "react";
import styles from "./Business.module.css"

const business = {
    imagesrc: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    name: "Pizza Nostra",
    address: "101 Elizabeth St",
    city: "Oradell",
    state: "NJ",
    zipcode: "07649",
    type: "ITALIAN",
    rating: 4.8,
    reviews: 90

}

function Business(){
    return (
        <div className={styles.businessContainer}>
            <div className={styles.imgContainer}><img src={business.imagesrc} alt=""/></div>
            <div className={styles.nameContainer}><h4>{business.name}</h4></div>
            <div className={styles.infoContainer}>
                <div className={styles.addressContainer}>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipcode}</p>
                </div>
                <div className={styles.statsContainer}>
                    <p><strong>{business.type}</strong></p>
                    <p><strong>{business.rating} Stars</strong></p>
                    <p>{business.reviews} reviews</p>
                </div>
            </div>
        </div>
    )
}

export default Business;
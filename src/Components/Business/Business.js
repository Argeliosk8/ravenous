import React from "react";
import styles from "./Business.module.css"

function Business({business}){
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
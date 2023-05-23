import React from "react";
import Business from "../Business/Business";
import styles from "./BusinessGrid.module.css"

function BusinessGrid(){
    return (
        <div className={styles.businessgrid}>
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
        </div>
    )
}

export default BusinessGrid;
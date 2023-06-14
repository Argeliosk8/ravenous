import React from "react";
import Business from "../Business/Business";
import styles from "./BusinessGrid.module.css"

function BusinessGrid({businesses}){ 

    return (
        <div className={styles.businessgrid}>
            {businesses.map(
                (business) => {return <Business business={business} key={business.name} />;}
            )}
        </div>
    );
};

export default BusinessGrid;
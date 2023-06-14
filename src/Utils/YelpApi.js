import React from "react";

const apiKey = 'Bearer iIKdZiFvldlVmUIPXMQZsOHYWbzOOWd6dblsloccq_bvMzthEdd9mgEcdJ4NGf1yHzPXdoefOnNdr9m8oVmswWNG5kGughpkCCao_wWkVI6Oek_b0WpUpIIdXPGIZHYx'
const baseUrl = 'https://api.yelp.com/v3' 
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: apiKey
    } 
};

const searchBusiness = async (location, category , sortBy) => {
    
    const endPoint = '/businesses/search'
    const apiToCall = `https://cors-anywhere.herokuapp.com/${baseUrl}${endPoint}?location=${location}&categories=${category}&sort_by=${sortBy}&limit=6`
    try {
        const response = await fetch(apiToCall, options)
        if(response.ok) {
            const jsonResponse = await response.json();
        let values = await Object.values(jsonResponse.businesses)
        let newObjArray = await values.map(obj => (
            {
                imagesrc: obj.image_url,
                name: obj.name,
                address: obj.location.address1,
                city: obj.location.city,
                state: obj.location.state,
                zipcode: obj.location.zip_code,
                type: obj.categories[0].title,
                rating: obj.rating,
                reviews: obj.review_count
            }
        )) 
               
                
            //console.log(newObjArray)
            return newObjArray
        }

    } catch(error) {
        console.log(error);
    }
    
}   

export default searchBusiness;
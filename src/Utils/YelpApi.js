import React from "react";

const apiKey = ''
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
            console.log(jsonResponse)
        }

    } catch(error) {
        console.log(error);
    }
}   

export default searchBusiness;

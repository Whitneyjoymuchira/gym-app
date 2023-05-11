import React from 'react'

 const API_BASE_URL = import.meta.env.VITE_RAPID_API_KEY;

export const exerciseOptions={
	method: 'GET',
	headers: {
        'X-RapidAPI-Host':'exercisedb.p.rapidapi.com',
		'X-RapidAPI-Key': API_BASE_URL
		
	}
}

 export const fetchData = async(url,options) => {

    const response=await fetch(url,options)
    const data=await response.json()

  return data
}


import React, { useEffect, useState } from 'react';
import "./Weatherapp.css";

const  Weatherapp=()=>
{
    const [city,setcity]= useState(null);
    const [search,setsearch]=useState("Mumbai");

    useEffect(()=>{
        const fetchapi= async () =>
        {
            const myurl= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=19d81c2485f142724716cd956906434d`;
            const response= await fetch(myurl);
            const resjson= await response.json();
            // console.log(resjson.main.temp);
            setcity(resjson.main);
        };

        fetchapi();
    },[search])
    return(
        <>
            <div className="bgimg">
                <input
                type='search'
                value={search}
                name='checklocation'
                onChange={(event)=>setsearch(event.target.value)}    
                  />

            {!city ? (
                <p className='errormsg'>No Data Found</p>
            ) : (
                <div className="info">
                <h2 className='location'>
                   {search}
                </h2>
                <h1 className='temp'>
                   {city.temp} °C
                </h1>
                <h3 className='minval'>
                   Min : {city.temp_min} °C   | Max : {city.temp_max} °C
                </h3>
             </div>

            )}      
            </div>
        </>
    );
}

export default Weatherapp;
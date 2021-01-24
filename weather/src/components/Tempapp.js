import React,{useEffect, useState} from "react";
import "./css/style.css";

const Tempapp = () => {

    const [city,setcity] =useState(null);
    const [search, setsearch] = useState("");

useEffect( ()=> {
    const fetchapi = async () => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0fb48b1af5c39363abd479a9dc7e64e0`;
        const response = await fetch(url);
        const resjson = await response.json();
        setcity(resjson.main);
    }
    fetchapi();
},[search])

    return(
        <>
        <div className="box"> 
            <div className="inputData">
            <input 
            type="search"
            className="inputFeild" 
            onChange={ (event) =>{setsearch(event.target.value)} } />
            </div>
        {!city ? ( <p className="errormsg"> No city found</p>) : (
        <div className="info"> 
        <h2 className="location">
            <i className="fas fa-street-view"></i>{search}
        </h2>
        <h1 className="temp">
           {city.temp}°C
        </h1>
        <h3 className="tempmin_max"> Min : {city.temp_min}°C | Max : {city.temp_max}°C</h3>
        </div>
         )}
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        </div>
       
        </>
    )
}

export default Tempapp;
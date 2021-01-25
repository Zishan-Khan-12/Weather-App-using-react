import React,{useEffect, useState} from "react";
import "./css/style.css";

const Weather = ({city}) => {
    return (
        <div className="info"> 
            <h2 className="location">
                <i className="fas fa-street-view"></i>{city.name}
            </h2>
            <h1 className="temp">
               {city.main.temp}°C
            </h1>
            <h3 className="tempmin_max"> Min : {city.main.temp_min}°C | Max : {city.main.temp_max}°C</h3>
        </div>
        );
}

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('');

    const fetchapi = async () => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search.toLowerCase()}&units=metric&appid=0fb48b1af5c39363abd479a9dc7e64e0`;
        fetch(url)
            .then(result => result.json())
            .then(data => {
                if (data.cod === 200)
                    setCity(data);
                else
                    setCity(null);
            })
            .catch(err => setCity(null))
    }

    useEffect(() => {
        fetchapi();
    }, [search]);

    return(
        <div>
            <div className="box"> 
                <div className="inputData">
                    <input 
                        type="search"
                        className="inputField" 
                        onChange={ ({target}) => setSearch(target.value) } />

                </div>
            
                {city ? <Weather city={city}/> : <p className="errormsg">No city found</p> }
            
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>

            </div>

        </div>
    );
}

export default Tempapp;
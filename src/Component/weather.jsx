import React, { useEffect, useState } from "react";
import axios from "axios";
//import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";
//import { cityChange } from "../actions/actions";
import { useRef } from "react";
import serchIcon from "./serchIcon.webp";
import weatherIcon2 from "./weatherIcon2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { sunRise } from '@fortawesome/free-solid-svg-icons';

import { faMagnifyingGlass, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";


function WeatherComponent() {
    //const myCity = useSelector((state)=>state.enterCityName);
    // const dispatch =  useDispatch();
    const displayDifferentIcon = useRef();
    const [city, setMyCity] = useState('indore');
    const [cityBackup, setCityBackup] = useState('');
    const [image, setImage] = useState();
    const [imageText, setImageText] = useState();
    const [cityName, setCityName] = useState('');
    const [regionname, setRegion] = useState('');
    const [countryname, setCountry] = useState('');
    const [latname, setLat] = useState('');
    const [lonname, setLon] = useState('');
    const [localtimename, setLocaltime] = useState('');

    const [last_updated_name, setLastUpdate] = useState('');
    const [temp_c_name, setTemp] = useState('');
    const [temp_f_name, setFer] = useState('');
    const [weatheText, setWeatherText] = useState('');
    const [weatherIcon, setWeatherIcon] = useState('');

    const [humidityname, sethumidity] = useState('');
    const [moonRise, setMoonRise] = useState('');
    const [moonSet, setMoonSet] = useState('');
    const [sunRise, setSunRise] = useState('');
    const [sunSet, setSunSet] = useState('');

    const handler = (event) => {
        setMyCity(event.target.value);
    };

    /*const weatherIconDisplay = () => {
        if (weatheText === "Sunny") {
            displayDifferentIcon.current.src ?  {weatherIcon2} : {sunny};
        }
    }*/


    console.log("this is city " + city);

    useEffect(() => {
        axios.get(`https://api.weatherapi.com,............................addyoururl.................${city}`)
            .then((res) => {
                var weather_res = res.data;
                console.log('weather_res' + weather_res)
                console.log(res.data);
                /* weatherIconDisplay();*/
                var image = weather_res.current.condition.icon;
                var text = weather_res.current.condition.text;
                var city = weather_res.location.name;
                var region = weather_res.location.region;
                var country = weather_res.location.country;
                var lat = weather_res.location.lat;
                var lon = weather_res.location.lon;
                var localtime = weather_res.location.localtime;

                var moonrise = weather_res.forecast.forecastday[0].astro.moonrise;
                var moonset = weather_res.forecast.forecastday[0].astro.moonset;
                var sunrise = weather_res.forecast.forecastday[0].astro.sunrise;
                var sunset = weather_res.forecast.forecastday[0].astro.sunset;
                setImage(image);
                setImageText(text);
                setMoonRise(moonrise);
                setMoonSet(moonset);
                setSunRise(sunrise);
                setSunSet(sunset);
                setCityName(city);
                setRegion(region);
                setCountry(country);
                setLat(lat);
                setLon(lon);;
                setLocaltime(localtime);

                var last_updated = weather_res.current.last_updated;
                var wrtemp_c = weather_res.current.temp_c;
                var temp_c = Math.round(wrtemp_c);
                var temp_f = weather_res.current.temp_f;
                var weatherInText = weather_res.current.condition.text;
                var weatherInIcon = weather_res.current.condition.icon;
                setLastUpdate(last_updated);
                setTemp(temp_c);
                setFer(temp_f);
                setWeatherText(weatherInText);
                setWeatherIcon(weatherInIcon);

                var humidity = weather_res.current.humidity;
                sethumidity(humidity);
            });
    }, [cityBackup]);

    // const fetchData = () => {
    //     axios.get(`https://api.weatherapi.com/v1/forecast.json?key=eb9e68225042466fb88115319241707&q=${city}`)
    //         .then((res) => {
    //             var weather_res = res.data;
    //             console.log('weather_res' + weather_res)
    //            /* weatherIconDisplay();*/
    //             var city = weather_res.location.name;
    //             var region = weather_res.location.region;
    //             var country = weather_res.location.country;
    //             var lat = weather_res.location.lat;
    //             var lon = weather_res.location.lon;
    //             var localtime = weather_res.location.localtime;

    //             var moonrise = weather_res.forecast.forecastday[0].astro.moonrise;
    //             var moonset = weather_res.forecast.forecastday[0].astro.moonset;
    //             var sunrise = weather_res.forecast.forecastday[0].astro.sunrise;
    //             var sunset = weather_res.forecast.forecastday[0].astro.sunset;
    //             setMoonRise(moonrise);
    //             setMoonSet(moonset);
    //             setSunRise(sunrise);
    //             setSunSet(sunset);
    //             setCityName(city);
    //             setRegion(region);
    //             setCountry(country);
    //             setLat(lat);
    //             setLon(lon);;
    //             setLocaltime(localtime);

    //             var last_updated = weather_res.current.last_updated;
    //             var wrtemp_c = weather_res.current.temp_c;
    //             var temp_c = Math.round(wrtemp_c);
    //             var temp_f = weather_res.current.temp_f;
    //             var weatherInText = weather_res.current.condition.text;
    //             var weatherInIcon = weather_res.current.condition.icon;
    //             setLastUpdate(last_updated);
    //             setTemp(temp_c);
    //             setFer(temp_f);
    //             setWeatherText(weatherInText);
    //             setWeatherIcon(weatherInIcon);

    //             var humidity = weather_res.current.humidity;
    //             sethumidity(humidity);




    //         });




    //     }

    return (
        <>

            <div className="container">
                <div className="leftBox">
                    <div className="content">
                        <div className="temp"> <p className="tempreture cityName icon time text">{temp_c_name}<span>&#176;</span></p></div>
                        <div className="city">
                            <div className=""> <h1 className="mainTittle">{cityName}</h1></div>

                            <div className="timeBox"> <h1 className="tittle">{localtimename}</h1></div>
                        </div>
                        <div className="iconBox">
                            <div className="wrapper">
                                <img ref={displayDifferentIcon} src={image} alt="" />
                            </div>
                            <div className="wrapper2"> <h1 className="tittle">{imageText}</h1></div>

                        </div>
                    </div>

                </div>

                <div className="rightBox">
                    <div className="serchParent">
                        <input className="serch" type="text" placeholder="Another Location" onChange={(event) => handler(event)} />
                        <button id="serchBtn" onClick={() => setCityBackup(city)}><img src="" alt="" /><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </div>

                    <div className="weatherBox">
                        <div className="sunRiseDetails">
                            <div className="astroHeading"><p>WEATHER</p></div>
                            <div className="riseset" >  <p>Weather </p> <p>{weatheText}</p> </div>
                            <div className="riseset" >  <p>Humidity </p> <p>{humidityname}</p></div>
                            <div className="riseset"><p>Lat </p> <p>{latname}</p></div>
                            <div className="riseset" > <p>Lot </p> <p>{lonname}</p></div>
                            <div className="riseset" ><p>Temp-f </p><p>{temp_f_name}</p></div>
        
                        </div>
                    </div>

                    <div className="astroBox">
                        <div className="sunRiseDetails">
                            <div className="astroHeading"><p>ASTRO</p></div>
                            <div className="riseset"><p>Sunrise </p> <p>{sunRise}</p></div>
                            <div className="riseset" > <p>Sunset </p> <p>{sunSet}</p></div>
                            <div className="riseset" ><p>Moonrise </p><p>{moonRise}</p></div>
                            <div className="riseset" >  <p>Moonset </p> <p>{moonSet}</p></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
            <div className="main">
                <div id="left">
                    <div className="left">
                        <h1 id="mainTittle" className="tittle">{cityName}</h1>
                        <h1 className="tittle">{regionname}, {countryname}</h1>
                        <h1 className="tittle"></h1>
                        <h1 id="time" className="tittle">{localtimename}</h1>
                        <div className="astro">
                        
                        </div>
                    </div>
                </div>
                <div id="right">
                    <div className="right">
                        <p id="tempreture">{temp_c_name}<span>&#176;</span></p>
                        <div id="serchParent">
                            <input className="serch" type="text" placeholder="Enter City Name" onChange={(event) => handler(event)} />
                            <button id="serchBtn" onClick={()=>setCityBackup(city)}><img src="" alt="" /><FontAwesomeIcon icon={faMagnifyingGlass} /></button>

                        </div>
                        <img ref={displayDifferentIcon} id="weatherIcon" src={image} alt="" />
                        <p style={{color:"white"}}>{imageText}</p>
                    </div>

                    <div className="context">
                        <p id="leftContext">lat : {latname}</p>
                        <p>lot : {lonname}</p>
                        <p>{last_updated_name}</p>
                        <p>Temp-F : {temp_f_name}</p>
                        <p>Weather : {weatheText}</p>

                        <p id="rightContext" >Humidity : {humidityname}</p>
                    </div>
                </div>
            </div>
        </div> */}
        </>

    );
}
export default WeatherComponent;

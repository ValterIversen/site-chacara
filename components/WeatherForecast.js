
"use client"
import React, { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import { motion, AnimatePresence } from "framer-motion";
import axios from 'axios';
import Loading from 'react-simple-loading';

import styles from '../styles/register.module.css';

export default function WeatherForecast({ startDate, endDate }) {

    const [loadingWeather, setLoadingWeather] = useState(false);
    const [error, setError] = useState(false);
    
    const [days, setDays] = useState([]);
    const [rainMM, setRainMM] = useState([]);
    const [minTemp, setMinTemp] = useState([]);
    const [maxTemp, setMaxTemp] = useState([]);
    const [windSpeed, setWindSpeed] = useState([]);


    useEffect(() => {
        if(startDate && endDate){
            setError(false);
            setLoadingWeather(true);
            const newStartDate = ApiFormatDate(startDate);
            const newEndDate = ApiFormatDate(endDate);
            
            getWeather(newStartDate, newEndDate).then(data => {
                if(data.time){
                    setDays(data.time);
                    setMaxTemp(data.temperature_2m_max);
                    setMinTemp(data.temperature_2m_min);
                    setRainMM(data.rain_sum);
                    setWindSpeed(data.windspeed_10m_max);
                    
                }
                else
                setError(true);
                
                setLoadingWeather(false);
            });
        }
    },[startDate, endDate])


    return (
        <div className={styles.weatherForecast}>
            {
                loadingWeather?
                    <Loading />
                    :
                    <WeatherCard days={days} rainMM={rainMM} minTemp={minTemp} maxTemp={maxTemp} windSpeed={windSpeed}/>
            }
        </div>
    )
}

const WeatherCard = ({days, rainMM, minTemp, maxTemp, windSpeed}) => {

    return (
        <div className={styles.weatherCard}>
            <div className={styles.legendCard}>
                <span>Dia</span>
                <span>Chuva</span>
                <span>Temp max</span>
                <span>Temp min</span>
            </div>
            {
                days.map((day, index) => (
                    <div className={styles.weatherData} key={index}>
                        <span>{InterfaceFormatDate(day)}</span>
                        <span>{rainMM[index]}mm</span>
                        <span>{maxTemp[index]}°C</span>
                        <span>{minTemp[index]}°C</span>
                    </div>
                ))
            }
        </div>
    )
}

const ApiFormatDate = (dt) => {
        return dt.getFullYear( ) + '-' +
        ('0' + (dt.getMonth()+1)).slice(-2) + '-' +
        ('0' + dt.getDate()).slice(-2);
    }

const InterfaceFormatDate= (dt) => {
        const date = new Date(dt + ' GMT')
        return  (
        ('0' + date.getDate()).slice(-2) + '/' +
        ('0' + (date.getMonth()+1)).slice(-2) + '/' +
        date.getFullYear( )
        );
    }

const getReservedDays = () => {
    const reservedDays = 
    [
        {start: new Date(`03/01/2023`), end: new Date(`03/05/2023`) },
        {start: new Date(`04/03/2023`), end: new Date(`04/10/2023`) },
        {start: new Date(`05/28/2023`), end: new Date(`05/29/2023`) },
        {start: new Date(`06/19/2023`), end: new Date(`06/20/2023`) },
        {start: new Date(`07/28/2023`), end: new Date(`07/29/2023`) },
        {start: new Date(`08/02/2023`), end: new Date(`08/08/2023`) },
        {start: new Date(`09/15/2023`), end: new Date(`09/18/2023`) },
        {start: new Date(`10/17/2023`), end: new Date(`10/21/2023`) },
        {start: new Date(`11/03/2023`), end: new Date(`11/09/2023`) },
        {start: new Date(`12/11/2023`), end: new Date(`12/17/2023`) }
    ];

    return reservedDays;
}

const getWeather = async (startDate, endDate) => {
    try{
       const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=-20.91&longitude=-48.64&timezone=auto&start_date=${startDate}&end_date=${endDate}&daily=rain_sum&daily=windspeed_10m_max&daily=temperature_2m_max&daily=temperature_2m_min`)
       const data = response.data.daily;
       return data;
    }
    catch(error){
        console.log('error', error)

    }
}


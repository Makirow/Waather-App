import React, { useEffect, useState } from 'react';
import "./Container.css";
import "./Responsive.css";
import "../Components/NavigationItems.css"
import "../Components/Search.css";
import "../Pages/Header.css";
import "./FrontPage.css";



import logo_icon from '../Image/logo.png';
import Thermometer from '../Image/thermometer.png';
import wind_icon from '../Image/wind.png'
import sunny_icon from '../Image/sunny.png';
import rainy_icon from '../Image/rainy.png';
import normal_icon from '../Image/normal.png';
import humid_icon from '../Image/humid.png';
import cloudy_icon from '../Image/cloudy.png';
import storm_icon from '../Image/storm.png';
import snow_icon from  '../Image/snaw.png';


import LogoImage from '../Image/LogoImage';
import Register from '../Register';
import Login from '../Login';

import { toast } from 'react-toastify';
import Notification from '../Components/notification/Notification';
import { auth } from '../Components/Firebase';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';



function Container() {


  let API_Key = "19bfc72841b6a192f45a43f8f008ef3c";

  let search_state = "false";

  const [wicon, setwicon] = useState(null);

  const searchFunct = async() => {
               
      const elements = document.getElementsByClassName("InputText");
      
   if (elements[0].value === "") {

    return 0;

   }
  let Url  = `https://api.openweathermap.org/data/2.5/weather?q=${elements[0].value}&units=Metric&appid=${API_Key}`;
  let reponse = await fetch(Url);
   let Data = await reponse.json();
   const Humidty = document.getElementsByClassName("humidy-percent");
   const Wind = document.getElementsByClassName("Wind-rate");
   const Description = document.getElementsByClassName("description");
   const Sunshine = document.getElementsByClassName("sunny-percent");
   const Temparature = document.getElementsByClassName("weather-temperature");
   const DayTime = document.getElementsByClassName("Period-of-Day");
   const Location = document.getElementsByClassName("weather-Location");
   const Country = document.getElementsByClassName("nation");

   const SunshineRate = 100 - Data.clouds.all;

   Humidty[0].innerHTML = Data.main.humidity+" %";
   Wind[0].innerHTML = Data.wind.speed+" km/h";
   Temparature[0].innerHTML = Data.main.temp+" ℃";
   Sunshine[0].innerHTML = SunshineRate.toFixed(0)+"%";
   Description[0].innerHTML = Data.weather[0].description+" "+"("+Data.weather[0].icon+")";
   Location[0].innerHTML = Data.name;
   Country[0].innerHTML = Data.sys.country;
  

const dt = Data.dt;
const timezone = Data.timezone
 
const LocalTime = dt + timezone;
const Hours = Math.floor(LocalTime / 3600) % 24;

const CurrentDate = new Date(LocalTime * 1000);

const Dateof = CurrentDate.getDay();
const Days0fWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday" , "Saturday", "Sunday"]

const Dates = CurrentDate.getDate() - 1;

const Month = CurrentDate.getMonth();
const MonthsOfYear = ["January", "February", "March", "April", "May" , "June", "August",  "September", "October", "November", "December"]

const  Year = CurrentDate.getFullYear();

const WeatherDay = document.getElementsByClassName("Day");
const WeatherMonth = document.getElementsByClassName("Month");
const WeatherDate = document.getElementsByClassName("Dates");
const WeatherYear = document.getElementsByClassName("Year");

WeatherDay[0].innerHTML = Days0fWeek[Dateof];
WeatherMonth[0].innerHTML = MonthsOfYear[Month];
WeatherYear[0].innerHTML = Year;
WeatherDate[0].innerHTML = Dates;

let DayPeriod;

if (6 <= Hours && Hours <12) {
  DayPeriod = "Morning";
  DayTime[0].innerHTML =  DayPeriod+",";
}
else if (12 <= Hours && Hours < 18) {
  DayPeriod = "Afternoon";
  DayTime[0].innerHTML =  DayPeriod+",";
}
else if (18 <= Hours && Hours < 22) {
  DayPeriod = "Evening";
  DayTime[0].innerHTML =  DayPeriod+",";
}
else {
  DayPeriod = "Night";
  DayTime[0].innerHTML =  DayPeriod+",";
}



   
if(Data.weather[0].icon === "01d" || Data.weather[0].icon === "01n"){
  setwicon(sunny_icon);
}
else if(Data.weather[0].icon === "02d" || Data.weather[0].icon === "02n"){
setwicon(cloudy_icon);
}

else if(Data.weather[0].icon === "09d" || Data.weather[0].icon === "09n"){
setwicon(rainy_icon);
}
else if(Data.weather[0].icon === "10d" || Data.weather[0].icon === "10n"){
setwicon(normal_icon);
}

else if(Data.weather[0].icon === "13d" || Data.weather[0].icon === "13n"){
setwicon(snow_icon);
}

else if(Data.weather[0].icon === "03d" || Data.weather[0].icon === "03n"){
setwicon(cloudy_icon);
}

else if(Data.weather[0].icon === "04d" || Data.weather[0].icon === "04n"){
setwicon(cloudy_icon);
}
else{
setwicon(snow_icon)
}


search_state = "true";

  }

  const [wicon2, setwicon2] = useState(null);

  const Normal = async() => {

  const [A, setA] = useState(null);
    useEffect(() =>{

    const numberGenerator = () => {
      const RandomA = Math.floor(Math.random() * 14);
     
  
      setA(RandomA);
     
    }
    numberGenerator();

    const intervalid = setInterval(() =>{
      numberGenerator();
   }, 25000);
   return() =>{
     clearInterval(intervalid);
   };
    
  }, []);

 const Towns = [
  'Harare',
  'Montevideo',
  'Marigot',
  'Paramaribo',
  'Kingstown',
  'Castries',
  'Basseterre',
  'Pyongyang',
  'Ulaanbaatar',
  'Beirut',
  'Biskkek',
  'Kuwait City',
  'Kinshasa',
  'Moroni',
  'Praia',
  'Bujumbura',
  'Luanda',
  'Yaounde',
  'Sanaa',
  'Colombo',
  'Damascus',
  'Seoul',
  'Singapore',
  'Manila',
  'Islamabad',
  'Nairobi',
  'Tripoli',
  'Bissau',
  'Accra',
  'Libreville',
  'Asmara',
  'Amman',
  'Tokyo',
  'Tehran',
  'Beijing',
  'stanley',
  'quito',
  'santo domingo',
  'san salvador',
  'Havana',
  'Kabul',
  'New Delhi',
  'Jakarta',
  'Caracas',
  'Lome',
  'Pretoria',
  'Juba',
  'Kigali',
  'Rabat',
  'Muscat',
  'Gustavia',
  'Lima',
  'panama city',
  'Mexico city',
  'Georgetown',
  'Nuuk',
  'Brades',
  'Kingston',
  'Bogota',
  'Nicosia',
  'Dhaka',
  'Baku',
  'Yeren',
  'Manama',
  'Thimphu',
  'Ottawa',
  'Brasilia',
  'Road Town',
  'Sucre',
 ];


  let Url1  = `https://api.openweathermap.org/data/2.5/weather?q=${Towns[A]}&units=Metric&appid=${API_Key}`;
  let reponse1 = await fetch(Url1);
   let Data1 = await reponse1.json();
   const weathertemperature1 = document.getElementsByClassName("temp");
   const weathertown = document.getElementsByClassName("town");
   const weatherCountry = document.getElementsByClassName("country12");


   weathertemperature1[0].innerHTML = Data1.main.temp+" ℃";
   weathertown[0].innerHTML = Data1.name+",";
   weatherCountry[0].innerHTML = Data1.sys.country; 
   
   
   if(Data1.weather[0].icon === "01d" || Data1.weather[0].icon === "01n"){
    setwicon2(humid_icon);
}
else if(Data1.weather[0].icon === "02d" || Data1.weather[0].icon === "02n"){
 setwicon2(cloudy_icon);
}

else if(Data1.weather[0].icon === "09d" || Data1.weather[0].icon === "09n"){
setwicon2(rainy_icon);
}
else if(Data1.weather[0].icon === "10d" || Data1.weather[0].icon === "10n"){
setwicon2(rainy_icon);
}

else if(Data1.weather[0].icon === "13d" || Data1.weather[0].icon === "13n"){
setwicon2(snow_icon);
}

else if(Data1.weather[0].icon === "03d" || Data1.weather[0].icon === "03n"){
setwicon2(sunny_icon);
}


else if(Data1.weather[0].icon === "04d" || Data1.weather[0].icon === "04n"){
setwicon2(cloudy_icon);
}
else{
setwicon2(humid_icon)
}


    
}

const [wicon1, setwicon1] = useState(null);


const Normal1 = async() => {

  const [B, setB] = useState(null);
    useEffect(() =>{

    const numberGenerator = () => {
      const RandomB = Math.floor(Math.random() * (28 - 14 + 1)) + 14;     
  
      setB(RandomB);
     
    }
    numberGenerator();

    const intervalid = setInterval(() =>{
      numberGenerator();
   }, 25000);
   return() =>{
     clearInterval(intervalid);
   };
    
  }, []);

 const Towns = [
  'Harare',
  'Montevideo',
  'Marigot',
  'Paramaribo',
  'Kingstown',
  'Castries',
  'Basseterre',
  'Pyongyang',
  'Ulaanbaatar',
  'Beirut',
  'Biskkek',
  'Kuwait City',
  'Kinshasa',
  'Moroni',
  'Praia',
  'Bujumbura',
  'Luanda',
  'Yaounde',
  'Sanaa',
  'Colombo',
  'Damascus',
  'Seoul',
  'Singapore',
  'Manila',
  'Islamabad',
  'Nairobi',
  'Tripoli',
  'Bissau',
  'Accra',
  'Libreville',
  'Asmara',
  'Amman',
  'Tokyo',
  'Tehran',
  'Beijing',
  'stanley',
  'quito',
  'santo domingo',
  'san salvador',
  'Havana',
  'Kabul',
  'New Delhi',
  'Jakarta',
  'Caracas',
  'Lome',
  'Pretoria',
  'Juba',
  'Kigali',
  'Rabat',
  'Muscat',
  'Gustavia',
  'Lima',
  'panama city',
  'Mexico city',
  'Georgetown',
  'Nuuk',
  'Brades',
  'Kingston',
  'Bogota',
  'Nicosia',
  'Dhaka',
  'Baku',
  'Yeren',
  'Manama',
  'Thimphu',
  'Ottawa',
  'Brasilia',
  'Road Town',
  'Sucre',
 ];


  let Url1  = `https://api.openweathermap.org/data/2.5/weather?q=${Towns[B]}&units=Metric&appid=${API_Key}`;
  let reponse1 = await fetch(Url1);
   let Data1 = await reponse1.json();
   const weathertemperature1 = document.getElementsByClassName("temp1");
   const weathertown = document.getElementsByClassName("town1");
   const weatherCountry = document.getElementsByClassName("country11");


   weathertemperature1[0].innerHTML = Data1.main.temp+" ℃";
   weathertown[0].innerHTML = Data1.name+",";
   weatherCountry[0].innerHTML = Data1.sys.country;  

   if(Data1.weather[0].icon === "01d" || Data1.weather[0].icon === "01n"){
    setwicon1(humid_icon);
}
else if(Data1.weather[0].icon === "02d" || Data1.weather[0].icon === "02n"){
 setwicon1(cloudy_icon);
}

else if(Data1.weather[0].icon === "09d" || Data1.weather[0].icon === "09n"){
setwicon1(rainy_icon);
}
else if(Data1.weather[0].icon === "10d" || Data1.weather[0].icon === "10n"){
setwicon1(rainy_icon);
}

else if(Data1.weather[0].icon === "13d" || Data1.weather[0].icon === "13n"){
setwicon1(snow_icon);
}

else if(Data1.weather[0].icon === "03d" || Data1.weather[0].icon === "03n"){
setwicon1(sunny_icon);
}


else if(Data1.weather[0].icon === "04d" || Data1.weather[0].icon === "04n"){
  setwicon1(cloudy_icon);
}
else{
setwicon1(humid_icon)
}

    
}



const Normal4 = async() => {

  const [D, setD] = useState(normal_icon);
   
  

 const Towns = [
  'Harare',
  'Montevideo',
  'Marigot',
  'Paramaribo',
  'Kingstown',
  'Castries',
  'Basseterre',
  'Pyongyang',
  'Ulaanbaatar',
  'Beirut',
  'Biskkek',
  'Kuwait City',
  'Kinshasa',
  'Moroni',
  'Praia',
  'Bujumbura',
  'Luanda',
  'Yaounde',
  'Sanaa',
  'Colombo',
  'Damascus',
  'Seoul',
  'Singapore',
  'Manila',
  'Islamabad',
  'Nairobi',
  'Tripoli',
  'Bissau',
  'Accra',
  'Libreville',
  'Asmara',
  'Amman',
  'Tokyo',
  'Tehran',
  'Beijing',
  'stanley',
  'quito',
  'santo domingo',
  'san salvador',
  'Havana',
  'Kabul',
  'New Delhi',
  'Jakarta',
  'Caracas',
  'Lome',
  'Pretoria',
  'Juba',
  'Kigali',
  'Rabat',
  'Muscat',
  'Gustavia',
  'Lima',
  'panama city',
  'Mexico city',
  'Georgetown',
  'Nuuk',
  'Brades',
  'Kingston',
  'Bogota',
  'Nicosia',
  'Dhaka',
  'Baku',
  'Yeren',
  'Manama',
  'Thimphu',
  'Ottawa',
  'Brasilia',
  'Road Town',
  'Sucre',
 ];


  let Url1  = `https://api.openweathermap.org/data/2.5/weather?q=${Towns[D]}&units=Metric&appid=${API_Key}`;
  let reponse1 = await fetch(Url1);
   let Data1 = await reponse1.json();
   const weathertemperature1 = document.getElementsByClassName("temp4");
   const weathertown = document.getElementsByClassName("town4");
   const weatherCountry = document.getElementsByClassName("country14");
   const Humidty = document.getElementsByClassName("humidy-percent");
   const Wind = document.getElementsByClassName("Wind-rate");
   const Description = document.getElementsByClassName("description");
   const Sunshine = document.getElementsByClassName("sunny-percent");
   const DayTime = document.getElementsByClassName("Period-of-Day");
   const SunshineRate = 100 - Data1.clouds.all;
   Humidty[0].innerHTML = Data1.main.humidity+" %";
     Wind[0].innerHTML = Data1.wind.speed+" km/h";
   Sunshine[0].innerHTML = SunshineRate.toFixed(0)+"%";


   const dt = Data1.dt;
const timezone = Data1.timezone
 
const LocalTime = dt + timezone;
const Hours = Math.floor(LocalTime / 3600) % 24;

const CurrentDate = new Date(LocalTime * 1000);

const Dateof = CurrentDate.getDay() - 1;
const Days0fWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday" , "Saturday", "Sunday"]

const Dates = CurrentDate.getDate() -1;

const Month = CurrentDate.getMonth();
const MonthsOfYear = ["January", "February", "March", "April", "May" , "June", "August",  "September", "October", "November", "December"]

const  Year = CurrentDate.getFullYear();


const WeatherDay = document.getElementsByClassName("Day");
const WeatherMonth = document.getElementsByClassName("Month");
const WeatherDate = document.getElementsByClassName("Dates");
const WeatherYear = document.getElementsByClassName("Year");

WeatherDay[0].innerHTML = Days0fWeek[Dateof];
WeatherMonth[0].innerHTML = MonthsOfYear[Month];
WeatherYear[0].innerHTML = Year;
WeatherDate[0].innerHTML = Dates;

let DayPeriod;

if (6 <= Hours && Hours <12) {
  DayPeriod = "Morning";
  DayTime[0].innerHTML =  DayPeriod+",";
}
else if (12 <= Hours && Hours < 18) {
  DayPeriod = "Afternoon";
  DayTime[0].innerHTML =  DayPeriod+",";
}
else if (18 <= Hours && Hours < 22) {
  DayPeriod = "Evening";
  DayTime[0].innerHTML =  DayPeriod+",";
}
else {
  DayPeriod = "Night";
  DayTime[0].innerHTML =  DayPeriod+",";
}

   weathertemperature1[0].innerHTML = Data1.main.temp+" ℃";
   weathertown[0].innerHTML = Data1.name+",";
   weatherCountry[0].innerHTML = Data1.sys.country;  
   Description[0].innerHTML =  Data1.weather[0].description+" "+"("+Data1.weather[0].icon+")";


   if(Data1.weather[0].icon === "01d" || Data1.weather[0].icon === "01n"){
    setwicon(sunny_icon);
}
else if(Data1.weather[0].icon === "02d" || Data1.weather[0].icon === "02n"){
 setwicon(cloudy_icon);
}

else if(Data1.weather[0].icon === "09d" || Data1.weather[0].icon === "09n"){
setwicon(rainy_icon);
}
else if(Data1.weather[0].icon === "10d" || Data1.weather[0].icon === "10n"){
setwicon(normal_icon);
}

else if(Data1.weather[0].icon === "13d" || Data1.weather[0].icon === "13n"){
setwicon(snow_icon);
}

else if(Data1.weather[0].icon === "03d" || Data1.weather[0].icon === "03n"){
setwicon(cloudy_icon);
}


else if(Data1.weather[0].icon === "04d" || Data1.weather[0].icon === "04n"){
  setwicon(cloudy_icon);
}
else{
setwicon(snow_icon)
}


    
}

const [wicon3, setwicon3] = useState(null);


const Normal3 = async() => {

  const [C, setC] = useState(null);
    useEffect(() =>{

    const numberGenerator = () => {
      const RandomC = Math.floor(Math.random() * (41 - 28+ 1)) + 28;     
  
      setC(RandomC);
     
    }
    numberGenerator();

    const intervalid = setInterval(() =>{
       numberGenerator();
    }, 25000);
    return() =>{
      clearInterval(intervalid);
    };
    
    
  }, []);

 const Towns = [
  'Harare',
  'Montevideo',
  'Marigot',
  'Paramaribo',
  'Kingstown',
  'Castries',
  'Basseterre',
  'Pyongyang',
  'Ulaanbaatar',
  'Beirut',
  'Biskkek',
  'Kuwait City',
  'Kinshasa',
  'Moroni',
  'Praia',
  'Bujumbura',
  'Luanda',
  'Yaounde',
  'Sanaa',
  'Colombo',
  'Damascus',
  'Seoul',
  'Singapore',
  'Manila',
  'Islamabad',
  'Nairobi',
  'Tripoli',
  'Bissau',
  'Accra',
  'Libreville',
  'Asmara',
  'Amman',
  'Tokyo',
  'Tehran',
  'Beijing',
  'stanley',
  'quito',
  'santo domingo',
  'san salvador',
  'Havana',
  'Kabul',
  'New Delhi',
  'Jakarta',
  'Caracas',
  'Lome',
  'Pretoria',
  'Juba',
  'Kigali',
  'Rabat',
  'Muscat',
  'Gustavia',
  'Lima',
  'panama city',
  'Mexico city',
  'Georgetown',
  'Nuuk',
  'Brades',
  'Kingston',
  'Bogota',
  'Nicosia',
  'Dhaka',
  'Baku',
  'Yeren',
  'Manama',
  'Thimphu',
  'Ottawa',
  'Brasilia',
  'Road Town',
  'Sucre',
 ];


  let Url1  = `https://api.openweathermap.org/data/2.5/weather?q=${Towns[C]}&units=Metric&appid=${API_Key}`;
  let reponse1 = await fetch(Url1);
   let Data1 = await reponse1.json();
   const weathertemperature1 = document.getElementsByClassName("temp3");
   const weathertown = document.getElementsByClassName("town3");
   const weatherCountry = document.getElementsByClassName("country13");


   weathertemperature1[0].innerHTML = Data1.main.temp+" ℃";
   weathertown[0].innerHTML = Data1.name+",";
   weatherCountry[0].innerHTML = Data1.sys.country; 
    
  
   
   if(Data1.weather[0].icon === "01d" || Data1.weather[0].icon === "01n"){
    setwicon3(humid_icon);
}
else if(Data1.weather[0].icon === "02d" || Data1.weather[0].icon === "02n"){
 setwicon3(cloudy_icon);
}

else if(Data1.weather[0].icon === "09d" || Data1.weather[0].icon === "09n"){
setwicon3(rainy_icon);
}
else if(Data1.weather[0].icon === "10d" || Data1.weather[0].icon === "10n"){
setwicon3(rainy_icon);
}

else if(Data1.weather[0].icon === "13d" || Data1.weather[0].icon === "13n"){
setwicon3(snow_icon);
}

else if(Data1.weather[0].icon === "03d" || Data1.weather[0].icon === "03n"){
setwicon3(sunny_icon);
}


else if(Data1.weather[0].icon === "04d" || Data1.weather[0].icon === "04n"){
setwicon3(cloudy_icon);
}
else{
setwicon3(humid_icon)
}


    
}



Normal();
Normal1();
Normal3();


console.log(search_state);



const [State, setSate] = useState(false);

    
      
     
      
   

const FindFunct = async() => {

  setSate(!State);
               
  const elements = document.getElementsByClassName("country-input");
  
if (elements[0].value === "") {

toast.warn("Please Enter A Town");

}
else{

  let Url  = `https://api.openweathermap.org/data/2.5/weather?q=${elements[0].value}&units=Metric&appid=${API_Key}`;
  let reponse = await fetch(Url);
  let Data1 = await reponse.json();
  
  const weathertemperature1 = document.getElementsByClassName("temp4");
     const weathertown = document.getElementsByClassName("town4");
     const weatherCountry = document.getElementsByClassName("country14");
     const Humidty = document.getElementsByClassName("humidy-percent");
     const Wind = document.getElementsByClassName("Wind-rate");
     const Description = document.getElementsByClassName("description");
     const Sunshine = document.getElementsByClassName("sunny-percent");
     const DayTime = document.getElementsByClassName("Period-of-Day");
     const SunshineRate = 100 - Data1.clouds.all;
     Humidty[0].innerHTML = Data1.main.humidity+" %";
       Wind[0].innerHTML = Data1.wind.speed+" km/h";
     Sunshine[0].innerHTML = SunshineRate.toFixed(0)+"%";
  
     const dt = Data1.dt;
     const timezone = Data1.timezone
      
     const LocalTime = dt + timezone;
     const Hours = Math.floor(LocalTime / 3600) % 24;
     
     const CurrentDate = new Date(LocalTime * 1000);
     
     const Dateof = CurrentDate.getDay();
     const Days0fWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday" , "Saturday", "Sunday"]
     
     const Dates = CurrentDate.getDate();
     
     const Month = CurrentDate.getMonth();
     const MonthsOfYear = ["January", "February", "March", "April", "May" , "June", "August",  "September", "October", "November", "December"]
     
     const  Year = CurrentDate.getFullYear();
     
     
     const WeatherDay = document.getElementsByClassName("Day");
     const WeatherMonth = document.getElementsByClassName("Month");
     const WeatherDate = document.getElementsByClassName("Dates");
     const WeatherYear = document.getElementsByClassName("Year");
     
     WeatherDay[0].innerHTML = Days0fWeek[Dateof];
     WeatherMonth[0].innerHTML = MonthsOfYear[Month];
     WeatherYear[0].innerHTML = Year;
     WeatherDate[0].innerHTML = Dates;
     
     let DayPeriod;
     
     if (6 <= Hours && Hours <12) {
       DayPeriod = "Morning";
       DayTime[0].innerHTML =  DayPeriod+",";
     }
     else if (12 <= Hours && Hours < 18) {
       DayPeriod = "Afternoon";
       DayTime[0].innerHTML =  DayPeriod+",";
     }
     else if (18 <= Hours && Hours < 22) {
       DayPeriod = "Evening";
       DayTime[0].innerHTML =  DayPeriod+",";
     }
     else {
       DayPeriod = "Night";
       DayTime[0].innerHTML =  DayPeriod+",";
     }
     
        weathertemperature1[0].innerHTML = Data1.main.temp+" ℃";
        weathertown[0].innerHTML = Data1.name+",";
        weatherCountry[0].innerHTML = Data1.sys.country;  
        Description[0].innerHTML =  Data1.weather[0].description+" "+"("+Data1.weather[0].icon+")";
     
     
        if(Data1.weather[0].icon === "01d" || Data1.weather[0].icon === "01n"){
         setwicon(sunny_icon);
     }
     else if(Data1.weather[0].icon === "02d" || Data1.weather[0].icon === "02n"){
      setwicon(cloudy_icon);
     }
     
     else if(Data1.weather[0].icon === "09d" || Data1.weather[0].icon === "09n"){
     setwicon(rainy_icon);
     }
     else if(Data1.weather[0].icon === "10d" || Data1.weather[0].icon === "10n"){
     setwicon(normal_icon);
     }
     
     else if(Data1.weather[0].icon === "13d" || Data1.weather[0].icon === "13n"){
     setwicon(snow_icon);
     }
     
     else if(Data1.weather[0].icon === "03d" || Data1.weather[0].icon === "03n"){
     setwicon(cloudy_icon);
     }
     
     
     else if(Data1.weather[0].icon === "04d" || Data1.weather[0].icon === "04n"){
       setwicon(cloudy_icon);
     }
     else{
     setwicon(snow_icon)
     }
  
  

}

}
  
const [logOut, setLogOut] =  useState(false)

const Logout = () =>{
 /* signOut(auth).then(() =>{

    setLogOut(true)

  }).catch((error) => {
        
    const errorCode = error.code;
    const errorMessage = error.message
    toast.error(errorMessage)
    setLogOut(false)

  })*/
}



  return (

    <>

<section className={`front ${State === true ? 'active' : undefined}`}>

  <div className='wrapper'>
        <h1>Welcome To <span>Weather-Teller</span> </h1>

        <p>The Number 1 website in the country where you can be find the weather information of anywhere in the world
        </p>
        <p className='highlight'>To get started Please enter any area in the world you wish to know its weather condition</p>
  
        <div className="input-field">
             <input type="text" className='country-input' required placeholder='Enter your area' />
             <button type="button" onClick={() => {FindFunct()}}>Find</button>
         </div>
  
  </div>

         

         <Notification/>

</section>


<header>
     
     <LogoImage />

      <div className='logo'> Weather-teller </div>

     
<div className="search-Section">

<div className="search">
          <input type="text" className='InputText' placeholder='Search town weather...' />
          
    </div>

    <div className="search-icon" onClick={() => {searchFunct()}}>
           <ion-icon name="search-outline"></ion-icon>
    </div>
      

</div>

<ul className='nav'>
             
         <Link to={logOut ? "/signup" : undefined}> <li onClick={Logout} ><a href="#" className='option'>Logout </a></li></Link>  
           
            
</ul>  
       
    </header>


    <div className="Container">

            <div className="container-sections">

 <div className="Grid-area">


 <div className="section-divider">

  <div className='Date-Info'>
      <h3 className='Period-of-Day'></h3>
      <h3 className='Period-of-Day Day'></h3>
      <h3 className='Period-of-Day Dates'></h3>
      <h3 className='Period-of-Day Month'></h3>
      <h3 className='Period-of-Day Year'></h3>
  </div>
  

<div className='front-holder'>
  
<div className="weather-image">
     <img src={wicon} alt="weather image" />
     <div className='description'>
       
     </div>
 </div>

<div className="content-sepearate">

<div className="weather-temperature temp4" id='weather-temperature'>

    
 </div>
 
<div className='names'>
<div className="weather-Location town4" id='weather-Location'>

 </div>
<span className='nation country14'> Check your Connection </span>
</div>
 
</div>

</div>



<div className="data-container">
                            
                        <div className="elements">
                               <img src={Thermometer} className='icons' alt="" />
                                 <div className="data">
                                        <div className="humidy-percent">
                                           
                                        </div>
                                        <div className="humidy-text">
                                            Humidty Rate
                                        </div>
                                 </div>
                        </div>

                        <div className="elements">
                               <img src={wind_icon} className='icons' alt="country weather image" />
                                 <div className="data">
                                        <div className="Wind-rate humidy-percent">
                                       
                                        </div>
                                        <div className="Wind-text humidy-percent">
                                            Wind Speed
                                        </div>
                                 </div>
                        </div>

                      

                        <div className="elements">
                               <img src={sunny_icon} className='icons' alt="" />
                                 <div className="data">
                                        <div className="sunny-percent humidy-percent">
                                       
                                       
                                        </div>
                                        <div className="sunny-text humidy-percent">
                                            Sunshine Rate
                                        </div>
                                 </div>
                        </div>
  
               </div>


</div>

<div className="Nearest-Area">
 <h2>Recommended Areas</h2>


<div className="section-splitter">
       
<div className="weather-image1">
<img src={wicon1} alt="country weather image" />
</div>

<div className="content-sepearate">

<div className="weather-temperature temp1">
Check your Connection
</div>

<div className='Location-info'>
<div className="weather-Location town1">

</div>
    <span className='country11 country'>  </span>
</div>


</div>

</div>

<div className="section-splitter">
       
<div className="weather-image1">
<img src={wicon2} alt="country weather image" />
</div>

<div className="content-sepearate">

<div className="weather-temperature temp">
Check your Connection
</div>

<div className='Location-info'>
<div className="weather-Location town">
    
</div>
    <span className='country12 country'></span>
</div>


</div>

</div>

<div className="section-splitter">
       
<div className="weather-image1">
<img src={wicon3}  alt ="country weather image" />
</div>

<div className="content-sepearate">

<div className="weather-temperature temp3">
Check your Connection
</div>

<div className='Location-info'>
<div className="weather-Location town3">
    
</div>
    <span className='country13 country'></span>
</div>


</div>

</div>


</div>

  </div>             
  
  
            

               
            </div>
      
               
          
    </div>  

   
   
    

    </>
 
  );
}

export default Container;
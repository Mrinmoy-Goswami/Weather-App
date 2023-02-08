import "./App.css";
// import Navbar from "./Components/Navbar";
// import axios from "axios";
import { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "./Components/WeatherCard";

function App() {
  const [weather,setWeather] = useState({});
  const [location,setLocation] = useState("");  
  const [loading,setLoading] = useState(true);
  const [search,setSearch] = useState("");
  const [citysearch,setCitysearch] = useState("Madrid")


 
    
const handleChange=(event)=>{
 setSearch(event.target.value)
}
const handlePress = ()=>{
  // console.log(search);
  setCitysearch(search);
  // console.log(citysearch);
}
   
  // const searchWeather = ()=>{
   
  //   setCitysearch(search);
    
  // }
useEffect(()=>{

  axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${citysearch}?unitGroup=metric&key=LEDRRWBSNKGKZ7NNJ7XF6QXED&contentType=json`)
  .then((response)=>{
    
    setWeather(response.data);
    setLocation(response.data.address)
    console.log(response.data);
    
    setLoading(false);
  })
  
}
,[citysearch])  

 
  return (
    <div className="MainContainer">
      <div>

<nav  className="navbar  navbar-expand-lg bg-body-tertiary" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Today's weather</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item px-5">
          <a className="nav-link active text-dark"  aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item px-5">
          <a className="nav-link text-dark" href="#">Features</a>
        </li>
        <li className="nav-item px-5">
          <a className="nav-link text-dark" href="#">Pricing</a>
        </li>
      </ul>
    
      
    </div>
  </div>
</nav>
<div className="searchbar">

        <input onChange={handleChange} className=" form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={handlePress} className="btn btn-outline-success" type="submit">Search</button>
</div>

   
   </div>
     {loading?<p style={{textAlign:"center"}}>Loading...</p>:
      

       <WeatherCard  city={location} timezone = {weather.timezone}  temp = {weather.currentConditions.temp} feelsLike ={weather.currentConditions.feelslike}  /> 
     
     }
      
    </div>
  );
}


export default App;

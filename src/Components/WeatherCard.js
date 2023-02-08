import React from 'react'
import './WeatherCard.css'

export default function WeatherCard(props) {
  return (
    <div className='container'>

    <div className='card'>
      <h2 style={{fontSize:"3vw"}}>{props.city}</h2>
      <p>{props.timezone}</p>
      <h3>{props.temp}</h3>
      <p>Feels like{props.feelsLike}</p>
    </div>
    </div>
  )
}

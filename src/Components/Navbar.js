import React, { useState } from 'react'

export default function Navbar() {
  const [search,setSearch] = useState("");


  const handleChange=(event)=>{
    setSearch(event.target.value);
  }
  const searchWeather = ()=>{
    console.log(search)
  }
  return (
   <div>

<nav  className="navbar  navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"green"}}>
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
      <form className="d-flex" role="search">
        <input onChange={handleChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={searchWeather()} className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

   
   </div>
  )
}

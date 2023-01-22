import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
import img from '../../assets/IMDB_Logo_2016.svg.png'
const header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
            <Link to="/"><img className='header-icon' src={img}></img></Link>
            <Link to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>
            </div>
            </div>
  )
}

export default header
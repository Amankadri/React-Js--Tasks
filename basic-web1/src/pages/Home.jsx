import React from 'react'
import { Link } from 'react-router-dom';
import BannerImage from  '../assests/pizza.jpeg';
import '../styles/Home.css';

function Home() {
  return (
   <div className="home"   style={{backgroundImage:`url(${BannerImage})`}}>
    <div
     className="headerContainer">
      <h1>Pedro's Pizzeria</h1>
      <p>Pizza to fit any taste</p>
      <Link to='/menu'><button> Order Now </button></Link>
    </div>
   </div>
  )
}

export default Home
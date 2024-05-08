 import React, {useState} from 'react'
 import { Link, NavLink } from "react-router-dom";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import "../styles/navbar.css"

 import { faBars } from '@fortawesome/free-solid-svg-icons'

 const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   return (
    <div>
 <div className= "flex  shadow-xl  justify-between p-10 bg-gradient-to-r from-orange-800 from-30% via-yellow-600 via-50% to-yellow-300 to-90% ... ">
  <p className=" text-yellow-100  drop-shadow-xl shadow-green  font-extrabold italic  text-6xl pl-4">Let's <span className="text-white drop-shadow-xl">Pack</span></p>
  <div class="w-full max-w-xl relative flex">
                
                < input type="text" name="search" id="search"class="w-full border border-primary text-xl border-r-0  py-15 px-20 rounded-l-md focus:outline-none hidden md:flex"placeholder="Type your product"  />
                <button
                    class="bg-primary border border-primary text-white text-xl font-bold  bg-orange-700 text-center py-4 px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex">Search</button>
            </div>
            </div>

  <nav className="  text-center  border-4  border-yellow-700   border-r-yellow-500 border-l-yellow-700  bg-gradient-to-r from-orange-800 from-30% via-yellow-600 via-50% to-yellow-300 to-90% ... text-white text-2xl p-4">
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={faBars} style={{color: "#fefefe",}} size='3x' />     
           </div>
    <ul className={menuOpen ? "open" : ""} >
      <li className="mx-3 ml-4  p-2 hover:text-yellow-200 rounded-lg hover:text-5xl"><NavLink to="/">Home</NavLink></li>
      <li className="mx-3 p-2  hover:text-yellow-200 rounded-lg hover:text-5xl "><NavLink to="/Shop">Shop</NavLink></li>
      <li className="mx-3 p-2 hover:text-yellow-200 rounded-lg hover:text-5xl  "><NavLink to="/Contact">Contact</NavLink></li>
      <li className="mx-3 p-2 hover:text-yellow-300 rounded-lg hover:text-5xl"><NavLink to="/About">About</NavLink></li>
      <li className="mx-3 p-2 hover:text-orange-700 rounded-lg hover:text-5xl "><NavLink to="/Cart">Cart</NavLink></li>
      <li className="mx-3 mr-10 p-2 hover:text-orange-700 rounded-lg hover:text-5xl"><NavLink to="/Profile">Profile</NavLink></li>
    </ul>
  </nav> 
  </div>  )
 }
 
 export default Navbar

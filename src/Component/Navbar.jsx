import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import l1 from '../assets/logo.jpg'
import Home from './Home'
import About from './About'
import axios from 'axios'


const Navbar = () => {

  const BACK_URL = import.meta.env.VITE_BACK_URL;
  const [inputD, setInputD] = useState([])
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showBox, setShowBox] = useState(false);


  const Handleinput=async(val)=>{
         const query = val.target.value;
        console.log(val.target.value);
          if (query.trim() === "") {
            setInputD([]);  // ya koi default message
            return;
          }

          try {
            // const data  = await axios.get(`http://localhost:8080/Admin/${query}`);
            const data  = await axios.get(`${BACK_URL}/${query}`);
            setInputD(data.data);
          } catch (err) {
            console.log(err);
          }
    }
    
   useEffect(() => {
  const nav = document.querySelector(".navbar");

  const onScroll = () => {
    if (window.scrollY > 85) {
      nav.classList.add("backdrop-blur-md", "bg-black/30", "border-b", "border-white/20");
    } else {
      nav.classList.remove("backdrop-blur-md", "bg-black/30", "border-b", "border-white/20");
    }
  };

  window.addEventListener("scroll", onScroll);

  return () => window.removeEventListener("scroll", onScroll);
}, []);


  return (
   
        <div className="navbar fixed top-0 left-0 w-full z-50 
                bg-transparent
                border-b border-white/10 
                flex items-center justify-between px-8 py-4">

  {/* Logo Section */}
  <div className="flex gap-4 items-center font-serif font-bold text-2xl">
    <div className="w-12 h-12 rounded-full overflow-hidden shadow-md shadow-fuchsia-500/30">
      <img className="w-full h-full object-cover" src={l1} alt="Logo" />
    </div>

    <div className="bg-gradient-to-r from-fuchsia-300 to-sky-400 
                    bg-clip-text text-transparent tracking-wide">
      Anime Blog Site
    </div>
  </div>

  {/* Desktop Menu */}
  <div className="hidden sm:flex items-center gap-8">

    {/* Links */}
    <div className="space-x-6 font-semibold text-lg text-white/90">
      <Link className="hover:text-fuchsia-400 transition" to="/">Home</Link>
      <Link className="hover:text-fuchsia-400 transition" to="/about">About</Link>
      <Link className="hover:text-fuchsia-400 transition" to="/contact">Contact</Link>
      <Link className="hover:text-fuchsia-400 transition" to="/Admine">Admin</Link>
    </div>

    
    <div className="relative">
      <input
         onChange={Handleinput}
         onFocus={() => setShowBox(true)}
         onBlur={() => setTimeout(() => setShowBox(false), 200)} 
         type="text"
         placeholder="Search here..."
         className="bg-white/10 text-white border border-white/20
                   rounded-xl px-3 py-2 outline-none
                   focus:ring-2 focus:ring-fuchsia-500 
                   shadow-inner placeholder:text-white/50"
      />

      {/* Search Results Dropdown (your existing logic, only styled) */}
      {showBox && (
       <div className="absolute left-0 mt-2 w-60 
                       bg-black/80 backdrop-blur-lg 
                       border border-white/10 rounded-lg 
                       max-h-60 overflow-y-auto shadow-xl">
         {inputD.length > 0 ? (
           inputD.map((val, idx) => (
             <div
               key={idx}
               className="px-4 py-2 text-white cursor-pointer 
                          hover:bg-white/10 transition"
             >
               {val.name}
             </div>
           ))
         ) : (
           <div className="px-4 py-2 text-white/50">No results</div>
         )}
       </div>
     )}
    </div>
  </div>

  {/* Mobile Menu Icon */}
  <div 
  className="sm:hidden font-bold text-2xl cursor-pointer text-white"
  onClick={() => setMobileMenu(!mobileMenu)}>
      <i className={mobileMenu ? "ri-close-line" : "ri-menu-3-line"}></i>
  </div>
  {mobileMenu && (
  <div className="sm:hidden absolute top-full left-0 w-full 
                  bg-black text-white flex flex-col gap-4 
                  p-6 border-b border-white/20">

    <Link onClick={() => setMobileMenu(false)} to="/" className="text-lg">
      Home
    </Link>

    <Link onClick={() => setMobileMenu(false)} to="/about" className="text-lg">
      About
    </Link>

    <Link onClick={() => setMobileMenu(false)} to="/contact" className="text-lg">
      Contact
    </Link>

    <Link onClick={() => setMobileMenu(false)} to="/Admine" className="text-lg">
      Admin
    </Link>

  </div>
)}


</div>

   
  )
}

export default Navbar

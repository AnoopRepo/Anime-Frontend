import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import l1 from '../assets/logo.jpg'
import Home from './Home'
import About from './About'
import axios from 'axios'


const Navbar = () => {

  const [inputD, setInputD] = useState([])
  
  const Handleinput=async(val)=>{
         const value = val.target.value;
        
         
  // 🔥 If input empty after backspace → clear search list
          if (value.trim() === "") {
            setInputD([]);  // ya koi default message
            return;
          }

          try {
            const data  = await axios.get(
              `http://localhost:8080/Admin/search/${value}`
            );
            setInputD(data.data);
            console.log(inputD);

          } catch (err) {
            console.log(err);
          }
    }
    
    useEffect(()=>{
        const nav=document.querySelector(".navbar");
        const onScroll=()=>{
            
            if(window.scrollY>85){
                nav.classList.add("backdrop-blur-md");
            }else{
                nav.classList.remove("backdrop-blur-md");
            }
        }
        window.addEventListener("scroll",()=>{
            setTimeout(onScroll,-1000);
        });
        return () => window.removeEventListener("scroll", onScroll);
    },[])

  return (
   
        <div className='navbar fixed z-9 w-full bg-linear-to-r/longer from-red-300 to-sky-600 bg-clip-text text-transparent h-[5%] flex items-center justify-between p-10 '>
      <div className='logo flex gap-5 items-center font-serif font-bold text-2xl'> 
        <div className="img w-10 h-15 rounded-full overflow-hidden ">
          <img className='object-fit ' src={l1} alt="" />
        </div>
        <div className="name bg-gradiant"> Anime Blog Site </div>
      </div>
     
       <div className='sm:flex  hidden gap-5'> 
        <div className='  space-x-5 font-semibold text-xl justify-around'>
          <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/project">Project</Link>
        </div>
        <div className='relative'>
          <input 
        onChange={Handleinput}
        onFocus={() => {
          document.querySelector(".box")?.classList.remove("hidden");
        }}
        onBlur={() => {
          document.querySelector(".box")?.classList.add("hidden");
        }}
        onInput={() => {
          document.querySelector(".box")?.classList.remove("hidden");
        }}
        
         type="text" placeholder='Search here ....' className='bg-transparent text-white rounded py-1 px-2 outline-none focus:ring-2 focus:ring-emerald-500'/>
         <div className='box hidden absolute  rounded max-h-100 shadow-lg z-50'>
          {inputD.map((val,idx)=>{
          return <div id={idx} className='w-full p-2  h-10 bg-black text-white'>{val.name}</div>
         })}
         </div>
        </div>
        </div>
        <div className='sm:hidden  font-bold text-2xl '>
            <i className="ri-menu-3-line"></i>
        </div>
      
    </div>
   
  )
}

export default Navbar

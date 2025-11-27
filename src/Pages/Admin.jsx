import React, { useEffect, useRef, useState } from 'react'

import axios from 'axios'

const Admin = ({className=""}) => {

   
    const containerRef = useRef(null);
    const frameRef = useRef({
        raf: null,
        mouseX: 0,
        mouseY: 0,
        lastX: 0,
        lastY: 0,
      });
    
      useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const depth = 0.12;
        const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    
        const onMouseMove = (e) => {
          const fgEl = el.querySelector("[data-layer='fg']");
          if (!fgEl) return;
    
          const rect = fgEl.getBoundingClientRect();
    
          // (rect.left + rect.width / 2) this give the center of the selected items 
          // jo image ka center hai use hum distance calculate kar rhe hai aur is value ko kaam karne ke liye hume yaha pr jo hai ye width se divide karte hai taki kafi kaam value mile hume 
          const diffX = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
          const diffY = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
    
          frameRef.current.mouseX = clamp(diffX, -0.6, 0.6);
          frameRef.current.mouseY = clamp(diffY, -0.6, 0.6);
    
          startRAF();
        };
        
        const onMouseLeave = () => {
      const state = frameRef.current;
    
      // reset all values
      state.mouseX = 0;
      state.mouseY = 0;
      state.lastX = 0;
      state.lastY = 0;
    
      startRAF(); // smooth reset
    };
        
        
        const tick = () => {
          const s = frameRef.current;
    
          s.lastX += (s.mouseX - s.lastX) * 0.12;
          s.lastY += (s.mouseY - s.lastY) * 0.12;
    
          const rotateY = s.lastX * 25; // tilt more
          const rotateX = -s.lastY * 25;
    
          const scale = 1 + (Math.abs(s.lastX) + Math.abs(s.lastY)) * 0.03;
    
          const fgEl = el.querySelector("[data-layer='fg']");
          if (fgEl) {
            fgEl.style.transform = `
              rotateX(${rotateX}deg)
              rotateY(${rotateY}deg)
              translateZ(80px)
              scale(${scale})
            `;
          }
    
          s.raf = null;
        };
    
        const startRAF = () => {
          if (frameRef.current.raf == null) {
            frameRef.current.raf = requestAnimationFrame(tick);
          }
        };
    
        el.addEventListener("mousemove", onMouseMove);
        el.addEventListener("mouseleave", onMouseLeave);
    
        return () => {
          el.removeEventListener("mousemove", onMouseMove);
          el.addEventListener("mouseleave", onMouseLeave);
        };
      }, []);
    
    
  return (
    <div className='bg-black flex  items-center  w-full h-full overflow-hidden ' >
        <div 
        className='form  relative  h-full flex justify-center items-center w-1/2 '>            
            <form onSubmit={(e)=>{
                console.log("gaya bhai....1")
                e.preventDefault;
                 const data= async function(){
        const Name=document.querySelector("#Name");
        const date=document.querySelector("#Date");
        const Description=document.querySelector("#Desc");
        const Num=document.querySelector("#Num");
        const Quote=document.querySelector("#Quote");
        const Genre=document.querySelector("#Genre");
      const detail={
        name:Name.value,
        date:date.value,
        num : Num.value,
        description : Description.value,
        genreType: Genre.value, 
        quote:Quote.value
      }
      try {
        const godata=await axios.post('https://authentic-charisma-production-1957.up.railway.app/Admin',detail,
            { headers: { 'Content-Type': 'application/json' }}) 
            console.log("gaya bhai....")
      } catch (error) {
        alert(error,"Sorry faild to send");
        console.log(error);   
      }
    } 
         data()  }}
             className='absolute p-5 w-2/3  bg-linear-to-r from-emerald-200 to-sky-200 flex flex-col justify-around items-center rounded-xl   '>
                <h1 className='text-3xl font-mono text-center mb-3'>Admin Page to Add Data</h1>
               <div className='Name flex space-y-1 flex-col p-2 w-full text-xl font-semibold '>
                 <label  >Name Of ANIME</label>
                <input type="text" placeholder='Name Of ANIME' id='Name' className='p-2 bg-white rounded outline-none focus:ring-2 ring-sky-400'/>
               </div>
               <div className='Name flex space-y-1 flex-col p-2 w-full text-xl font-semibold'>
                 <label  >Released Date</label>
                <input type="date" placeholder='Released Date ANIME' id='Date' className='p-2 bg-white rounded outline-none focus:ring-2 ring-sky-400' />
               </div>
               <div className='Name flex space-y-1 flex-col p-2 w-full text-xl font-semibold'>
                 <label  >Number Of Seasion in ANIME</label>
                <input type="text" placeholder='Number Of Seasion in ANIME' id='Num' className='p-2 bg-white rounded outline-none focus:ring-2 ring-sky-400' />
               </div>
               <div className='Name flex space-y-1 flex-col p-2 w-full text-xl font-semibold'>
                 <label >Discription of ANIME</label>
                <input type="text" placeholder='Discription of ANIME' id='Desc'  className='p-2 bg-white rounded outline-none focus:ring-2 ring-sky-400'/>
               </div>
                <div className='Name flex space-y-1 flex-col p-2 w-full text-xl font-semibold'>
                 <label  >Quote of The ANIME</label>
                <input type="text" placeholder='Quote of ANIME' id='Quote'  className='p-2 bg-white rounded outline-none focus:ring-2 ring-sky-400'/>
               </div>
               <div className='Name flex space-y-1 flex-col p-2 w-full text-xl font-semibold'>
                 <label  >GenreType of The ANIME</label>
                <input type="text" placeholder='GenreType of ANIME' id='Genre'  className='p-2 bg-white rounded outline-none focus:ring-2 ring-sky-400'/>
               </div>
               <div className='w-full bg-sky-500 flex justify-center rounded-xl py-3 hover:scale-95 '>
                <button type='submit' >Submit</button>
               </div>
            </form>
        </div>
        <div
         ref={containerRef}
         className={`h-full w-1/2 bg-white ${className}`}>
            <img
             data-layer="fg"
            src={ds} alt="" className='w-full h-full object-contain p-15 rounded  '/>
        </div>      
    </div>
  )
}

export default Admin

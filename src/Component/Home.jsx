import React, { useRef, useEffect, useState } from "react";

import axios from "axios";

const Home = () => {
  const [animeD, setAnimeD] = useState([]);
    useEffect(()=>{
      const fetchdata=async function(){
        try {
        const res=await axios.get('https://authentic-charisma-production-1957.up.railway.app/Admin');
        let data1=[...animeD];
        setAnimeD(...data1,res.data);
        console.log(animeD);
      } catch (error) {
       console.log(error);
       alert(error,"hello"); 
      }
      }
      fetchdata();
    },[])
  

  return (
    <div className={`relative  shadow-2xl `}>
    <div className={`w-screen min-h-screen p-10 bg-black grid grid-cols-1  lg:grid-cols-2 items-center gap-10 `}>
  {animeD.map((val, ind) => (
    <div
      key={ind}
      className="lg:w-[40vw]  max-w-5xl bg-white/10  backdrop-blur-lg
                 border border-white/20 rounded-2xl shadow-xl 
                 overflow-hidden flex hover:shadow-fuchsia-500/40 hover:scale-[1.02]    transition-all">
      {/* Left image area */}
      <div className="w-[40%] p-5  flex items-center justify-center bg-gradient-to-b from-black/40 to-black/10">
        <img
          data-layer="fg" 
          src={`https://authentic-charisma-production-1957.up.railway.app/${val.imageUrl}`}
          alt={val.name}
          className="w-full rounded-xl object-cover pointer-events-none  will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        />
      </div>

      {/* Right content area */}
      <div className="w-[60%] p-6  text-white flex flex-col gap-3">
        <h2 className="text-4xl font-bold tracking-wide ">
          {val.name}
        </h2>

        <div className="text-sm text-white/80">
          <div>📅 {new Date(val.date).toLocaleDateString()}</div>
          <div>🎬 Seasons: {val.num}</div>
        </div>

        <div className="mt-2">
          <div className="text-lg font-semibold">Description:</div>
          <p className="text-white/90 leading-relaxed">
            {val.description}
          </p>
        </div>

        <div className="mt-4 bg-white/10 p-3 rounded-lg border border-white/20 ">
          <div className="font-bold text-xl">🔥 {val.name}</div>
          <div className="italic">“{val.quote}”</div>
        </div>
      </div>
    </div>
  ))}
</div>
  </div>
  );
};

export default Home;

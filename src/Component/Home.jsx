import React, { useRef, useEffect, useState } from "react";

import axios from "axios";

const Home = () => {
  const BACK_URL = import.meta.env.VITE_BACK_URL;
  const [animeD, setAnimeD] = useState([]);
    useEffect(()=>{
      const fetchdata=async function(){
        try {
        const res=await axios.get(`${BACK_URL}/Admin`);
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
    <div className="min-h-screen w-full relative overflow-hidden bg-black">

  {/* Blobs */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-fuchsia-600/40 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-purple-600/30 blur-[150px] rounded-full"></div>

  <div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black p-10">
    <h1 className="text-5xl font-extrabold text-center text-white tracking-wider mb-12">
      Anime Collection
    </h1>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {animeD.map((val, ind) => (
        <div
          key={ind}
          className="flex flex-col lg:flex-row bg-white/10 backdrop-blur-xl 
                     border border-white/20 rounded-3xl overflow-hidden
                     shadow-xl hover:shadow-fuchsia-500/40 transition-all 
                     hover:-translate-y-1 hover:scale-[1.01]"
        >
          {/* Left Image */}
          <div className="lg:w-[40%] w-full h-64 lg:h-full overflow-hidden">
            <img
              src={`${BACK_URL}/${val.imageUrl}`}
              alt={val.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          {/* Right Content */}
          <div className="lg:w-[60%] p-6 text-white flex flex-col gap-3">
            <a href={val.link} target="_blank">
              <h2 className="text-3xl font-bold tracking-wide hover:text-fuchsia-300 transition">
                {val.name}
              </h2>
            </a>

            <div className="text-sm text-white/70 flex justify-between">
              <span>📅 {new Date(val.date).toLocaleDateString()}</span>
              <span>🎬 Seasons: {val.num}</span>
            </div>

            <p className="text-white/90 leading-relaxed mt-2">
              {val.description?.substring(0, 150)}...
            </p>

            {/* Highlight Box */}
            <div className="mt-4 p-4 bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 
                            rounded-xl border border-white/20 shadow-inner">
              <div className="font-bold text-lg text-fuchsia-300">🔥 Highlight</div>
              <p className="italic text-white/90">“{val.quote}”</p>
            </div>

            {/* Button */}
            <a
              href={val.link}
              target="_blank"
              className="mt-4 text-center py-3 bg-fuchsia-600/80
                         rounded-xl font-semibold hover:bg-fuchsia-500
                         transition-all shadow-md shadow-fuchsia-500/40"
            >
              Watch Now →
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
);


};

export default Home;

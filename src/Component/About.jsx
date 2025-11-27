import React, { useState } from 'react'

import { useRef, useEffect } from "react"
import axios from 'axios';


const About = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black to-gray-900 text-white px-6 py-16 flex flex-col items-center">
{/* Header Section */}
<div className="max-w-4xl text-center mb-16">
<h1 className="text-5xl font-extrabold tracking-wide mb-4">About This Anime Blog</h1>
<p className="text-lg text-gray-300">
Welcome to the ultimate hub for anime lovers! Here we explore deep stories,
character journeys, epic battles, and hidden meanings behind our favorite shows.
</p>
</div>


{/* Card Section */}
<div className="max-w-5xl grid md:grid-cols-2 gap-10">
{/* Mission Card */}
<div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-cyan-500/20 transition-all">
<h2 className="text-3xl font-bold mb-3">Our Mission</h2>
<p className="text-gray-300 leading-relaxed">
Our mission is to bring you thoughtful reviews, character insights, anime theories,
and top recommendations that help you dive deeper into the anime world.
</p>
</div>


{/* Story Card */}
<div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-purple-500/20 transition-all">
<h2 className="text-3xl font-bold mb-3">Our Story</h2>
<p className="text-gray-300 leading-relaxed">
This blog started as a passion project—an effort to combine storytelling,
design, and the incredible world of anime into one beautiful experience.
</p>
</div>


{/* What We Cover Card */}
<div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-emerald-500/20 transition-all">
<h2 className="text-3xl font-bold mb-3">What We Cover</h2>
<ul className="text-gray-300 space-y-2">
<li>🔥 Anime Reviews</li>
<li>🔥 Character Breakdown</li>
<li>🔥 Anime Recommendations</li>
<li>🔥 Story Analysis</li>
<li>🔥 Fan Theories</li>
</ul>
</div>


{/* Why This Blog Exists Card */}
<div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-fuchsia-500/20 transition-all">
<h2 className="text-3xl font-bold mb-3">Why This Blog?</h2>
<p className="text-gray-300 leading-relaxed">
This blog exists to create a space for passionate anime fans who want more than
just episodes—they want meaning, emotion, themes, and connection.
</p>
</div>
</div>


{/* Footer Section */}
<div className="max-w-3xl text-center mt-20 text-gray-400">
<p>
"Anime isn't just entertainment—it's an emotion, a story, a way of seeing the
world differently. And this blog celebrates that journey."
</p>
</div>
</div>
  )
}

export default About




// this is for the image flickering effect
// const About = ({ className = "" }) => {
  
//   const containerRef = useRef(null);
//     const frameRef = useRef({
//       raf: null,
//       mouseX: 0,
//       mouseY: 0,
//       lastX: 0,
//       lastY: 0,
//     });
  
//     useEffect(() => {
//       const el = containerRef.current;
//       if (!el) return;
//       const depth = 0.12;
//       const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  
//       const onMouseMove = (e) => {
//         const fgEl = el.querySelector("[data-layer='fg']");
//         if (!fgEl) return;
  
//         const rect = fgEl.getBoundingClientRect();
  
//         // cursor → center difference
//         // jo image ka center hai use hum distance calculate kar rhe hai 
//         const diffX = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
//         const diffY = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
  
//         frameRef.current.mouseX = clamp(diffX, -0.6, 0.6);
//         frameRef.current.mouseY = clamp(diffY, -0.6, 0.6);
  
//         startRAF();
//       };

//       const onMouseLeave = () => {
//         const state = frameRef.current;

//         state.mouseX = 0;
//         state.mouseY = 0;
//         state.lastX = 0;
//         state.lastY = 0;

//         startRAF();
//       };
//       const tick = () => {
//         const s = frameRef.current;
  
//         s.lastX += (s.mouseX - s.lastX) * 0.12;
//         s.lastY += (s.mouseY - s.lastY) * 0.12;
  
//         const rotateY = s.lastX * 25; // tilt more
//         const rotateX = -s.lastY * 25;
  
//         const scale = 1 + (Math.abs(s.lastX) + Math.abs(s.lastY)) * 0.03;
  
//         const fgEl = el.querySelector("[data-layer='fg']");
//         if (fgEl) {
//           fgEl.style.transform = `
//             rotateX(${rotateX}deg)
//             rotateY(${rotateY}deg)
//             translateZ(80px)
//             scale(${scale})
//           `;
//         }
  
//         s.raf = null;
//       };
  
//       const startRAF = () => {
//         if (frameRef.current.raf == null) {
//           frameRef.current.raf = requestAnimationFrame(tick);
//         }
//       };
  
//       el.addEventListener("mousemove", onMouseMove);
//       el.addEventListener("mouseleave", onMouseLeave);

  
//       return () => {
//         el.removeEventListener("mousemove", onMouseMove);
//         el.addEventListener("mouseleave", onMouseLeave);

//       };
//     }, []);
  
//     return (
//       <section
//         ref={containerRef}
//         className={`relative w-full h-full flex  justify-around items-center rounded-2xl shadow-2xl transform-gpu ${className}`}
//         style={{ perspective: "1200px" }}
//       >
//         {/* Foreground Image */}
//         <div>
//           <h1 className='text-white'>
//             hello bhai 
//           </h1>
//         </div>
//           <div className='flex justify-center top-0 relative items-center '>
//             <img
//           data-layer="fg"
//           src={fg}
//           alt="Subject"
//           className=" pointer-events-none absolute  max-w-[420px] object-contain will-change-transform"
//           style={{ zIndex: 3, transformStyle: "preserve-3d" }}
//         />
//           </div>
          
//         </section>
//   )
// }

// export default About

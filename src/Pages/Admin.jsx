import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const Admin = () => {
  const BACK_URL = import.meta.env.VITE_BACK_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const detail = {
      name: e.target.Name.value,
      date: e.target.Date.value,
      num: e.target.Num.value,
      description: e.target.Desc.value,
      genreType: e.target.Genre.value,
      quote: e.target.Quote.value,
    };

    try {
      await axios.post(`${BACK_URL}`, detail, {
        headers: { "Content-Type": "application/json" }
      });
      alert("Successfully Added!");
    } catch (error) {
      alert("Failed to Submit");
      console.log(error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-screen flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-white/20">

        <h1 className="text-4xl font-bold text-center text-white tracking-wide mb-6">
          Add New Anime
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Input Group */}
          <div>
            <label className="text-gray-200 text-lg font-semibold">Anime Name</label>
            <input
              id="Name"
              type="text"
              placeholder="Enter Anime Name"
              className="mt-1 p-3 w-full bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400 outline-none"
            />
          </div>

          <div>
            <label className="text-gray-200 text-lg font-semibold">Release Date</label>
            <input
              id="Date"
              type="date"
              className="mt-1 p-3 w-full bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-cyan-400 outline-none"
            />
          </div>

          <div>
            <label className="text-gray-200 text-lg font-semibold">Number of Seasons</label>
            <input
              id="Num"
              type="number"
              placeholder="Total Seasons"
              className="mt-1 p-3 w-full bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400 outline-none"
            />
          </div>

          <div>
            <label className="text-gray-200 text-lg font-semibold">Anime Description</label>
            <input
              id="Desc"
              type="text"
              placeholder="Short Description"
              className="mt-1 p-3 w-full bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400 outline-none"
            />
          </div>

          <div>
            <label className="text-gray-200 text-lg font-semibold">Famous Quote</label>
            <input
              id="Quote"
              type="text"
              placeholder="Popular Quote"
              className="mt-1 p-3 w-full bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400 outline-none"
            />
          </div>

          <div>
            <label className="text-gray-200 text-lg font-semibold">Genre Type</label>
            <input
              id="Genre"
              type="text"
              placeholder="Genre (Action, Adventure, etc.)"
              className="mt-1 p-3 w-full bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400 outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-3 bg-cyan-500 text-xl font-semibold text-white rounded-xl shadow-lg hover:bg-cyan-600 active:scale-95 transition"
            >
              Submit
            </button>
          </div>

        </form>
      </div>

    </div>
  );
};

export default Admin;

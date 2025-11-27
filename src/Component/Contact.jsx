import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black to-gray-900 text-white px-6 py-16 flex flex-col items-center">
        {/* Header */}
        <div className="max-w-3xl text-center mb-14">
        <h1 className="text-5xl font-extrabold tracking-wider mb-4">Contact Us</h1>
        <p className="text-lg text-gray-300">
        Have feedback, suggestions, or just want to talk anime? We'd love to hear from you.
        </p>
        </div>


        {/* Contact Container */}
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12">
        {/* Left Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-cyan-500/20 transition-all flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
        Whether it's about anime recommendations, theory discussions, blog collaboration,
        or anything else — drop us a message.
        </p>
        <div className="space-y-3 text-gray-300">
        <p>📩 Email: <span className="text-white font-semibold">anoopyadav5984.com</span></p>
        <p>🐦 Twitter: <span className="text-white font-semibold">@animeblog</span></p>
        <p>📷 Instagram: <span className="text-white font-semibold">@anoop___yadav__</span></p>
        </div>
        </div>


        {/* Right Form */}
        <form className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-purple-500/20 transition-all space-y-5">
        <div>
        <label className="block mb-1 text-gray-300">Your Name</label>
        <input
        type="text"
        className="w-full rounded-lg px-3 py-2 bg-black/30 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        placeholder="Enter your name"
        />
        </div>


        <div>
        <label className="block mb-1 text-gray-300">Email Address</label>
        <input
        type="email"
        className="w-full rounded-lg px-3 py-2 bg-black/30 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Enter your email"
        />
        </div>


        <div>
        <label className="block mb-1 text-gray-300">Message</label>
        <textarea
        rows="5"
        className="w-full rounded-lg px-3 py-2 bg-black/30 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        placeholder="Write your message..."
        />
        </div>


        <button
        type="submit"
        className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-white font-semibold text-lg shadow-lg hover:shadow-cyan-500/30 transition-all"
        >
        Send Message
        </button>
        </form>
        </div>


        {/* Footer Note */}
        <div className="text-gray-400 text-center mt-16 max-w-3xl">
        <p>
        "The anime world is huge — and connecting with fans like you makes the journey even better."
        </p>
        </div>
      </div>
  )
}

export default Contact

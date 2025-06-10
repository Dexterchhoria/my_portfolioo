import React from "react";


const About: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center dark:bg-black text-white px-4">
    <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
      {/* Left: Text Content */}
      <div className="flex-1">
        <p className="uppercase tracking-widest text-sm text-gray-400 mb-2">
          More about me
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Hi there! I'm{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent italic">
            Siddharth Chhoria
          </span>
        </h1>
        <p className="text-gray-300 mb-6">
          I'm Siddharth Chhoria, a proactive full-stack developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans React, Next.js, and Node.js, and I'm always eager to learn more.
        </p>
        <p className="text-gray-400 mb-6">
          When I'm not immersed in work, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.
        </p>
        <p className="text-gray-400 mb-8">
          I believe in waking up each day eager to make a difference!
        </p>
        
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex justify-center relative">
        {/* Stacked effect */}
        <div className="absolute top-6 left-6 w-[260px] h-[320px] bg-gradient-to-tr from-purple-700 to-pink-600 rounded-2xl opacity-60 z-0"></div>
        <img
          src="/your-profile-image.jpg" // Replace with your image path
          alt="Siddharth Chhoria"
          className="relative z-10 w-[260px] h-[320px] object-cover rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  </div>
);

export default About;

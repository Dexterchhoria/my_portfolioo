"use client";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThreeDCardDemo } from './3d_card_test';
import { BackgroundBoxesDemo } from './background_boxes';
import { TextGenerateEffectDemo } from './text_gen';
import Terminal from './terminal_ui';
import { FloatingNavDemo } from "./floating_nav";
import { useEffect } from "react";
import SignupFormDemo from './page/contact';
import { ScrollToTop } from "./ScrollToTop";
import About from "./page/about";


function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="mx-10 my-6 p-10 bg-[#110518]/60 px-16 rounded-2xl" id='home'>
        <FloatingNavDemo />
        
        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <>
              <header className="w-full dark:bg-black py-8 px-6 rounded-2xl">
                <div className="container mx-auto flex items-center justify-between px-7">
                  <div className="flex items-center">
                    <TextGenerateEffectDemo />
                    <span className="text-2xl">👋</span>
                  </div>
                  <p className="bg-[#29292b] text-white rounded-full px-6 py-2 text-sm flex items-center">
                    <span className="bg-green-500 rounded-full w-2 h-2 mr-6"></span>
                    Open for collaborations
                  </p>
                </div>
                <div className="container mx-auto mt-2 px-6">
                  <p className="text-gray-400 text-sm">Full Stack Developer crafting exceptional digital experiences with <span className="text-green-400">modern technologies</span></p>
                </div>
              </header>

              <main className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-2 py-8 px-2">
                <div className="flex flex-col -my-20">
                  <ThreeDCardDemo />
                </div>
                <div>
                  <section className="rounded-lg dark:bg-black p-6 py-6">
                    <BackgroundBoxesDemo />
                  </section>
                </div>
              </main>
              <div className="dark:bg-black">
                <Terminal />
              </div>
            </>
          } />

          {/* Contact Route */}
          <Route path="/contact" element={<SignupFormDemo />} />

          {/* About Route */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

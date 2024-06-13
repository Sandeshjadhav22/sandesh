"use client";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export function Dashboard() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-950 text-gray-50 scrollbar scrollbar-thumb-rose-500">
      <Navbar/>
      <main className="flex-1 bg-gray-950 text-gray-50">
        <Hero/>
       <Experience/>
       <Skills/>
       <Projects/>
       <Contact/>
      </main>
      <Footer/>
    </div>
  );
}


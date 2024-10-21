import React from 'react';

export default function Home({ scrollTo }) {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="parallax-bg" style={{ backgroundImage: "url('/img1.jpg')" }}>
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Learn Quran Online</h1>
            <p className="text-xl mb-8 text-white">Join our expert-led classes and deepen your understanding of the Quran</p>
            <button 
              onClick={() => scrollTo('register')} // Changed from 'contact' to 'register'
              className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition duration-300"
              aria-label="Scroll to Register Section"
            >
              Start Learning Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

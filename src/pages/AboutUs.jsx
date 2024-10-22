import React from 'react';
import Reviews from '../components/Reviews';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="md:flex items-center space-y-6 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <img 
              src="/img1.jpg" 
              alt="Students studying Quran at Al Madina Quranic Academy" 
              className="rounded-lg shadow-lg" 
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-600 mb-4">
              Al Madina Quranic Academy offers comprehensive online Quran courses taught by qualified teachers. Our mission is to make Quranic education accessible to everyone, anywhere in the world.
            </p>
            <p className="text-gray-600">
              With flexible scheduling and personalized attention, we ensure that each student receives the best possible learning experience. Our dedicated team focuses on interactive learning, helping students memorize, understand, and apply Quranic teachings in their daily lives.
            </p>
          </div>
        </div>
      </div>
      {/* Include the Reviews component */}
      <Reviews />
    </section>
  );
}

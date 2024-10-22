import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

// Define course data
const courses = [
  { 
    title: "Noorani Qaida", 
    image: "/online-noorani-qaida-course.jpg", 
    description: "Begin your sacred journey of Quranic reading with our Noorani Qaida course, a comprehensive program designed to cultivate a strong foundation in reading the Holy Quran with clarity and precision." 
  },
  { 
    title: "Quran Reading", 
    image: "/oqmc.jpg", 
    description: "Enhance your connection with Allah through our Quran Reading course, where you will receive expert guidance to recite His words with heartfelt devotion and eloquence." 
  },
  { 
    title: "Tajweed", 
    image: "/online-tajweed-course.jpg", 
    description: "Learn the noble rules of Tajweed to recite the Quran as it was revealed, perfecting your pronunciation and bringing beauty to your recitation." 
  },
  { 
    title: "Quran Memorization", 
    image: "/online-hifz-quran-classes.jpg", 
    description: "Join our Hifz program and immerse yourself in the blessed practice of memorizing the Quran, supported by experienced mentors in a nurturing environment that fosters spiritual growth." 
  },
  { 
    title: "Quran Tafseer", 
    image: "/online-tafsir-course.jpg", 
    description: "Deepen your understanding of the Quran with our Tafseer course, where you will explore the divine meanings and interpretations that illuminate the path of faith." 
  },
  { 
    title: "Prayer and Dua", 
    image: "/dua.jpg", 
    description: "Discover the significance of prayer and supplication in Islam, learning essential prayers that strengthen your relationship with Allah and enhance your spiritual practice." 
  },
  { 
    title: "Languages", 
    image: "/img1.jpg", 
    description: "We provide language courses in Urdu, Pashto, Punjabi, and English, ensuring accessibility for all who seek to draw closer to Allah through knowledge." 
  }
];

// Carousel component
export default function Courses() {
  const sliderRef = useRef(null);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3, // Adjust to your desired number of visible items
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="courses" className="bg-green-50 py-20">
      <div className="container mx-auto px-6 relative">
        <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
        <Slider ref={sliderRef} {...settings}>
          {courses.map((course, index) => (
            <div key={index} className="px-2 py-4">
              <div className="flex-none bg-white rounded-lg shadow-lg h-96 mx-2 flex-col"> {/* Increased height to h-80 */}
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover rounded-t-lg" 
                  loading="lazy" 
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h3 className="font-bold text-lg">{course.title}</h3>
                  <p className="text-sm text-gray-500">{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

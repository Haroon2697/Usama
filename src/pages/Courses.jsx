import React from 'react';

const courses = [
  { 
    title: "Noorani Qaida", 
    image: "/online-noorani-qaida-course.jpg", 
    description: "Master the basics of Quranic reading with our Noorani Qaida course." 
  },
  { 
    title: "Quran Reading", 
    image: "/oqmc.jpg", 
    description: "Enhance your Quran reading skills with expert guidance." 
  },
  { 
    title: "Tajweed", 
    image: "/online-tajweed-course.jpg", 
    description: "Learn the rules of Tajweed for proper Quranic pronunciation." 
  },
  { 
    title: "Quran Memorization", 
    image: "/online-hifz-quran-classes.jpg", 
    description: "Join our Hifz program to memorize the Quran with ease." 
  },
  { 
    title: "Quran Tafseer", 
    image: "/online-tafsir-course.jpg", 
    description: "Delve into the meanings and interpretations of the Quran." 
  },
  { 
    title: "Prayer and Dua", 
    image: "/dua.jpg", 
    description: "Learn the essential prayers and supplications in Islam." 
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-green-50 py-20">
      <div className="container mx-auto px-6 ">
        <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img 
                src={course.image} 
                alt={`Course on ${course.title}`} 
                className="w-full h-48 object-cover" 
                loading="lazy" 
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

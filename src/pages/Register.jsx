import React, { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Typically send form data to your backend here.
    setFormData({ name: '', email: '', phone: '', course: '' });
  };

  return (
    <div id="register" className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Main Heading */}
        <h1 className="text-center text-5xl font-bold mb-10 text-gray-800">Register for Our Quran Classes</h1>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden md:max-w-5xl mx-auto flex flex-col md:flex-row">
          {/* Left Side - Text */}
          <div className="bg-green-600 text-white p-8 md:w-3/5 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">Enroll Now and Begin Your Journey!</h2>
            <p className="text-xl mb-8">
              Don't miss the opportunity to learn Quran online with our esteemed teachers. Enjoy the flexibility of scheduling your classes according to your convenience.
            </p>
          </div>

          {/* Right Side - Registration Form */}
          <div className="w-full md:w-2/5 p-8"> {/* Adjusted width for larger form area */}
            <div className="text-center mb-10">
                            <p>Fill in the form to start your journey with us</p>
            </div>
            <form onSubmit={handleSubmit}>
              {['name', 'email', 'phone'].map((field, index) => (
                <div key={index} className="flex -mx-3 mb-5">
                  <div className="w-full px-3">
                    <label htmlFor={field} className="text-xs font-semibold px-1 capitalize">
                      {field.replace(/^\w/, (c) => c.toUpperCase())}
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className={`mdi mdi-${field}-outline text-gray-400 text-lg px-4`}></i>
                      </div>
                      <input
                        type={field === 'email' ? 'email' : 'tel'}
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-700"
                        placeholder={`Enter your ${field}`}
                        required
                        aria-label={`Your ${field}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex -mx-3 mb-5">
                <div className="w-full px-3">
                  <label htmlFor="course" className="text-xs font-semibold px-1">Select Course</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-book-outline text-gray-400 text-lg"></i>
                    </div>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-700"
                      required
                      aria-label="Select a course"
                    >
                      <option value="">Select a course</option>
                      <option value="noorani-qaida">Noorani Qaida Course</option>
                      <option value="quran-reading">Quran Reading Course</option>
                      <option value="tajweed">Tajweed Course</option>
                      <option value="quran-memorization">Quran Memorization Course</option>
                      <option value="quran-tafseer">Quran Tafseer Course</option>
                      <option value="prayer-dua">Prayer and Duaa Lessons</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button
                    type="submit"
                    className="block w-full max-w-xs mx-auto bg-green-600 hover:bg-green-700 focus:bg-green-700 text-white rounded-lg px-3 py-3 font-semibold"
                  >
                    REGISTER NOW
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

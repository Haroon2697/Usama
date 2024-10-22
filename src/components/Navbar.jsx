import { useState } from 'react';
import { Link } from 'react-scroll'; // Use react-scroll for smooth scrolling
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for hamburger menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu open/close
  };

  return (
    <nav className="bg-green-800 text-white shadow-lg fixed w-full z-10 py-4 transition duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="#" className="flex-shrink-0">
            <img className="h-10 w-10" src="/logo2.png" alt="Logo" />
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center">
          <div className="flex space-x-5 text-center">
            <Link to="home" smooth={true} duration={500} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition duration-300">Home</Link>
            <Link to="courses" smooth={true} duration={500} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition duration-300">Courses</Link>
            <Link to="about" smooth={true} duration={500} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition duration-300">About Us</Link>
            <Link to="register" smooth={true} duration={500} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition duration-300">Register</Link>
            <Link to="contact" smooth={true} duration={500} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition duration-300">Contact Us</Link>
            <Link to="pricing" smooth={true} duration={500} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition duration-300">Pricing</Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-green-800 flex flex-col items-center py-4">
            <Link to="home" smooth={true} duration={500} onClick={toggleMenu} className="px-3 py-2 text-white text-sm font-medium hover:bg-green-700 transition duration-300">Home</Link>
            <Link to="courses" smooth={true} duration={500} onClick={toggleMenu} className="px-3 py-2 text-white text-sm font-medium hover:bg-green-700 transition duration-300">Courses</Link>
            <Link to="about" smooth={true} duration={500} onClick={toggleMenu} className="px-3 py-2 text-white text-sm font-medium hover:bg-green-700 transition duration-300">About Us</Link>
            <Link to="register" smooth={true} duration={500} onClick={toggleMenu} className="px-3 py-2 text-white text-sm font-medium hover:bg-green-700 transition duration-300">Register</Link>
            <Link to="contact" smooth={true} duration={500} onClick={toggleMenu} className="px-3 py-2 text-white text-sm font-medium hover:bg-green-700 transition duration-300">Contact Us</Link>
            <Link to="pricing" smooth={true} duration={500} onClick={toggleMenu} className="px-3 py-2 text-white text-sm font-medium hover:bg-green-700 transition duration-300">Pricing</Link>
            
                      </div>
        )}
      </div>
    </nav>
  );
}

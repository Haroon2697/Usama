import { Link } from 'react-scroll'; // Use react-scroll for smooth scrolling

export default function Navbar() {
  return (
    <nav className="bg-green-800 text-white shadow-lg fixed w-full z-10 py-4 transition duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <div className="flex items-center">
          <Link to="#" className="flex-shrink-0">
            <img className="h-10 w-10" src="/logo2.png" alt="Logo" />
          </Link>
        </div>
        <div className="hidden md:flex md:items-center">
          <div className="flex space-x-5 text-center">
            <Link to="home" smooth={true} duration={500} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition duration-300">Home</Link>
            <Link to="register" smooth={true} duration={500} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition duration-300">Register</Link>
            <Link to="contact" smooth={true} duration={500} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition duration-300">Contact Us</Link>
            <Link to="about" smooth={true} duration={500} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition duration-300">About Us</Link>
            <Link to="courses" smooth={true} duration={500} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition duration-300">Courses</Link>
            <Link to="pricing" smooth={true} duration={500} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition duration-300">Pricing</Link>
            <Link to="footer" smooth={true} duration={500} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition duration-300">Footer</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

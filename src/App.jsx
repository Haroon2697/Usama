import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Courses from './pages/Courses';
import Pricing from './pages/Pricing';
import Footer from './components/Footer';
import './index.css'; // Make sure your CSS is imported

function App() {
  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <Navbar />
      <div>
        <section id="home">
          <Home scrollTo={scrollTo} /> {/* Pass the scrollTo function */}
        </section>
        <section id="courses">
          <Courses />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="register">
          <Register />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
      </div>
      <Footer />
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/923425735544"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-6 bottom-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={28} />
      </a>
    </Router>
  );
}

export default App;

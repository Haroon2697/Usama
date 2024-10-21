import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaSkype } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="footer" className="bg-green-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Brand Information */}
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Al Madina Quranic Academy</h3>
            <p className="mb-2">Empowering through Quranic education</p>
            <p className="text-sm">Learn with us from the comfort of your home.</p>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <h4 className="font-semibold mb-2">Contact</h4>
            <p>Email: 
              <a href="mailto:almadinaquanicacademy786@gmail.com" className="underline hover:text-green-300"> almadinaquanicacademy786@gmail.com</a>
            </p>
            <p>Phone: 
              <a href="tel:+923425735544" className="underline hover:text-green-300"> +92 342 5735544</a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-green-300"><FaFacebookF size={24} /></a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-green-300"><FaTwitter size={24} /></a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-green-300"><FaInstagram size={24} /></a>
              <a href="https://youtube.com" aria-label="YouTube" className="hover:text-green-300"><FaYoutube size={24} /></a>
              <a href="https://skype.com" aria-label="Skype" className="hover:text-green-300"><FaSkype size={24} /></a>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="text-center">
          <p className="text-sm">© {new Date().getFullYear()} Al Madina Quranic Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

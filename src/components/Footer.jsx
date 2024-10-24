import React from 'react';
import { Link } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-10 px-4 sm:px-6 lg:px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Our Products - Column 1 */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-red-500">Our Products</h2>
            <ul className="space-y-2 text-sm">
              <li>Fiber Glass</li>
              <li>Pumps</li>
              <li>George Fisher</li>
              <li>Piping System</li>
              <li>Instruments</li>
              <li>Diamant Cold Welding</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-red-500">Useful Links</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-red-400 transition duration-200">Home</Link></li>
              <li><Link to="/about" className="hover:text-red-400 transition duration-200">About Us</Link></li>
              <li><Link to="/products" className="hover:text-red-400 transition duration-200">Our Products</Link></li>
              <li><Link to="/projects" className="hover:text-red-400 transition duration-200">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-red-400 transition duration-200">Contact Us</Link></li>
            </ul>
          </div>

          {/* Timings */}
          <div> 
            <h2 className="text-lg font-semibold mb-4 text-red-500"> <AccessTimeIcon/> Timings</h2>
            <ul className="space-y-2 text-sm">
              <li>Monday : <span className='ml-7'>9 am - 6 pm</span></li>
              <li>Tuesday : <span className='ml-7'>9 am - 6 pm</span></li>
              <li>Wednesday : <span className='ml-2'>9 am - 6 pm</span></li>
              <li>Thursday : <span className='ml-6'>9 am - 6 pm</span></li>
              <li>Friday : <span className='ml-[42px]'>9 am - 6 pm</span></li>
              <li>Saturday : <span className='ml-6'>9 am - 6 pm</span></li>
              <li>Sunday  : <span className='ml-8'>Closed</span></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-red-500">Contact Details</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><HomeIcon className="mr-2 text-red-500" /> <span>88-T, 1st Floor, Phase 2 DHA, Lahore Pakistan</span></li>
              <li className="flex items-center"><LocalPhoneIcon className="mr-2 text-red-500" /> <span>+924235707737-8</span></li>
              <li className="flex items-center"><EmailIcon className="mr-2 text-red-500" /> <span>sale@grpengineers.com</span></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 border-t border-gray-600 pt-6 text-sm">
          <p>© 2024 All Rights Reserved. Designed by <a href="#" className="text-red-400 hover:underline">GRP | IT Department</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

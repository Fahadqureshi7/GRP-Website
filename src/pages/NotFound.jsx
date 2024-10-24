// NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
      <>
      <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-5">
      <div className="max-w-lg">
        <h1 className="text-9xl font-extrabold text-red-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Oops! Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist. It may have been moved or removed.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-red-500 rounded-full shadow-lg hover:bg-red-600 transition-colors duration-300"
        >
          Go Back to Home
        </Link>
      </div>
      <div className="mt-12">
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default NotFound;

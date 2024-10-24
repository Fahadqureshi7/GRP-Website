import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Machinery = () => {
  return (
    <div>
      <Navbar />
      {/* Header Section */}
      <div >
        <h1 className="my-1 py-12 flex justify-center items-center text-4xl sm:text-3xl md:text-5xl hover:text-red-600 font-bold bg-slate-100 h-[60px] sm:h-[80px] md:h-[100px]">
          Machinery
        </h1>
      </div>

      {/* Services Section */}
      <div className="py-12 px-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          Services We Offer
        </h2>

        {/* Flexbox Layout for Service Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pumps */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <Link to="/products/machinery/pumps">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
                Pumps
              </h2>
              <img
                src="/GrpMachinery/machinery1.jpg"
                alt="Pumps"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </Link>
          </div>

          {/* George Fisher */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <Link to="/products/machinery/georgeFisher">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
                George Fisher
              </h2>
              <img
                src="/GrpMachinery/machinery3.png"
                alt="George Fisher"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </Link>
          </div>

          {/* Piping System */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <Link to="/products/machinery/pipingSystem">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
                Piping System
              </h2>
              <img
                src="/GrpMachinery/machinery2.jpg"
                alt="Piping System"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Machinery;

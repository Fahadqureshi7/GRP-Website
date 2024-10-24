import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Instrument = () => {
  return (
    <div>
      <Navbar />
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-6">
        <h1 className="my-1 text-4xl md:text-5xl font-bold text-center text-black hover:text-red-700 transition-colors duration-300">
          Instrument
        </h1>
      </div>

      {/* Services Section */}
      <div className="py-12 px-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          Services We Offer
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Agitator */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <Link to="/products/instrument/agitator">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
                Agitator
              </h2>
              <img
                src="/GrpInstrument/instrument1.gif"
                alt="Agitator"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </Link>
          </div>

          {/* Flowline */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <Link to="/products/instrument/flowLine">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
                Flowline
              </h2>
              <img
                src="/GrpInstrument/instrument3.jpg"
                alt="Flowline"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </Link>
          </div>

          {/* Flowmeters */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <Link to="/products/instrument/flowMeter">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
                Flowmeters
              </h2>
              <img
                src="/GrpInstrument/instrument4.png"
                alt="Flowmeters"
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

export default Instrument;

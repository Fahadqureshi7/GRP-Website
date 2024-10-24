// DiamantCold.js

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WavingHandIcon from '@mui/icons-material/WavingHand';

const DiamantCold = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />

      {/* Title Section */}
      <div>
        <h1 className="my-1 flex justify-center items-center text-3xl sm:text-4xl md:text-5xl hover:text-red-600 font-bold bg-slate-100 h-[100px] text-center">
          Diamant Cold Welding Materials
        </h1>
      </div>

      {/* Product Section */}
      <div className="w-full flex justify-center bg-gray-50 py-8 sm:py-10 px-6 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl">
          
          {/* DICHTOL */}
          <div className="bg-white p-4 sm:p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">DICHTOL</h2>
            <img src="/GrpDiamant/diamant1.jpg" alt="Dichtol" className="w-full h-48 sm:h-64 object-contain rounded-lg mb-4" />
            <p className="text-gray-700 text-sm sm:text-base">
              DICHTOL is a 1-component liquid impregnation system, offering high resistance to thermal, physical, and chemical stress.
            </p>
            <Link to='/products/diamantColdWeldingMaterial/dichtol'>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors flex items-center">
                Read More <ArrowOutwardIcon className="ml-1" />
              </button>
            </Link>
          </div>

          {/* Plastic Metal */}
          <div className="bg-white p-4 sm:p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">PLASTIC METAL</h2>
            <img src="/GrpDiamant/diamant2.jpg" alt="Plastic Metal" className="w-full h-48 sm:h-64 object-contain rounded-lg mb-4" />
            <p className="text-gray-700 text-sm sm:text-base">
              Plastic Metal is ideal for surface repairs on metal, providing excellent metal finishes and machinability.
            </p>
            <Link to='/products/diamantColdWeldingMaterial/plasticMetal'>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors flex items-center">
                Read More <ArrowOutwardIcon className="ml-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Additional Product Section */}
      <div className="w-full flex justify-center bg-gray-50 py-8 sm:py-10 px-6 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl">

          {/* MULTI METAL */}
          <div className="bg-white p-4 sm:p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">MULTI METAL</h2>
            <img src="/GrpDiamant/diamant3.jpg" alt="Multi Metal" className="w-full h-48 sm:h-64 object-contain rounded-lg mb-4" />
            <p className="text-gray-700 text-sm sm:text-base">
            Multi Metal is a 2-component system that involves resin and hardener, supplied in correct quantities and ready to mix.
            </p>
            <Link to='/products/diamantColdWeldingMaterial/multiMetal'>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors flex items-center">
                Read More <ArrowOutwardIcon className="ml-1" />
              </button>
            </Link>
          </div>

          {/* ULTRA METAL */}
          <div className="bg-white p-4 sm:p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">ULTRA METAL</h2>
            <img src="/GrpDiamant/diamant4.png" alt="Ultra Metal" className="w-full h-48 sm:h-64 object-contain rounded-lg mb-4" />
            <p className="text-gray-700 text-sm sm:text-base">
            Ultra Metal is a 2-component system that involves resin and hardener, supplied in correct quantities and ready to mix. 
            </p>
            <Link to='/products/diamantColdWeldingMaterial/ultraMetal'>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors flex items-center">
                Read More <ArrowOutwardIcon className="ml-1" />
              </button>
            </Link>
          </div>

        </div>
      </div>

      {/* More Products Section */}
      <div className="w-full flex justify-center bg-gray-50 py-8 sm:py-10 px-6 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl">

          {/* MOGLICE */}
          <div className="bg-white p-4 sm:p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">MOGLICE</h2>
            <img src="/GrpDiamant/diamant5.jpg" alt="Moglice" className="w-full h-48 sm:h-64 object-contain rounded-lg mb-4" />
            <p className="text-gray-700 text-sm sm:text-base">
              Mouldable low friction wayliner, providing high precision and anti-stick slip properties.
            </p>
            <Link to='/products/diamantColdWeldingMaterial/moglice'>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors flex items-center">
                Read More <ArrowOutwardIcon className="ml-1" />
              </button>
            </Link>
          </div>

          {/* PROCOAT */}
          <div className="bg-white p-4 sm:p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">PROCOAT</h2>
            <img src="/GrpDiamant/diamant6.jpg" alt="Procoat" className="w-full h-48 sm:h-64 object-contain rounded-lg mb-4" />
            <p className="text-gray-700 text-sm sm:text-base">
              PROCOAT provides excellent wear resistance against corrosion and erosion for extreme environments.
            </p>
            <Link to='/products/diamantColdWeldingMaterial/procoat'>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors flex items-center">
                Read More <ArrowOutwardIcon className="ml-1" />
              </button>
            </Link>
          </div>

        </div>
      </div>

      {/* Final Product Section */}
      <div className="w-full flex justify-center bg-gray-50 py-8 sm:py-10 px-6 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl">

          {/* DWH */}
          <div className="bg-white p-4 sm:p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">DWH</h2>
            <img src="/GrpDiamant/diamant7.png" alt="DWH" className="w-full h-48 sm:h-64 object-contain rounded-lg mb-4" />
            <p className="text-gray-700 text-sm sm:text-base">
              DWH precision alignment system uses molding techniques for accurate joint faces in machine tools.
            </p>
            <Link to='/products/diamantColdWeldingMaterial/dwh'>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors flex items-center">
                Read More <ArrowOutwardIcon className="ml-1" />
              </button>
            </Link>
          </div>

          {/* CERAMIC METAL */}
          <div className="bg-white p-4 sm:p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">CERAMIC METAL</h2>
            <img src="/GrpDiamant/diamant8.jpg" alt="Ceramic Metal" className="w-full h-48 sm:h-64 object-contain rounded-lg mb-4" />
            <p className="text-gray-700 text-sm sm:text-base">
              CERAMIC METAL is ideal for repairs and protection of pumps, valves, and other equipment subject to wear and erosion.
            </p>
            <Link to='/products/diamantColdWeldingMaterial/ceramicMetal'>
            </Link>
          </div>

        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white p-6 shadow-lg rounded-lg text-center mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hey! <WavingHandIcon/> Contact Sir Rizwan for any further queries</h2>
        <p className="text-gray-700 mb-6">
          Sir Rizwan is handling all information about Diamant Cold Welding products. Feel free to contact him.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 mt-4 sm:flex justify-center">
          <a href="mailto:sale@grpengineers.com" className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors flex items-center justify-center">
            <EmailIcon className="mr-2" /> sale@grpengineers.com
          </a>
          <a href="tel:03444016675" className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors flex items-center justify-center">
            <PhoneIcon className="mr-2" /> 0344-4016675
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DiamantCold;

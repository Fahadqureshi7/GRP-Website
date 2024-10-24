import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FiberGlassProducts = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className=''>
        <h1 className="my-1 py-12 flex justify-center items-center text-4xl sm:text-3xl md:text-5xl hover:text-red-600 font-bold bg-slate-100 h-[60px] sm:h-[80px] md:h-[100px]">
          Fiber Glass Products
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="bg-white py-12 px-10 max-w-7xl mx-auto">
        {/* Product Section 1 */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <img
            src="/GrpEng/product-1.jpg"
            alt="Fiberglass Tanks"
            className="w-full md:w-1/2 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Fiberglass Tanks and Process Vessels
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At GRP Engineering Pakistan, we offer tanks, heat exchangers, pumps, and more, with custom sizes ranging from 500 to 100,000 liters. Designed for durability and reliability.
            </p>
          </div>
        </div>

        {/* Product Section 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-16 bg-gray-50 py-12 px-6 rounded-lg shadow-md">
          <img
            src="/GrpFiberGlassProducts/grp-tanks.jpeg"
            alt="Reaction Vessels"
            className="w-full md:w-1/2 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Tanks, Reaction Vessels, Silos & Water Reservoirs
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our custom storage tanks and vessels offer superior corrosion resistance and cost-effective solutions for chemical services.
            </p>
          </div>
        </div>

        {/* Product Section 3 */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <img
            src="/GrpFiberGlassProducts/grp-fans.png"
            alt="Cooling Tower Fans"
            className="w-full md:w-1/2 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              GRP Fan Blades for Cooling Towers
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Reverse-engineered cooling tower components including fan blades, nozzles, and header pipes for industrial applications.
            </p>
          </div>
        </div>

        {/* Product Section 4 */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-16 bg-gray-50 py-12 px-6 rounded-lg shadow-md">
          <img
            src="/GrpFiberGlassProducts/grp-lining.jpg"
            alt="Corrosion Resistance Lining"
            className="w-full md:w-1/2 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              GRP Corrosion Resistance Lining System
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our systems protect structures from corrosion, providing long-term solutions for critical infrastructure.
            </p>
          </div>
        </div>

        {/* Marine Products Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <img
            src="/GrpFiberGlassProducts/boat.jpg"
            alt="Marine Products"
            className="w-full md:w-1/2 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Marine Products
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We offer a range of marine products including boats, rescue vessels, floating chambers, and buoys designed for safety and durability.
            </p>
          </div>
        </div>

        {/* Coatings Section */}
        <div className="bg-gray-50 py-12 px-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Coatings
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We specialize in chemically resistive coatings for industrial applications, providing protection for pipes, tanks, pumps, and more.
              </p>
            </div>
            <img
              src="/GrpFiberGlassProducts/arcor-logo.png"
              alt="Arcor Coatings"
              className="w-1/3 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FiberGlassProducts;

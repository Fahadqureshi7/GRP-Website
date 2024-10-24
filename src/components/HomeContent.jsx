import React from 'react';
import ImgCarousel from './ImgCarousel';
import { Link } from 'react-router-dom';
import CompanyCarousel from './CompanyCarousel';
import ClientCarousel from './ClientCarousel';
import ProductCard from './ProductCard';

const HomeContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px6 lg:px-8 overflow-x-hidden">
      {/* Hero Section */}
      <div className='flex flex-col lg:flex-row w-full py-4 sm:py-8 items-stretch'>
        <div className='lg:w-[60%] text-slate-950 mb-6 lg:mb-0 pr-0 lg:pr-8'>
          <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-red-600 leading-tight mb-4'>
            GRP Engineers & Consultants    
          </h1> 
          <p className='text-sm sm:text-base md:text-lg leading-relaxed mt-4'>
            <span className='font-semibold text-red-500'>Welcome To GRP Engineers & Consultants,</span> one of the leading suppliers of Fiber Glass Products. We are a multidisciplinary engineering firm specializing in infrastructure development and consultancy services. 
            <br className="hidden sm:block" /><br className="hidden sm:block" />
            Our solutions span various fields, including chemical, mechanical, and metallurgical engineering, backed by expertise in project management, structural analysis, and sustainable design. With our seasoned professionals, we deliver innovative, high-quality services to meet the needs of both public and private sector clients.
          </p>
          <div className="mt-6 sm:mt-8">
            <Link to={'/about'}>
              <button className="bg-red-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 text-sm sm:text-base">
            Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className='lg:w-[40%] mb-6 lg:mb-0 max-w-full'>
          <ImgCarousel/>
          </div>
      </div>

      {/* Registration Section */}
      <div className='bg-white w-full flex flex-col items-center py-6 sm:py-8'>
        <h2 className='font-semibold text-xl sm:text-2xl md:text-3xl text-gray-800 mb-4 text-center'>
          GRP Engineers is registered with
        </h2>
        <div className='hover:scale-105 transform transition duration-300 ease-in-out'>
          <img src="/GrpEng/unnamed-1.png" alt="Company Image" className="max-w-full h-auto" />
        </div>
      </div>

      {/* GRP Manufacturers Section */}
      <div className='flex flex-col lg:flex-row m-2 sm:m-4 md:m-8 p-4 sm:p-6 md:p-8 bg-gray-50 rounded-lg shadow-lg'>
        <div className='lg:w-[30%] mb-6 lg:mb-0'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-4'>
            GRP Manufacturers <br className="hidden sm:block" /> & Suppliers
          </h2>
          <Link to={'/products'}>
            <button className="bg-red-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 text-sm sm:text-base">
              Explore Our Products
            </button>
          </Link>
        </div>
        <div className='lg:w-[70%] text-sm sm:text-base md:text-lg leading-relaxed'>
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-4'>
            Welcome to GRP Engineers, Leading GRP Suppliers in Pakistan
          </h3>
          <p className='text-gray-600'>
            At GRP Engineers & Consultants, we specialize in advanced composite materials like GRP (Glass Reinforced Plastic) and FRP (Fibre Reinforced Plastic). Our expertise allows us to create durable, lightweight, and cost-effective mouldings for various industries. GRP gratings offer substantial benefits over steel, being half the weight and reducing the need for extensive support frameworks, thus minimizing costs while maintaining high load-bearing capabilities.
          </p>

          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mt-6 mb-4'>
            Why Choose Us
          </h3>
          <p className='text-gray-600'>
            We pride ourselves as the go-to solution for all your chemical handling needs. Every project receives undivided attention, with engineers drafting from scratch to meet your specific requirements. This expertise enables GRP to handle even the most complex projects, delivering cost-effective, long-lasting, and aesthetically pleasing results.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex justify-center items-center mt-8">
        <h2 className='font-bold text-lg sm:text-xl md:text-2xl mb-4 pt-4 border-b-2 border-gray-800 text-center'>
          OUR PRODUCTS
        </h2>
      </div>
      <div>
        <ProductCard/>
      </div>

      {/* Manufacturers and Associations Section */}
      <div className='flex justify-center items-center mt-8'>
        <h2 className='font-bold text-lg sm:text-xl md:text-2xl mb-4 pt-4 border-b-2 border-gray-800 text-center'>
          MANUFACTURERS AND ASSOCIATIONS
        </h2>
      </div>
      <CompanyCarousel/>

      {/* Clients Section */}
      <div className='flex justify-center items-center mt-8'>
        <h2 className='font-bold text-lg sm:text-xl md:text-2xl mb-4 pt-4 border-b-2 border-gray-800 text-center'>
          OUR CLIENTS
        </h2>
      </div>
      <ClientCarousel/>
    </div>
  );
}

export default HomeContent;
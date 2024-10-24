import React from 'react';
import ProductCard from './ProductCard';

const ProductContent = () => {
  return (
    <div className="bg-gray-50">
      <h1 className='py-12 my-1 flex justify-center items-center text-4xl sm:text-3xl md:text-4xl hover:text-red-600 font-bold bg-slate-100 h-[60px] sm:h-[80px] md:h-[100px] px-4 text-center'>
        Our Products
      </h1>
      
      <div className='mx-4 sm:mx-6 md:mx-10 pt-2 py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6'>
        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
          <i>We</i> are a leading trade organization of Pakistan engaged in handling <span className='font-semibold text-black'>CORROSION</span> in Chemical Processing Industries (CPI) through provision of equipment in FRP and/or in PVC-U, PP-H, PVDF, and PVC-C.
        </p>
        
        <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-gray-800 text-sm sm:text-base md:text-lg">
          <li>Tanks, Vessels, Bins & Silos, Reactors, Blenders.</li>
          <li>Pipes & Fittings, Ducts, Blower Fans, Butterfly Valves.</li>
          <li>Scrubbers, Stacks, Chimneys, Degassifiers.</li>
          <li>Fan Blades, Louvers, Chemical Mixing Troughs.</li>
          <li>Lining of new/old Concrete Flooring, Channels, Chests & Towers.</li>
          <li>Lining of new/old Metal Tanks, Towers, Pipes, and other structures.</li>
        </ul>
        
        <div className="mt-2 sm:mt-8">
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default ProductContent;
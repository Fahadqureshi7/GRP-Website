import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const logos = [
    "/GrpEng/company-3.jpg", 
    "/GrpEng/company-4.png", 
    "/GrpEng/company-7.png",  
    "/GrpEng/company-12.png",
    "/GrpEng/company-22.png",
    "/GrpEng/company-17.png", 
    "/GrpEng/company-6.jpg",
    "/GrpEng/company-15.png",
    "/GrpEng/company-11.png",
    "/GrpEng/company-26.png",
];

const CompanyCarousel = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full flex items-center ">
      <button onClick={scrollLeft} className="hidden lg:flex">
        <FaChevronLeft className='relative left-4 hover:text-red-500 text-xl'/>
      </button>
      <div 
        ref={scrollRef} 
        className="flex overflow-x-auto no-scrollbar space-x-4 p-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        {logos.map((logo, index) => ( 
          <img 
            key={index} 
            src={logo} 
            alt={`Company Logo ${index + 1}`} 
            className="flex-shrink-0 w-[120px] h-auto sm:w-[150px] lg:w-[180px] object-contain mx-5" 
          />
        ))}
      </div>
      <button onClick={scrollRight} className="hidden lg:flex">
        <FaChevronRight className='relative -left-4 hover:text-red-500 text-xl' />
      </button>
    </div>
  );
}

export default CompanyCarousel;

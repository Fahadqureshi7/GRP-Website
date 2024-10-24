import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const logos = [
    "/GrpEng/company-1.jpg",
    "/GrpEng/company-5.jpg",
    "/GrpEng/company-10.jpg",
    "/GrpEng/company-13.png",
    "/GrpEng/company-16.jpg",
    "/GrpEng/company-18.jpg",
    "/GrpEng/company-19.png",
    "/GrpEng/company-21.jpg",
    "/GrpEng/company-23.png",
    "/GrpEng/company-24.png",
    "/GrpEng/company-25.jpg",
    "/GrpEng/company-27.png",
    "/GrpEng/company-28.png",
    "/GrpEng/company-29.png",
    "/GrpEng/company-30.png",
    "/GrpEng/company-31.jpg",
    "/GrpEng/company-32.png",
    "/GrpEng/company-33.png",
    "/GrpEng/company-34.png",
    "/GrpEng/company-35.png",
    "/GrpEng/company-36.png",
    "/GrpEng/company-42.png",
    "/GrpEng/company-37.png",
    "/GrpEng/company-38.png",
    "/GrpEng/company-39.png",
    "/GrpEng/company-40.png",
    "/GrpEng/company-41.jpg",
];

const ClientCarousel = () => {
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
                <FaChevronLeft className='relative left-4 hover:text-red-500 text-xl' />
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

export default ClientCarousel;

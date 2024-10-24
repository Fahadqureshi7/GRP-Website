import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  const products = [
    {
      title: "FIBER GLASS",
      description: "Custom Engineered tanks & process vessels fabricated by contact molding process. Standard tanks are available in sizes...",
      image: "/GrpEng/product-1.jpg",
      link: "/products/fiberGlass"
    },
    {
      title: "PUMPS",
      description: "Industrial Pumps of all kinds including Centrifugal with mechanical seals, seal less in plastic as well as in SS 316, Air Operated...",
      image: "/GrpEng/product-2.png",
      link: "/products/machinery/pumps"
    },
    {
      title: "GEORG FISCHER",
      description: "GEORG FISCHER Plastic Piping System in PVC-U, PVC-C, PPH, PE, ABS, & PVDF. including Pipes, Fittings, Solenoid Valves...",
      image: "/GrpEng/product-3.jpg",
      link: "/products/machinery/georgeFisher"
    },
    {
      title: "PIPING SYSTEM",
      description: `Pressure contact moulded pipe in standard 20′ length in diameters from 2" to 54". Filament wound pipe in 20′ lengths in...`,
      image: "/GrpPipingSystem/piping1.jpg",
      link: "/products/machinery/pipingSystem"
    },
    {
      title: "INSTRUMENTS",
      description: "At GRP Engineers Pakistan, we have a wide array of flow meter, flow line & agitators products of industrial mixers and agitators...",
      image: "/GrpEng/product-5.jpg",
      link: "/products/instrument"
    },
    {
      title: "DIAMANT COLD WELDING",
      description: "At GRP Engineers Pakistan, We provide high quality cold welding materials for places where hot welding isn't possible, which...",
      image: "/GrpEng/product-6.jpg",
      link: "/products/DiamantColdWeldingMaterial"
    }
  ];

  return (
    <div className="bg-gray-50 py-8 sm:py-12">
      <div className="container mx-auto px-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {products.map((product, index) => (
            <div key={index} className="text-center group transform transition-transform duration-300 hover:scale-105">
              <Link to={product.link} className="block h-full">
                <div className="overflow-hidden rounded-lg shadow-lg bg-white h-full flex flex-col">
                  <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                    <h2 className="text-xl sm:text-2xl font-semibold mt-2 sm:mt-4 transition-colors duration-300 group-hover:text-red-600">
                      {product.title}
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

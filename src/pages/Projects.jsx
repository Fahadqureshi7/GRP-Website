import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Projects = () => {
  return (
    <div>
        <Navbar/>
        <div>
        <h1 className=' my-1 flex justify-center items-center text-4xl md:text-4xl hover:text-red-600 font-bold bg-slate-100 h-[100px]'>
                Projects
            </h1>
        </div>
        <div>
        <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Product Card 1 */}
          <div className="text-center group transform transition duration-300 hover:scale-105">
            <div className="overflow-hidden rounded-lg shadow-lg bg-white">
              <img src="/GrpEng/about-image-1.jpg" alt="FiberGlass-Img" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mt-4 group-hover:text-red-600 transition-colors duration-300">FIBER TANK</h2>
                <p className="text-gray-600 mt-2">30 year old tank working to date</p>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="text-center group transform transition duration-300 hover:scale-105">
            <div className="overflow-hidden rounded-lg shadow-lg bg-white">
              <img src="/GrpEng/fiber-trolleys.jpg" alt="Pumps" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mt-4 group-hover:text-red-600 transition-colors duration-300">FIBERS TROLLEYS</h2>
                <p className="text-gray-600 mt-2">Mutliple purpose Fiber Trolleys for textiles or stone washing</p>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="text-center group transform transition duration-300 hover:scale-105">
            <div className="overflow-hidden rounded-lg shadow-lg bg-white">
              <img src="/GrpEng/about-image-2.jpg" alt="GEORG FISCHER" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mt-4 group-hover:text-red-600 transition-colors duration-300">SCRUBBERS</h2>
                <p className="text-gray-600 mt-2">Scrubbers to eliminate chemical fumes</p>
              </div>
            </div>
          </div>
          <div className="text-center group transform transition duration-300 hover:scale-105">
            <div className="overflow-hidden rounded-lg shadow-lg bg-white">
              <img src="/GrpEng/storage-tanks-1.jpeg" alt="FiberGlass-Img" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mt-4 group-hover:text-red-600 transition-colors duration-300">STORAGE TANKS</h2>
                <p className="text-gray-600 mt-2">Storage Tanks for Paint Factories</p>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="text-center group transform transition duration-300 hover:scale-105">
            <div className="overflow-hidden rounded-lg shadow-lg bg-white">
              <img src="/GrpEng/storage-tanks-2.jpg" alt="Pumps" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mt-4 group-hover:text-red-600 transition-colors duration-300">STORAGE TANKS</h2>
                <p className="text-gray-600 mt-2">Storage tanks For waste water</p>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="text-center group transform transition duration-300 hover:scale-105">
            <div className="overflow-hidden rounded-lg shadow-lg bg-white">
              <img src="/GrpEng/storage-tanks-3.jpg" alt="GEORG FISCHER" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mt-4 group-hover:text-red-600 transition-colors duration-300">STORAGE TANKS</h2>
                <p className="text-gray-600 mt-2">Storage Tanks with agitators</p>
              </div>
            </div>
          </div>

          {/* Add more product cards below using the same pattern */}
        </div>
      </div>
    </div>
        </div>
        <Footer/>

    </div>
  )
}

export default Projects

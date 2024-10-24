import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MetalFabrication = () => {
  return (
    <div> 
        <Navbar/>
    {/* Hero Section */}
    <div className=''>
    <h1 className='my-1 flex py-12 justify-center items-center text-3xl sm:text-3xl md:text-5xl hover:text-red-600 font-bold bg-slate-100 h-[60px] sm:h-[80px] md:h-[100px]'>
                Metal Fabrication
            </h1>
    </div>
    {/* Main Content Section */}
    <div className="bg-white py-12 px-10 max-w-7xl mx-auto">
        {/* Product Section 1 */}
        <div className="flex flex-col md:flex-row gap-12  items-center mb-16">
          <div className="w-full ">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Metal fabrication at GRP

            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
            GRP Engineers offer all types of metal works if metal is whats required ny our customer. We have built metal tanks, metal tanks with motorized agitator, even our very own filament winding machine. When it comes to meeting the clients requirements, we are always one step ahead.
            </p>
          </div>
        </div>

        {/* Product Section 2 */}
        <div className=" w-full flex flex-col md:flex-row-reverse gap-12 items-center mb-16 py-2  rounded-lg">
          <img
            src="/img2.jpeg"
            alt="Grp-Metal"
            className="h-[500px] md:h-[650px] md:w-1/2 w-[400px] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Stainless steel tanks
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
            Stainless steel water storage tanks provide a variety of advantages, including strength, stability, durability and cleanliness.  Stainless steel tanks are considered to be more portable, more maintenance free and easier to install than other tank types.
<br />
They are also considered the most healthy type of tank, not only due to the type of material they are made from but also because they can be cleaned more thoroughly.  Metal tanks, such as stainless steel, are more costly; however, they are becoming favorites for water storage use around the world.
            </p>
          </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default MetalFabrication
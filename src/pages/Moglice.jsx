import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Moglice = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <div className="text-center bg-slate-100 py-6">
        <h1 className="py-2 text-4xl font-bold hover:text-red-600">
        Moglice
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Introduction Section */}
        <section className="mb-8">
          <div className="my-6 flex justify-center">
            <img src="/GrpMoglice/moglice1.jpg" alt="Moglice main" className="w-full h-56 md:h-80 object-center rounded-lg shadow-lg" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">
          Mould slideways and hydrostatic bearings to the exact micron and adapt them perfectly without machining <br />
          Mould complex shapes and structures with maximum precision and without machining.
          </h2>
          <p className="text-lg leading-relaxed">
          <b>DIAMANT moglice ,</b> the mouldable sliding coating system with ultra-fine sliding fillers, produces sliding surfaces and slideways moulded to the precise micron for the manufacture or overhaul of high-precision stick-slip-free sliding surfaces with any geometry. The mouldable moglice sliding coating allows the easy movement of dynamic elements, protects against abrasion and wear and thus significantly lowers manufacturing and operating costs. DIAMANT moglice retains its outstanding properties even under unfavourable conditions such as inadequate lubrication or high loads. When used on cast iron the friction value at rest, for example, is only about 1/7 of the conventional cast iron/steel pairing.
          </p>
        </section>

        {/* Images Section */}
        <section className="my-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <img src="/GrpMoglice/moglice2.jpg" alt="" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src="/GrpMoglice/moglice3.jpg" alt="DWH 3" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src="/GrpMoglice/moglice4.jpg" alt="" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src="/GrpMoglice/moglice5.jpg" alt="" className="w-full h-48 object-cover rounded-lg shadow-md" />
          </div>
        </section>

        {/* Connection Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
          Shorten processes, reduce costs
          </h2>
          <p className="text-lg leading-relaxed mb-4">
          moglice enables the moulding of complex shapes and structures with micron precision, without machining. This method reduces the process times and costs in modern production technology many times over.
          </p>
          <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <img src="/GrpMoglice/moglice6.jpg" alt="" className="w-full h-60 object-cover rounded-lg shadow-lg" />
  <img src="/GrpMoglice/moglice7.jpg" alt="" className="w-full h-60 object-cover rounded-lg shadow-lg" />
  <img src="/GrpMoglice/moglice8.jpg" alt="" className="w-full h-60 object-cover rounded-lg shadow-lg" />
  <img src="/GrpMoglice/moglice9.jpg" alt="" className="w-full h-60 object-cover rounded-lg shadow-lg" />
</div>

        </section>

        {/* New Sections (Missing Part) */}
        {/* Application Areas Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Typical areas of application for DIAMANT moglice</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Hydrostatic guides</li>
            <li>Round guides</li>
            <li>Sliding bearings for large machine tools</li>
            <li>Hydraulic pistons</li>
            <li>Wedge jibs and fitting strips</li>
            <li>Column ways</li>
            <li>Carriage slideways</li>
            <li>Ram guides</li>
            <li>Support guideways</li>
            <li>Aerostatic guides (air bearings)</li>
            <li>Sleeve guides</li>
          </ul>
        </section>

        {/* Ready-to-Mix Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Ready to Mix for Filling, Pouring, or Injection</h2>
          <p className="text-lg leading-relaxed mb-4">
            <b>DIAMANT moglice</b>  is ready to mix and can be used immediately. Weighing or measuring is not necessary. The 2-component polymer system can be used without special knowledge and is available in three consistencies:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>pasty, for moulding by application to the prepared surface (putty and set)</li>
            <li>fluid, for pouring into a prepared and sealed hollow space (pour and set) or</li>
            <li>for injection into a prepared hollow space by means of a hand cartridge (inject).</li>
          </ul>
        </section>

        {/* Advantages Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">MOGLICE: Convincing Properties, Decisive Advantages</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Stick-Slip-free sliding surface</li>
            <li>High dimensional accuracy since there is no measurable shrinkage (˂ 0.05%)</li>
            <li>High dimensional stability</li>
            <li>Micron-precise moulding</li>
            <li>Optimum adhesion (individual layer thicknesses)</li>
            <li>Extreme long-term adhesion</li>
            <li>No swelling in conjunction with the approved coolant and lubricant emulsions</li>
            <li>Excellent load transmission through full support of the contact surfaces</li>
            <li>Outstanding damping properties</li>
            <li>High resistance to chemicals</li>
            <li>Low coefficient of sliding friction 0.1</li>
            <li>Extremely resistant to wear</li>
            <li>Rational and quick to process without special knowledge</li>
          </ul>
        </section>

        {/* Call to Action Section */}
        <section className="text-center">
          <p className="text-lg leading-relaxed mb-4">
            To see all product details of MOGLICE, visit:
          </p>
          <a 
            href="https://diamant-polymer.de/produkte/moglice/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300"
          >
            PRODUCT DETAILS
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Moglice;

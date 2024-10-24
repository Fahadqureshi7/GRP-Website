import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DWH = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <div className="text-center bg-slate-100 py-6">
        <h1 className="py-2 text-4xl font-bold hover:text-red-600">
          DWH
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Introduction Section */}
        <section className="mb-8">
          <div className="my-6 flex justify-center">
            <img src="/GrpDWH/dwh1.jpg" alt="DWH Main" className="w-full h-80 object-fill rounded-lg shadow-lg" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            From a single casting: micron-precise connections for mechanical engineering without machining
          </h2>
          <p className="text-lg leading-relaxed">
            Micron-precise moulding on the spot. Permanent or temporary connection of components. Exact, fast, and without machining.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            <b>DIAMANT DWH</b> is the industry-wide tried and tested, dimensionally stable, fine adjustment coating for connecting surfaces on devices, components, machines, and machine tools. DWH metal-polymer potting compound enables micron-precise moulding on the spot, providing an exact copy of the tool or part surface. DIAMANT DWH makes time-consuming and costly machining unnecessary. Rework such as scraping is eliminated.
          </p>
        </section>

        {/* Images Section */}
        <section className="my-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <img src="/GrpDWH/dwh2.jpg" alt="DWH 2" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src="/GrpDWH/dwh3.jpg" alt="DWH 3" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src="/GrpDWH/dwh4.jpg" alt="DWH 4" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src="/GrpDWH/dwh5.jpg" alt="DWH 5" className="w-full h-48 object-cover rounded-lg shadow-md" />
          </div>
        </section>

        {/* Connection Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Force-fit connection, dimensionally stable and load-bearing
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            DIAMANT DWH gives the user the choice of creating a permanent or separable connection. The material can adhere to the surface to permanently fix components or assemblies, or it can be detached using a micro-thin layer of separator, allowing the joined elements to be separated later.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            For static connections to metal components, DWH is applied between the contact surfaces, becoming dimensionally stable and load-bearing after hardening. The filling of gaps and hollow spaces with DIAMANT DWH ensures optimal absorption of physical forces.
          </p>
          <div className="my-6 flex justify-center">
            <img src="/GrpDWH/dwh6.jpg" alt="DWH 6" className="w-full h-56 md:h-80  object-fill rounded-lg shadow-lg" />
          </div>
        </section>

        {/* New Sections (Missing Part) */}
        {/* Application Areas Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Typical Areas of Application for DIAMANT DWH</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Alignment and fixing of all kinds of components</li>
            <li>Grinding spindle shafts</li>
            <li>Keyways</li>
            <li>Fixing of guide rails</li>
            <li>Bearing supports and bushings</li>
            <li>Casting of guide bushes and guide pins</li>
            <li>Centring of machine parts</li>
            <li>Fixing of complete assemblies</li>
          </ul>
        </section>

        {/* Ready-to-Mix Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Ready to Mix for Filling, Pouring, or Injection</h2>
          <p className="text-lg leading-relaxed mb-4">
            <b>DIAMANT DWH</b> is supplied ready to mix. Weighing or measuring is not necessary. The 2-component polymer system is usable without special knowledge. DWH is available in three consistencies:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Pasty, for application and moulding directly on the prepared surface.</li>
            <li>Fluid, for pouring into a prepared and sealed hollow space.</li>
            <li>For injection into a prepared hollow space by means of a hand cartridge.</li>
          </ul>
        </section>

        {/* Advantages Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">DWH: Convincing Properties, Decisive Advantages</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Force-fit connection of metal elements on the spot without machining</li>
            <li>No relevant material shrinkage (~0.05%)</li>
            <li>No machining necessary</li>
            <li>Outstanding compressive strength</li>
            <li>High accuracy (micron-precise moulding)</li>
            <li>High load-bearing capacity up to 160 N/mm² (static)</li>
            <li>Good damping properties</li>
            <li>Maximum adhesion to metal</li>
            <li>Extremely durable, practically no aging or weathering</li>
          </ul>
        </section>

        {/* Call to Action Section */}
        <section className="text-center">
          <p className="text-lg leading-relaxed mb-4">
            To see all product details of DWH, visit:
          </p>
          <a 
            href="https://diamant-polymer.de/produkte/dwh/" 
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

export default DWH;

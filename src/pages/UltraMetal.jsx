import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UltraMetal = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <div className="text-center bg-slate-100 py-6">
        <h1 className="my-2 text-4xl font-bold hover:text-red-600">
        Ultra Metal
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Introduction Section */}
        <section className="mb-8">
          <div className="my-6 flex justify-center">
            <img src="/GrpUltraMetal/ultrametal1.jpg" alt="Moglice main" className="w-full md:h-80 h-56 object-center rounded-lg shadow-lg" />
          </div>
          
                <p className="text-lg leading-relaxed">
         <b> Ultrametal </b> from DIAMANT Metallplastic is the industry-wide proven material for the connection, correction and repair of large defects in metal workpieces. The highly durable <b> 2-component repair system on a polymer basis</b> is distinguished by long workability (long pot lives) as well as low shrinkage. Unlike conventional welding methods, cold welding with <b>ultrametal </b> requires no elaborate accessories and a much lower expenditure of time – no input of heat into the component. Therefore, cold welding does not cause stress cracking or deformation of the component, for example.
          </p>
        </section>

        {/* Images Section */}
        <section className="my-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <img src="/GrpUltraMetal/ultrametal2.jpg" alt="" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src="/GrpUltraMetal/ultrametal3.jpg" alt="DWH 3" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src="/GrpUltraMetal/ultrametal4.jpg" alt="" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src="/GrpUltraMetal/ultrametal5.jpg" alt="" className="w-full h-48 object-cover rounded-lg shadow-md" />
          </div>
        </section>

        {/* Connection Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
          Versatile in use, proven over decades
          </h2>
          <p className="text-lg leading-relaxed mb-4">
          Typical areas of application for ultrametal from DIAMANT Metallplastic are:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>coating of pumps, containers and heat exchangers</li>
            <li>axle and shaft repairs</li>
            <li>maintenance and repair of metal parts</li>
            <li>correction of blow holes</li>
            <li>gluing of metal, wood, concrete</li></ul>
            <p className="text-lg leading-relaxed my-4">
            Ultrametal is under continuous development and has been used successfully for over 50 years in leading branches of the metalworking and mechanical engineering industries:
          </p>
            <ul className="list-disc pl-5 space-y-2">
            <li>automotive</li>
            <li>shipbuilding</li>
            <li>oil and gas industry</li>
            <li>foundries</li>
            <li>chemical industry</li>
            <li>pump and housing construction</li>
            <li>machine manufacturing</li>
          </ul>
            <p className="text-lg leading-relaxed my-4">
            ultrametal materials repair worn, eroded, corroded or damaged metal surfaces and parts or connect them securely and permanently. With excellent technical properties.
          </p>
          
        </section>

        {/* New Sections (Missing Part) */}
        {/* Application Areas Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Ultrametal: convincing properties, decisive advantages</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>low material shrinkage</li>
            <li>long workability (long pot life)</li>
            <li>simple application – no special knowledge required</li>
            <li>needs no additional equipment</li>
            <li>chemical cold welding: no supply of heat required</li>
            <li>no risk of stress cracking or deformation of the component</li>
            <li>can be machined like metal</li>
            <li>suitable for all types of metal</li>
            <li>wear resistant</li>
            <li>corrosion-proof</li>
            <li>high compressive, shear and flexural strength</li>
            <li>permanently temperature resistant up to 160 °C</li>
          </ul>
        </section>

        {/* Ready-to-Mix Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Strong also with other materials</h2>
          <p className="text-lg leading-relaxed mb-4">
          Perfect for metal, ideal for many other materials: ultrametal from DIAMANT Metallplastic also connects and repairs parts and surfaces made of ceramics, wood, gypsum, concrete and other materials. The variety of versions in the ultrametal product range means that there is a suitable solution for every application. Ready to mix with the two components resin and hardener. For fast, uncomplicated use in industry and handicrafts. For top quality work results.
          </p>
      </section>

        {/* Call to Action Section */}
        <section className="text-center">
          <p className="text-lg leading-relaxed mb-4">
            To see all product details of ULTRAMETAL, visit:
          </p>
          <a 
            href="https://diamant-polymer.de/produkte/ultrametal/" 
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

export default UltraMetal;

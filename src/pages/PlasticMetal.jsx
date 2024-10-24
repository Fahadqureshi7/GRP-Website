import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PlasticMetal = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <div className="text-center bg-slate-100 py-6">
        <h1 className="py-2 text-4xl font-bold hover:text-red-600">
        Plastic Metal
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Introduction Section */}
        <section className="mb-8">
          <div className="my-6 flex justify-center">
            <img src="/GrpPlasticMetal/plasticmetal1.jpg" alt="Moglice main" className="w-full md:h-80 h-56 object-center rounded-lg shadow-lg" />
          </div>
          <h2 className="text-xl font-semibold mb-4 text-center ">
          Seal blow holes and repair defects: instantly done, controlled curing, directly machinable
          The versatile metal repair system for filling blow holes, hollow spaces, defects and machining errors in all cast-iron, steel and metal alloys.
          </h2>
          <p className="text-lg leading-relaxed">
          <b>Plasticmetal</b> from DIAMANT Metallplastic is a quick-curing polymer-bound metal repair system for the reliable filling of blow holes as well as small and medium-size defects. The preferred solution in the worldwide industry for reducing scrap rates in the manufacture of cast parts. Due to its particularly high content of genuine metal fillers, plasticmetal exhibits a very good metal finish and can be machined and manually worked like metal.
          </p>
        </section>

        {/* Images Section */}
        <section className="my-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <img src="/GrpPlasticMetal/plasticmetal2.jpg" alt="" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src="/GrpPlasticMetal/plasticmetal3.jpg" alt="DWH 3" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src="/GrpPlasticMetal/plasticmetal4.jpg" alt="" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src="/GrpPlasticMetal/plasticmetal5.jpg" alt="" className="w-full h-48 object-cover rounded-lg shadow-md" />
          </div>
        </section>

        {/* Connection Section */}
        <section className="mb-8">
          <p className="text-lg leading-relaxed mb-4">
          Plasticmetal was specially developed for demanding industrial use and is thus highly resistant to physical, thermal and chemical influences. According to modern standards, Plasticmetal reliably fills:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>blow holes</li>
            <li>hollow spaces</li>
            <li>defects</li>
            <li>incorrect bores</li>
            <li>abraded points</li>
            <li>worn points</li>
            <li>cast aluminium</li>
            <li>nodular cast iron</li>
            <li>grey cast iron</li>
            <li>ferro cast iron</li>
            <li>cast iron</li>
          </ul>
        </section>

        {/* New Sections (Missing Part) */}
        {/* Application Areas Section */}
        <section className="my-8">
            <h2  className="text-2xl font-semibold mb-4">
            14 metal powders and 6 hardeners: freely combinable in a system
            </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <img src="/GrpPlasticMetal/plasticmetal6.jpg" alt="" className="w-full h-56 object-fill rounded-lg shadow-md" />
            <img src="/GrpPlasticMetal/plasticmetal7.jpg" alt="DWH 3" className="w-full h-56 object-fill rounded-lg shadow-md" />
            <img src="/GrpPlasticMetal/plasticmetal8.jpg" alt="" className="w-full h-56 object-fill rounded-lg shadow-md" />
            <img src="/GrpPlasticMetal/plasticmetal9.jpg" alt="" className="w-full h-56 object-fill rounded-lg shadow-md" />
          </div>
        </section>

        {/* Ready-to-Mix Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">As a freely combinable repair system, plasticmetal from DIAMANT Metallplastic adapts itself perfectly to every specific requirement.</h2>
          <p className="text-lg leading-relaxed mb-4 ">
          can be individually combined in the plasticmetal repair system and used for a specific application. The freely selectable mixing ratio allows variable viscosities from liquid to pasty. Particularly practical and economical: Also ideal when very small amounts are required, because mixed material can be stored without problems and is instantly available for subsequent work. plasticmetal is available in the metal powder variants
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-2">
            <li>14 metal powders and</li>
            <li>6 hardening liquids</li>
            <li>Ferro</li>
            <li>Ferro Superior light</li>
            <li>Ferro Superior dark</li>
            <li>Steel</li>
            <li>Steel Superior</li>
            <li>Aluminium</li>
            <li>Aluminium Superior</li>
            <li>Bronze</li>
            <li>Brass</li>
            <li>Copper</li>
            <li>Red brass</li>
            <li>Iron oxide</li>
            <li>Alloy</li>
            <li>Model Ceram</li></ul>
            <h2 className="text-lg font-semibold mb-2">Freely combinable with the hardening fluids</h2>
           <ul className="list-disc pl-5 space-y-2">
            <li>standard</li>
            <li>HF fast – fast curing</li>
            <li>HF slow – slow curing</li>
            <li>HF WF – increased resistance to heat</li>
            <li>HF SF – increased blasting resistance</li>
            <li>HF Thixo – increased stiffness</li>
          </ul>
        </section>

        {/* Advantages Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">plasticmetal: convincing properties, decisive advantages</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>applicable directly at the place of work with no special knowledge</li>
            <li>no use of machines necessary</li>
            <li>freely combinable metal powder/hardener system</li>
            <li>freely definable mixing ratio for variable viscosity (liquid to pasty)</li>
            <li>simple mixing without scales</li>
            <li>controlled curing</li>
            <li>excellent metal finish  </li>
            <li>very good adhesion to all metals</li>
            <li>high compressive and tensile strength</li>
            <li>high resistance to abrasion and wear</li>
            <li>resistant to constant temperatures up to 250 °C</li>
            <li>resistant to chemicals</li>
            <li>can be painted over</li>
          </ul>
        </section>

        {/* Call to Action Section */}
        <section className="text-center">
          <p className="text-lg leading-relaxed mb-4">
            To see all product details of PLASTIC METAL, visit:
          </p>
          <a 
            href="https://diamant-polymer.de/produkte/plasticmetal/" 
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

export default PlasticMetal;

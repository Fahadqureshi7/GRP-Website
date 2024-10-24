import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Procoat = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <div className="text-center bg-slate-100 py-6">
        <h1 className="text-4xl font-bold hover:text-red-600">
        Procoat
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Introduction Section */}
        <section className="mb-8">
          <div className="my-6 flex justify-center">
            <img src="/GrpProcoat/procoat1.jpg" alt="Procoat main" className="w-full md:h-80 h-56 object-center rounded-lg shadow-lg" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">
          Wear-protection and repair coatings for challenging industrial use
          Metal coating: preventive strategy against machine standstill and loss of production; economical solution for repairs.
          </h2>
          <p className="text-lg leading-relaxed">
          <b> In RepaCoat,</b> DIAMANT Metallplastic offers a much tried and tested product system for wear protection and repair coatings in the demanding industrial environment.
          </p>
        </section>

        {/* Connection Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
          The polymer-bound RepaCoat metal coating:
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>assists the trouble-free operation of production plants</li>
            <li>extends the service lives of machines and plants</li>
            <li>safeguards the efficiency of machines and plants</li>
            <li>reduces malfunctions and downtimes</li>
            <li>protects against abrasive wear, corrosion and cavitation damage</li>
            <li>protects against aggressive media</li>
          </ul>
          <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
  <img src="/GrpProcoat/procoat2.jpg" alt="Procoat Image 2" className="w-full h-60 object-cover rounded-lg shadow-lg" />
  <img src="/GrpProcoat/procoat3.jpg" alt="Procoat Image 3" className="w-full h-60 object-cover rounded-lg shadow-lg" />
  <img src="/GrpProcoat/procoat4.jpg" alt="Procoat Image 4" className="w-full h-60 object-cover rounded-lg shadow-lg" />
  <img src="/GrpProcoat/procoat5.jpg" alt="Procoat Image 5" className="w-full h-60 object-cover rounded-lg shadow-lg" />
</div>

        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Safety system: three recipes for targeted use</h2>
          <p className="text-lg leading-relaxed">
          <b>RepaCoat</b> from DIAMANT Metallplastic is available in three special product variants for precisely targeted use – supplemented by an optional application system for time-optimised coating:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>RepaCoat FX </b> for the renewal of rubber and seals</li>
            <li><b>RepaCoat PH </b> for wear protection and repair coating</li>
            <li><b>RepaCoat CH</b> for protection against aggressive chemicals</li>
            <li><b>Venturi Coating System</b> for the convenient coating of medium-size surfaces</li>
          </ul>

        </section>

        {/* Ready-to-Mix Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">RepaCoat FX: rubber and seal renewal</h2>
          <p className="text-lg leading-relaxed mb-4">
            <b>DIAMANT moglice</b>  Flexible 2-component, fast-curing coating with high resistance to aggressive loads. After curing, RepaCoat FX exhibits high resistance to abrasion and tearing as well as full reversion after being subjected to tensile or compressive loads. The special recipe with select, highly cross-linking polymers ensures reliable adhesion to metal, natural and synthetic rubber (nitrile and butyl rubber), wood, concrete, etc.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>resistant to aggressive media such as acids, lyes or coolants</li>
            <li>durable</li>
            <li>wear resistant</li>
            <li>temperature resistant up to 170 °C</li>
            <li>maximum adhesion to many substrates</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">RepaCoat PH: wear protection and repair coating</h2>
          <p className="text-lg leading-relaxed mb-4">
          Pasty 2-component polymer material with highly wear resistant, solid ceramic balls and special fillers. RepaCoat PH is distinguished by a good process and high stiffness. The durable coating material has proven itself above all wherever extremely high resistance to impacting solid particles in liquid media, gases and bulk materials is called for.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>protects against abrasive wear, corrosion and cavitation damage</li>
            <li>recipe with impact resistant ceramic balls</li>
            <li>available in various granulations</li>
            <li>available in a liquid or pasty form</li>
            <li>adheres to all metallic surfaces</li>
            <li>temperature resistant up to 150 °C</li>
            <li>layer thicknesses up to 2 cm can be applied</li>
            <li>extremely wear resistant and durable thanks to highly cross-linking polymers</li>
          </ul>
        </section>
        <section className="mb-8">
          <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            <img src="/GrpProcoat/procoat6.jpg" alt="" className="w-full h-60 object-cover rounded-lg shadow-lg" />
            <img src="/GrpProcoat/procoat7.jpg"alt="" className="w-full h-60 object-cover rounded-lg shadow-lg" />
            <img src="/GrpProcoat/procoat8.jpg" alt="" className="w-full h-60 object-cover rounded-lg shadow-lg" />
            <img src="/GrpProcoat/procoat9.jpg"alt="" className="w-full h-60 object-cover rounded-lg shadow-lg" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">
          RepaCoat CH: protection against aggressive chemicals
          </h2>
          <p className="text-lg leading-relaxed mb-4">
          Liquid, cold-curing epoxy formulation with outstanding chemical resistance, achieved by the use of special resins and hardeners as well as additives and inert fillers. RepaCoat CH is particularly suitable for protection against mixtures of aggressive organic and inorganic media.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>resistant to acids, lyes and coolants</li>
            <li>corrosion resistant on all metal surfaces</li>
            <li>extremely wear resistant and durable</li>
            <li>temperature resistant up to 170 °C</li>
            <li>applicable in layer thicknesses of 60 µm to 100 mm</li>
            <li>available in liquid or pasty form</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
        
Venturi Coating System: homogeneous, time-optimised coating of medium-sized surfaces

          </h2>
          <p className="text-lg leading-relaxed mb-4">
          The DIAMANT Venturi Coating System is the ideal solution for applying RepaCoat coatings to medium-size surfaces. With this innovative low-pressure process the duration of the application is drastically reduced, whilst the effectiveness is increased at the same time. Hence, 20 m² can be coated effortlessly per hour with a layer thickness of 200 µm using the Venturi Coating System. Apart from the Venturi spray gun, the use of the Venturi Coating Systems requires a compressed air source of 8 bar. The RepaCoat coating is supplied in a double cartridge with a special mixing spiral for the system.
          </p>
          <div className="my-6 flex justify-center items-center">
            <img src="/GrpProcoat/procoat10.jpg" alt="" className="w-[800px] md:h-72 h-56  object-fill rounded-lg shadow-lg " />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Procoat;

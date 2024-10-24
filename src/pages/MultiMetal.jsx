import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const  MultiMetal = () => {
  return (
    <div className="">
      <Navbar />

      {/* Header Section */}
      <div className="text-center bg-slate-100 py-6">
        <h1 className="py-2 text-4xl font-bold hover:text-red-600">
       Multi Metal
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Introduction Section */}
        <section className="mb-8">

          <p className="text-lg leading-relaxed">
          <b>MULTIMETAL ,</b> is a highly resistant 2-component repair system. The epoxy is characterized by a not measureable shrinkage as well as an extended processing time. For smaller repairs we recommend our product Plasticmetal.
<br /> <br />
Besides the superior product characteristics – MULTIMETAL allows you to realize force-fitting metal repairs without adding heat to the metal. In this context we call these repairs “cold welding” but in contrast to welding no costly accessories are needed. Additionally you avoid stress crackings and deformation of the casting by using the cold welding method.
          </p>
        </section>

        {/* New Sections (Missing Part) */}
        {/* Application Areas Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">TYPICAL APPLICATIONS</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>coating of pumps, containers, heat exchangers</li>
            <li>axle and shaft repairs</li>
            <li>Sliding bearings for large machine tools</li>
            <li>maintaining and repair of any kind of metal element</li>
            <li>corrosion protection</li>
            <li>overhaul projets in steel construction</li>
            <li>chemical cold welding</li>
          </ul>
        </section>

        {/* Ready-to-Mix Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">MULTIMETAL PRODUCTS</h2>
          <p className='text-lg leading-relaxed mb-4'>
          repair worn, eroded, corroded or defective metal surfaces and elements by rejuvenating them to their original quality plus protection against corrosion offering excellent technical properties.
          </p>
          <h2 className="text-2xl font-semibold mb-4">MULTIMETAL PROPERTIES</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Resistant against chemical and physical influences</li>
            <li>Machines like metal: file, mill, turn, bore, thread cutting, polish (DIAMANT ceram versions are limitedly machineable)</li>
            <li>Perfect metallike character (contains up to 90% metal fillers)</li>
            <li>Minimal shrinkage = ideal to use for large areas,</li>
            <li>Long pot life, short cure time</li>
            <li>High mechanical strength values.</li>
            <li>Viscosities between dripproof (for overhead applications) to fluid (to inject)</li>
          </ul>
        </section>

        {/* Advantages Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">MULTIMETAL APPROVALS</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Applicable for potable water & edible goods (acc. to Directive 84/572/EWG).</li>
            <li>Approved by well known international gas- & oil industries (approved by Gazprom, Moscow-Thyssen)</li></ul>
          <h2 className="text-2xl font-semibold my-4">MULTIMETAL FORMULATION</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>MULTIMETAL consists of 2 components resin (comp. A) and hardner (comp. B) which are offered in complete pack units with the right mix ratio so that there is no weighing or measuring necessary before mixing.In addition, there are variations of selected mineral and metall filler in a wide range to perfectly adapt MULTIMETAL to the requirements.The selection depends on kind of repair (steel, iron, alu, ceramics etc.) and the viscosity (fluid or paste).</li></ul>
          <h2 className="text-2xl font-semibold my-4">MULTIMETAL IN THE OIL AND GAS INDUSTRY</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>MULTIMETAL is a highly resistant 2-component repair system. The epoxy is characterized by a not measureable shrinkage as well as an extended processing time. For smaller repairs we recommend our product Plasticmetal is the product picked by the leading US Pipeline-Repair-Company used worldwide.</li>
            <li>Numerous tests by oil companies East and West have confirmed ultrametal as best product for rapid repairs and cold welding applications</li>
            <li>Service technicians do know that have <b>DIAMANT MULTIMETAL</b> readily available as the immediate response to leaks of all cases.</li>
            </ul>
        </section>
        <div className='bg-white flex justify-center items-center' >
          <img src="/multimetaltable.png" alt="multimetal" />
        </div>

        {/* Call to Action Section */}
       
      </div>

      <Footer />
    </div>
  );
};

export default MultiMetal;

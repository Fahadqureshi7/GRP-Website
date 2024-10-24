import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dichtol = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <div className="text-center bg-slate-100 py-6">
        <h1 className="text-4xl font-bold hover:text-red-600">
          Dichtol
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Dichtol</h2>
          <h3 className="text-2xl font-medium mb-4">Capillary-active impregnation and sealing with dichtol of DIAMANT®</h3>
          <p className="text-lg leading-relaxed mb-4">
            Dichtol is the innovative and ready-to-use impregnation system for targeted use on castings, metals, and rapid prototyping components, formulated for specific applications. Its versatility allows you to achieve optimum results – ideal for sealing porous materials like metal, ceramics, or plastics and impregnating them to depth.
          </p>
          <p className="text-lg leading-relaxed">
            Suitable for dipping, brushing, injecting, or spraying, dichtol provides maximum tightness of porous substances. The application is simple and doesn’t require vacuum or pressure, making it easy to use at room temperature.
          </p>
        </section>

        {/* Sealing and Impregnation Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-medium mb-4">Metal Impregnation, Sealing of TS Layers, or Sealing of Rapid Prototyping Components</h3>
          <p className="text-lg leading-relaxed mb-4">
            As a polymer system for the capillary-active impregnation of porosities, micropores, and hairline cracks, dichtol is ready for immediate use. The polymer penetrates deeply into porous structures and hardens quickly, providing effective sealing.
          </p>
          <p className="text-lg leading-relaxed">
            Dichtol offers an extremely economical solution, suitable for single impregnation or series impregnation. Its high-performance polymer can significantly reduce the rejection of leaking components, saving costs in the long run.
          </p>
        </section>

        {/* Application Areas Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-medium mb-4">Dichtol Application Areas</h3>
          <ul className="list-disc pl-5 mb-6">
            <li className="mb-2">
              <a href="https://diamant-polymer.de/en/products/dichtol/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                Foundry
              </a> – metal impregnation
            </li>
            <li className="mb-2">
              <a href="https://diamant-polymer.de/en/products/dichtol/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                Thermal coating
              </a> – sealing
            </li>
            <li className="mb-2">
              <a href="https://diamant-polymer.de/en/products/dichtol/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                Rapid Prototyping
              </a> – sealing and solidifying
            </li>
          </ul>
        </section>

        {/* Final Section with Emphasis */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <p className="text-lg font-bold mb-4">
            Our application engineers are happy to help you find the right product for your individual application.
          </p>
          <p className="text-lg leading-relaxed">
            Quality and know-how from the manufacturer, Made in Germany. We manufacture our products ourselves and guarantee the best quality and excellent product know-how. As a full-service provider in the areas of impregnation and sealing, we offer everything—from the product to the application advice to the service provided by our fitters.
          </p>
          <p className="text-lg font-bold mt-4">
            Quality is when the customer comes back, not the product!
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Dichtol;

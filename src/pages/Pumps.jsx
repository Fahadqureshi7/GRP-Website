import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Pumps = () => {
  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <div className=' text-center bg-slate-100 py-6'>
        <h1 className='py-1 text-4xl font-bold hover:text-red-600'>
          Pumps
        </h1>
      </div>

      {/* Main Content Section */}
      <div className='max-w-7xl mx-auto px-4 py-6'>
        {/* First Grid Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            {/* Centrifugal Transfer Pumps */}
            <h2 className='text-2xl font-semibold mb-4'>Centrifugal Transfer Pumps with Mechanical Seals:</h2>
            <p className='mb-4'>
              Plastics like PPH, PVDF, PVC-C, ECTFE, PTFE by Savino Barbera-Italy, Showfou Taiwan.
              <br />
              Stainless Steel 304, 316, 316L by Ebara, Showfou, Sun Mine.
              <br />
              Cast Iron lined with PVDF, PTFE, PPH, PVC-C by CATTANEO, ITALY.
              <br />
              Pumps for water applications by USR, AOLI, DAB.
              <br />
              Graphite/Carbon, PVDF, PPH by CEPIC, WILK, SGL.
            </p>

            {/* Horizontal Centrifugal Pumps */}
            <h2 className='text-2xl font-semibold mb-4'>Horizontal Centrifugal Sealless Magnetic Drive Pumps:</h2>
            <p className='mb-4'>
              Plastics like PPH, PVDF, PVC-C, ECTFE, PTFE by March Manufacturing, Caster, Dickow, and others.
              <br />
              Stainless Steel 304, 316, 316L by DAB, AOLI, CATTANEO.
              <br />
              Carbon Steel lined with PVDF, PTFE, PPH, PVC-C by CATTANEO-ITALY & Others.
              <br />
              Graphite/Carbon Body Pumps for Harsh Chemicals at High Temp. by CEPIC, SGL.
            </p>

            {/* Vertical Centrifugal Pumps */}
            <h2 className='text-2xl font-semibold mb-4'>Vertical Centrifugal Pumps:</h2>
            <p className='mb-4'>
              All details as given in a & b by Cepic, Savino Barbera; Showfou.
              <br />
              High Pressure Water Jetting Pumps by Hydracell, NLB, Flow, C&H.
              <br />
              Air Operated Double Diaphragm Pumps by SandPIPER, USA.
              <br />
              Air Operated Piston Type Pumps for Printing Inks, Dyes by GRACO, KECOL- UK, SAWA, SPX.
              <br />
              Sanitary Pumps, valves & fittings by GRACO, KECOL- UK, SAWA, SPX.
              <br />
              Positive Displacement; Gear, Screw, Progressive Cavity by Mayno, Imo, Prokov, Tuthil.
              <br />
              Submersible, Sump, and Sewage Pumps by APD Italy.
              <br />
              Spares for AODD Pumps by ARO, VERSAMATIC, BLAGDON, WILDON, YAMADA, BOXER, SANDPIPER, GRACO Husky, ALL FLO.
            </p>
          </div>

          {/* Image Section */}
          <div className='flex flex-col space-y-4'>
            <img src="/GrpPumps/pump1.png" alt="Pump 1" className='w-full h-48 object-contain rounded-lg shadow-md' />
            <img src="/GrpPumps/pump2.png" alt="Pump 2" className='w-full h-48 object-contain rounded-lg shadow-md' />
            <img src="/GrpPumps/pump3.png" alt="Pump 3" className='w-full h-48 object-contain rounded-lg shadow-md' />
          </div>
        </div>

        {/* Additional Sections with Two-column Grid */}
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex flex-col items-center'>
            <img src="/GrpPumps/pump4.png" alt="Pump 4" className='w-full h-48 object-contain rounded-lg shadow-md mb-2' />
            <h2 className='text-lg font-semibold text-center'>SandPIPER Double Diaphragm Pumps & Accessories</h2>
          </div>
          <div className='flex flex-col items-center'>
            <img src="/GrpPumps/pump5.jpg" alt="Pump 5" className='w-full h-48 object-contain rounded-lg shadow-md mb-2' />
            <h2 className='text-lg font-semibold text-center'>Plastic Body Filtration Pumps for Electroplating Baths</h2>
          </div>
        </div>

        {/* Repeat for more pump categories */}
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex flex-col items-center'>
            <img src="/GrpPumps/pump6.jpg" alt="Pump 6" className='w-full h-48 object-contain rounded-lg shadow-md mb-2' />
            <h2 className='text-lg font-semibold text-center'>MARCH Magnetic Drive Sealless Pumps</h2>
          </div>
          <div className='flex flex-col items-center'>
            <img src="/GrpPumps/pump7.jpg" alt="Pump 7" className='w-full h-48 object-contain rounded-lg shadow-md mb-2' />
            <h2 className='text-lg font-semibold text-center'>Teflon, PVDF, PP Lined Metal Body Sealless Magnetic Drive Pump</h2>
          </div>
        </div>

        {/* More Pump Categories */}
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex flex-col items-center'>
            <img src="/GrpPumps/pump8.jpg" alt="Pump 8" className='w-full h-48 object-contain rounded-lg shadow-md mb-2' />
            <h2 className='text-lg font-semibold text-center'>Plastic Body Self Primed Centrifugal Pumps</h2>
          </div>
          <div className='flex flex-col items-center'>
            <img src="/GrpPumps/pump9.jpg" alt="Pump 9" className='w-full h-48 object-contain rounded-lg shadow-md mb-2' />
            <h2 className='text-lg font-semibold text-center'>SS/CI Gear Pumps with or without a Mechanical Seal</h2>
          </div>
        </div>

        {/* Final Pumps Section */}
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex flex-col items-center'>
            <img src="/GrpPumps/pump10.jpg" alt="Pump 10" className='w-full h-48 object-contain rounded-lg shadow-md mb-2' />
            <h2 className='text-lg font-semibold text-center'>Metering/Dosing Pumps, Diaphragm and Piston type</h2>
          </div>
          <div className='flex flex-col items-center'>
            <img src="/GrpPumps/pump11.jpg" alt="Pump 11" className='w-full h-48 object-contain rounded-lg shadow-md mb-2' />
            <h2 className='text-lg font-semibold text-center'>Submersible, Sewage and Sludge Pumps by APD</h2>
          </div>
        </div>

        {/* Final Single Pump Section */}
        <div className='mt-8 flex flex-col items-center'>
          <img src="/GrpPumps/pump12.jpg" alt="Pump 12" className='w-full h-48 object-contain rounded-lg shadow-md mb-2' />
          <h2 className='text-lg font-semibold text-center'>Stainless Steel Centrifugal Pumps</h2>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Pumps;

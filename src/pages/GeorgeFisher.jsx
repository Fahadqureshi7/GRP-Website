import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GeorgeFisher = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <h1 className=' my-1 flex justify-center items-center text-4xl md:text-5xl hover:text-red-600 font-bold bg-slate-100 h-[100px]'>
              George Fisher
            </h1>
            <div className="w-full flex items-center justify-center p-4">
      <img
        src="/GrpGeorgeFisher/GF.jpg"
        alt="George Fisher"
        className="w-full max-w-6xl rounded-lg shadow-lg"
      />
    </div>



      <div className='max-w-7xl mx-auto px-4 mb-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-white p-4 rounded-lg shadow-md'>
            <h2 className='text-2xl font-semibold mb-2'>George Fisher – Switzerland</h2>
            <p>
              Quality Plastic Piping System from – Products include flow equipment like Pipes, Pipes Fittings and Unions for solvent cement jointing, Adaptor Pipe Fittings, Adaptor Unions, Pipe Fittings threaded, Ball Valves, Ball Check (Non-Return) Valves, Diaphragm Valves, Butterfly Valves, Angle Seat Valves, Process Control Valves, Strainers and Screen Assemblies, Flanges, Seals, Installation Accessories, Accessories and special parts in PVC-U, PVC-C, PP, PE, ABS & PVDF.
              <br /><br />
              316 SS Valves of all kinds, PVC-U Valves of all kinds, PVC-C Valves of all kinds, Motorized Valves for High-pressure applications, Electric/Pneumatic Actuated Valves of all kinds in plastics and SS 304/316, Non-Return/Check Valves in Plastic and SS 316/SS304/CS. Butterfly valves both Manual or Actuated ranging from 3” thru 60” with rubber, Teflon and ceramic linings.
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <img src="/GrpGeorgeFisher/product2.jpg" alt="Product 2" className='rounded-lg shadow-md' />
            <img src="/GrpGeorgeFisher/product1.jpg" alt="Product 1" className='rounded-lg shadow-md' />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
          <div className='bg-white p-4 rounded-lg shadow-md'>
            <h2 className='text-2xl font-semibold mb-2'>PLASTIC PIPING DIVISION</h2>
            <p>
              GEORG FISCHER Plastic Piping System in PVC-U, PVC-C, PPH, PE, ABS, & PVDF including Pipes, Fittings, Solenoid Valves, Ball Valves, Diaphragm Valves, Butterfly Valves, Flow Meters (Rotameters), SS Diaphragm Valves both Manual as well as Pneumatic and Electric Actuated; Complete Instruments by SIGNET including pH/ORP Sensor, Flow Sensors, Transmitters & Monitors. Pumps & Dry Run Protection Device etc. Also available are Process Control Valves, Pressure Reducing Valves, Water Jet Ejectors, Process Control Valves, Gauge Guards etc.
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <img src="/GrpGeorgeFisher/product3.jpg" alt="Product 3" className='rounded-lg shadow-md' />
          </div>
        </div>

        <h2 className='text-3xl font-bold text-center mt-10'>Our Products</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
          <div className='bg-white p-4 rounded-lg shadow-md text-center'>
            <img src="/GrpGeorgeFisher/product4.jpg" alt="Pneumatic diaphragm valve" className='mx-auto rounded-lg mb-2' />
            <h2 className='text-xl font-semibold'>Pneumatic diaphragm valve</h2>
          </div>
          <div className='bg-white p-4 rounded-lg shadow-md text-center'>
            <img src="/GrpGeorgeFisher/product5.jpg" alt="Complete Range of Flow Meters" className='mx-auto rounded-lg mb-2' />
            <h2 className='text-xl font-semibold'>Complete Range of Flow Meters</h2>
          </div>
          <div className='bg-white p-4 rounded-lg shadow-md text-center'>
            <img src="/GrpGeorgeFisher/product6.jpg" alt="Elbows, Tees, Bends, Pipes" className='mx-auto rounded-lg mb-2' />
            <h2 className='text-xl font-semibold'>Elbows, Tees, Bends, Pipes</h2>
          </div>
          <div className='bg-white p-4 rounded-lg shadow-md text-center'>
            <img src="/GrpGeorgeFisher/product7.jpg" alt="Solenoid valves" className='mx-auto rounded-lg mb-2' />
            <h2 className='text-xl font-semibold'>Solenoid valves</h2>
          </div>
          <div className='bg-white p-4 rounded-lg shadow-md text-center'>
            <img src="/GrpGeorgeFisher/product8.jpg" alt="GF Signet measuring and monitoring" className='mx-auto rounded-lg mb-2' />
            <h2 className='text-xl font-semibold'>GF Signet measuring and monitoring</h2>
          </div>
          <div className='bg-white p-4 rounded-lg shadow-md text-center'>
            <img src="/GrpGeorgeFisher/product9.jpg" alt="Butterfly Valve Type" className='mx-auto rounded-lg mb-2' />
            <h2 className='text-xl font-semibold'>Butterfly Valve Type</h2>
          </div>
          <div className='bg-white p-4 rounded-lg shadow-md text-center'>
            <img src="/GrpGeorgeFisher/product10.jpg" alt="GF Ball Valve" className='mx-auto rounded-lg mb-2' />
            <h2 className='text-xl font-semibold'>GF Ball Valve</h2>
          </div>
          <div className='bg-white p-4 rounded-lg shadow-md text-center'>
            <img src="/GrpGeorgeFisher/product11.jpg" alt="3 way Ball Valve" className='mx-auto rounded-lg mb-2' />
            <h2 className='text-xl font-semibold'>3 way Ball Valve</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GeorgeFisher;

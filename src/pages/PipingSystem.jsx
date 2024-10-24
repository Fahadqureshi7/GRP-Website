import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PipingSystem = () => {
  return (
    <div className='bg-gray-50'>
      <Navbar />

      {/* Header Section */}
      <div className='text-center bg-slate-100 py-6'>
        <h1 className='py-2 text-4xl md:text-5xl font-bold hover:text-red-600'>
          Piping System
        </h1>
      </div>

      {/* Main Content Section */}
      <div className='max-w-7xl mx-auto px-4 py-6'>
        
        {/* Image Section */}
        <div className='my-4 flex justify-center'>
          <img src="/GrpPipingSystem/piping1.jpg" alt="Piping System" className='w-full h-60 md:h-80 object-cover rounded-lg shadow-lg ' />
        </div>

        {/* Piping System Text Section */}
        <section className='py-8'>
          <h2 className='text-2xl font-semibold mb-4'>Piping System</h2>
          <p className='mb-4'>
            Pressure contact moulded pipe in standard 20′ length in diameters from 2” to 54”. Filament wound pipe in 20′ lengths in diameters from 1” to 60”. GRP pipes are suitable for handling a wide variety of chemicals at pressures up to 40 bars. Custom engineered systems for higher pressure and vacuum to meet specific design requirements can be managed with ease.
          </p>
        </section>

        {/* Piping System Image Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 my-6'>
          <img src="/GrpPipingSystem/piping2.jpg" alt="Piping 2" className='w-full h-48 object-contain rounded-lg shadow-md' />
          <img src="/GrpPipingSystem/piping5.jpg" alt="Piping 5" className='w-full h-48 object-contain rounded-lg shadow-md' />
        </div>

        {/* Plastic Piping Division Section */}
        <section className='py-8'>
          <h2 className='text-2xl font-semibold mb-4'>Plastic Piping Division</h2>
          <p className='mb-4'>
            GEORGE FISCHER Plastic Piping System in PVC-U, PVC-C, PPH, PE, ABS, & PVDF. including Pipes, Fittings, Solenoid Valves, Ball Valves, Diaphragm Valves, Butterfly Valves, Flow Meters (Rotameters), SS Diaphragm Valves both Manual as well as Pneumatic and Electric Actuated; Complete Instruments by SIGNET including pH/ORP Sensor, Flow Sensors, Transmitters & Monitors. Pumps & Dry Run Protection Device etc. Also available are Process Control Valves, Pressure Reducing Valves, Water Jet Ejectors, Process Control Valves, Gauge Guards etc.
          </p>
        </section>

        {/* Plastic Piping Division Image Section */}
        <div className='my-6 flex justify-center'>
          <img src="/GrpPipingSystem/piping3.jpg" alt="Piping 3" className='w-full h-56 md:h-80 object-fill rounded-lg shadow-lg' />
        </div>

        {/* Valves Section */}
        <section className='py-8'>
          <h2 className='text-2xl font-semibold mb-4'>Valves</h2>
          <p className='mb-4'>
            316 SS Valves of all kinds, PVC-U Valves of all kinds, PVC-C Valves of all kinds, Motorised Valves for High pressure applications, Electric/Pneumatic Actuated Valves of all kinds in plastics and SS 304/316, Non Return/Check Valves in Plastic and SS316/SS304/CS.
            <br /><br />
            Butterfly valves both Manual or Actuated ranging from 3” thru 60” with rubber, Teflon and ceramic linings.
          </p>
        </section>

        {/* Valves Image */}
        <div className='my-6 flex justify-center'>
          <img src="/GrpPipingSystem/piping4.jpg" alt="Piping 4" className='w-full h-56 md:h-80 md:object-fill object-cover rounded-lg shadow-lg' />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PipingSystem

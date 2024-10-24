import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const FlowLine = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <div className='text-center bg-slate-100 py-6'>
        <h1 className='my-2 text-3xl md:text-4xl font-bold hover:text-red-600'>
          Liquid Measuring Tool
        </h1>
      </div>

      {/* Main Content Section */}
      <div className='max-w-7xl mx-auto px-4 py-6'>
        
        {/* Liquid Level Measurement Tools Section */}
        <section className='py-8'>
          <h2 className='text-2xl font-semibold mb-4'>LIQUID LEVEL MEASUREMENT TOOLS</h2>
          <p className='mb-4'>
            LIQUID LEVEL MEASUREMENT TOOLS enables industrial manufacturers, municipalities and chemical distributors to safely and efficiently manage their contained liquid assets. Our quality solutions measure tank inventories, automate tank processes, ensure workplace safety and protect the environment. We design, manufacture and market the best level measurement and control instruments for your chemical, water, wastewater and oil applications.
          </p>
        </section>

        {/* Image Section */}
        <div className='my-6 flex justify-center'>
          <img src="/GrpFlowLine/flowline1.png" alt="Liquid Measurement" className='w-full h-600 object-cover rounded-lg shadow-lg' />
        </div>

        {/* Instruments Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 py-6'>
          {/* Radar Level Transmitters */}
          <div className='flex flex-col items-center'>
            <img src="/GrpFlowLine/flowline5.jpg" alt="Radar Level Transmitter" className='w-full h-48 object-contain rounded-lg shadow-md' />
            <h2 className='text-xl font-semibold mt-4'>RADAR LEVEL TRANSMITTERS</h2>
            <p className='text-center'>
              EchoPulse <br />
              LR10 LR15 LR20 LR25 LR30
            </p>
          </div>

          {/* Pulse Radar Level Transmitters */}
          <div className='flex flex-col items-center'>
            <img src="/GrpFlowLine/flowline4.jpg"  alt="Pulse Radar Level Transmitter" className='w-full h-48 object-contain rounded-lg shadow-md' />
            <h2 className='text-xl font-semibold mt-4'>PULSE RADAR LEVEL TRANSMITTERS</h2>
            <p className='text-center'>
              EchoPro <br />
              LR11 LR16 LR21 LR26 LR31
            </p>
          </div>
        </div>

        {/* Second Row of Instruments */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 py-6'>
          {/* Ultrasonic Level Transmitters */}
          <div className='flex flex-col items-center'>
            <img src="/GrpFlowLine/flowline3.png" alt="Ultrasonic Level Transmitter" className='w-full h-48 object-contain rounded-lg shadow-md' />
            <h2 className='text-xl font-semibold mt-4'>ULTRASONIC LEVEL TRANSMITTERS</h2>
            <p className='text-center'>
              EchoTouch <br />
              US01 US03 US06 US12
            </p>
          </div>

          <div className='flex flex-col items-center'>
            <img src="/GrpFlowLine/flowline2.jpg" alt="Guided Wave Radar Transmitters" className='w-full h-48 object-contain rounded-lg shadow-md' />
            <h2 className='text-xl font-semibold mt-4'>GUIDED WAVE RADAR TRANSMITTERS</h2>
            <p className='text-center'>
              EchoWave <br />
              LG10 LG11
            </p>
          </div>
        </div>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default FlowLine

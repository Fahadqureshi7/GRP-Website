import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const FlowMeter = () => {
  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <div className='text-center bg-slate-100 py-6'>
        <h1 className='my-2 text-4xl md:text-5xl font-bold hover:text-red-600'>
          Flow Meters
        </h1>
      </div>

      {/* Main Content Section */}
      <div className='max-w-7xl mx-auto px-4 py-6'>

        {/* GEORGE FISCHER FLOW METER Section */}
        <section className='py-8'>
          <h2 className='text-2xl font-semibold mb-4'>GEORGE FISCHER FLOW METER</h2>
          <div className='my-6 flex justify-center'>
            <img src="/GrpFlowMeter/flowmeter1.jpg" alt="Flow Meter" className='w-full h-60 object-contain rounded-lg shadow-lg' />
          </div>
        </section>

        {/* Flow Meter and Metering Devices Section */}
        <section className='py-8'>
          <h2 className='text-2xl font-semibold mb-4'>FLOW METER AND METERING DEVICES</h2>
          <p className='mb-4'>
            At GRP ENGINEERS Pakistan, we also offer reliable flow meters and metering devices from Niagara Meters, and the most complete lines of corrosion-free flow measurement equipment from Icon Process Controls.
          </p>
        </section>

        {/* Flow Meter Types (Blue & White and GF Flow Meters) */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 py-6'>

          {/* Blue & White Flow Meters */}
          <div className='flex flex-col items-center'>
            <img src="/GrpFlowMeter/flowmeter2.jpg" alt="Blue & White Flow Meters" className='w-full h-48 object-contain rounded-lg shadow-md' />
            <h2 className='text-xl font-semibold mt-4'>Blue & White Flow METERS</h2>
            <p className='text-center'>
              Blue & White Flow Meters are known for their robust and proven designs built to withstand extreme environments and tough industrial applications.
            </p>
          </div>

          {/* GF Flow Meters */}
          <div className='flex flex-col items-center'>
            <img src="/GrpFlowMeter/flowmeter3.jpg" alt="GF Flow Meters" className='w-full h-48 object-contain rounded-lg shadow-md' />
            <h2 className='text-xl font-semibold mt-4'>GF Flow Meters</h2>
            <p className='text-center'>
              GF Flow Meter offers the industry’s most comprehensive range of corrosion-free flow meters and switches.
            </p>
          </div>

        </div>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default FlowMeter

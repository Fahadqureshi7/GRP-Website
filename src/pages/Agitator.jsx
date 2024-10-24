import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Agitator = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Agitator Header Section */}
      <div className='text-center bg-slate-100 py-6'>
        <h1 className='my-2 text-4xl md:text-5xl font-bold hover:text-red-600'>
          Agitator
        </h1>
      </div>

      {/* Image Section */}
      <div className='my-4 flex justify-center'>
        <img src="/GrpAgitator/agitator1.jpg" alt="Agitator" className='rounded-lg shadow-lg' />
      </div>

      {/* Main Content Section */}
      <section className='py-8'>
        <h2 className='text-2xl font-semibold mb-4 text-center'>
          AGITATORS, MIXERS AND IMPELLERS
        </h2>
        <p className='italic text-gray-600 text-center max-w-3xl mx-auto'>
          At GRP ENGINEERS Pakistan, we have a wide array of agitator products to offer from MixMor. MixMor is a leading designer and manufacturer of industrial mixers and agitators for use in a broad spectrum of industries. Their full line of mixers are specifically designed and engineered to do more work, efficiently, for a longer period of time without failure. Give us a call and allow our experts to recommend the correct mixing equipment best suited for your needs.
        </p>
      </section>

      {/* Mixers Grid Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8'>

        {/* Portable Mixer */}
        <div className='bg-white shadow-md p-4 rounded-lg'>
          <img src="/GrpAgitator/agitator2.jpg" alt="Portable Mixer" className='w-full h-48 object-fill mb-4' />
          <h2 className='text-xl font-semibold mb-2'>PORTABLE MIXERS</h2>
          <p>
            The clamp and drive housing have a ball and socket assembly to allow 360° rotation on the horizontal plane and 100° on the vertical plane for optimum mixer shaft angle.
          </p>
        </div>

        {/* Impellers for Mixers */}
        <div className='bg-white shadow-md p-4 rounded-lg'>
          <img src="/GrpAgitator/agitator9.jpg" alt="Impellers for Mixers" className='w-full h-48 object-fill mb-4' />
          <h2 className='text-xl font-semibold mb-2'>IMPELLERS FOR MIXERS</h2>
          <p>
            Mixing applications have different process requirements and that is why MixMor’s engineers have such a complete selection of impellers ranging from conventional pitched blade turbine to FloMor high-efficiency hydrofoil impeller.
          </p>
        </div>

        {/* Turbine Mixers */}
        <div className='bg-white shadow-md p-4 rounded-lg'>
          <img src="/GrpAgitator/agitator3.jpg" alt="Turbine Mixers" className='w-full h-48 object-fill mb-4' />
          <h2 className='text-xl font-semibold mb-2'>TURBINE MIXERS</h2>
          <p>
            Low horsepower mixer drive which provides a practical solution for applications that for process or mechanical considerations preclude the use of fixed mount top entering mixers.
          </p>
        </div>

        {/* Mixer Lift Stands */}
        <div className='bg-white shadow-md p-4 rounded-lg'>
          <img src="/GrpAgitator/agitator4.jpg" alt="Mixer Lift Stands" className='w-full h-48 object-fill mb-4' />
          <h2 className='text-xl font-semibold mb-2'>MIXER LIFT STANDS</h2>
          <p>
            Our custom mixer lift stands are manufactured per order to assure proper fit for your application. Available with castors or fixed mounted to the floor.
          </p>
        </div>

        {/* Top Mixers */}
        <div className='bg-white shadow-md p-4 rounded-lg'>
          <img src="/GrpAgitator/agitator5.jpg" alt="Top Mixers" className='w-full h-48 object-fill mb-4' />
          <h2 className='text-xl font-semibold mb-2'>TOP MIXERS</h2>
          <p>
            Mixers are furnished with standard ANSI flanges with shaft seals for use on closed vessels. Available shaft seals, cartridge type double, single, dry running, metal bellows, tandem, water cooled, split and seals with sanitary containment.
          </p>
        </div>

        {/* Custom Mixers */}
        <div className='bg-white shadow-md p-4 rounded-lg'>
          <img src="/GrpAgitator/agitator6.jpg" alt="Custom Mixers" className='w-full h-48 object-fill mb-4' />
          <h2 className='text-xl font-semibold mb-2'>CUSTOM MIXERS</h2>
          <p>
            In addition to our diverse selection of standard mixers, MixMor can design for you custom mixers that will solve your toughest mixing problems.
          </p>
        </div>

        {/* Custom Impellers */}
        <div className='bg-white shadow-md p-4 rounded-lg'>
          <img src="/GrpAgitator/agitator7.jpg" alt="Custom Impellers" className='w-full h-48 object-fill mb-4' />
          <h2 className='text-xl font-semibold mb-2'>CUSTOM IMPELLERS</h2>
          <p>
            In addition to our diverse selection of standard impellers, MixMor engineers can design custom impellers that will solve your toughest mixing problems.
          </p>
        </div>

        {/* Side Mixers */}
        <div className='bg-white shadow-md p-4 rounded-lg'>
          <img src="/GrpAgitator/agitator8.jpg" alt="Side Mixers" className='w-full h-48 object-fill mb-4' />
          <h2 className='text-xl font-semibold mb-2'>SIDE MIXERS</h2>
          <p>
            Rugged & Versatile – The MixMor Model HV is an all-welded construction, V belt drive mixer which is extensively used in food, chemical, asphalt and other processing industries. Its heavy duty construction assures long life with minimum maintenance.
          </p>
        </div>

        {/* Laboratory Mixers */}
        <div className='bg-white shadow-md p-4 rounded-lg'>
          <img src="/GrpAgitator/agitator10.jpg" alt="Laboratory Mixers" className='w-full h-48 object-fill b-4' />
          <h2 className='text-xl font-semibold mt-4 mb-2'>LABORATORY MIXERS</h2>
          <p>
            1/6 Horsepower Air Driven Mixer Speed Range, 500 to 6,000 RPM Direct Drive Impeller – Propellers and Disperser Disks Clamps – Tank and Rod Mixer stands.
          </p>
        </div>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Agitator;

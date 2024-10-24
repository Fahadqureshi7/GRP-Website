import React from 'react'
import AboutImageCarousel from '../components/AboutImageCarousel'

export const AboutContent = () => {
    return (
        <div className="">
            <h1 className='my-1 py-12 flex justify-center items-center text-4xl sm:text-3xl md:text-4xl hover:text-red-600 font-bold bg-slate-100 h-[60px] sm:h-[80px] md:h-[100px]'>
                About Us
            </h1>

            <div className='w-full flex flex-col md:flex-row bg-gray-50 py-6 md:py-10'>
                <div className='w-full md:w-[50%] px-4 md:px-14 mb-6 md:mb-0'>
                    <blockquote className='border-l-4 border-red-500 text-lg md:text-xl text-gray-700 pl-4 italic'>
                        "Being the pioneers of the fiberglass industry in Pakistan, GRP has gained sufficient experience and ability to manufacture products that are tailored to meet our clients precise requirements...."
                    </blockquote>
                    <p className='text-base md:text-lg text-gray-600 leading-relaxed mt-4'>
                        We claim to be the one single source for all your chemical handling needs for a reason. Here at GRP, every project is given undivided attention. Our engineers draft the working of every project from scratch to meet the precise requirements of the client. This practice has given GRP the experience to handle the most complex and intricate of projects. We believe in providing our customers a cost effective quality product that is long lasting and aesthetically pleasing.
                        <br /><br />
                        Our pumps division is controlled by a different team of engineers than the fibreglass division, given the different skill set needed to cope with the different divisions. Every inquiry is provided the lowest possible rates for the best quality equipment from renowned companies like Georg Fischer, Sand piper, KSB. Each specification is sent to the supplier and the authorization of being the sole distributor helps us in getting the most suitable option money can buy.
                    </p>
                    <button className="bg-red-600 mt-8 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105">
                        <a href="/grp-brochure.pdf" download='Grp-Brochure'>
                            Download Brochure
                        </a>
                    </button>
                </div>
                <div className='w-full md:w-[50%]'>
                    <AboutImageCarousel />
                </div>
            </div>
            <div className='m-4 sm:m-8 md:m-14'>
                <h2 className='text-lg md:text-xl font-medium mb-4'><i>We</i> Deals in the following Products of the Internationally renowned companies :</h2>
                <ul className="space-y-2 md:space-y-3 text-lg md:text-md">
                    <li>1- 
                        <span className='text-red-600 font-semibold hover:text-red-700'> Piping System</span> form <a href="https://www.georgfischer.com/"><span className='font-semibold'> George Fisher.</span></a></li>

                        
                    <li>2- <span className='text-red-600 font-semibold hover:text-red-700'> Magnetic Drive Pumps</span> from <a href="https://www.marchpump.com/"> <span className=' font-semibold '>March Manufacturing.</span></a>
                    </li>
                    
                    
                    <li>3-<span className='text-red-600 font-semibold hover:text-red-700'> AODD & Piston Pumps</span> from <a href="https://www.graco.com/"><span className=' font-semibold '>Graco Inc.</span></a> </li>
                    
                    
                    <li>4-<span className='text-red-600 font-semibold hover:text-red-700 '> Drum/Barrel pumps</span> from <a href="https://www.jesspumpen.de/"><span className=' font-semibold '>Jessberger Pumps & Systems.</span></a></li>
                    
                    
                    <li>5-<span className='text-red-600 font-semibold hover:text-red-700'> Metering / Dosing Pumps</span> from <a href="https://www.psgdover.com/neptune"><span className=' font-semibold '>Neptune Chemical Pump Co.</span></a></li>
                    
                    
                    <li>6-<span className='text-red-600 font-semibold hover:text-red-700'> Industrial Fans & Blowers</span> from <a href="https://www.sodeca.com/"><span className=' font-semibold '>Sodecca.</span></a></li>
                    
                    
                    <li>7-<span className='text-red-600 font-semibold hover:text-red-700'> Gas Chlorinators</span> from <a href="https://regalchlorinators.com/"><span className=' font-semibold '>Regal Gas Chlorinators.</span></a></li>

                    <li>8-<span className='text-red-600 font-semibold hover:text-red-700'> Cold Welding Materials</span> from <a href="https://diamant-polymer.de/"><span className=' font-semibold '>Diamant GmbH.</span></a></li>

                    <li>9-<span className='text-red-600 font-semibold hover:text-red-700'> Industrial Valves</span> from <a href="https://www.pekos.es/"><span className=' font-semibold '>Pekos Valves.</span></a></li>

                    <li>10-<span className='text-red-600 font-semibold hover:text-red-700'> Insulated enclosures</span>  from <a href="https://www.safybox.com/en/"><span className=' font-semibold '>Uriarte Safybox.</span></a></li>
                </ul>
            </div>
            <div className='relative py-6 md:py-10 bg-white'>
                <h2 className='text-3xl md:text-4xl font-bold hover:text-red-600 text-center mb-6 md:mb-8'>Company History</h2>
                <div className='flex'>
                    <div className='mx-4 sm:mx-10 md:mx-20'>
                        <div className='relative'>
                            <div className="timeline absolute left-4 sm:left-10 top-0 h-full border-l-4 border-red-500"></div>
                            <div className='mb-8 md:mb-10 pl-8 sm:pl-12'>
                                <div className='text-2xl md:text-3xl mb-2 md:mb-3 text-red-600 font-bold'>1980</div>
                                <h2 className='font-semibold text-xl md:text-2xl mb-1'>Humble beginnings</h2>
                                <p className='text-sm md:text-base'>The GRP (Glass Reinforced Plastics) Engineers was established as a proprietorship concern in March 1980 to provide a broad range of Fibreglass Products, Raw materials, Machinery, Engineering & Design services to both the Public & Private Sector Industries by <span className='text-base md:text-lg font-medium'>
                                    Engr. Muhammad Javed Khalid.
                                </span>
                                </p>
                            </div>
                            <div className='mb-8 md:mb-10 pl-8 sm:pl-12'>
                                <div className='text-2xl md:text-3xl mb-2 md:mb-3 text-red-600 font-bold'>1992</div>
                                <h2 className='font-semibold text-xl md:text-2xl mb-1'>On-Site Covering</h2>
                                <p className='text-sm md:text-base'>Later in 1992, GRP Engineers specialized in on-site services covering all aspects of turn key based projects and product development including design & engineering, moulds and product development, erection & installation, trial run and commissioning.
                                </p>
                            </div>
                            <div className='mb-8 md:mb-10 pl-8 sm:pl-12'>
                                <div className='text-2xl md:text-3xl mb-2 md:mb-3 text-red-600 font-bold'>1994</div>
                                <h2 className='font-semibold text-xl md:text-2xl mb-1'>Supply & Services to CPIs</h2>
                                <p className='text-sm md:text-base'>In 1994 GRP Engineers expanded its activities to supply and services to CPIs for Liquid Handling Equipment like Pumps, Pipes & Fittings, Instruments, Valves, Flow meters, Flexible hose, Semi finished plastic products (Teflon, PPH, PVC etc.); Repair and Rebuilding with Cold Welding Polymers for Metals. During the years Sole Distribution right have been acquired for: <br /> <br />
                                    – Graco, Inc.- U.S.A for Air Operated Double Diaphragm Pumps, Contractor Business,Lubricators, etc.
                                    <br /> <br />
                                    – George Fischer – Switzerland for Quality Plastic Piping Systems in (PVDF, PPH, PVC-U, PVC-C, ABS, and PE).
                                    <br /> <br />
                                    – March Manufacturing Inc., USA USA for Sealless Magnetic Drive Pumps for Chemicals.
                                    <br /> <br />
                                    – Neptune Chemical Feed Pumps, USA for Metering / Dosing Pumps.
                                    <br /> <br />
                                    – CEPIC s.r.l , France for Graphite Industrial Equipment.
                                    <br /> <br />
                                    – Standard Pumps Inc, USA for Barrel & Hand Pumps.
                                    <br /> <br />
                                    – SODECA, Spain for Fans & Blowers
                                    <br /> <br />
                                    – Regal Gas Chlorinator System, USA for Gas Chlorinators
                                    <br /> <br />
                                    – Uriarte Safy boxes, Spain for Electrically insulated enclosures
                                    <br /> <br />
                                    – VAN AIR SYSTEMS. USA for Air Dryers, Filters & Accessories, Canada
                                    <br /> <br />
                                    – DIAMANT Metallplastic, GmbH, Germany Many Other similar companies
                                </p>
                            </div>
                            <div className='mb-8 md:mb-10 pl-8 sm:pl-12'>
                                <div className='text-2xl md:text-3xl mb-2 md:mb-3 text-red-600 font-bold'>2024</div>
                                <h2 className='font-semibold text-xl md:text-2xl mb-1'>Country wide coverage</h2>
                                <p className='text-sm md:text-base'>GRP Engineers has assembled an excellent team of Chemical, Mechanical and Metallurgical engineers together with professional experts in Administrative and Financial affairs. This enables the company to undertake projects of diversified nature and magnitude in various sectors of the industry. In fact through streamlining the manufacturing and administrative process, we are able to deliver our product to the customer quicker than ever; whether you need it in any part of the country.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
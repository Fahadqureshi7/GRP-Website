import React , { useState } from "react";
import { Link } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(null); 


  let closeDropdownTimeout;


  const toggleDropdown = () => {
    clearTimeout(closeDropdownTimeout); 
    setIsDropdownOpen((prev) => !prev);
  };



  const toggleSubmenu = (menu) => {
    if (isSubmenuOpen === menu) {
      setIsSubmenuOpen(null); 
    } else {
      setIsSubmenuOpen(menu); 
    }
  };


  const handleSubmenuLeave = () => {
    setIsSubmenuOpen(null); 
    };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between items-center py-4">
          <Link to="/">
            <img
              src="/grp-logo.jpeg"
              alt="grp-logo"
              className="h-16 w-auto sm:h-20"
            />
          </Link>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 items-center mt-4 lg:mt-0">
            <div className="text-gray-700 flex items-center text-sm">
             <a href="tel:+924235707737-8">
               <LocalPhoneIcon className="mr-1 text-base" /> +924235707737-8
              </a>
            </div>
            <div className="text-gray-700 flex items-center text-sm">
              <a href="https://maps.app.goo.gl/QjqzHqDiEWkAjAyPA"><PlaceIcon className="mr-1 text-base" /> 88-T, 1st Floor, Phase 2 DHA, Lahore </a>
            </div>
            <div className="text-gray-700 flex items-center text-sm">
              <a href="mailto:sale@grpengineers.com"><EmailIcon className="mr-1 text-base" /> sale@grpengineers.com
            </a>
            </div>
            <div className="flex space-x-2 sm:mt-0">
              <a
                href="https://www.facebook.com/grpengineers/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="h-5 w-5 text-blue-600" />
              </a>
              <a
                href="https://www.linkedin.com/company/grp-engineers-and-consultants/?originalSubdomain=pk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="h-5 w-5 text-blue-800" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation section */}
      <div className="border-t border-gray-200 py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 hover:text-gray-600 lg:hidden"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <div className="hidden lg:flex lg:items-center">
            <ul className="flex space-x-6 text-lg font-semibold">
              <li>
                <Link to="/" className="text-gray-700 hover:text-red-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-700 hover:text-red-500">
                  About Us
                </Link>
              </li>
              <li
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={
                  () => setIsDropdownOpen(false)
                }
              >
                <Link to='/products'
                  className="text-gray-700 hover:text-red-500 focus:outline-none"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  Our Products <ArrowDropDownIcon />
                </Link>

                {/* Dropdown with submenus */}
                {isDropdownOpen && (
                  <ul className="absolute bg-white top-5 shadow-lg rounded-lg mt-2 w-48 transition duration-300 ease-in-out z-50"
                  
                  >


                    <li 
                    >
                      <Link
                        to="/products/fiberGlass"
                        className="block px-4 py-3 text-gray-700 font-semibold hover:bg-red-500 hover:text-white transition-colors duration-200 ease-in-out rounded-t-lg"
                        >
                        Fiber Glass
                      </Link>
                    </li>

                    {/* Machinery Submenu */}
                    <li
                      className="relative"
                      onMouseEnter={() => toggleSubmenu("machinery")}
                      onMouseLeave={handleSubmenuLeave}
                    >
                      <Link
                        to="/products/machinery"
                        className="block w-full text-left px-4 py-3 text-gray-700 font-semibold hover:bg-red-500 hover:text-white transition-colors duration-200 ease-in-out"
                        aria-expanded={isSubmenuOpen === "machinery"}
                        aria-haspopup="true"
                      >
                        Machinery <ArrowRightIcon />
                      </Link>
                      {isSubmenuOpen === "machinery" && (
                        <ul className="absolute left-full top-0 bg-white shadow-lg rounded-lg w-48 transition duration-200 ease-in-out">
                          <li>
                            <Link
                              to="/products/machinery/georgeFisher"
                              className="block px-4 py-3 text-gray-700 font-semibold hover:bg-red-500 hover:text-white"
                            >
                              George Fisher
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/machinery/pumps"
                              className="block px-4 py-3 text-gray-700 font-semibold hover:bg-red-500 hover:text-white"
                            >
                              Pumps
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/machinery/pipingSystem"
                              className="block px-4 py-3 text-gray-700 font-semibold hover:bg-red-500 hover:text-white"
                            >
                              Piping System
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    {/* Diamant Cold Welding Submenu */}
                    <li
                      className="relative"
                      onMouseEnter={() => toggleSubmenu("diamant")}
                      onMouseLeave={handleSubmenuLeave}
                      >
                      <Link
                        to="/products/diamantColdWeldingMaterial"
                        className="block w-full text-left px-4 py-3 text-gray-700 font-semibold hover:bg-red-500 hover:text-white"
                        aria-expanded={isSubmenuOpen === "diamant"}
                        aria-haspopup="true"
                      >
                        Diamant Cold Welding Materials <ArrowRightIcon />
                      </Link>

                      {isSubmenuOpen === "diamant" && (
                        <ul className="absolute left-full top-0 bg-white shadow-lg rounded-lg w-48 transition duration-200 ease-in-out">
                          <li>
                            <Link
                              to="/products/diamantColdWeldingMaterial/dichtol"
                              className="block px-4 py-3 text-gray-700 font-semibold hover:bg-red-500 hover:text-white"
                            >
                              Dichtol
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/diamantColdWeldingMaterial/dwh"
                              className="block px-4 py-3 text-gray-700 font-semibold hover:bg-red-500 hover:text-white"
                            >
                              DWH
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/diamantColdWeldingMaterial/moglice"
                              className="block px-4 py-3 text-gray-700 font-semibold hover:bg-red-500 hover:text-white"
                            >
                              Moglice
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/diamantColdWeldingMaterial/multiMetal"
                              className="block px-4 py-3 text-gray-700 font-semibold hover:bg-red-500 hover:text-white"
                            >
                              MultiMetal
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/diamantColdWeldingMaterial/plasticMetal"
                              className="block px-4 py-3 text-gray-700 font-semibold hover:bg-red-500 hover:text-white"
                              >
                              PlasticMetal
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/diamantColdWeldingMaterial/procoat"
                              className="block px-4 py-3 text-gray-700 font-semibold hover:bg-red-500 hover:text-white"
                            >
                              Procoat
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/diamantColdWeldingMaterial/ultraMetal"
                              className="block px-4 py-3 text-gray-700 font-semibold hover:bg-red-500 hover:text-white"
                            >
                              UltraMetal
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    {/* Instrument Submenu */}
                    <li
                      className="relative"
                      onMouseEnter={() => toggleSubmenu("instrument")}
                      onMouseLeave={handleSubmenuLeave}
                    >
                      <Link
                        to="/products/instrument"
                        className="block w-full text-left px-4 py-3 text-gray-700 font-semibold hover:bg-red-500 hover:text-white"
                        aria-expanded={isSubmenuOpen === "instrument"}
                        aria-haspopup="true"
                      >
                        Instrument <ArrowRightIcon />
                      </Link>

                      {isSubmenuOpen === "instrument" && (
                        <ul className="absolute left-full top-0 bg-white shadow-lg rounded-lg w-48 transition duration-200 ease-in-out">
                          <li>
                            <Link
                              to="/products/instrument/agitator"
                              className="block px-4 py-3 text-gray-700 font-semibold hover:bg-red-500 hover:text-white"
                            >
                              Agitator
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/instrument/flowLine"
                              className="block px-4 py-3 text-gray-700 font-semibold hover:bg-red-500 hover:text-white"
                              >
                              Flow Line
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/instrument/flowMeter"
                              className="block px-4 py-3 text-gray-700 font-semibold hover:bg-red-500 hover:text-white"
                            >
                              Flow Meter
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <Link
                        to="/products/metalFabrication"
                        className="block px-4 py-3 text-gray-700 font-semibold hover:bg-red-500 hover:text-white rounded-b-lg"
                      >
                        Metal Fabrication
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-700 hover:text-red-500"
                  >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-red-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="custom-button">
              <a href="tel:+923010429262" className="flex items-center">
                <LocalPhoneIcon className="mr-2 text-base" /> Request a Call
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <ul className="pt-2 pb-4 space-y-2">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
              >
                About Us
              </Link>
            </li>

            {/* Products Dropdown for Mobile */}
            <li>
              <div className="w-full flex justify-between items-center">
                <Link
                  to="/products"
                  className="flex-grow text-left px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
                >
                  Our Products
                </Link>

                <button
                  className="focus:outline-none px-4 py-2 text-gray-700 hover:text-red-500"
                  onClick={toggleDropdown}
                >
                  <ArrowDropDownIcon />
                </button>
              </div>

              {isDropdownOpen && (
                <ul className="pl-6 space-y-2">
                  <li>
                    <Link
                      to="/products/fiberGlass"
                      className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
                    >
                      Fiber Glass
                    </Link>
                  </li>

                  {/* Machinery Submenu */}
                  <li>
                    <div className="w-full flex justify-between items-center">
                      <Link
                        to="/products/machinery"
                        className="flex-grow text-left px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
                      >
                        Machinery
                      </Link>

                      <button
                        className="focus:outline-none px-4 py-2 text-gray-700 hover:text-red-500"
                        onClick={() => toggleSubmenu("machinery")}
                      >
                        <ArrowDropDownIcon />
                      </button>
                    </div>
                    {isSubmenuOpen === "machinery" && (
                      <ul className="pl-6 space-y-2">
                        <li>
                          <Link
                            to="/products/machinery/georgeFisher"
                            className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
                          >
                            George Fisher
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/products/machinery/pumps"
                            className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
                          >
                            Pumps
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/products/machinery/pipingSystem"
                            className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
                          >
                            Piping System
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* Diamant Cold Welding Submenu */}
                  <li>
                    <div className="w-full flex justify-between items-center">
                      <Link
                        to="/products/diamantColdWeldingMaterial"
                        className="flex-grow text-left px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
                      >
                        Diamant Cold Welding Materials
                      </Link>

                      <button
                        className="focus:outline-none px-4 py-2 text-gray-700 hover:text-red-500"
                        onClick={() => toggleSubmenu("diamant")}
                      >
                        <ArrowDropDownIcon />
                      </button>
                    </div>
                    {isSubmenuOpen === "diamant" && (
                      <ul className="pl-6 space-y-2">
                        <li>
                          <Link
                            to="/products/diamantColdWeldingMaterial/dichtol"
                            className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
                          >
                            Dichtol
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/products/diamantColdWeldingMaterial/dwh"
                            className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
                          >
                            DWH
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/products/diamantColdWeldingMaterial/moglice"
                            className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
                          >
                            Moglice
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/products/diamantColdWeldingMaterial/multiMetal"
                            className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
                          >
                            MultiMetal
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/products/diamantColdWeldingMaterial/plasticMetal"
                            className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
                          >
                            PlasticMetal
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/products/diamantColdWeldingMaterial/proCoat"
                            className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
                          >
                            Procoat
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/products/diamantColdWeldingMaterial/ultraMetal"
                            className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
                          >
                            UltraMetal
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* Instrument Submenu */}
                  <li>
                    <div className="w-full flex justify-between items-center">
                      <Link
                        to="/products/instrument"
                        className="flex-grow text-left px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
                      >
                        Instrument
                      </Link>

                      <button
                        className="focus:outline-none px-4 py-2 text-gray-700 hover:text-red-500"
                        onClick={() => toggleSubmenu("instrument")}
                      >
                        <ArrowDropDownIcon />
                      </button>
                    </div>
                    {isSubmenuOpen === "instrument" && (
                      <ul className="pl-6 space-y-2">
                        <li>
                          <Link
                            to="/products/instrument/agitator"
                            className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
                          >
                            Agitator
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/products/instrument/flowLine"
                            className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
                          >
                            Flow Line
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/products/instrument/flowMeter"
                            className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
                          >
                            Flow Meter
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <Link
                      to="/products/metalFabrication"
                      className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
                    >
                      Metal Fabrication
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/projects"
                className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-100"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

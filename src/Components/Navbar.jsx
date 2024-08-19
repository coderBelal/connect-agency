 
import   { useState } from "react";
import logo from "../assets/logo/connct_logo_nav.png";
import { Link } from "react-router-dom";
  
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="hidden lg:flex">
          <a href="#" className="-m-1.5 p-1.5 ">
            <span className="sr-only">Nexus UI</span>
            <img className="w-40" src={logo} alt="Nexus UI Logo" />
          </a>
        </div>
        <div className="flex lg:hidden justify-between items-center w-full">
          <img src={logo} alt="Nexus UI Logo" />
          <button
            type="button"
            className="m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            id="menuBar"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 items-center">
          <div className="relative">
        
            <div
              id="teamNavSubMenu"
              className="absolute hidden -left-8 top-2 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
 
            </div>
          </div>
          <Link to={"/ "}   className="text-sm font-semibold leading-6 text-gray-900">
         Home
          </Link>
          <Link  to={"/team"}
          
          id="teamNavItem"
          type="button"
          className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
          aria-expanded="false"
        >
          Team
       
     
        </Link>
          <Link to={"/about"}   className="text-sm font-semibold leading-6 text-gray-900">
            About
          </Link>
          <Link to={"/services"}   className="text-sm font-semibold leading-6 text-gray-900">
           Services
          </Link>
          <Link to={"/feature"}  className="text-sm font-semibold leading-6 text-gray-900">
            Features
          </Link>
          <Link  to={"/testimonials" }
                 
             className="text-sm font-semibold leading-6 text-gray-900"
               >
                 Testimonial
               </Link>
          <Link  to={"/contact  "}   className="text-sm font-semibold leading-6 text-gray-900">
            Contact
          </Link>
       
        </div>
      </nav>
      {/* Mobile menu, show/hide based on menu open state. */}
      {isMenuOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden block"
          role="dialog"
          aria-modal="true"
        >
          {/* Background backdrop, show/hide based on slide-over state. */}
          <div className="fixed inset-0 z-10" />
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src="./asstes/logo/favicon_edit_need.png"
                  alt=""
                />
              </a>
           
              <div className="">
                <button
                  type="button"
                  id="closeMenu"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="-mx-3">

                    {/* 'Product' sub-menu, show/hide based on menu state. */}
                    <div className="mt-2 space-y-2" id="disclosure-1">
                     
                    </div>
                  </div>
                  <Link to={"/ "}   className="text-sm font-bold leading-6 text-gray-900">
         Home
          </Link>
          <Link  to={"/team"}
          
          id="teamNavItem"
          type="button"
          className="flex items-center gap-x-1 text-sm font-bold leading-6 text-gray-900"
          aria-expanded="false"
        >
          Team
       
     
        </Link>
                  < Link to={"/about"} 
                    
                    className="-mx-3 block rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About
                  </ Link>
                  <Link to={"/services"}
                    
                    className="-mx-3 block rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Services
                  </Link>
                  <Link  to={"/feature "}
                   
                    className="-mx-3 block rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </Link>
         
                </div>
                <div className="py-6">
                
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

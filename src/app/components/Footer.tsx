  import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-8 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 pt-14">
              <p className="text-[16px]">
                400 University Drive Suite 200 <br />
                Coral Gables, <br />
                FL 33134 USA
              </p>
            </div>
       
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-600 tracking-widest text-sm mb-3">
                Link
              </h2>
              <nav className="list-none mb-10 pt-6 space-y-10 font-bold text-black">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">Payment Options</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">Returns</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="pt-7 w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2 flex gap-2">
                  <input
                    type="email"
                    id="footer-field"
                    placeholder="Enter Your Email Address"
                    name="footer-field"
                    aria-label="Enter your email for subscription"
                    className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 mt-1"
                    required
                  />
                  <p className="underline font-medium pt-3 text-[18px] hover:underline cursor-pointer">SUBSCRIBE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm sm:ml-6 sm:mt-0 mt-4 text-[15px] text-black">
              &copy; {new Date().getFullYear()} Meubel House. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

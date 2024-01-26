import React from 'react';

const CallToActionWithBackgroundImage = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div
          className="relative isolate overflow-hidden bg-gray-900 bg-no-repeat bg-cover bg-center px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
          style={{ backgroundImage: "url('/spa-girl-brunette.png')" }}
        >
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[#003333] sm:text-4xl">
              Book an appointment with
              <br />
              One of our experts
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#003333]">
              Some text based off the different services or maybe just call to
              action text
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-100 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Book Now
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-800"
              >
                Services <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="mt-16  lg:mt-8"></div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionWithBackgroundImage;

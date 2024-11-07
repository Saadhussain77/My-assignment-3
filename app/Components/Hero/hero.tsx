import React from 'react'

const hero = () => {
  return (
    <section
    className="flex w-full h-screen object-cover bg-cover bg-black"
    // style={{ backgroundImage: "url('/images/banner.png')" }}
  >
    <div className="w-6/12 relative text-blue-700">
      <div className="absolute top-36 left-32">
        <h1 className="font-semibold text-5xl">
          <span className="text-white">Hello,</span> Welcome to My Website
        </h1>
        <h3 className="pt-4 text-lg">
          This is My <span className='text-white'>Next js</span> project by
          using <span className='text-white'>TailwingCss</span>
        </h3>
        <p className="pt-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam,
        </p>
        <div className="absolute -bottom-12">
          <a
            href="/about"
            className="font-bold p-3 mt-3 bg-black text-blue-700 border-solid border rounded-lg hover:bg-blue-600 hover:text-white transition-all"
          >
            About Us
          </a>
        </div>
      </div>
    </div>

    <div className="relative w-6/12">
      <div className="absolute top-24 right-44 overflow-hidden rounded-full">
        <img alt="" className="w-96 h-80" src="images/work.jpg"></img>
      </div>
    </div>
  </section>
  );
};

export default hero;

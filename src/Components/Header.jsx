import React from "react";

export default function Header() {
  return (
    <div className="text-white h-screen w-screen flex justify-center md:justify-normal  items-center lg:pl-32   bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg')] ">
      <div className="bg-none text-center md:text-start">
        <h1 className="lg:text-8xl font-poppins text-3xl md:font-extrabold font-semibold">
          Experience Movies
        </h1>
        <h1 className="lg:text-8xl font-poppins text-3xl md:font-extrabold font-semibold">that match Clarity.</h1>
        <button className="font-poppins lg:mt-24 bg-green-500 text-black p-4 rounded-full font-medium mt-12">
          Watch Free
        </button>
      </div>
    </div>
  );
}

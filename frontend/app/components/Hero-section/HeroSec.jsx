import React from "react";

const HeroSec = () => {
  return (
    <div>
      <div className="place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mx-5 sm:mx-16 md:mx-16">
      <div className="block sm:hidden md:hidden">
          <img className="" src="./heroImage.jpg" />
        </div>
        <div className="text-justify">
          <h1 className="text-2xl sm:text-5xl md:text-5xl font-bold">
            Helo Welcomes here to learn <br /> Something new{" "}
            <span className="text-pink-400">Everyday!!!</span>
          </h1>
          <p className="my-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium minima velit ipsum tenetur repellendus neque hic, quam
            architecto aspernatur, cum modi, laboriosam quo facilis mollitia?
            Quia nesciunt repellendus animi corporis?
          </p>
          <div className="join">
            <div>
              <label className="input validator join-item">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="20" x="3" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" className=" " placeholder="Enter Your Email" required />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
              <div className="mt-5">
                <button className="bg-pink-500 text-white px-5 py-2 rounded-md cursor-pointer">Secondary</button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block md:block">
          <img className="" src="./heroImage.jpg" />
        </div>
      </div>
    </div>
  );
};

export default HeroSec;

import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex place-content-between place-items-center mx-5 sm:mx-16 md:mx-16 my-5 ">
        <div className="">
          <h1 className="text-1xl sm:text-3xl md:text-3xl font-bold">Book Store</h1>
        </div>
        <div className="hidden sm:block md:block">
          <div className=" flex place-items-center gap-5">
            <ul className="flex gap-10 cursor-pointer">
              <li>Home</li>
              <li>Course</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
            <label className="input">
              <input type="search" required placeholder="Search" />
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
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
            </label>
            <div className="">
              <button className="bg-black text-white p-1 px-2  cursor-pointer rounded-sm">
                Login
              </button>
            </div>
          </div>
        </div>

        {/* for mobile view  */}
        <div className="block sm:hidden md:hidden">
          <button className="bg-black text-white p-1 px-2  cursor-pointer rounded-sm">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

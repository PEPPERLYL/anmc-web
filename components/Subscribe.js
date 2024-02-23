import React from "react";

const Subscribe = () => {
  return (
    <>
      <form>
        <div className="flex border border-white rounded-xl">
          <input
            type="email"
            id="email"
            placeholder="Enter Email*"
            className="text-white placeholder:text-white text-lg font-medium bg-transparent border-none focus:outline-none w-full py-2 pl-5"
          />
          <button className="w-64 h-14 text-black bg-white rounded-xl text-[20px] font-bold">
            Subscribe
          </button>
        </div>
      </form>
    </>
  );
};

export default Subscribe;

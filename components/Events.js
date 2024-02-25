import { motion } from "framer-motion";
import React from "react";

const Events = () => {
  return (
    <>
      <div className="lg:my-20 my-10 mb-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="text-center lg:text-4xl text-3xl font-semibold text-[#001E2C] "
        >
          EVENT TYPES
        </motion.p>
        <div className="flex flex-col lg:flex-row items-center justify-center my-10 lg:my-16 gap-10 lg:gap-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.8, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="group relative w-[320px] h-[300px] bg-[#001E2C] border rounded-3xl flex justify-center items-center overflow-hidden"
          >
            <p className="text-white text-6xl z-10 transition-all duration-300 transform origin-center group-hover:translate-x-[-60%] group-hover:translate-y-[-150%] group-hover:scale-50 absolute top-3/5 left-3/5">
              ANMC
            </p>
            <div className="absolute top-0 left-0 w-full h-full bg-[#001E2C] opacity-50 z-0"></div>
            <div className="absolute text-white text-sm px-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-semibold my-5 pt-10 relative">
                <span className="border-t-2 border-white absolute top-0 left-0 w-2/3"></span>
                AFRICA NFT & METAVERSE CONFERENCE
              </p>
              <p className="font-light">
                ANMC holds from January to
                <br /> December across major Africa nations.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.8, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="group relative w-[320px] h-[300px] bg-[#001E2C] border rounded-3xl flex justify-center items-center  overflow-hidden"
          >
            <p className="text-white text-6xl z-10 transition-all duration-300 transform origin-center group-hover:translate-x-[60%] group-hover:translate-y-[-150%] group-hover:scale-50 absolute top-3/5 right-3/5">
              ANMS
            </p>
            <div className="absolute top-0 right-0 w-full h-full bg-[#001E2C] opacity-50 z-0"></div>
            <div className="absolute text-white text-sm px-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 right-0">
              <p className="text-lg font-semibold my-5 pt-10 relative text-right">
                <span className="border-t-2 border-white absolute top-0 right-0 w-2/3"></span>
                AFRICA NFT & METAVERSE <br /> SUMMIT
              </p>
              <p className="font-light text-right">
                ANMS holds every two (2)
                <br /> years across major Africa nations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Events;

import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center lg:my-16 my-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-semibold"
        >
          Contact Us
        </motion.h1>
        <div className="w-full my-4">
          <form className="w-full ">
            <div className="">
              <div className="flex flex-col lg:flex-row lg:mx-32 mx-8 lg:gap-24">
                <div className="flex flex-col my-5 w-full lg:w-1/2">
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.4, duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                    className="text-xl font-semibold mb-4"
                  >
                    Full Name
                  </motion.p>
                  <input
                    type="fullname"
                    id="fullname"
                    className="text-black text-lg font-medium bg-transparent border-2  rounded-xl  focus:outline-none w-full py-4 pl-5"
                  />
                </div>
                <div className="flex flex-col my-5 w-full lg:w-1/2">
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.4, duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                    className="text-xl font-semibold mb-4"
                  >
                    Email Address
                  </motion.p>
                  <input
                    type="email"
                    id="email"
                    className="text-black text-lg font-medium bg-transparent border-2  rounded-xl  focus:outline-none w-full py-4 pl-5"
                  />
                </div>
              </div>
              <div className="flex flex-col mx-10 lg:mx-auto lg:px-32">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.4, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="text-xl font-semibold mb-4"
                >
                  Message
                </motion.p>
                <textarea className="h-72 w-full border rounded-xl  focus:outline-none pl-10 pt-5 text-xl" />
              </div>
            </div>
            <div className="flex items-center justify-center mt-5">
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="flex items-center justify-center bg-[#34ADE3] text-white gap-2 py-3 rounded-lg w-[160px] hover:animate-pulse hover:text-[#34ADE3] border-4 border-[#34ADE3] hover:bg-white "
              >
                Submit
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

"use client";
import React from "react";
import { motion } from "framer-motion";
import Footersm from "@/components/Footersm";
import Returnhead from "@/components/Returnhead";
import hero from "@/public/Rectangle.gif";
import Image from "next/image";
const page = () => {
  const partnerlist = [
    { title: "Web3 Companies." },
    { title: "Game developers and studios." },
    { title: "NFT projects actively offering value." },
    { title: "Talent as a service in web3." },
    { title: "Museums and art galleries." },
    { title: "Blockchain companies." },
    { title: "VR/AR companies." },
    { title: "Animation companies." },
    { title: "companies actively trying to be a part of web3, VR, NFT." },
    { title: "Metaverse offering companies." },
  ];
  return (
    <main className="w-full flex flex-col overflow-hidden">
      <Returnhead />
      {/*hero*/}
      <div className="relative">
        <div className="absolute lg:left-20 top-20 w-full  p-4 text-white z-10">
          <h1 className="text-4xl font-semibold">Become Our Partner</h1>
          <p className="text-xl mt-4">
            Brand partnership with ANMC ia a careful selection
            <br /> of brands in the web3 ecosystem.
            <br />
            Who do we partner with?
          </p>
          {/*list of partner*/}
          <ul className="mt-4 list-inside">
            {partnerlist.map((partner, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-[#5E54EF] text-2xl">&#8226;</span>
                <span className="text-white text-xl"> {partner.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={hero}
          alt="Hero Image"
          className="w-full h-[720px] lg:h-[600px]"
        />
      </div>
      {/*application form*/}
      <div className="mt-4 lg:mt-10 flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            Reach Out To Us
          </motion.h1>
          <div className="w-full lg:mb-10 my-4">
            <form className="w-full">
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
                      Name of Company / Brand
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
                      Your Offering
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
                  className="flex items-center justify-center bg-[#5E54EF] text-white gap-2 py-3 rounded-lg w-[160px] hover:animate-pulse hover:text-[#5E54EF] border-4 border-[#5E54EF] hover:bg-white "
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footersm />
    </main>
  );
};

export default page;

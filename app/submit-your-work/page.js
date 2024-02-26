"use client";
import React from "react";
import { motion } from "framer-motion";
import Footersm from "@/components/Footersm";
import Returnhead from "@/components/Returnhead";
import hero from "@/public/Rectangle.gif";
import Image from "next/image";
import Logos from "@/components/Logos";
const page = () => {
  const submitlist = [
    {
      title: "Artists exploring digital art and blockchain tech.",
    },
    {
      title: "Developers creating immersive metaverse experiences.",
    },
    {
      title: "Innovators pushing NFT tech and virtual ownership.",
    },
    {
      title: "Creative storytellers using NFTs for narratives.",
    },
    {
      title: "Entrepreneurs building platforms for the digital economy.",
    },
    {
      title:
        "Gaming enthusiasts designing games with NFTs or metaverse elements.",
    },
  ];

  return (
    <main className="w-full flex flex-col overflow-hidden">
      <Returnhead />
      {/*hero*/}
      <div className="relative">
        <div className="absolute lg:left-20 top-20 w-full p-4 text-white z-10">
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.3, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="text-4xl font-semibold"
          >
            Submit Your Work
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.6, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="text-xl mt-4"
          >
            Share your creations with the Africa NFT and Metaverse Conference
            community. <br />
            Whether you are an artist, developer, or innovator, we welcome your
            submissions to
            <br /> showcase the diverse talents shaping the future of NFTs and
            the metaverse.
          </motion.div>
          {/*list of partner*/}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.9, duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <div className="mt-4 list-inside">
              {submitlist.map((submit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-[#5E54EF] text-2xl">&#8226;</span>
                  <span className="text-white text-xl"> {submit.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <Image
          src={hero}
          alt="Hero Image"
          className="w-full h-[720px] lg:h-[600px]"
        />
      </div>
      {/*submit work form*/}
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
            className="text-3xl lg:text-4xl font-semibold"
          >
            Submit Your Work
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
                      Your Link
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
                    Description
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
      {/*Ecosystem */}
      <div className="flex flex-col items-center justify-center my-16 lg:my-28 gap-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-semibold mb-10"
        >
          Our Ecosystem
        </motion.h1>
        <Logos />
      </div>
      <Footersm />
    </main>
  );
};

export default page;

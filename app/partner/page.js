"use client";
import React from "react";
import { motion } from "framer-motion";
import Footersm from "@/components/Footersm";
import Returnhead from "@/components/Returnhead";
import hero from "@/public/Rectangle.gif";
import Image from "next/image";
import Logos from "@/components/Logos";
import Partnerform from "@/components/Partnerform";
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
            Become Our Partner
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
            Brand partnership with ANMC ia a careful selection
            <br /> of brands in the web3 ecosystem.
            <br />
            Who do we partner with?
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
              {partnerlist.map((partner, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-[#5E54EF] text-2xl">&#8226;</span>
                  <span className="text-white text-xl"> {partner.title}</span>
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
      {/*application form*/}
      <Partnerform />
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
          Our Partnership Ecosystem
        </motion.h1>
        <Logos />
      </div>
      <Footersm />
    </main>
  );
};

export default page;

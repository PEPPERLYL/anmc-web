"use client";
import React from "react";
import { motion } from "framer-motion";
import Footersm from "@/components/Footersm";
import Returnhead from "@/components/Returnhead";
import hero from "@/public/Rectangle.gif";
import Image from "next/image";
import Logos from "@/components/Logos";
import Regform from "@/components/Regform";
const page = () => {
  const reasonslist = [
    {
      title:
        "Explore the latest trends and innovations in the NFT and Metaverse space.",
    },
    {
      title: "Network with industry professionals, developers, and investors.",
    },
    { title: "Learn from expert speakers and thought leaders." },
    { title: "Discover new opportunities and potential collaborations." },
    {
      title: "Be part of shaping the future of the digital economy in Africa.",
    },
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
            Register for the Africa NFT and Metaverse Conference
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
            Join us at the Africa NFT and Metaverse Conference, where
            visionaries, <br />
            innovators, and enthusiasts unite globally to explore NFTs and the
            <br /> metaverse boundless potential.
            <br />
            Why Attend?
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
            <ul className="mt-4 list-inside">
              {reasonslist.map((reason, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-[#5E54EF] text-2xl">&#8226;</span>
                  <span className="text-white text-xl"> {reason.title}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <Image
          src={hero}
          alt="Hero Image"
          className="w-full h-[720px] lg:h-[600px]"
        />
      </div>
      {/*reg form*/}
      <Regform />
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

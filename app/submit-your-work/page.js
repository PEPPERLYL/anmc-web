"use client";
import React from "react";
import { motion } from "framer-motion";
import Footersm from "@/components/Footersm";
import Returnhead from "@/components/Returnhead";
import hero from "@/public/Rectangle.gif";
import Image from "next/image";
import Logos from "@/components/Logos";
import Workform from "@/components/Workform";
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
      <Workform />
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

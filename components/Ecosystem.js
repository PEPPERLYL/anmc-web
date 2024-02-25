import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import map from "../public/Africa.svg";

const Ecosystem = () => {
  return (
    <div className="relative bg-[#001E2C] lg:px-20 px-2 lg:py-20 py-2 overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image src={map} alt="World Map" height={500} />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center text-white">
        <div className="my-5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-semibold "
          >
            COMMUNITY ECOSYSTEM
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 lg:gap-8 my-5"
        >
          <div className="grid grid-cols-2 justify-items-center">
            {/*Northern Africa*/}
            <div className="bg-gray-200 rounded-2xl p-4 h-[160px] w-[160px] lg:h-[200px] lg:w-[280px] cursor-pointer opacity-15 hover:opacity-90 hover:bg-[#34ADE3] group">
              <h2 className="text-[#34ADE3] group-hover:text-white mb-2 text-md lg:text-2xl font-semibold underline underline-offset-4">
                Northern Africa
              </h2>
              <ul className="text-gray-200 text-sm lg:text-xl text-center">
                <li>Egypt</li>
                <li>Morocco</li>
                <li>Algeria</li>
                <li>Tunisia</li>
              </ul>
            </div>
            {/*Western Africa*/}
            <div className="bg-gray-200 rounded-2xl p-4  h-[160px] w-[160px] lg:h-[200px] lg:w-[280px] cursor-pointer opacity-15 hover:opacity-90 hover:bg-[#078A4E] group">
              <h2 className="text-[#078A4E] group-hover:text-white mb-2 text-md lg:text-2xl font-semibold underline underline-offset-4">
                Western Africa
              </h2>
              <ul className="text-gray-200 text-sm lg:text-xl text-center">
                <li>Nigeria</li>
                <li>Ghana</li>
                <li>Benin</li>
                <li>Niger</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {/*Eatern Africa*/}
            <div className="bg-gray-200 rounded-2xl p-4  h-[160px] w-[160px] lg:h-[200px] lg:w-[280px] cursor-pointer opacity-15 hover:opacity-90 hover:bg-[#A8CF45] lg:mt-0 mt-4 ml-auto mr-auto lg:mr-0 lg:ml-0 group">
              <h2 className="text-[#A8CF45] group-hover:text-white mb-2 text-md lg:text-2xl font-semibold underline underline-offset-4">
                Eastern Africa
              </h2>
              <ul className="text-gray-200 text-sm lg:text-xl text-center">
                <li>Madagascar</li>
                <li>Kenya</li>
                <li>Rwanda</li>
                <li>Ethiopia</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-items-center">
            {/*Southern Africa*/}
            <div className="bg-gray-200 rounded-2xl p-4 h-[160px] w-[160px] lg:h-[200px] lg:w-[280px] cursor-pointer opacity-15 hover:opacity-90 hover:bg-[#F7BA2F] group">
              <h2 className="text-[#F7BA2F] group-hover:text-white mb-2 text-md lg:text-2xl font-semibold underline underline-offset-4">
                Southern Africa
              </h2>
              <ul className="text-gray-200 text-sm lg:text-xl text-center">
                <li>South Africa</li>
                <li>Malawi</li>
                <li>Zambia</li>
                <li>Zimbabwe</li>
              </ul>
            </div>
            {/*Central Africa*/}
            <div className="bg-gray-200 rounded-2xl p-4  h-[160px] w-[160px] lg:h-[200px] lg:w-[280px] cursor-pointer opacity-15 hover:opacity-90 hover:bg-[#F79D7B] group">
              <h2 className="text-[#F79D7B] group-hover:text-white mb-2 text-md lg:text-2xl font-semibold underline underline-offset-4">
                Central Africa
              </h2>
              <ul className="text-gray-200 text-sm lg:text-xl text-center">
                <li>Angola</li>
                <li>Chad</li>
                <li>Congo</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Ecosystem;

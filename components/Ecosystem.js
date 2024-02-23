import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import map from "../assets/Africa.svg";

const Ecosystem = () => {
  const regions = [
    {
      name: "Northern Africa",
      country: ["Egypt", "Morocco", "Algeria", "Tunisia"],
      color: "#34ADE3",
    },
    {
      name: "Western Africa",
      country: ["Nigeria", "Ghana", "Benin", "Niger"],
      color: "#078A4E",
    },
    {
      name: "Southern Africa",
      country: ["South Africa", "Malawi", "Zambia", "Zimbabwe"],
      color: "#F7BA2F",
    },
    {
      name: "Eastern Africa",
      country: ["Madagascar", "Kenya", "Rwanda", "Ethiopia"],
      color: "#A8CF45",
    },
    {
      name: "",
      country: ["", "", "", ""],
      color: "",
    },
    {
      name: "Central Africa",
      country: ["Angola", "Chad", "Congo"],
      color: "#F79D7B",
    },
  ];

  return (
    <div className="relative bg-[#001E2C] lg:px-32 px-8 lg:py-32 py-8 overflow-hidden">
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
            className="text-4xl font-semibold "
          >
            COMMUNITY ECOSYSTEM
          </motion.p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-24  lg:mx-[200px] justify-items-center">
          {regions.map((region, index) => (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.1, duration: 0.5 },
              }}
              viewport={{ once: true }}
              key={index}
            >
              <motion.div
                whileHover={{ backgroundColor: region.color }}
                transition={{ duration: 0.3 }}
                className="bg-gray-200 rounded-2xl p-6 cursor-pointer lg:h-[240px] lg:w-[240px] w-[200px] h-[200px] opacity-15 hover:opacity-90"
              >
                <h2
                  className={`!text-${region.color} text-lg font-semibold mb-2 underline underline-offset-8`}
                >
                  <motion.span
                    whileHover={{ color: "#FFFFFF" }}
                    transition={{ duration: 0.3 }}
                  >
                    {region.name}
                  </motion.span>
                </h2>
                <ul className="text-gray-200 text-center">
                  {region.country.map((country, idx) => (
                    <li key={idx}>{country}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;

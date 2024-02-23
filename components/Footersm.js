import React from "react";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaTelegram,
  FaX,
  FaWhatsapp,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";
import Subscribe from "./Subscribe";

const socialLink = [
  {
    title: "whatsapp",
    link: "https://chat.whatsapp.com/HMYf7iKJqAu24n1prFckmQ",
    src: <FaWhatsapp size={30} />,
  },
  {
    title: "x",
    link: "https://x.com/africaanmc",
    src: <FaX size={30} />,
  },
  {
    title: "telegram",
    link: "https://t.me/+IGj_SqtQ6ThiYzk0",
    src: <FaTelegram size={30} />,
  },
  {
    title: "linkedin",
    link: "https://www.linkedin.com/showcase/africa-nft-metaverse-conference-anmc/",
    src: <FaLinkedinIn size={30} />,
  },
  {
    title: "discord",
    link: "https://discord.gg/CYWNk6DhZv",
    src: <FaDiscord size={30} />,
  },
  {
    title: "instagram",
    link: "https://www.instagram.com/africaanm",
    src: <FaInstagram size={30} />,
  },
];
const Footersm = () => {
  return (
    <>
      <footer className="bg-[#433CAA] lg:pt-10 lg:px-20 pt-5 px-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white text-[28px] lg:text-[44px] font-semibold  mb-8">
            Subscribe To Our Newsletter
          </h1>
          <div className="flex mb-4">
            <Subscribe />
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:gap-5 gap-2">
            <p className="text-white font-medium text-[22px]">
              Jion the community.
            </p>
            <div className="flex gap-4">
              {socialLink.map((social, index) => (
                <Link key={index} href={social.link}>
                  <div className="text-white hover:scale-125 transition-transform duration-300 ease-in-out">
                    {social.src}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center lg:py-4 py-2">
          <p className="text-white opacity-80 text-md font-light">
            ©ANMC 2024 — All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footersm;

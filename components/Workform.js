"use client";
import React, { useState } from "react";
import { db } from "@/app/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

async function addDataToFireStore(name, email, company, link, message) {
  try {
    const docRef = await addDoc(collection(db, "Submit work"), {
      name: name,
      email: email,
      company: company,
      link: link,
      message: message,
    });
    return true;
  } catch (error) {
    return false;
  }
}
const validateLink = (link) => {
  // Regular expression for URL validation
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

  // Test the link against the regular expression
  return urlRegex.test(link);
};

const Workform = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset validation errors on each submit attempt
    setValidationErrors([]);

    // Basic email validation
    if (!email || !email.includes("@")) {
      setValidationErrors(["Please enter a valid email address."]);
      return;
    }

    // Name validation
    if (name.length < 3 || name.length > 50) {
      setValidationErrors(["Full name should be between 3 and 50 characters."]);
      return;
    }
    // company validation
    if (company.length < 3 || name.length > 50) {
      setValidationErrors([
        "company or brand name should be between 3 and 50 characters.",
      ]);
      return;
    }

    // Phone number validation
    if (!validateLink(link)) {
      setValidationErrors(["Please enter a valid link."]);
      return;
    }
    const added = await addDataToFireStore(name, email, company, link, message);
    if (added) {
      setEmail("");
      setName("");
      setCompany("");
      setLink("");
      setMessage("");
      // Show success toast
      toast.success("Message successfully sent!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  return (
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
          <form onSubmit={handleSubmit} className="w-full">
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
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
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
                    type="text"
                    id="link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
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
                <textarea
                  type="text"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="h-72 w-full border rounded-xl  focus:outline-none pl-10 pt-5 text-xl"
                />
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
                type="submit"
                className="flex items-center justify-center bg-[#5E54EF] text-white gap-2 py-3 rounded-lg w-[160px] hover:animate-pulse hover:text-[#5E54EF] border-4 border-[#5E54EF] hover:bg-white "
              >
                Submit
              </motion.button>
            </div>
            <div className=" mt-2 flex justify-center">
              {/*validation Error messages*/}
              {validationErrors.map((error, index) => (
                <p key={index} className="text-red-500 text-sm font-bold">
                  {error}
                </p>
              ))}
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Workform;

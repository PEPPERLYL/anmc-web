"use client";
import React, { useState } from "react";
import { db } from "@/app/firebaseConfig";
import countries from "@/assets/Countries";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

async function addDataToFireStore(name, email, country, number) {
  try {
    const docRef = await addDoc(collection(db, "Register User"), {
      name: name,
      email: email,
      country: country,
      number: number,
    });
    return true;
  } catch (error) {
    return false;
  }
}

// Function to validate phone number
const validatePhoneNumber = (phoneNumber) => {
  const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  return phoneRegex.test(phoneNumber);
};

const Regform = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [country, setCountry] = useState("");
  const [suggestedCountries, setSuggestedCountries] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);

  const handleCountryChange = (value) => {
    // Update the country as the user types
    setCountry(value);

    // Filter the suggested countries based on the input value
    const suggestions = countries.filter(
      (country) =>
        country.toLowerCase().includes(value.toLowerCase()) &&
        country.toLowerCase() !== value.toLowerCase()
    );

    // Display up to 3 suggestions
    setSuggestedCountries(suggestions.slice(0, 3));
  };

  const handleSuggestedCountryClick = (suggestedCountry) => {
    // Set the selected country when a suggestion is clicked
    setCountry(suggestedCountry);
    setSuggestedCountries([]); // Clear suggestions
  };

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

    // Country validation
    if (!country) {
      setValidationErrors(["Please select a valid country."]);
      return;
    }

    // Phone number validation
    if (!validatePhoneNumber(number)) {
      setValidationErrors(["Please enter a valid phone number."]);
      return;
    }

    const added = await addDataToFireStore(email, name, country, number);
    if (added) {
      setEmail("");
      setName("");
      setCountry("");
      setNumber("");
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
          className="text-3xl  lg:text-4xl font-semibold"
        >
          Register for Africa NFT and Metaverse Conference
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
                    type="email"
                    id="email"
                    value={email}
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
                    Country
                  </motion.p>
                  <input
                    type="text"
                    id="country"
                    value={country}
                    onChange={(e) => handleCountryChange(e.target.value)}
                    className="text-black text-lg font-medium bg-transparent border-2  rounded-xl  focus:outline-none w-full py-4 pl-5"
                  />
                  {suggestedCountries.length > 0 && (
                    <div className="absolute top-12 left-0 right-0 bg-white rounded-b-lg z-10 overflow-y-auto max-h-20">
                      {suggestedCountries.map((suggestedCountry) => (
                        <div
                          key={suggestedCountry}
                          className="cursor-pointer hover:bg-red-600 p-1 rounded-md"
                          onClick={() =>
                            handleSuggestedCountryClick(suggestedCountry)
                          }
                        >
                          {suggestedCountry}
                        </div>
                      ))}
                    </div>
                  )}
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
                    Phone Number
                  </motion.p>
                  <input
                    type="text"
                    id="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Phone number format: +12345678901234"
                    className="text-black text-lg font-medium bg-transparent border-2  rounded-xl  focus:outline-none w-full py-4 pl-5"
                  />
                </div>
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
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Regform;

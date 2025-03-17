"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] bg-gray-50 overflow-hidden flex items-center">
      <div className="container mx-auto px-6 lg:px-16 py-10 md:py-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
         <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
  Experience the Thrill of <span className="text-gray-400">Pelagic Bird Watching</span>
</h1>
<p className="text-lg text-gray-700 mt-5 max-w-lg mx-auto md:mx-0">
  Set sail for an unforgettable birding adventure off the coast of Mangaluru, Karnataka, India 
  <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India Flag" className="w-5 h-5 inline ml-1 mt-[-3px]" />
</p>


            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <Link href="/contact" passHref>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition-all"
                >
                 Book Trip
                </motion.div>
              </Link>
              <Link href="/contact" passHref>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-black border border-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all"
                >
                  Get in Touch
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative h-[350px] md:h-[450px] w-full">
              <Image
                src="https://assets.lummi.ai/assets/QmfJGNSfhs9XqJhQQXYiAy2wyUkJeVU2PKV9wTRt5fRJre?auto=format&w=1500"
                alt="3D Printing Technology"
                layout="fill"
                objectFit="cover"
                className="rounded-xl shadow-lg"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const IncubationSection = () => {
  const incubators = [
    {
      name: "AICTE",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/All_India_Council_for_Technical_Education_logo.png/220px-All_India_Council_for_Technical_Education_logo.png", // Replace with actual logo path
      description:
        "All India Council for Technical Education - Supporting Innovation & Research.",
    },
    {
      name: "IDEA Lab",
      logo: "https://idealnet.aicte.gov.in/assets/Idea_Logo.jpg", // Replace with actual logo path
      description:
        "Encouraging creative problem-solving & entrepreneurship in technology.",
    },
    {
      name: "SATI Vidisha",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/SATI_Vidisha.jpg", // Replace with actual logo path
      description:
        "Samrat Ashok Technological Institute - Fostering Engineering Excellence.",
    },
  ];
  return (
    <section className="container mx-auto px-6 lg:px-16 py-16 md:pt-24">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-900 mb-12"
      >
        Nurtured & Incubated Under
      </motion.h2>

      {/* Incubation Logos & Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {incubators.map((incubator, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-center"
          >
            {/* Logo */}
            <div className="mb-4">
              <Image
                src={incubator.logo}
                alt={incubator.name}
                width={80}
                height={80}
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-700">
              {incubator.name}
            </h3>

            {/* Description */}
            <p className="text-gray-500 mt-2 leading-relaxed">
              {incubator.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;

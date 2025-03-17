"use client";

import React from "react";
import { motion } from "framer-motion";

const TripOptions = () => {
  return (
    <section className="bg-white text-black py-20">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Choose Your Weekend Adventure
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            Select your preferred weekend dates for your bird-watching trips.
            We offer trips on weekends (Saturday and Sunday) only, with weekday
            trips available upon special request for groups.
          </p>
        </motion.div>

        {/* Trip Options */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, staggerChildren: 0.1 },
            },
          }}
        >
          {/* Half Day Trip */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="border border-gray-300 rounded-lg shadow-md p-6 bg-white transition-all"
          >
            <h3 className="text-2xl font-bold">Half Day</h3>
            <p className="text-gray-600 mt-2">Time: 6 AM to 1 PM</p>
            <p className="text-gray-600">Duration: 7 hours</p>
            <p className="text-gray-600 mt-2">
              Perfect for beginners or those with limited time. Experience the
              morning hours when birds are most active.
            </p>
          </motion.div>

          {/* Full Day Trip */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="border border-gray-300 rounded-lg shadow-md p-6 bg-white transition-all"
          >
            <h3 className="text-2xl font-bold">Full Day</h3>
            <p className="text-gray-600 mt-2">Time: 6 AM to 6 PM</p>
            <p className="text-gray-600">Duration: 12 hours</p>
            <p className="text-gray-600 mt-2">
              For enthusiasts who want to maximize their bird-watching
              experience in a single day.
            </p>
          </motion.div>

          {/* Overnight Trip */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="border border-gray-300 rounded-lg shadow-md p-6 bg-white transition-all"
          >
            <h3 className="text-2xl font-bold">Overnight</h3>
            <p className="text-gray-600 mt-2">Time: 6 AM Saturday to 6 PM Sunday</p>
            <p className="text-gray-600">Duration: 36 hours</p>
            <p className="text-gray-600 mt-2">
              The ultimate experience! Observe nocturnal species and enjoy two
              full days of bird watching.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TripOptions;

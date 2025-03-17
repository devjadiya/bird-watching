"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold">About Pelagic Bird Watching</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Explore the open seas and uncover the beauty of pelagic birds. Join us in documenting and connecting with marine birdlife.          </p>
        </motion.div>

        {/* Split Layout: Image & Text */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full md:w-1/2 h-[300px] md:h-[400px]"
          >
            <Image
              src="https://www.notesfromtheroad.com/files/pelagic-birdwatching.jpg"
              alt="CapLock Innovation"
              layout="fill"
              objectFit="cover"
              priority
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 md:pl-12"
          >
<p className="text-lg text-gray-300">
  Inspired by our love for the open seas and avian life, we created this platform to explore, document, and celebrate pelagic bird species. Our mission is to connect enthusiasts, researchers, and conservationists through seamless technology and collaboration.
</p>
<p className="text-lg text-gray-300 mt-4">
  Committed to accuracy and accessibility, we offer tools and resources that empower bird watchers to contribute meaningful insights—deepening the understanding and appreciation of marine birdlife.
</p>



            {/* Learn More Button */}
            <div className="mt-8">
              <Link href="/#booktrip" passHref>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-white text-white font-semibold rounded-lg shadow-md 
                                    hover:bg-white hover:text-black transition-all cursor-pointer"
                >
                  Learn More
                </motion.a>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

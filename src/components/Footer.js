"use client";

import React from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className=" col-span-2 md:col-span-1">
          <h2 className="text-4xl font-bold mb-4">Pelagic Birds</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
          For special requests, such as weekday trips for groups, please contact us at info@pelagicbirdwatching.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link
                href="/#booktrip"
                className="hover:text-white transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
             
            </li>
            <li>
             
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
      
            </li>
            <li>
              
            </li>
            <li>
              <Link
                href="mailTo:info@pelagicbirdwatching.com"
                className="hover:text-white transition duration-300"
              >
                Mail Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className=" md:col-span-1 col-span-2">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              href="https://instagram.com/"
              target="_blank"
              className="hover:text-gray-300 transition duration-300"
            >
              <FiInstagram className="text-xl" />
            </Link>
            <Link
              href="https://x.com/"
              target="_blank"
              className="hover:text-gray-300 transition duration-300"
            >
              <FiTwitter className="text-xl" />
            </Link>
           
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Stay connected for the latest updates and innovations.
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Pelagic Bird Watching - Mangaluru | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

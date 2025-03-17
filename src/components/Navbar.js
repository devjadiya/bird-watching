"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiShoppingCart,
  FiSearch,
  FiUser,
  FiChevronDown,
  FiBox as FiCube,
  FiServer,
  FiCode,
} from "react-icons/fi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");
  const router = useRouter();

  const [query, setQuery] = useState("");



  // Handle search input change
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  // Redirect to selected product page
  const handleProductClick = (productId) => {
    setQuery(""); // Clear search
    setSearchOpen(false); // Close search box
    router.push(`/products/${productId}`); // Redirect to product page
  };
  // Mock cart items count - replace with your actual cart logic
  const cartItemsCount = 0;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen("");
  }, [router.pathname]);

  // Services dropdown items
  const serviceItems = [
    {
      name: "3D Printing",
      icon: <FiCube className="mr-2" />,
      href: "/services/3d-printing",
    },
    {
      name: "IoT Solutions",
      icon: <FiServer className="mr-2" />,
      href: "/services/iot",
    },
    {
      name: "Robotics",
      icon: <FiCode className="mr-2" />,
      href: "/services/robotics",
    },
  ];

  const toggleDropdown = (name) => {
    setDropdownOpen(dropdownOpen === name ? "" : name);
  };

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 shadow-md ${
          scrolled
            ? "bg-white shadow-md py-3"
            : "bg-white/90 backdrop-blur-md py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center cursor-pointer"
              >
 <span className="text-3xl font-bold tracking-tighter inline-flex items-center justify-center" style={{ height: '50px' }}>
  <img src="Bird.svg" className="w-24 h-24" />
</span>

              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/#booktrip" passHref>
                <motion.div
                  whileHover={{ y: -2 }}
                  className={`font-medium relative ${
                    router.pathname === "/booktrip"
                      ? "text-black"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  Book Trip
                  {router.pathname === "/#booktrip" && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-black mt-1"
                    />
                  )}
                </motion.div>
              </Link>

              {/* Services Dropdown */}
              {/* <div className="relative">
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    className={`flex items-center font-medium ${dropdownOpen === "services" ? "text-black" : "text-gray-600 hover:text-black"}`}
                                    onClick={() => toggleDropdown("services")}
                                >
                                    Services
                                    <FiChevronDown className={`ml-1 transform transition-transform ${dropdownOpen === "services" ? "rotate-180" : ""}`} />
                                </motion.button>

                                <AnimatePresence>
                                    {dropdownOpen === "services" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-60 bg-white rounded-md shadow-lg py-2 z-20"
                                        >
                                            {serviceItems.map((item) => (
                                                <Link key={item.name} href={item.href} passHref>
                                                    <motion.div
                                                        whileHover={{ x: 5 }}
                                                        className="flex items-center px-4 py-3 text-gray-700 hover:text-black"
                                                    >
                                                        {item.icon}
                                                        {item.name}
                                                    </motion.div>
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div> */}

            

              <Link href="/#faq" passHref>
                <motion.div
                  whileHover={{ y: -2 }}
                  className={`font-medium relative ${
                    router.pathname === "/#faq"
                      ? "text-black"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  FAQ
                  {router.pathname === "/#faq" && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-black mt-1"
                    />
                  )}
                </motion.div>
              </Link>
            </nav>

            {/* Right Navigation Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Search Button */}
            
              {/* Cart Button */}
              {/* <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setCartOpen(true)}
                                className="p-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-full relative"
                            >
                                <FiShoppingCart className="w-5 h-5" />
                                {cartItemsCount > 0 && (
                                    <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-black text-white text-xs rounded-full">
                                        {cartItemsCount}
                                    </span>
                                )}
                            </motion.button> */}

              {/* Mobile Menu Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-full lg:hidden"
              >
                {isOpen ? (
                  <FiX className="w-5 h-5" />
                ) : (
                  <FiMenu className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
       
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "tween" }}
        className="fixed top-0 right-0 z-40 w-full sm:w-80 h-full bg-white overflow-y-auto lg:hidden shadow-xl"
      >
        <div className="p-5 ">
          <div className="flex items-center justify-between">
            <Link href="/" passHref>
              <div className="text-xl font-bold">CapLock</div>
            </Link>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-600 hover:text-black rounded-full"
            >
              <FiX className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        <div className="py-4">

      
          <Link href="/#booktrip" passHref>
            <div className="block px-5 py-3 text-lg font-medium text-gray-700 hover:text-black hover:bg-gray-50">
              Contact
            </div>
          </Link>

         

          <Link href="/policy" passHref>
            <div className="block px-5 py-3 text-lg font-medium text-gray-700 hover:text-black hover:bg-gray-50">
              Privacy Policy
            </div>
          </Link>
        </div>
      </motion.nav>

      {/* Cart Drawer Placeholder (This would be replaced by your actual CartDrawer component) */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black bg-opacity-50"
              onClick={() => setCartOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 z-50 w-full sm:w-96 h-full bg-white shadow-xl"
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-semibold">Your Cart</h2>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCartOpen(false)}
                  className="p-2 text-gray-600 hover:text-black rounded-full"
                >
                  <FiX />
                </motion.button>
              </div>

              <div className="p-4 flex flex-col items-center justify-center h-64">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <Link href="/products" passHref>
                  <div className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800">
                    Start Shopping
                  </div>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div
        className={`${scrolled ? "h-16" : "h-20"} transition-all duration-300`}
      />
    </>
  );
};

export default Navbar;

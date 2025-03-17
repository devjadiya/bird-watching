"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FiCheckCircle, FiXCircle, FiTruck } from "react-icons/fi";
import toast from "react-hot-toast";
import Link from "next/link";

const ProductDetails = () => {
  const pathname = usePathname();
  const productId = pathname.split("/").pop(); // Extract product_id from URL

  // Hooks must always be at the top level
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
    address: "",
  });

  // Fetch product data after the component mounts
  useEffect(() => {
    const foundProduct = products.find((p) => p.product_id === productId);
    setProduct(foundProduct);
  }, [productId]);

  const [viewMode, setViewMode] = useState("checkout"); // checkout | customize
  const [orderId, setOrderId] = useState(null);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Checkout Submission (Sends Data to Google Sheets)
  const handleSubmit = async () => {
    // Show loading toast
    toast.loading("Submitting your order...");

    try {
      // Include product details in the request
      const orderData = {
        ...formData,
        product: {
          title: product?.title,
          price: product?.price,
          image: product?.images[0], // First product image
        },
      };

      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Failed to place order. Server returned an error.");
      }

      const data = await response.json();

      if (data.success && data.orderId) {
        toast.dismiss();
        setOrderId(data.orderId);

        // Show success toast with order ID
        toast.success(
          `🎉 Order Placed Successfully!\nOrder ID: ${data.orderId}`
        );

        // Clear form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          pincode: "",
          address: "",
        });
      } else {
        throw new Error("Order submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Order Submission Error:", error);
      toast.dismiss();
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="bg-white text-black md:py-20 py-8">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative w-full h-96">
            <Image
              src={product?.images[0]}
              alt={product?.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-bold">{product?.title}</h1>
            <p className="text-gray-700 mt-4">{product?.description}</p>

            {/* Availability */}
            <div className="flex items-center gap-2 mt-4 text-lg font-medium">
              {product?.available ? (
                <FiCheckCircle className="text-green-600 text-xl" />
              ) : (
                <FiXCircle className="text-red-500 text-xl" />
              )}
              <span
                className={
                  product?.available ? "text-green-600" : "text-red-500"
                }
              >
                {product?.available ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Delivery Time */}
            <div className="flex items-center gap-2 text-lg text-gray-500 mt-2">
              <FiTruck className="text-xl" />
              <span>Delivery: {product?.delivery_time}</span>
            </div>

            {/* Price */}
            <p className="text-3xl font-semibold mt-6">₹{product?.price}</p>

            {/* Toggle Buttons */}
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => setViewMode("checkout")}
                className={`px-6 py-3 font-medium rounded-md  cursor-pointer shadow-md transition-all ${
                  viewMode === "checkout"
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                Checkout
              </button>
              <button
                onClick={() => setViewMode("customize")}
                className={`px-6 py-3 font-medium rounded-md cursor-pointer shadow-md transition-all ${
                  viewMode === "customize"
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                Customize
              </button>
            </div>
          </div>
        </div>

        {/* Checkout Form */}
        {viewMode === "checkout" && !orderId && (
          <div className="mt-16 bg-gray-100 md:p-8 p-4 rounded-lg shadow-md flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold text-center">Checkout</h2>
            <p className="text-gray-600 text-center mt-2">
              Fill in your details to complete the purchase.
            </p>

            <form className="mt-6 md:max-w-2xl w-full md:mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <textarea
                name="address"
                placeholder="Full Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full mt-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                rows="4"
              ></textarea>
            </form>
            <button
              onClick={handleSubmit}
              className="mt-6  px-8 py-3 cursor-pointer bg-black text-white font-medium rounded-md transition-all shadow-md"
            >
              Place Order
            </button>
          </div>
        )}

        {/* WhatsApp Customization Section */}
        {viewMode === "customize" && (
          <div className="mt-16 bg-gray-100 p-8 rounded-lg shadow-md text-center">
            <h2 className="text-3xl font-bold">Customize Your Order</h2>
            <p className="text-gray-600 mt-2">
              Contact us on WhatsApp for customization details.
            </p>

            <div className="flex flex-col items-center mt-6">
              <Image
                src="/qrcode.png" // Add your QR image in public folder
                alt="WhatsApp QR Code"
                width={200}
                height={200}
              />
              <Link
                href="https://wa.me/919752133459?text=Hello%20I%20am%20interested%20in%20your%20products!"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 mt-5 text-white font-medium rounded-md s hover:bg-green-600"
              >
                Chat on WhatsApp
              </Link>
            </div>
          </div>
        )}

        {/* Thank You Message */}
        {orderId && (
          <div className="mt-16 bg-green-100 p-8 rounded-lg shadow-md text-center">
            <h2 className="text-3xl font-bold text-green-700">Thank You!</h2>
            <p className="text-green-600 mt-2">
              Your order has been placed successfully.
            </p>
            <p className="text-lg font-semibold mt-4">Order ID: {orderId}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;

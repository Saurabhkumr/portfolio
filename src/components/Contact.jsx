"use client";
import React, { useState, useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";
import { sendContactForm } from "@/lib/sendContactForm";
import { toast } from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";

const Contact = () => {
  const initialValues = { name: "", email: "", msg: "" };
  const [values, setValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await sendContactForm(values);
      if (response.ok) {
        toast.success("Message sent successfully!");
        setValues(initialValues);
      } else {
        const result = await response.json();
        toast.error(result.error || "Failed to send message.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="mt-30 mb-20 w-11/12 max-w-5xl mx-auto scroll-mt-25"
    >
      <motion.h2
        className="text-center text-3xl mb-10 text-orange-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left section */}
        <motion.div
          className="flex-1 flex flex-col justify-between"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              I’m currently open to exciting opportunities and collaborations.
              If you're in need of a dedicated developer or have something cool
              to discuss, don’t hesitate to reach out!
            </p>

            <div className="space-y-4 mb-8">
              <motion.div className="flex items-center p-3 rounded-lg  transition-all">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                  <EmailIcon sx={{ color: "#fb923c" }} />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <p className="text-gray-800 dark:text-gray-200  transition-colors">
                    saurabhkr0927@gmail.com
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-center p-3 rounded-lg transition-all">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                  <LocationOnIcon sx={{ color: "#fb923c" }} />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Location
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    New Delhi, India
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right section - Contact Form */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
            <motion.input
              required
              type="text"
              placeholder="Your Name"
              className="border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-orange-400"
              name="name"
              value={values.name}
              onChange={handleChange}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.input
              required
              type="email"
              placeholder="Your Email"
              className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-orange-400"
              name="email"
              value={values.email}
              onChange={handleChange}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />

            <motion.textarea
              required
              name="msg"
              placeholder="Message"
              className="border-2 border-gray-300 p-2 rounded-md h-32 focus:outline-none focus:border-orange-400"
              value={values.msg}
              onChange={handleChange}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />

            <motion.button
              type="submit"
              disabled={isLoading}
              className={`h-10 flex justify-center items-center gap-2 bg-orange-400 py-2 rounded-md hover:bg-orange-500 cursor-pointer text-black font-medium ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {isLoading ? (
                <BeatLoader size={12} color="#000" />
              ) : (
                <>
                  Send <SendIcon />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

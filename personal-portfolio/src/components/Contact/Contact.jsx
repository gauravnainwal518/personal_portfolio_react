import React, { useRef, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, when: "beforeChildren", staggerChildren: 0.3 },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const ContactSection = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ejtdbom", //   service ID
        "template_atkg0pj", //   template ID
        formRef.current,
        "gw4R0DhFrwwyAwkMg" //   public key
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          formRef.current.reset();
        },
        () => {
          setSuccess(false);
          setError(true);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="bg-gray-900 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          GET IN TOUCH
          <div className="h-1 w-20 bg-white mx-auto mt-2" />
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-12 max-w-6xl mx-auto">
          {/* Left Info */}
          <motion.div
            variants={fadeInLeft}
            className="bg-gray-800 p-8 rounded-lg shadow-md flex-1 text-white space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-400" size={20} />
              <span className="text-lg">gauravnainwal394@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-green-400" size={20} />
              <span className="text-lg">+91 9084481518</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-red-400" size={20} />
              <span className="text-lg">Uttarakhand, India</span>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            variants={fadeInRight}
            className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-xl flex-1"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send Me a Message
            </h3>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-1 text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Your Name"
                  className="w-full p-2 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-1 text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="Your Email"
                  className="w-full p-2 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium mb-1 text-white"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-2 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 w-40"
                >
                  Send
                </button>
              </div>

              {success && (
                <p className="text-green-400 text-sm pt-2">
                  Message sent successfully!
                </p>
              )}
              {error && (
                <p className="text-red-400 text-sm pt-2">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;

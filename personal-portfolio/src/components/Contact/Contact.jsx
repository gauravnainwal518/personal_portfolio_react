import React, { useRef, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
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

const floatingIcon = {
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const ContactSection = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ejtdbom",
        "template_atkg0pj",
        formRef.current,
        "gw4R0DhFrwwyAwkMg"
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
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-800 p-8 rounded-lg shadow-md flex-1 text-white space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <div className="flex items-center space-x-4">
              <motion.div variants={floatingIcon} animate="animate">
                <FaEnvelope className="text-blue-400" size={20} />
              </motion.div>
              <span className="text-lg">gauravnainwal394@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <motion.div variants={floatingIcon} animate="animate">
                <FaPhone className="text-green-400" size={20} />
              </motion.div>
              <span className="text-lg">+91 9084481518</span>
            </div>
            <div className="flex items-center space-x-4">
              <motion.div variants={floatingIcon} animate="animate">
                <FaMapMarkerAlt className="text-red-400" size={20} />
              </motion.div>
              <span className="text-lg">Uttarakhand, India</span>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            variants={fadeInRight}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-xl flex-1"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send Me a Message
            </h3>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <motion.div whileFocus={{ scale: 1.01 }}>
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
              </motion.div>
              <motion.div whileFocus={{ scale: 1.01 }}>
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
              </motion.div>
              <motion.div whileFocus={{ scale: 1.01 }}>
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
              </motion.div>

              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-md w-40"
                >
                  Send
                </motion.button>
              </div>

              <AnimatePresence>
                {success && (
                  <motion.p
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-400 text-sm pt-2"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
                {error && (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-400 text-sm pt-2"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;

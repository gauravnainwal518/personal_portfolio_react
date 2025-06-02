import React, { useRef, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

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
    <section id="contact" className="bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          GET IN TOUCH
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md flex-1 text-white space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-400" size={20} />
              <span className="text-lg break-words">
                gauravnainwal394@gmail.com
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-green-400" size={20} />
              <span className="text-lg">+91 9084481518</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-red-400" size={20} />
              <span className="text-lg">Uttarakhand, India</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md flex-1">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Send Me a Message
            </h3>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label
                  className="block text-lg font-medium mb-1 text-white"
                  htmlFor="name"
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
                  className="block text-lg font-medium mb-1 text-white"
                  htmlFor="email"
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
                  className="block text-lg font-medium mb-1 text-white"
                  htmlFor="message"
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
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md w-40 transition duration-300"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

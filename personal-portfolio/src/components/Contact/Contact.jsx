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
        "gw4R0DhFrwwyAwkMg",
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
        },
      );
  };

  return (
    <section id="contact" className="py-16 px-8 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Small Label */}
        <p className="text-sm tracking-[0.35em] uppercase text-purple-400 text-center mb-4">
          Contact
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Let’s Work Together
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 hover:shadow-[0_0_30px_rgba(124,58,237,0.25)] transition duration-500">
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact Info
            </h3>

            <div className="space-y-4 text-gray-300 text-sm">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-purple-400" size={16} />
                <span className="break-words">gauravnainwal394@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-cyan-400" size={16} />
                <span>+91 9084481518</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-pink-400" size={16} />
                <span>Uttarakhand, India</span>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] transition duration-500">
            <h3 className="text-lg font-semibold text-white mb-6">
              Send Message
            </h3>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-4 text-sm"
            >
              <input
                type="text"
                name="from_name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-black/40 text-gray-200 border border-white/10 focus:border-purple-500 focus:outline-none"
              />

              <input
                type="email"
                name="from_email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg bg-black/40 text-gray-200 border border-white/10 focus:border-purple-500 focus:outline-none"
              />

              <textarea
                name="message"
                required
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded-lg bg-black/40 text-gray-200 border border-white/10 focus:border-purple-500 focus:outline-none"
              />

              <button
                type="submit"
                className="mt-2 px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:opacity-90 transition duration-300"
              >
                Send Message
              </button>

              {success && (
                <p className="text-green-400 text-xs pt-2">
                  Message sent successfully!
                </p>
              )}

              {error && (
                <p className="text-red-400 text-xs pt-2">
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

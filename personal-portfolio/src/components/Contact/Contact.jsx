import React from 'react';

const ContactSection = () => {
    return (
        <section className="bg-gray-900 py-16 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">
                    CONTACT
                    <div className="h-1 w-20 bg-white mx-auto mt-2"></div>
                </h2>
                <div className="flex justify-center">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-xs">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-lg font-medium mb-1 text-white">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full p-2 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:border-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg font-medium mb-1 text-white">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-full p-2 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:border-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-lg font-medium mb-1 text-white">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    rows="4"
                                    className="w-full p-2 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:border-blue-500 focus:outline-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

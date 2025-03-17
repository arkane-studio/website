import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-16 bg-gray-950">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-950 via-violet-900 to-gray-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              Contact ARKANE
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team to learn how ARKANE can transform your trading and IT operations.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Contact Form and Info */}
      <div className="bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-300">
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-violet-500 focus:ring-violet-500 text-white sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-300">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-violet-500 focus:ring-violet-500 text-white sm:text-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-violet-500 focus:ring-violet-500 text-white sm:text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-violet-500 focus:ring-violet-500 text-white sm:text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-300">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-violet-500 focus:ring-violet-500 text-white sm:text-sm"
                  >
                    <option>Algorithmic Trading</option>
                    <option>Investment Management</option>
                    <option>IT Automation</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-violet-500 focus:ring-violet-500 text-white sm:text-sm"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-700 hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Contact information</h2>
              
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="ml-3 text-base">
                      <p className="font-medium text-white">Email</p>
                      <p className="mt-1 text-gray-400">info@arkane-fintech.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="ml-3 text-base">
                      <p className="font-medium text-white">Phone</p>
                      <p className="mt-1 text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="ml-3 text-base">
                      <p className="font-medium text-white">Office</p>
                      <p className="mt-1 text-gray-400">
                        123 Financial District<br />
                        New York, NY 10004<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Clock className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="ml-3 text-base">
                      <p className="font-medium text-white">Working Hours</p>
                      <p className="mt-1 text-gray-400">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-white mb-4">Global Offices</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <h4 className="font-medium text-white">London</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      45 Canary Wharf<br />
                      London, E14 5HQ<br />
                      United Kingdom
                    </p>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <h4 className="font-medium text-white">Singapore</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      8 Marina View<br />
                      Singapore 018960<br />
                      Singapore
                    </p>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <h4 className="font-medium text-white">Hong Kong</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      88 Queens Road<br />
                      Central District<br />
                      Hong Kong
                    </p>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                    <h4 className="font-medium text-white">Zurich</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      Bahnhofstrasse 64<br />
                      8001 Zurich<br />
                      Switzerland
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

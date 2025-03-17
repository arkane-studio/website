import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-16 bg-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-violet-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team to learn more about our services or to discuss your specific needs.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Contact Form and Info */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-300">
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 block w-full bg-black border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
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
                      autoComplete="family-name"
                      className="mt-1 block w-full bg-black border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
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
                    autoComplete="email"
                    className="mt-1 block w-full bg-black border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
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
                    autoComplete="organization"
                    className="mt-1 block w-full bg-black border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="mt-1 block w-full bg-black border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full bg-black border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-900 hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-violet-400" />
                    </div>
                    <div className="ml-3 text-base text-gray-300">
                      <p>info@arkane-finance.com</p>
                      <p className="mt-1 text-gray-400">For general inquiries</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-violet-400" />
                    </div>
                    <div className="ml-3 text-base text-gray-300">
                      <p>+1 (555) 123-4567</p>
                      <p className="mt-1 text-gray-400">Mon-Fri 9am-5pm ET</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-violet-400" />
                    </div>
                    <div className="ml-3 text-base text-gray-300">
                      <p>123 Wall Street</p>
                      <p>New York, NY 10005</p>
                      <p className="mt-1 text-gray-400">United States</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-6">Schedule a Consultation</h2>
                
                <p className="text-gray-300 mb-6">
                  Interested in learning more about our services? Schedule a free consultation with one of our experts.
                </p>
                
                <div className="flex items-center">
                  <MessageSquare className="h-6 w-6 text-violet-400 mr-2" />
                  <span className="text-gray-300">30-minute consultation</span>
                </div>
                
                <button
                  type="button"
                  className="mt-6 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-900 hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                >
                  Book a Meeting
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-800">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Our Location</h2>
              
              <div className="h-96 bg-black rounded-lg flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <MapPin className="h-12 w-12 text-violet-400 mx-auto mb-4" />
                  <p className="text-lg">Interactive map would be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

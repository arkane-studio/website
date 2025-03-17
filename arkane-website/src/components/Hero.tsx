import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, TrendingUp, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-red-950 via-red-900 to-gray-950 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(white, rgba(255, 255, 255, 0.2) 2px, transparent 40px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Next-Gen <span className="text-red-400">Quantitative</span> Trading Solutions
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl">
              ARKANE combines cutting-edge algorithms, AI, and financial expertise to deliver exceptional trading performance and IT automation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/algorithms"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-800 hover:bg-red-900 transition-colors flex items-center justify-center"
              >
                Explore Algorithms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-red-900 transition-colors flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-75"></div>
              <div className="relative bg-gray-950 rounded-lg overflow-hidden border border-gray-800">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                      <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                      <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-gray-400 text-sm">ARKANE Trading Terminal</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-8 bg-gray-900 rounded w-full"></div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-24 bg-gray-900 rounded flex items-center justify-center">
                        <BarChart3 className="h-10 w-10 text-red-600" />
                      </div>
                      <div className="h-24 bg-gray-900 rounded flex items-center justify-center">
                        <TrendingUp className="h-10 w-10 text-green-500" />
                      </div>
                      <div className="h-24 bg-gray-900 rounded flex items-center justify-center">
                        <Cpu className="h-10 w-10 text-violet-500" />
                      </div>
                    </div>
                    <div className="h-40 bg-gray-900 rounded"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-12 bg-red-800 rounded"></div>
                      <div className="h-12 bg-gray-900 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

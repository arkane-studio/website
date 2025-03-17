import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black"></div>
      
      {/* Red accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-red-950/30 to-transparent rounded-bl-full blur-3xl"></div>
      
      <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1>
                  <span className="block text-sm font-semibold uppercase tracking-wide text-violet-500 sm:text-base lg:text-sm xl:text-base">
                    Next-Generation Trading
                  </span>
                  <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                    <span className="block text-white">Quantitative</span>
                    <span className="block text-violet-500">Trading Algorithms</span>
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  ARKANE combines advanced mathematical models, machine learning, and high-frequency data analysis to identify and exploit market inefficiencies.
                </p>
                <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 justify-center lg:justify-start">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-violet-900 hover:bg-violet-800"
                    >
                      Get Started
                      <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-violet-400 bg-gray-900 hover:bg-gray-800"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md"
              >
                <div className="relative block w-full bg-gray-900 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-transparent"></div>
                  <div className="p-8">
                    <div className="h-64 flex flex-col justify-center">
                      <div className="flex justify-between items-center mb-6">
                        <div className="text-white font-medium">ARKANE Trading Terminal</div>
                        <div className="flex space-x-2">
                          <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                          <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                          <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="h-6 bg-black rounded w-full"></div>
                        <div className="h-6 bg-black rounded w-3/4"></div>
                        <div className="h-6 bg-black rounded w-5/6"></div>
                        <div className="h-6 bg-black rounded w-2/3"></div>
                      </div>
                      
                      <div className="mt-6 grid grid-cols-2 gap-4">
                        <div className="h-16 bg-violet-900/30 rounded flex items-center justify-center">
                          <div className="text-violet-400 font-medium">BUY</div>
                        </div>
                        <div className="h-16 bg-red-900/30 rounded flex items-center justify-center">
                          <div className="text-red-400 font-medium">SELL</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

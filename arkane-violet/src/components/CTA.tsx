import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to experience the future of trading?</span>
            <span className="block text-violet-500">Start your journey with ARKANE today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-300">
            Join the growing community of traders and institutions leveraging our advanced algorithms.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex lg:mt-0 lg:flex-shrink-0"
        >
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-violet-900 hover:bg-violet-800"
            >
              Get started
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-violet-400 bg-gray-900 hover:bg-gray-800"
            >
              Learn more
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTA;

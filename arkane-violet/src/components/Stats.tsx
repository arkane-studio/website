import { motion } from 'framer-motion';

const Stats = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Trusted by traders and institutions worldwide
          </h2>
          <p className="mt-3 text-xl text-gray-300 sm:mt-4">
            Our algorithms process millions of data points daily to deliver exceptional performance
          </p>
        </motion.div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-400">
              Data Points Processed Daily
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-violet-500">
              100M+
            </dd>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col mt-10 sm:mt-0"
          >
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-400">
              Trades Executed Monthly
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-violet-500">
              500K+
            </dd>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col mt-10 sm:mt-0"
          >
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-400">
              Assets Under Management
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-violet-500">
              $250M+
            </dd>
          </motion.div>
        </dl>
      </div>
    </div>
  );
};

export default Stats;

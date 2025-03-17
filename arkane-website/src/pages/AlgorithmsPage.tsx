import { motion } from 'framer-motion';
import { algorithmData, calculatePerformance } from '../utils/mockData';
import AlgorithmCard from '../components/AlgorithmCard';
import { BarChart3, TrendingUp, Zap } from 'lucide-react';

const AlgorithmsPage = () => {
  return (
    <div className="pt-16 bg-gray-950">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-950 to-red-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Quantitative Trading Algorithms
            </h1>
            <p className="mt-6 text-xl text-red-200 max-w-3xl mx-auto">
              Our proprietary algorithms leverage advanced mathematics, machine learning, and high-frequency data analysis to identify and exploit market inefficiencies.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Algorithm Cards */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {algorithmData.slice(0, 3).map((algorithm, index) => (
              <AlgorithmCard
                key={algorithm.id}
                title={algorithm.title}
                description={algorithm.description}
                performance={calculatePerformance(algorithm.data)}
                data={algorithm.data}
                color={algorithm.color}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Algorithm Features */}
      <div className="bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white">
              Algorithm Capabilities
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
              Our algorithms are designed with sophisticated capabilities to navigate complex market conditions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-red-500 mb-5">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Multi-factor Analysis</h3>
              <p className="text-gray-400">
                Analyzes hundreds of market factors simultaneously to identify trading opportunities invisible to human traders.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-red-900 text-white flex items-center justify-center text-sm font-medium mr-2">1</span>
                  <span className="text-gray-400">Price action patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-red-900 text-white flex items-center justify-center text-sm font-medium mr-2">2</span>
                  <span className="text-gray-400">Volume analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-red-900 text-white flex items-center justify-center text-sm font-medium mr-2">3</span>
                  <span className="text-gray-400">Market sentiment indicators</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-blue-500 mb-5">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Adaptive Risk Management</h3>
              <p className="text-gray-400">
                Dynamically adjusts position sizing and risk exposure based on market volatility and correlation metrics.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-medium mr-2">1</span>
                  <span className="text-gray-400">Dynamic position sizing</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-medium mr-2">2</span>
                  <span className="text-gray-400">Volatility-based stop losses</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-medium mr-2">3</span>
                  <span className="text-gray-400">Correlation-aware hedging</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-violet-500 mb-5">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">High-Frequency Execution</h3>
              <p className="text-gray-400">
                Microsecond-level trade execution with smart order routing to minimize slippage and market impact.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-violet-900 text-white flex items-center justify-center text-sm font-medium mr-2">1</span>
                  <span className="text-gray-400">Smart order routing</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-violet-900 text-white flex items-center justify-center text-sm font-medium mr-2">2</span>
                  <span className="text-gray-400">FPGA-accelerated execution</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-violet-900 text-white flex items-center justify-center text-sm font-medium mr-2">3</span>
                  <span className="text-gray-400">Liquidity-aware timing</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmsPage;

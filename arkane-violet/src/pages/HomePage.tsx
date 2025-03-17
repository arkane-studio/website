import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { algorithmData } from '../utils/mockData';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import { TrendingUp, TrendingDown, Zap, Shield, BarChart2 } from 'lucide-react';

const HomePage = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithmData[0]);
  
  // Only show the first 3 algorithms (omit manual portfolio)
  const displayedAlgorithms = algorithmData.slice(0, 3);
  
  // Normalize data to start at 100
  const normalizedData = selectedAlgorithm.data.map((item, index) => {
    if (index === 0) {
      return { ...item, value: 100 };
    } else {
      const startValue = selectedAlgorithm.data[0].value;
      const ratio = item.value / startValue;
      return { ...item, value: 100 * ratio };
    }
  });
  
  // Calculate min and max for domain
  const values = normalizedData.map(item => item.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const middle = (min + max) / 2;
  
  // Calculate domain with padding to center the line
  const padding = Math.max(max - middle, middle - min) * 1.2;
  const yDomain = [middle - padding, middle + padding];
  
  return (
    <div className="bg-black">
      <Hero />
      <Stats />
      
      {/* Algorithm Performance Section */}
      <div className="bg-black py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-base font-semibold text-violet-400 tracking-wide uppercase">Performance</h2>
            <p className="mt-1 text-3xl font-extrabold text-white sm:text-4xl">
              Our Trading Algorithms
            </p>
            <p className="max-w-2xl mt-5 mx-auto text-xl text-gray-300">
              Track record of our proprietary quantitative strategies
            </p>
          </motion.div>
          
          {/* Algorithm Selector Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {displayedAlgorithms.map((algorithm) => (
                <button
                  key={algorithm.id}
                  onClick={() => setSelectedAlgorithm(algorithm)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedAlgorithm.id === algorithm.id
                      ? `bg-${algorithm.id === 'momentum' ? 'red' : algorithm.id === 'statistical' ? 'blue' : 'violet'}-900 text-white shadow-lg`
                      : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  {algorithm.title}
                </button>
              ))}
            </div>
          </div>
          
          {/* Selected Algorithm Card */}
          <motion.div
            key={selectedAlgorithm.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow max-w-4xl mx-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{selectedAlgorithm.title}</h3>
                {/* Calculate performance */}
                {(() => {
                  const startValue = selectedAlgorithm.data[0].value;
                  const endValue = selectedAlgorithm.data[selectedAlgorithm.data.length - 1].value;
                  const performance = ((endValue - startValue) / startValue * 100).toFixed(1);
                  const isPositive = parseFloat(performance) > 0;
                  
                  return (
                    <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                      {isPositive ? <TrendingUp className="w-5 h-5 mr-1" /> : <TrendingDown className="w-5 h-5 mr-1" />}
                      <span className="font-semibold">{isPositive ? '+' : ''}{performance}%</span>
                    </div>
                  );
                })()}
              </div>
              
              <p className="text-gray-300 mb-6">{selectedAlgorithm.description}</p>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={normalizedData} margin={{ top: 5, right: 5, left: 15, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" tick={{ fill: '#9CA3AF' }} />
                    <YAxis 
                      domain={yDomain} 
                      tick={{ fill: '#9CA3AF' }}
                      tickFormatter={(value) => value.toFixed(0)}
                      width={40}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#111827', 
                        borderRadius: '0.5rem',
                        border: 'none',
                        color: '#F9FAFB',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)'
                      }}
                      labelStyle={{ color: '#F9FAFB' }}
                      formatter={(value) => [`${parseFloat(value as string).toFixed(1)}`, 'Value']}
                    />
                    <ReferenceLine y={100} stroke="#4B5563" strokeDasharray="3 3" />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke={selectedAlgorithm.color} 
                      strokeWidth={2}
                      dot={{ r: 4, strokeWidth: 2 }}
                      activeDot={{ r: 6, strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Features />
      
      {/* Blockchain Innovation Section (replacing "Ready to elevate your trading") */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Blockchain-Powered Financial Innovation</h2>
              <p className="text-lg text-gray-300 mb-6">
                ARKANE is at the forefront of integrating blockchain technology with traditional financial markets, creating unprecedented opportunities for our clients.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-900 text-violet-400 flex items-center justify-center">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium text-white">Decentralized Finance Integration</h3>
                    <p className="mt-2 text-gray-400">
                      Our algorithms seamlessly operate across traditional and decentralized markets, capturing alpha in both ecosystems.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-900 text-violet-400 flex items-center justify-center">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium text-white">Tokenized Asset Strategies</h3>
                    <p className="mt-2 text-gray-400">
                      Access emerging opportunities in tokenized securities, real estate, and alternative assets with institutional-grade risk management.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-900 text-violet-400 flex items-center justify-center">
                    <BarChart2 className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium text-white">Smart Contract Automation</h3>
                    <p className="mt-2 text-gray-400">
                      Our proprietary smart contract infrastructure enables automated execution of complex trading and investment strategies with unprecedented efficiency.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="px-6 py-3 bg-violet-900 text-white rounded-md font-medium hover:bg-violet-800 transition-colors">
                  Explore Blockchain Solutions
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-violet-600 rounded-lg blur opacity-75"></div>
                <div className="relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                        <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                        <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-gray-400 text-sm">ARKANE Blockchain Terminal</div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="h-8 bg-black rounded w-full"></div>
                      <div className="h-40 bg-black rounded flex items-center justify-center">
                        <svg className="h-16 w-16 text-violet-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 1L3 5V19L12 23L21 19V5L12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 23V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M21 5L12 12L3 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="h-8 bg-black rounded w-3/4"></div>
                      <div className="h-8 bg-black rounded w-1/2"></div>
                      <div className="h-8 bg-black rounded w-5/6"></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-12 bg-violet-900 rounded"></div>
                        <div className="h-12 bg-black rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <CTA />
    </div>
  );
};

export default HomePage;

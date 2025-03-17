import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { algorithmData } from '../utils/mockData';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Area, AreaChart, ReferenceLine
} from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

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
    <div className="bg-gray-950">
      <Hero />
      <Stats />
      
      {/* Algorithm Performance Section */}
      <div className="bg-gray-900 py-16 sm:py-24">
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
                      ? `bg-${algorithm.id === 'momentum' ? 'red' : algorithm.id === 'statistical' ? 'blue' : 'violet'}-700 text-white shadow-lg`
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
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
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow max-w-4xl mx-auto"
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
                        backgroundColor: '#1F2937', 
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
      <CTA />
    </div>
  );
};

export default HomePage;

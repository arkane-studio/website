import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  ReferenceLine, Legend
} from 'recharts';
import { 
  DollarSign, TrendingUp, Shield, BarChart2, 
  Clock, Calendar, ArrowUp, ArrowDown, Zap, Database
} from 'lucide-react';

const InvestmentsPage = () => {
  // Time period state for portfolio performance
  const [timePeriod, setTimePeriod] = useState('monthly');
  
  // Generate portfolio performance data
  const generatePortfolioData = (period: string) => {
    const monthlyData = [
      { name: 'Dec 23', portfolio: 100, benchmark: 100 },
      { name: 'Jan 24', portfolio: 115, benchmark: 103 },
      { name: 'Feb 24', portfolio: 145, benchmark: 106 },
      { name: 'Mar 24', portfolio: 180, benchmark: 110 },
      { name: 'Apr 24', portfolio: 210, benchmark: 112 },
      { name: 'May 24', portfolio: 240, benchmark: 115 },
      { name: 'Jun 24', portfolio: 270, benchmark: 118 },
      { name: 'Jul 24', portfolio: 300, benchmark: 120 },
      { name: 'Aug 24', portfolio: 330, benchmark: 123 },
      { name: 'Sep 24', portfolio: 360, benchmark: 125 },
      { name: 'Oct 24', portfolio: 390, benchmark: 128 },
      { name: 'Nov 24', portfolio: 420, benchmark: 130 },
      { name: 'Dec 24', portfolio: 450, benchmark: 133 },
      { name: 'Jan 25', portfolio: 470, benchmark: 135 },
      { name: 'Feb 25', portfolio: 490, benchmark: 138 },
      { name: 'Mar 25', portfolio: 500, benchmark: 140 }
    ];
    
    if (period === 'yearly') {
      // Return quarterly data points for yearly view
      return monthlyData.filter((_, index) => index === 0 || index % 3 === 0 || index === monthlyData.length - 1);
    }
    
    return monthlyData;
  };
  
  // Current performance indicators
  const currentPerformance = {
    monthly: 8.5,
    yearly: 400
  };

  return (
    <div className="pt-16 bg-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-950 via-black to-black text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Investment Strategies
            </h1>
            <p className="mt-6 text-xl text-violet-200 max-w-3xl mx-auto">
              ARKANE combines algorithmic trading with blockchain technology to deliver superior risk-adjusted returns.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Current Performance Dashboard */}
      <div className="bg-black py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">Current Portfolio Performance</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'Monthly Return', value: currentPerformance.monthly, icon: <Calendar className="h-5 w-5 text-violet-400" /> },
              { label: 'Annual Return', value: currentPerformance.yearly, icon: <BarChart2 className="h-5 w-5 text-violet-400" /> }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-800"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="p-2 rounded-md bg-black">
                      {item.icon}
                    </div>
                    <span className="ml-3 text-gray-300">{item.label}</span>
                  </div>
                  <div className="flex items-center text-green-500">
                    <ArrowUp className="h-4 w-4 mr-1" />
                    <span className="text-xl font-bold">+{item.value}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Portfolio Performance Graph with Time Period Toggle */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h3 className="text-xl font-bold text-white mb-4 sm:mb-0">Portfolio Performance vs S&P 500</h3>
              
              <div className="flex space-x-2 bg-black p-1 rounded-lg">
                {['monthly', 'yearly'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setTimePeriod(period)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      timePeriod === period
                        ? 'bg-violet-900 text-white'
                        : 'text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    {period.charAt(0).toUpperCase() + period.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-violet-500 mr-2"></div>
                    <span className="text-gray-300 text-sm">ARKANE Portfolio</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-gray-300 text-sm">S&P 500</span>
                  </div>
                </div>
                
                <div className="flex items-center text-green-500">
                  <TrendingUp className="h-5 w-5 mr-1" />
                  <span className="font-semibold">
                    +{currentPerformance.yearly}%
                  </span>
                </div>
              </div>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={generatePortfolioData(timePeriod)} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fill: '#9CA3AF' }}
                    />
                    <YAxis 
                      tick={{ fill: '#9CA3AF' }}
                      domain={[0, 550]}
                      tickFormatter={(value) => `${value}%`}
                      width={50}
                    />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, '']}
                      contentStyle={{ 
                        backgroundColor: '#111827', 
                        borderRadius: '0.5rem',
                        border: 'none',
                        color: '#F9FAFB',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)'
                      }}
                    />
                    <Legend 
                      formatter={(value) => <span style={{ color: '#D1D5DB' }}>{value === 'portfolio' ? 'ARKANE Portfolio' : 'S&P 500'}</span>}
                    />
                    <ReferenceLine y={100} stroke="#4B5563" strokeDasharray="3 3" />
                    <Line 
                      type="monotone" 
                      dataKey="portfolio" 
                      name="portfolio"
                      stroke="#8b5cf6" 
                      strokeWidth={2}
                      dot={{ r: 4, strokeWidth: 2 }}
                      activeDot={{ r: 6, strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="benchmark" 
                      name="benchmark"
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      dot={{ r: 4, strokeWidth: 2 }}
                      activeDot={{ r: 6, strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-4 text-sm text-gray-400">
                <p>
                  <span className="font-medium text-white">Important Information:</span> Performance shown from December 2023 to March 2025. 
                  Past performance is not indicative of future results. The portfolio is rebalanced quarterly and includes dividends reinvested.
                  Benchmark: S&P 500 Total Return Index.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blockchain Investment Approach */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Blockchain-First Investment Approach</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              We believe blockchain technology will fundamentally reshape financial infrastructure and payment systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-4">
                    <Zap className="h-6 w-6 text-violet-400 mr-2" />
                    <h3 className="text-xl font-bold text-white">Higher Risk, Higher Reward</h3>
                  </div>
                  <p className="text-gray-300">
                    Our investment approach embraces the transformative potential of blockchain technology, taking calculated risks in this emerging sector to capture outsized returns.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-4">
                    <Database className="h-6 w-6 text-violet-400 mr-2" />
                    <h3 className="text-xl font-bold text-white">Distributed Ledger Technology</h3>
                  </div>
                  <p className="text-gray-300">
                    We invest in projects building the infrastructure for a more efficient, transparent, and accessible financial system powered by distributed ledger technology.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-violet-400 mr-2" />
                    <h3 className="text-xl font-bold text-white">Risk Management</h3>
                  </div>
                  <p className="text-gray-300">
                    While embracing higher risk opportunities, we implement sophisticated risk controls and diversification strategies to protect capital during market volatility.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Blockchain Investment Thesis</h3>
              
              <p className="text-gray-300 mb-6">
                At ARKANE, we believe blockchain technology represents the most significant paradigm shift in financial infrastructure since the internet. Our investment approach is built on three core principles:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-black text-violet-400 flex items-center justify-center mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Early Adoption Advantage</h4>
                    <p className="mt-2 text-gray-400">
                      By positioning our portfolio at the forefront of blockchain adoption, we capture value creation at its earliest and most explosive growth phase.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-black text-violet-400 flex items-center justify-center mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Infrastructure Focus</h4>
                    <p className="mt-2 text-gray-400">
                      We prioritize investments in the fundamental infrastructure and protocols that will form the backbone of the new financial system.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-black text-violet-400 flex items-center justify-center mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Algorithmic Edge</h4>
                    <p className="mt-2 text-gray-400">
                      Our proprietary algorithms provide unique insights into blockchain markets, identifying inefficiencies and opportunities invisible to traditional analysis.
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

export default InvestmentsPage;

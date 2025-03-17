import { motion } from 'framer-motion';
import { useState } from 'react';
import { algorithmData, portfolioData, generateAlgorithmData } from '../utils/mockData';
import AlgorithmCard from '../components/AlgorithmCard';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Area, AreaChart,
  ComposedChart, Bar
} from 'recharts';
import { 
  DollarSign, TrendingUp, Shield, BarChart2, 
  Clock, Calendar, ArrowUp, ArrowDown
} from 'lucide-react';

const InvestmentsPage = () => {
  // Time period state for portfolio performance
  const [timePeriod, setTimePeriod] = useState('weekly');
  
  // Generate historical data starting from April last year
  const generateHistoricalData = (period: string) => {
    const now = new Date();
    const startDate = new Date(now.getFullYear() - 1, 3, 1); // April last year
    const months = Math.floor((now.getTime() - startDate.getTime()) / (30 * 24 * 60 * 60 * 1000));
    
    if (period === 'yearly') {
      return generateAlgorithmData(months, 5, 1.2);
    } else if (period === 'monthly') {
      return generateAlgorithmData(Math.min(months, 12), 4, 1.0);
    } else {
      // Weekly - generate for the last 12 weeks
      const weeks = Math.min(Math.floor(months * 4.33), 12); // ~4.33 weeks per month
      return portfolioData.weekly.slice(-weeks);
    }
  };
  
  // Get data based on selected time period
  const getChartData = () => {
    switch(timePeriod) {
      case 'yearly':
        return generateHistoricalData('yearly');
      case 'monthly':
        return generateHistoricalData('monthly');
      default:
        return generateHistoricalData('weekly');
    }
  };
  
  // Manual investment data for the pie chart
  const allocationData = [
    { name: 'Equities', value: 45, color: '#dc2626' }, // Red
    { name: 'Fixed Income', value: 25, color: '#3b82f6' }, // Blue
    { name: 'Alternatives', value: 20, color: '#7c3aed' }, // Violet
    { name: 'Cash', value: 10, color: '#0284c7' } // Sky blue
  ];

  // Current performance indicators
  const { daily, weekly, monthly, yearly } = portfolioData.currentPerformance;

  return (
    <div className="pt-16 bg-gray-950">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-950 via-violet-900 to-gray-950 text-white py-16 sm:py-24">
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
              ARKANE combines algorithmic trading with expert-managed portfolios to deliver superior risk-adjusted returns.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Current Performance Dashboard */}
      <div className="bg-gray-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">Current Portfolio Performance</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: 'Today', value: daily, icon: <Clock className="h-5 w-5" /> },
              { label: 'This Week', value: weekly, icon: <Calendar className="h-5 w-5" /> },
              { label: 'This Month', value: monthly, icon: <BarChart2 className="h-5 w-5" /> },
              { label: 'This Year', value: yearly, icon: <TrendingUp className="h-5 w-5" /> }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="p-2 rounded-md bg-gray-700">
                      {item.icon}
                    </div>
                    <span className="ml-3 text-gray-300">{item.label}</span>
                  </div>
                  <div className={`flex items-center ${item.value >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {item.value >= 0 ? 
                      <ArrowUp className="h-4 w-4 mr-1" /> : 
                      <ArrowDown className="h-4 w-4 mr-1" />
                    }
                    <span className="text-xl font-bold">{item.value >= 0 ? '+' : ''}{item.value}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Manual Investment Strategy */}
      <div className="bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Manual Investment Portfolio</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              Our expert-managed portfolio combines traditional investment wisdom with modern quantitative insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4">Current Asset Allocation</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={allocationData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {allocationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => `${value}%`}
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          borderRadius: '0.5rem',
                          border: 'none',
                          color: '#F9FAFB'
                        }}
                      />
                      <Legend formatter={(value) => <span style={{ color: '#D1D5DB' }}>{value}</span>} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-6 w-6 text-blue-400 mr-2" />
                    <h3 className="text-xl font-bold text-white">Strategic Asset Allocation</h3>
                  </div>
                  <p className="text-gray-300">
                    Our portfolio managers construct diversified portfolios based on long-term market forecasts and client risk profiles.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-6 w-6 text-blue-400 mr-2" />
                    <h3 className="text-xl font-bold text-white">Tactical Adjustments</h3>
                  </div>
                  <p className="text-gray-300">
                    We make tactical shifts to capitalize on short-term market opportunities while maintaining strategic alignment.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-blue-400 mr-2" />
                    <h3 className="text-xl font-bold text-white">Risk Management</h3>
                  </div>
                  <p className="text-gray-300">
                    Sophisticated risk controls monitor and adjust exposure to various market factors to protect capital.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Portfolio Performance Graph with Time Period Toggle */}
          <div className="mt-16">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <h3 className="text-xl font-bold text-white mb-4 sm:mb-0">Portfolio Performance</h3>
                
                <div className="flex space-x-2 bg-gray-800 p-1 rounded-lg">
                  {['weekly', 'monthly', 'yearly'].map((period) => (
                    <button
                      key={period}
                      onClick={() => setTimePeriod(period)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        timePeriod === period
                          ? 'bg-violet-700 text-white'
                          : 'text-gray-300 hover:bg-gray-700'
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
                      <span className="text-gray-300 text-sm">Portfolio Value</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-gray-300 text-sm">Benchmark</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-green-500">
                    <TrendingUp className="h-5 w-5 mr-1" />
                    <span className="font-semibold">
                      +{(timePeriod === 'yearly' ? 18.7 : timePeriod === 'monthly' ? 4.2 : 1.8).toFixed(1)}%
                    </span>
                  </div>
                </div>
                
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={getChartData()} margin={{ top: 10, right: 30, left: 50, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorPortfolio" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#7c3aed" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="colorBenchmark" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis 
                        dataKey="name" 
                        tick={{ fill: '#9CA3AF' }}
                        tickFormatter={(value) => {
                          // Format based on time period
                          if (timePeriod === 'yearly' || timePeriod === 'monthly') {
                            return value;
                          } else {
                            // For weekly, show W1, W2, etc.
                            return `W${value.replace('W', '')}`;
                          }
                        }}
                      />
                      <YAxis 
                        tick={{ fill: '#9CA3AF' }}
                        domain={['dataMin - 5', 'dataMax + 5']}
                        tickFormatter={(value) => `$${value}`}
                        width={50}
                      />
                      <Tooltip 
                        formatter={(value) => [`$${value}`, 'Value']}
                        labelFormatter={(label) => {
                          if (timePeriod === 'yearly' || timePeriod === 'monthly') {
                            return `${label} ${timePeriod === 'yearly' ? new Date().getFullYear() : ''}`;
                          } else {
                            return `Week ${label.replace('W', '')}`;
                          }
                        }}
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          borderRadius: '0.5rem',
                          border: 'none',
                          color: '#F9FAFB',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)'
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        name="Portfolio"
                        stroke="#7c3aed" 
                        fillOpacity={1} 
                        fill="url(#colorPortfolio)" 
                      />
                      {/* Generate benchmark data by reducing portfolio value by ~15% */}
                      <Area 
                        type="monotone" 
                        dataKey={(data) => data.value * 0.85} 
                        name="Benchmark"
                        stroke="#3b82f6" 
                        fillOpacity={1} 
                        fill="url(#colorBenchmark)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-4 text-sm text-gray-400">
                  <p>
                    <span className="font-medium text-white">Important Information:</span> Performance shown from April {new Date().getFullYear() - 1} to present. 
                    Past performance is not indicative of future results. The portfolio is rebalanced quarterly and includes dividends reinvested.
                    Benchmark: S&P 500 Total Return Index.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Algorithm Performance */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Algorithm Performance</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              Our algorithmic strategies complement traditional investments with uncorrelated returns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {algorithmData.slice(0, 3).map((algorithm, index) => (
              <AlgorithmCard
                key={algorithm.id}
                title={algorithm.title}
                description={algorithm.description}
                performance={Math.random() * 30 + 10} // Random performance between 10% and 40%
                data={algorithm.data}
                color={algorithm.color}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Investment Process */}
      <div className="bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Our Investment Process</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              A systematic approach combining human expertise with algorithmic precision
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            
            <div className="relative flex justify-between">
              {[1, 2, 3, 4].map((step) => (
                <motion.div 
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: step * 0.1 }}
                  className="bg-gray-950 px-4"
                >
                  <span className="h-10 w-10 rounded-full bg-red-800 flex items-center justify-center text-white font-medium">
                    {step}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-4 grid grid-cols-4 gap-4 text-center">
              <div>
                <h3 className="text-lg font-medium text-white">Research</h3>
                <p className="mt-2 text-sm text-gray-400">Quantitative and fundamental analysis</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Strategy</h3>
                <p className="mt-2 text-sm text-gray-400">Portfolio construction and optimization</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Execution</h3>
                <p className="mt-2 text-sm text-gray-400">Efficient implementation with minimal impact</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Monitoring</h3>
                <p className="mt-2 text-sm text-gray-400">Continuous performance and risk assessment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentsPage;

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';

// Generate random performance data starting from April last year
const generatePerformanceData = () => {
  const weeklyData = [];
  const monthlyData = [];
  const yearlyData = [];
  
  let weeklyValue = 100;
  let monthlyValue = 100;
  let yearlyValue = 100;
  
  // Generate weekly data (52 weeks)
  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 1);
  startDate.setMonth(3); // April
  
  for (let i = 0; i < 52; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i * 7);
    
    const change = (Math.random() - 0.4) * 2; // Slightly positive bias
    weeklyValue = Math.max(weeklyValue * (1 + change / 100), 90);
    
    weeklyData.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      value: parseFloat(weeklyValue.toFixed(2))
    });
  }
  
  // Generate monthly data (12 months)
  for (let i = 0; i < 12; i++) {
    const date = new Date(startDate);
    date.setMonth(date.getMonth() + i);
    
    const change = (Math.random() - 0.4) * 4; // Slightly positive bias
    monthlyValue = Math.max(monthlyValue * (1 + change / 100), 90);
    
    monthlyData.push({
      date: date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      value: parseFloat(monthlyValue.toFixed(2))
    });
  }
  
  // Generate yearly data (5 years)
  const yearStart = new Date();
  yearStart.setFullYear(yearStart.getFullYear() - 5);
  
  for (let i = 0; i < 5; i++) {
    const date = new Date(yearStart);
    date.setFullYear(date.getFullYear() + i);
    
    const change = (Math.random() - 0.3) * 10; // Slightly positive bias
    yearlyValue = Math.max(yearlyValue * (1 + change / 100), 80);
    
    yearlyData.push({
      date: date.getFullYear().toString(),
      value: parseFloat(yearlyValue.toFixed(2))
    });
  }
  
  return { weeklyData, monthlyData, yearlyData };
};

const { weeklyData, monthlyData, yearlyData } = generatePerformanceData();

const PortfolioPerformance = () => {
  const [timeframe, setTimeframe] = useState('weekly');
  
  const data = timeframe === 'weekly' ? weeklyData : timeframe === 'monthly' ? monthlyData : yearlyData;
  
  // Calculate current performance
  const startValue = data[0].value;
  const currentValue = data[data.length - 1].value;
  const performancePercent = ((currentValue - startValue) / startValue * 100).toFixed(2);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full glass-card p-6 shadow-lg"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Portfolio Performance</h3>
          <p className="text-white/60">Manual Investment Portfolio</p>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-white/60">Performance</p>
            <p className={`text-2xl font-bold ${parseFloat(performancePercent) >= 0 ? 'text-accent' : 'text-danger'}`}>
              {performancePercent}%
            </p>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => setTimeframe('weekly')}
              className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                timeframe === 'weekly'
                  ? 'bg-primary text-white'
                  : 'bg-background text-white/70 hover:bg-background-light hover:text-white'
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setTimeframe('monthly')}
              className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                timeframe === 'monthly'
                  ? 'bg-primary text-white'
                  : 'bg-background text-white/70 hover:bg-background-light hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setTimeframe('yearly')}
              className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                timeframe === 'yearly'
                  ? 'bg-primary text-white'
                  : 'bg-background text-white/70 hover:bg-background-light hover:text-white'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>
      
      <div className="h-80 bg-background/50 rounded-xl p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="date" 
              stroke="rgba(255,255,255,0.4)"
              angle={-45}
              textAnchor="end"
              height={60}
              tick={{ fontSize: 12, fill: 'rgba(255,255,255,0.6)' }}
            />
            <YAxis 
              stroke="rgba(255,255,255,0.4)"
              tickFormatter={(value) => `${value}`}
              domain={['dataMin - 5', 'dataMax + 5']}
              width={60}
              tick={{ fill: 'rgba(255,255,255,0.6)' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(26, 29, 37, 0.95)', 
                borderColor: '#2563EB', 
                borderRadius: '0.5rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                color: 'white'
              }}
              formatter={(value: number) => [`${value}`, 'Value']}
            />
            <Legend 
              wrapperStyle={{ color: 'rgba(255,255,255,0.6)' }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              name="Portfolio Value" 
              stroke="#10B981" 
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, fill: '#10B981', stroke: '#fff' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default PortfolioPerformance;

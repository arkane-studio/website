import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';

// Generate random performance data
const generatePerformanceData = (volatility: number, trend: number) => {
  const data = [];
  let value = 100;
  
  for (let i = 0; i < 30; i++) {
    const change = (Math.random() - 0.5) * volatility + trend;
    value = Math.max(value * (1 + change / 100), 90);
    
    data.push({
      day: i + 1,
      value: parseFloat(value.toFixed(2))
    });
  }
  
  return data;
};

const algorithms = [
  {
    id: 'alpha',
    name: 'Alpha Momentum',
    description: 'Trend-following algorithm that capitalizes on market momentum across multiple timeframes.',
    performance: '0.08%',
    data: generatePerformanceData(0.8, 0.1)
  },
  {
    id: 'quantum',
    name: 'Quantum Edge',
    description: 'Statistical arbitrage strategy that identifies pricing inefficiencies across correlated assets.',
    performance: '0.07%',
    data: generatePerformanceData(0.6, 0.09)
  },
  {
    id: 'neural',
    name: 'Neural Adaptive',
    description: 'Deep learning model that adapts to changing market conditions using pattern recognition.',
    performance: '0.10%',
    data: generatePerformanceData(1.0, 0.12)
  }
];

const AlgorithmPerformance = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithms[0]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="flex flex-wrap gap-3 mb-8">
        {algorithms.map(algo => (
          <button
            key={algo.id}
            onClick={() => setSelectedAlgorithm(algo)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              selectedAlgorithm.id === algo.id
                ? 'bg-primary text-white shadow-glow-sm'
                : 'bg-background-card text-white/70 hover:bg-background-light hover:text-white'
            }`}
          >
            {algo.name}
          </button>
        ))}
      </div>
      
      <div className="glass-card p-6 shadow-lg">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">{selectedAlgorithm.name}</h3>
            <p className="text-white/60">{selectedAlgorithm.description}</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
            <div className="text-right">
              <p className="text-sm text-white/60">Daily Performance</p>
              <p className="text-2xl font-bold text-primary">{selectedAlgorithm.performance}</p>
            </div>
          </div>
        </div>
        
        <div className="h-80 bg-background/50 rounded-xl p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={selectedAlgorithm.data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="day" 
                label={{ value: 'Day', position: 'insideBottomRight', offset: -10, fill: 'rgba(255,255,255,0.6)' }}
                stroke="rgba(255,255,255,0.4)"
                tick={{ fill: 'rgba(255,255,255,0.6)' }}
              />
              <YAxis 
                domain={[95, 105]} 
                label={{ value: 'Value', angle: -90, position: 'insideLeft', fill: 'rgba(255,255,255,0.6)' }}
                stroke="rgba(255,255,255,0.4)"
                tick={{ fill: 'rgba(255,255,255,0.6)' }}
                width={50}
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
                labelFormatter={(label) => `Day ${label}`}
              />
              <Legend 
                wrapperStyle={{ color: 'rgba(255,255,255,0.6)' }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#2563EB" 
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, fill: '#2563EB', stroke: '#fff' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
};

export default AlgorithmPerformance;

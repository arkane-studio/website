import { motion } from 'framer-motion';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine
} from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface AlgorithmCardProps {
  title: string;
  description: string;
  performance: number;
  data: Array<{ name: string; value: number }>;
  color: string;
  delay: number;
}

const AlgorithmCard = ({ 
  title, 
  description, 
  performance, 
  data, 
  color, 
  delay 
}: AlgorithmCardProps) => {
  const isPositive = performance > 0;
  
  // Normalize data to start at 100
  const normalizedData = data.map((item, index) => {
    if (index === 0) {
      return { ...item, value: 100 };
    } else {
      const startValue = data[0].value;
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
  
  // Format performance to 1 decimal place
  const formattedPerformance = performance.toFixed(1);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? <TrendingUp className="w-5 h-5 mr-1" /> : <TrendingDown className="w-5 h-5 mr-1" />}
            <span className="font-semibold">{isPositive ? '+' : ''}{formattedPerformance}%</span>
          </div>
        </div>
        
        <p className="text-gray-300 mb-6">{description}</p>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={normalizedData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#9CA3AF' }} />
              <YAxis 
                domain={yDomain} 
                tick={{ fontSize: 12, fill: '#9CA3AF' }}
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
                formatter={(value) => [`${parseFloat(value as string).toFixed(1)}`, 'Value']}
              />
              <ReferenceLine y={100} stroke="#4B5563" strokeDasharray="3 3" />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={color} 
                strokeWidth={2}
                dot={{ r: 4, strokeWidth: 2 }}
                activeDot={{ r: 6, strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
};

export default AlgorithmCard;

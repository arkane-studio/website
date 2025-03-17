// Mock data for algorithm performance
export const algorithmData = [
  {
    id: 'momentum',
    title: 'Momentum Algorithm',
    description: 'Identifies and capitalizes on persistent price trends across multiple timeframes.',
    color: '#ef4444', // red-500
    data: [
      { name: 'Jan', value: 100 },
      { name: 'Feb', value: 105 },
      { name: 'Mar', value: 110 },
      { name: 'Apr', value: 108 },
      { name: 'May', value: 115 },
      { name: 'Jun', value: 120 },
      { name: 'Jul', value: 125 },
      { name: 'Aug', value: 130 },
      { name: 'Sep', value: 135 },
      { name: 'Oct', value: 140 },
      { name: 'Nov', value: 145 },
      { name: 'Dec', value: 150 },
    ]
  },
  {
    id: 'statistical',
    title: 'Statistical Arbitrage',
    description: 'Exploits price discrepancies between related securities using statistical models.',
    color: '#3b82f6', // blue-500
    data: [
      { name: 'Jan', value: 100 },
      { name: 'Feb', value: 102 },
      { name: 'Mar', value: 105 },
      { name: 'Apr', value: 108 },
      { name: 'May', value: 112 },
      { name: 'Jun', value: 115 },
      { name: 'Jul', value: 118 },
      { name: 'Aug', value: 122 },
      { name: 'Sep', value: 125 },
      { name: 'Oct', value: 128 },
      { name: 'Nov', value: 132 },
      { name: 'Dec', value: 135 },
    ]
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    description: 'Uses neural networks to identify complex patterns in market data.',
    color: '#8b5cf6', // violet-500
    data: [
      { name: 'Jan', value: 100 },
      { name: 'Feb', value: 108 },
      { name: 'Mar', value: 115 },
      { name: 'Apr', value: 110 },
      { name: 'May', value: 118 },
      { name: 'Jun', value: 125 },
      { name: 'Jul', value: 132 },
      { name: 'Aug', value: 140 },
      { name: 'Sep', value: 135 },
      { name: 'Oct', value: 142 },
      { name: 'Nov', value: 150 },
      { name: 'Dec', value: 160 },
    ]
  },
  {
    id: 'manual',
    title: 'Manual Portfolio',
    description: 'Expert-managed portfolio combining traditional and quantitative approaches.',
    color: '#10b981', // emerald-500
    data: [
      { name: 'Jan', value: 100 },
      { name: 'Feb', value: 103 },
      { name: 'Mar', value: 106 },
      { name: 'Apr', value: 109 },
      { name: 'May', value: 112 },
      { name: 'Jun', value: 115 },
      { name: 'Jul', value: 118 },
      { name: 'Aug', value: 121 },
      { name: 'Sep', value: 124 },
      { name: 'Oct', value: 127 },
      { name: 'Nov', value: 130 },
      { name: 'Dec', value: 133 },
    ]
  }
];

// Calculate performance for an algorithm
export const calculatePerformance = (data: Array<{ name: string; value: number }>): number => {
  const startValue = data[0].value;
  const endValue = data[data.length - 1].value;
  return ((endValue - startValue) / startValue) * 100;
};

// Generate random algorithm data
export const generateAlgorithmData = (
  numPoints: number, 
  volatility: number = 3, 
  trend: number = 1.0
): Array<{ name: string; value: number }> => {
  const data = [];
  let value = 100;
  
  for (let i = 0; i < numPoints; i++) {
    // Add some randomness with an upward trend
    const change = (Math.random() - 0.3) * volatility; // Slightly biased toward positive
    value = Math.max(value + change + trend, 90); // Ensure we don't go too low
    
    // Format month name
    const date = new Date();
    date.setMonth(date.getMonth() - (numPoints - i - 1));
    const monthName = date.toLocaleString('default', { month: 'short' });
    
    data.push({
      name: monthName,
      value: parseFloat(value.toFixed(2))
    });
  }
  
  return data;
};

// Portfolio data
export const portfolioData = {
  weekly: [
    { name: 'W1', value: 100 },
    { name: 'W2', value: 102 },
    { name: 'W3', value: 105 },
    { name: 'W4', value: 103 },
    { name: 'W5', value: 106 },
    { name: 'W6', value: 108 },
    { name: 'W7', value: 110 },
    { name: 'W8', value: 112 },
    { name: 'W9', value: 115 },
    { name: 'W10', value: 118 },
    { name: 'W11', value: 120 },
    { name: 'W12', value: 122 },
  ],
  currentPerformance: {
    daily: 0.8,
    weekly: 2.5,
    monthly: 8.5,
    yearly: 400
  }
};
